import workflowIllustration from "../assets/workflow-illustration.png";
import studentDashboard from "../assets/student-dashboard.png";
import companyDashboard from "../assets/company-dashboard.png";
import professorDashboard from "../assets/professor-dashboard.png";
import adminDashboard from "../assets/admin-dashboard.png";
import styles from "./Product.module.css";

/* ── Inline SVG role icons ── */
const StudentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill="#f46b1b" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#f46b1b" />
  </svg>
);
const CompanyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="7" width="18" height="14" rx="2" fill="#2563eb" />
    <path d="M8 7V5a4 4 0 0 1 8 0v2" stroke="#2563eb" strokeWidth="2" fill="none" />
    <circle cx="16" cy="14" r="3" fill="#fff" />
    <path d="M14.5 14.5L15.5 15.5L17.5 13.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const ProfessorIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill="#f46b1b" />
    <circle cx="12" cy="8" r="2" fill="#fff" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#f46b1b" />
  </svg>
);
const AdminIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#10b981" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#10b981" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#10b981" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#10b981" />
  </svg>
);

const roles = [
  {
    id: "students",
    label: "Students",
    Icon: StudentIcon,
    iconBg: "#fff3eb",
    avatar: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="36" fill="#e8edf7" />
        <circle cx="36" cy="28" r="12" fill="#1a3a6e" />
        <circle cx="36" cy="28" r="8" fill="#f0f4fa" />
        <path d="M16 62c0-11 9-18 20-18s20 7 20 18" fill="#1a3a6e" />
        <circle cx="48" cy="44" r="8" fill="#f46b1b" />
        <path d="M45 44l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    items: [
      "Search & filter internships",
      "Request professor supervision",
      "Apply & track application status",
      "Download completion certificates",
    ],
  },
  {
    id: "companies",
    label: "Companies",
    Icon: CompanyIcon,
    iconBg: "#eff6ff",
    avatar: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="36" fill="#e8edf7" />
        <rect x="20" y="24" width="32" height="24" rx="3" fill="#1a3a6e" />
        <rect x="28" y="18" width="16" height="8" rx="2" fill="#2d4ea2" />
        <circle cx="48" cy="46" r="10" fill="#2563eb" />
        <path d="M44.5 46.5l2 2 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    items: [
      "Post internship listings",
      "Review & manage student applications",
      "Leave feedback on interns",
      "Generate internship documents",
    ],
  },
  {
    id: "professors",
    label: "Professors",
    Icon: ProfessorIcon,
    iconBg: "#fff3eb",
    avatar: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="36" fill="#e8edf7" />
        <circle cx="36" cy="26" r="12" fill="#1a3a6e" />
        <circle cx="36" cy="26" r="7" fill="#f0f4fa" />
        <rect x="32" y="20" width="8" height="3" rx="1.5" fill="#1a3a6e" />
        <path d="M16 62c0-11 9-18 20-18s20 7 20 18" fill="#1a3a6e" />
        <circle cx="50" cy="44" r="8" fill="#f46b1b" />
        <rect x="46" y="41" width="8" height="2" rx="1" fill="#fff" />
        <rect x="46" y="45" width="8" height="2" rx="1" fill="#fff" />
      </svg>
    ),
    items: [
      "Receive & evaluate supervision requests",
      "Approve or reject internship applications",
      "Monitor intern progress",
    ],
  },
  {
    id: "admins",
    label: "Administrators",
    Icon: AdminIcon,
    iconBg: "#ecfdf5",
    avatar: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="36" fill="#e8edf7" />
        <rect x="20" y="20" width="13" height="13" rx="2" fill="#1a3a6e" />
        <rect x="36" y="20" width="16" height="5" rx="1.5" fill="#1a3a6e" />
        <rect x="36" y="28" width="16" height="5" rx="1.5" fill="#2d4ea2" />
        <rect x="20" y="36" width="32" height="16" rx="2" fill="#1a3a6e" />
        <rect x="23" y="39" width="12" height="2" rx="1" fill="#f0f4fa" />
        <rect x="23" y="43" width="8" height="2" rx="1" fill="#f0f4fa" />
        <circle cx="50" cy="50" r="8" fill="#10b981" />
        <path d="M47 50l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    items: [
      "Manage faculties & departments",
      "Oversee all internship activity",
      "Ensure policy compliance",
      "Access detailed reports",
    ],
  },
];

const dashboards = [
  { img: studentDashboard, label: "Student", bold: "Student" },
  { img: companyDashboard, label: "Company", bold: "Company" },
  { img: professorDashboard, label: "Professor", bold: "Professor" },
  { img: adminDashboard, label: "Admin", bold: "Admin" },
];

export default function Product() {
  return (
    <main className={styles.page}>
      {/* ── Section 1: Hero ── */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Simplify <strong>Your University's</strong> Internship Process
        </h1>
        <p className={styles.heroSub}>
          StazhLink helps universities, students, professors, and companies collaborate seamlessly
          through a structured internship approval workflow.
        </p>

        <div className={styles.heroBody}>
          {/* Left mockup */}
          <div className={styles.mockup}>
            <div className={styles.mockupBar}>
              <span className={styles.dot} style={{ background: "#ff5f57" }} />
              <span className={styles.dot} style={{ background: "#febc2e" }} />
              <span className={styles.dot} style={{ background: "#28c840" }} />
              <span className={styles.mockupTitle}>Internship Application Progress</span>
            </div>
            <div className={styles.mockupBody}>
              <img src={workflowIllustration} alt="Internship workflow" className={styles.workflowImg} />
            </div>
          </div>

          {/* Right copy */}
          <div className={styles.heroRight}>
            <h2 className={styles.heroRightTitle}>
              <strong>Guided Workflow</strong> for Students
            </h2>
            <ul className={styles.checkList}>
              {[
                "Browse & Apply to Internships",
                "Request Professor Supervision",
                "Track Your Application Progress",
                "Receive Official Internship Docs",
              ].map((item) => (
                <li key={item}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="9" fill="#f46b1b" />
                    <path d="M5 9l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="/contact" className={styles.demoBtn}>Request Demo</a>
          </div>
        </div>
      </section>

      {/* ── Section 2: Roles ── */}
      <section className={styles.roles}>
        <h2 className={styles.sectionTitle}>A Role-Based Platform for Seamless Collaboration</h2>
        <p className={styles.sectionSub}>
          Custom dashboards provide the right tools and insights for each user type.
        </p>

        <div className={styles.rolesGrid}>
          {roles.map((role) => (
            <div key={role.id} className={styles.roleCard}>
              <div className={styles.roleAvatar}>{role.avatar}</div>
              <div className={styles.roleLabel}>
                <span className={styles.roleIconWrap} style={{ background: role.iconBg }}>
                  <role.Icon />
                </span>
                <strong>{role.label}</strong>
              </div>
              <ul className={styles.roleItems}>
                {role.items.map((item) => (
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

      {/* ── Section 3: Dashboards ── */}
      <section className={styles.dashboards}>
        <h2 className={styles.sectionTitle}>Tailored Dashboards for Each User Role</h2>
        <p className={styles.sectionSub}>
          Custom dashboards provide the right tools and insights for each user type.
        </p>

        <div className={styles.dashGrid}>
          {dashboards.map((d) => (
            <div key={d.label} className={styles.dashCard}>
              <div className={styles.dashImgWrap}>
                <img src={d.img} alt={`${d.label} Dashboard`} />
              </div>
              <p className={styles.dashLabel}>
                <strong>{d.bold}</strong> Dashboard
              </p>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
