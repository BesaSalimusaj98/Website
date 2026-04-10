import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/logo-icon.png';
import { CONTACT_PAGE_PATH, STAZHLINK_LOGIN_URL } from '../../constants/links';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Product',          href: '/product', isRoute: true },
  { label: 'For Universities', href: '/for-universities', isRoute: true },
  { label: 'For Companies',    href: '/for-companies', isRoute: true },
  { label: 'FAQ',              href: '/faq',      isRoute: true  },
  { label: 'About',            href: '/about',    isRoute: true  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/">
          <img src={logoIcon} alt="StazhLink logo" />
          <span>StazhLink</span>
        </Link>

        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.label}>
              {l.isRoute
                ? <Link to={l.href}>{l.label}</Link>
                : <a href={l.href}>{l.label}</a>}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href={STAZHLINK_LOGIN_URL} className={styles.loginBtn} target="_blank" rel="noopener noreferrer">Login</a>
          <Link to={CONTACT_PAGE_PATH} className={styles.demoBtn}>Request Demo</Link>
        </div>

        <button
          className={`${styles.hamburger} ${open ? styles.open : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.open : ''}`}>
        {navLinks.map((l) =>
          l.isRoute
            ? <Link key={l.label} to={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            : <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        )}
        <div className={styles.drawerActions}>
          <a href={STAZHLINK_LOGIN_URL} className={styles.loginBtn} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Login</a>
          <Link to={CONTACT_PAGE_PATH} className={styles.demoBtn} onClick={() => setOpen(false)}>Request Demo</Link>
        </div>
      </div>
    </>
  );
}
