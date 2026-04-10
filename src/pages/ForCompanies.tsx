import companiesHero from "../assets/companies-hero.png";
import styles from "./ForCompanies.module.css";
import PageHero from "../components/layout/PageHero";
import { STAZHLINK_APP_URL, STAZHLINK_LOGIN_URL } from "../constants/links";

/* ── Feature icons ── */
const PostingIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="28" fill="#e8edf7" />
    <rect x="16" y="18" width="24" height="20" rx="3" fill="#1a3a6e" />
    <rect x="20" y="23" width="10" height="2" rx="1" fill="#f0f4fa" />
    <rect x="20" y="27" width="14" height="2" rx="1" fill="#f0f4fa" />
    <rect x="20" y="31" width="8" height="2" rx="1" fill="#f0f4fa" />
    <circle cx="38" cy="36" r="8" fill="#f46b1b" />
    <path d="M38 32v4M38 36h0" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M35 36h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const ApplicantIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="28" fill="#e8edf7" />
    <circle cx="24" cy="24" r="7" fill="#1a3a6e" />
    <path d="M13 42c0-6.6 4.9-11 11-11s11 4.4 11 11" fill="#1a3a6e" />
    <circle cx="38" cy="34" r="8" fill="#2563eb" />
    <path d="M35 34l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const ComplianceIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="28" fill="#e8edf7" />
    <rect x="18" y="16" width="20" height="24" rx="3" fill="#1a3a6e" />
    <rect x="22" y="21" width="10" height="2" rx="1" fill="#f0f4fa" />
    <rect x="22" y="25" width="12" height="2" rx="1" fill="#f0f4fa" />
    <rect x="22" y="29" width="8" height="2" rx="1" fill="#f0f4fa" />
    <circle cx="36" cy="36" r="8" fill="#10b981" />
    <path d="M33 36l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const features = [
  {
    num: "1",
    numColor: "#f46b1b",
    Icon: PostingIcon,
    title: "Easy Internship Posting",
    titleStrong: "Easy Internship Posting",
    items: [
      "Post internships with detailed descriptions and requirements",
      "Receive applications from university students directly",
    ],
  },
  {
    num: "2",
    numColor: "#1a3a6e",
    Icon: ApplicantIcon,
    title: "Smart Applicant Management",
    titleStrong: "Smart Applicant",
    items: [
      "Review applications with all documents",
      "Track internship progress and leave feedback",
    ],
  },
  {
    num: "3",
    numColor: "#10b981",
    Icon: ComplianceIcon,
    title: "Compliance & Documentation",
    titleStrong: "Compliance",
    items: [
      "Generate official internship feedback reports",
      "Securely download completion feedback certificates",
    ],
  },
];

const universities = [
  { name: "Albanian University", abbr: "AU", color: "#c8a84b" },
  { name: "EPOKA University",    abbr: "EP", color: "#1a3a6e" },
  { name: "Your University",     abbr: "U",  color: "#9ca3af" },
  { name: "Your University",     abbr: "U",  color: "#9ca3af" },
];

const steps = [
  {
    num: "1",
    bg: "#1a3a6e",
    title: "Post Internships",
    items: ["Create and publish internship listings", "Define qualifications and requirements"],
  },
  {
    num: "2",
    bg: "#2563eb",
    title: "Receive Applications",
    items: ["Review applications and documents", "Filter and rank candidates easily"],
  },
  {
    num: "3",
    bg: "#10b981",
    title: "Review & Select",
    items: ["Accept or reject applicants with one click", "Message candidates directly within StazhLink"],
  },
  {
    num: "4",
    bg: "#f46b1b",
    title: "Feedback & Reports",
    items: ["Monitor intern progress & provide feedback", "Generate official PDF reports for completed internships"],
  },
];

export default function ForCompanies() {
  return (
    <main className={styles.page}>

      {/* ── Section 1: Hero ── */}
      <PageHero
        title={<><strong>Streamline</strong> Your Internship<br /><strong>Recruitment</strong> Process</>}
        subtitle="Use StazhLink to connect with university students looking for internship opportunities. Manage applications easily and hire the best talent from top universities."
        imgSrc={companiesHero}
        imgAlt="Company internship recruitment"
        primaryBtn={{ label: "Register Company", href: STAZHLINK_LOGIN_URL, target: "_blank", rel: "noopener noreferrer" }}
        secondaryBtn={{ label: "Start Free Trial", href: STAZHLINK_APP_URL, target: "_blank", rel: "noopener noreferrer" }}
        waveColor="#f0f4fa"
      />

      {/* ── Section 2: Features ── */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>
          <strong>Dedicated Internship</strong> Management Platform for <strong>Companies</strong>
        </h2>

        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.num} className={styles.featureCard}>
              <div className={styles.featureIcon}><f.Icon /></div>
              <div className={styles.featureHeading}>
                <span className={styles.featureNum} style={{ background: f.numColor }}>{f.num}</span>
                <strong>{f.titleStrong}</strong>
                {f.title !== f.titleStrong && (
                  <span> {f.title.replace(f.titleStrong, "").trim()}</span>
                )}
              </div>
              <ul className={styles.featureList}>
                {f.items.map((item) => (
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

      {/* ── Section 3: University Partners ──
      <section className={styles.universities}>
        <h2 className={styles.sectionTitle}>
          <strong>Access Talent</strong> from Leading Universities
        </h2>
        <p className={styles.sectionSub}>
          Find motivated, job-ready university students eager to gain real-world experience.
        </p>
        <div className={styles.uniGrid}>
          {universities.map((u, i) => (
            <div key={i} className={styles.uniCard}>
              <div className={styles.uniLogo} style={{ background: u.color }}>
                {u.abbr}
              </div>
              <span>{u.name}</span>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── Section 4: How It Works ── */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>
          How <strong>StazhLink</strong> Works for <strong>Companies</strong>
        </h2>

        <div className={styles.stepsGrid}>
          {steps.map((s) => (
            <div key={s.num} className={styles.stepCard}>
              <div className={styles.stepNum} style={{ background: s.bg }}>{s.num}</div>
              <strong className={styles.stepTitle}>{s.title}</strong>
              <ul className={styles.stepList}>
                {s.items.map((item) => (
                  <li key={item}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M2.5 7.5l3.5 3.5 6-7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
