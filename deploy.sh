#!/bin/bash
# ============================================================
#  Website-StazhLinkv2 — Deploy Script
#
#  Builds the Vite/React app and deploys static files to the
#  EC2 server. The files are mounted into the existing
#  stazhlink_nginx Docker container (no separate container).
#
#  Usage: bash deploy.sh
# ============================================================

set -euo pipefail

# ── Colours ──────────────────────────────────────────────────
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

info()    { echo -e "${BLUE}[INFO]${NC}    $1"; }
success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
warn()    { echo -e "${YELLOW}[WARNING]${NC} $1"; }
error()   { echo -e "${RED}[ERROR]${NC}   $1"; exit 1; }

# ── Configuration ────────────────────────────────────────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PEM_FILE="$SCRIPT_DIR/stazhlink-mono.pem"
SERVER_USER="ubuntu"
SERVER_HOST="ec2-3-124-204-150.eu-central-1.compute.amazonaws.com"
STAZHLINK_DIR="/home/ubuntu/stazhlink"
REMOTE_DIST="$STAZHLINK_DIR/marketing-dist"
DIST_DIR="$SCRIPT_DIR/dist"

# ── Pre-flight checks ────────────────────────────────────────
echo ""
echo "============================================================"
echo "  StazhLink Website — Deployment"
echo "============================================================"
echo ""

[ -f "$PEM_FILE" ] || error "PEM key not found at $PEM_FILE"
chmod 400 "$PEM_FILE"

[ -f "$SCRIPT_DIR/package.json" ] || error "Run this script from the Website-StazhLinkv2 root (package.json not found)"
[ -f "$SCRIPT_DIR/server/nginx.conf" ] || error "server/nginx.conf not found"
[ -f "$SCRIPT_DIR/server/docker-compose.yml" ] || error "server/docker-compose.yml not found"

SSH="ssh -i $PEM_FILE -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_HOST"
SCP="scp -i $PEM_FILE -o StrictHostKeyChecking=no"

# ── Step 1: Install dependencies ─────────────────────────────
info "Installing npm dependencies..."
cd "$SCRIPT_DIR"
npm ci --silent
success "Dependencies installed."

# ── Step 2: Build the app ────────────────────────────────────
info "Building production bundle..."
npm run build
[ -d "$DIST_DIR" ] || error "Build failed — dist/ directory not found"
success "Build complete. Output: $DIST_DIR"

# ── Step 3: Upload static files ──────────────────────────────
info "Uploading dist/ → $REMOTE_DIST on server..."
$SSH "mkdir -p $REMOTE_DIST && rm -rf ${REMOTE_DIST:?}/*"
$SCP -r "$DIST_DIR/." "$SERVER_USER@$SERVER_HOST:$REMOTE_DIST/"
success "Static files uploaded."

# ── Step 4: Upload nginx.conf ─────────────────────────────────
info "Uploading updated nginx.conf..."
$SCP "$SCRIPT_DIR/server/nginx.conf" "$SERVER_USER@$SERVER_HOST:$STAZHLINK_DIR/nginx/nginx.conf"
success "nginx.conf uploaded."

# ── Step 5: Upload docker-compose.yml ────────────────────────
info "Uploading updated docker-compose.yml..."
$SCP "$SCRIPT_DIR/server/docker-compose.yml" "$SERVER_USER@$SERVER_HOST:$STAZHLINK_DIR/docker-compose.yml"
success "docker-compose.yml uploaded."

# ── Step 6: Stop old marketing container (if still running) ──
info "Removing old marketing container (if any)..."
$SSH "cd $STAZHLINK_DIR && sudo docker-compose stop marketing 2>/dev/null || true && sudo docker-compose rm -f marketing 2>/dev/null || true"
success "Old marketing container removed."

# ── Step 7: Recreate nginx container with new volume mount ───
info "Recreating nginx container with marketing-dist volume..."
$SSH bash << EOF
  set -e

  # Test the new config inside the running container (it's on the right
  # network so upstream names resolve, and the bind-mounted conf is current)
  sudo docker exec stazhlink_nginx nginx -t
  echo "Nginx config test passed."

  # docker-compose v1.29.2 on this server has a bug with newer images
  # (KeyError: ContainerConfig), so we recreate manually with docker run.
  sudo docker rm -f stazhlink_nginx 2>/dev/null || true

  sudo docker run -d \
    --name stazhlink_nginx \
    --restart always \
    --network stazhlink_stazhlink_network \
    -p 80:80 -p 443:443 \
    -v /home/ubuntu/stazhlink/nginx/nginx.conf:/etc/nginx/nginx.conf:ro \
    -v /home/ubuntu/stazhlink/nginx/ssl:/etc/nginx/ssl:ro \
    -v $REMOTE_DIST:/usr/share/nginx/html/marketing:ro \
    nginx:alpine

  echo "Nginx container recreated."
  sleep 2
  sudo docker logs stazhlink_nginx --tail 5
EOF
success "Nginx container updated and running."

# ── Done ─────────────────────────────────────────────────────
echo ""
echo "============================================================"
success "Deployment complete!"
echo ""
echo "  Site URL  : https://stazhlink.com"
echo "  Server    : $SERVER_HOST"
echo "  Dist path : $REMOTE_DIST"
echo "============================================================"
echo ""
