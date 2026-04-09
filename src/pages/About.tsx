import universitiesHero from "../assets/universities-hero.png";
import companiesHero from "../assets/companies-hero.png";
import styles from "./About.module.css";
import PageHero from "../components/layout/PageHero";

/* Placeholder avatar SVGs until real photos are added */
const Avatar = ({ initials, bg }: { initials: string; bg: string }) => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
    <circle cx="60" cy="60" r="60" fill={bg} />
    <circle cx="60" cy="48" r="22" fill="#fff" opacity="0.9" />
    <path d="M20 108c0-22 18-36 40-36s40 14 40 36" fill="#fff" opacity="0.9" />
    <text x="60" y="54" textAnchor="middle" dominantBaseline="middle" fontSize="20" fontWeight="700" fill={bg} fontFamily="Inter,sans-serif">{initials}</text>
  </svg>
);

const team = [
  { name: "John Doe",      role: "CEO & Co-Founder",  initials: "JD", bg: "#1a3a6e" },
  { name: "Jane Smith",    role: "COO & Co-Founder",  initials: "JS", bg: "#2563eb" },
  { name: "Michael Brown", role: "CTO",               initials: "MB", bg: "#0d9488" },
  { name: "Sarah Miller",  role: "Head of Product",   initials: "SM", bg: "#f46b1b" },
];

export default function About() {
  return (
    <main className={styles.page}>

      {/* ── Section 1: Hero ── */}
      <PageHero
        title={<><strong>Empowering Universities</strong> Through<br /><strong>Streamlined Internship</strong> Management</>}
        subtitle="Our mission is to centralize and simplify the internship process, bridging academia and industry for the benefit of students, professors, and companies."
        imgSrc={universitiesHero}
        imgAlt="StazhLink platform"
        primaryBtn={{ label: "Our Story", href: "#story" }}
        secondaryBtn={{ label: "Start Free Trial", href: "#", onClick: (e) => e.preventDefault() }}
        waveColor="#fff"
      />

      {/* ── Section 2: Our Story ── */}
      <section className={styles.story} id="story">
        <div className={styles.storyInner}>
          <div className={styles.storyLeft}>
            <h2 className={styles.storyTitle}>Our Story</h2>
            <p className={styles.storyText}>
              StazhLink was founded to solve a pressing issue faced by
              universities worldwide: fragmented, time-consuming, and
              manual internship processes. We saw that students often
              struggled to find internships, professors had limited oversight,
              and companies had no dedicated channel to reach university
              talent. We created StazhLink as a solution — a
              comprehensive platform that brings all stakeholders under
              one system, ensuring a structured, transparent, and efficient
              internship process from start to finish.
            </p>
          </div>
          <div className={styles.storyRight}>
            <img src={companiesHero} alt="Our story" className={styles.storyImg} />
          </div>
        </div>
      </section>

      {/* ── Section 3: Mission & Vision ── */}
      <section className={styles.mission}>
        <h2 className={styles.sectionTitle}>Our Mission and Vision</h2>
        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="22" fill="#fff3eb" />
                <circle cx="22" cy="22" r="10" stroke="#f46b1b" strokeWidth="2.5" fill="none" />
                <circle cx="22" cy="22" r="4" fill="#f46b1b" />
                <path d="M22 8v4M22 32v4M8 22h4M32 22h4" stroke="#f46b1b" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className={styles.missionCardTitle}>Our Mission</h3>
            <p className={styles.missionCardText}>
              To simplify and unify the internship management
              process for universities by providing a platform
              where <strong>students</strong>, <strong>professors</strong> and <strong>companies</strong> can
              collaborate seamlessly.
            </p>
          </div>
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="22" fill="#eff6ff" />
                <circle cx="22" cy="18" r="7" fill="none" stroke="#2563eb" strokeWidth="2.5" />
                <path d="M17 24l-3 8h16l-3-8" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
                <path d="M22 11V8M15 14l-2-2M29 14l2-2" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className={styles.missionCardTitle}>Our Vision</h3>
            <p className={styles.missionCardText}>
              To be the leading platform that bridges the gap
              between academia and industry, supporting career
              development for students through meaningful,
              structured internship experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 4: Team ── */}
      <section className={styles.team}>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <p className={styles.sectionSub}>
          The team behind StazhLink is a dedicated group of professionals passionate about education and technology.
        </p>
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <div key={member.name} className={styles.teamCard}>
              <div className={styles.teamAvatar}>
                <Avatar initials={member.initials} bg={member.bg} />
              </div>
              <strong className={styles.teamName}>{member.name}</strong>
              <span className={styles.teamRole}>{member.role}</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
