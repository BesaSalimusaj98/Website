import universitiesHero from "../assets/universities-hero.png";
import adminDashboard from "../assets/admin-dashboard.png";
import styles from "./ForUniversities.module.css";
import PageHero from "../components/layout/PageHero";

/* ── Challenge card icons ── */
const icons = {
  oversight: (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="26" fill="#e8edf7" />
      <circle cx="26" cy="22" r="7" fill="#1a3a6e" />
      <path d="M12 40c0-7.7 6.3-13 14-13s14 5.3 14 13" fill="#1a3a6e" />
      <rect x="30" y="28" width="14" height="10" rx="2" fill="#f46b1b" />
      <rect x="32" y="30" width="4" height="2" rx="1" fill="#fff" />
      <rect x="32" y="33" width="8" height="2" rx="1" fill="#fff" />
    </svg>
  ),
  supervision: (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="26" fill="#e8edf7" />
      <rect x="14" y="18" width="24" height="16" rx="3" fill="#1a3a6e" />
      <circle cx="36" cy="32" r="8" fill="#f46b1b" />
      <path d="M33 32l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="18" y="22" width="10" height="2" rx="1" fill="#f0f4fa" />
      <rect x="18" y="26" width="7" height="2" rx="1" fill="#f0f4fa" />
    </svg>
  ),
  compliance: (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="26" fill="#e8edf7" />
      <rect x="16" y="14" width="20" height="24" rx="3" fill="#1a3a6e" />
      <rect x="19" y="19" width="10" height="2" rx="1" fill="#f0f4fa" />
      <rect x="19" y="23" width="14" height="2" rx="1" fill="#f0f4fa" />
      <rect x="19" y="27" width="10" height="2" rx="1" fill="#f0f4fa" />
      <circle cx="34" cy="34" r="8" fill="#10b981" />
      <path d="M31 34l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  analytics: (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="26" r="26" fill="#e8edf7" />
      <rect x="14" y="28" width="5" height="10" rx="2" fill="#1a3a6e" />
      <rect x="22" y="22" width="5" height="16" rx="2" fill="#f46b1b" />
      <rect x="30" y="18" width="5" height="20" rx="2" fill="#1a3a6e" />
      <path d="M14 26l8-8 8 6 8-10" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
};

const challenges = [
  {
    num: "1",
    numColor: "#f46b1b",
    icon: icons.oversight,
    title: "Lack of Oversight",
    items: ["Search internship status", "Request pending applications", "Reassign ongoing operations"],
  },
  {
    num: "2",
    numColor: "#1a3a6e",
    icon: icons.supervision,
    title: "Professor Supervision",
    items: ["Payment application status", "Parents in agency of loans", "Manage or approval plans before"],
  },
  {
    num: "A",
    numColor: "#2563eb",
    icon: icons.compliance,
    title: "Internship Compliance",
    items: ["Demand internship details", "Proper level compliances", "Include user processes"],
  },
  {
    num: "5",
    numColor: "#f46b1b",
    icon: icons.analytics,
    title: "Analytics & Report",
    items: ["Execute target & attests", "Coach internships tutoring", "Provide all team starlead"],
  },
];

const dashFeatures = [
  { bold: "View All Internship", rest: " Activity" },
  { bold: "Track Internship", rest: " Approvals" },
  { bold: "Manage Faculty", rest: " and Departments" },
  { bold: "Audit", rest: " and " },
  { bold: "Report", rest: " on Compliance" },
];

export default function ForUniversities() {
  return (
    <main className={styles.page}>

      {/* ── Section 1: Hero ── */}
      <PageHero
        title={<><strong>Streamline Internship</strong> Management<br />Across Your University</>}
        subtitle="StazhLink empowers university administrators to oversee and manage internships from a central platform, ensuring seamless coordination and compliance."
        imgSrc={universitiesHero}
        imgAlt="University internship management"
        primaryBtn={{ label: "Request Demo", href: "/contact" }}
        secondaryBtn={{ label: "Start Free Trial", href: "#", onClick: (e) => e.preventDefault() }}
        waveColor="#f0f4fa"
      />

      {/* ── Section 2: Challenges ── */}
      <section className={styles.challenges}>
        <h2 className={styles.sectionTitle}>
          Common <strong>Challenges</strong> Universities Face with <strong>Internships</strong>
        </h2>

        <div className={styles.challengeGrid}>
          {challenges.map((c) => (
            <div key={c.title} className={styles.challengeCard}>
              <div className={styles.challengeIcon}>{c.icon}</div>
              <div className={styles.challengeHeading}>
                <span className={styles.challengeNum} style={{ background: c.numColor }}>
                  {c.num}
                </span>
                <strong>{c.title}</strong>
              </div>
              <ul className={styles.challengeList}>
                {c.items.map((item) => (
                  <li key={item}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5 6.5-7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: Dashboard ── */}
      <section className={styles.dashboard}>
        <h2 className={styles.sectionTitle}>
          Centralized Dashboard for <strong>Full Oversight</strong>
        </h2>

        <div className={styles.dashInner}>
          <div className={styles.dashImgWrap}>
            <img src={adminDashboard} alt="Admin dashboard" />
          </div>
          <ul className={styles.dashFeatures}>
            {dashFeatures.map((f, i) => (
              <li key={i}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="11" fill="#1a3a6e" />
                  <path d="M7 11l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span><strong>{f.bold}</strong>{f.rest}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 4: Professor Supervision teaser ── */}
      <section className={styles.supervision}>
        <h2 className={styles.sectionTitle}>
          Professor <strong>Supervision</strong> Management
        </h2>
        <p className={styles.sectionSub}>
          Increasing internship approvals blocking and processes for university Students.
        </p>

        <div className={styles.supCards}>
          {[
            { emoji: "📋", title: "Supervision Requests", desc: "Professors receive and evaluate student supervision requests directly in the platform." },
            { emoji: "✅", title: "Approval Workflow", desc: "Approve or reject internship applications with a structured step-by-step process." },
            { emoji: "📊", title: "Progress Monitoring", desc: "Track each intern's progress and ensure academic requirements are met." },
          ].map((card) => (
            <div key={card.title} className={styles.supCard}>
              <div className={styles.supEmoji}>{card.emoji}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
