import styles from "./Home.module.css";
import workflowImg from "../assets/workflow-illustration.png";
import PageHero from "../components/layout/PageHero";
import { useTranslation } from "react-i18next";
import { CONTACT_PAGE_PATH, STAZHLINK_APP_URL } from "../constants/links";

/* ─── Hero icons / helpers ─── */

/* ─── Problem data (static structure, text from i18n) ─── */
const problemCardsMeta = [
  { id: "students",   avatar: "🧑",   badge: "✅", badgeColor: "#22c55e", boldKey: "home.problem.studentsBold",   descKey: "home.problem.studentsDesc" },
  { id: "professors", avatar: "👨‍🏫", badge: "❌", badgeColor: "#ef4444", boldKey: "home.problem.professorsBold", descKey: "home.problem.professorsDesc" },
  { id: "companies",  avatar: "🧑‍💼", badge: "✅", badgeColor: "#22c55e", boldKey: "home.problem.companiesBold",  descKey: "home.problem.companiesDesc" },
  { id: "admins",     avatar: "👩",   badge: "✅", badgeColor: "#22c55e", boldKey: "home.problem.adminsBold",     descKey: "home.problem.adminsDesc" },
];

const stepsMeta = [
  { num: 1, color: "#f46b1b" },
  { num: 2, color: "#3b82f6" },
  { num: 3, color: "#1a3a6e" },
  { num: 4, color: "#22c55e" },
  { num: 5, color: "#f46b1b" },
];

/* ─── For Everyone icons ─── */
const StudentIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#22c55e"/>
    <path d="M9 11l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ProfessorIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill="#3b82f6"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#3b82f6"/>
  </svg>
);
const CompanyIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="8" r="3" fill="#0d9488"/>
    <circle cx="17" cy="6" r="2.5" fill="#0d9488" opacity="0.65"/>
    <path d="M2 19c0-3.3 3.1-6 7-6s7 2.7 7 6" fill="#0d9488"/>
    <path d="M16 13c2.5.6 5 2.3 5 5.5" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.65"/>
  </svg>
);
const AdminIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="16" height="11" rx="2" fill="#2d4ea2"/>
    <path d="M6 19h8M10 15v4" stroke="#2d4ea2" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="19" cy="6" r="3.5" fill="#3b82f6"/>
    <path d="M17.5 6l1 1.2 2.2-2.2" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const roleCardsMeta = [
  { id: "students",   labelKey: "home.everyone.studentsLabel",   color: "#1a3a6e", Icon: StudentIcon,   actionKey: "home.everyone.studentsAction" },
  { id: "professors", labelKey: "home.everyone.professorsLabel", color: "#f46b1b", Icon: ProfessorIcon, actionKey: "home.everyone.professorsAction" },
  { id: "companies",  labelKey: "home.everyone.companiesLabel",  color: "#0d9488", Icon: CompanyIcon,   actionKey: "home.everyone.companiesAction" },
  { id: "admins",     labelKey: "home.everyone.adminsLabel",     color: "#2d4ea2", Icon: AdminIcon,     actionKey: "home.everyone.adminsAction" },
];

/* ─── Features icons ─── */
const ListingIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect x="6" y="10" width="40" height="32" rx="4" fill="#dde6f5"/>
    <rect x="6" y="10" width="40" height="8" rx="4" fill="#b8cce8"/>
    <rect x="10" y="22" width="14" height="2.5" rx="1.2" fill="#94b0d0"/>
    <rect x="10" y="27" width="20" height="2.5" rx="1.2" fill="#94b0d0"/>
    <rect x="10" y="32" width="16" height="2.5" rx="1.2" fill="#94b0d0"/>
    <circle cx="37" cy="34" r="8" fill="#3b82f6"/>
    <path d="M33 34l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const TrackingIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect x="6" y="10" width="40" height="32" rx="4" fill="#dde6f5"/>
    <rect x="6" y="10" width="40" height="8" rx="4" fill="#b8cce8"/>
    <rect x="10" y="14" width="4" height="4" rx="1" fill="#3b82f6"/>
    <rect x="16" y="14" width="4" height="4" rx="1" fill="#93c5fd"/>
    <circle cx="26" cy="30" r="9" fill="none" stroke="#e5e7eb" strokeWidth="5"/>
    <path d="M26 21 a9 9 0 0 1 7.8 13.5" stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" fill="none"/>
    <path d="M26 21 a9 9 0 0 0 -7.8 4.5" stroke="#f46b1b" strokeWidth="5" strokeLinecap="round" fill="none"/>
  </svg>
);
const SupervisionIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <circle cx="22" cy="18" r="8" fill="#2d4ea2"/>
    <path d="M6 42c0-8 7-14 16-14" stroke="#2d4ea2" strokeWidth="4" strokeLinecap="round" fill="none"/>
    <circle cx="38" cy="22" r="6" fill="#0d9488"/>
    <path d="M38 16c0 6-6 10-6 10s-6-4-6-10a6 6 0 0 1 12 0z" fill="#0d9488"/>
    <circle cx="38" cy="20" r="2" fill="#fff"/>
  </svg>
);
const DocsIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect x="12" y="6" width="28" height="36" rx="4" fill="#dde6f5"/>
    <rect x="18" y="14" width="16" height="2.5" rx="1.2" fill="#94b0d0"/>
    <rect x="18" y="20" width="16" height="2.5" rx="1.2" fill="#94b0d0"/>
    <rect x="18" y="26" width="10" height="2.5" rx="1.2" fill="#94b0d0"/>
    <circle cx="36" cy="36" r="8" fill="#f46b1b" opacity="0.9"/>
    <rect x="33" y="34" width="6" height="1.8" rx="0.9" fill="#fff"/>
    <rect x="34.6" y="32.5" width="1.8" height="5" rx="0.9" fill="#fff"/>
  </svg>
);
const FeedbackIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <path d="M8 10 C8 7 10 6 12 6 H40 C42 6 44 7 44 10 V30 C44 32 42 34 40 34 H20 L12 42 V34 H12 C10 34 8 32 8 30 Z" fill="#f46b1b"/>
    <rect x="16" y="24" width="4" height="6" rx="1.5" fill="#fff"/>
    <rect x="24" y="19" width="4" height="11" rx="1.5" fill="#fff"/>
    <rect x="32" y="14" width="4" height="16" rx="1.5" fill="#fff"/>
  </svg>
);
const DashboardIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
    <rect x="4" y="8" width="44" height="32" rx="4" fill="#dde6f5"/>
    <rect x="4" y="8" width="44" height="8" rx="4" fill="#b8cce8"/>
    <rect x="8" y="20" width="12" height="16" rx="2" fill="#3b82f6"/>
    <rect x="22" y="20" width="12" height="7" rx="2" fill="#f46b1b"/>
    <rect x="22" y="29" width="12" height="7" rx="2" fill="#22c55e"/>
    <rect x="36" y="20" width="8" height="16" rx="2" fill="#0d9488"/>
    <rect x="4" y="40" width="44" height="4" rx="0 0 4 4" fill="#b8cce8"/>
  </svg>
);

const featuresMeta = [
  { Icon: ListingIcon,     titleKey: "home.features.internshipListings" },
  { Icon: TrackingIcon,    titleKey: "home.features.applicationTracking" },
  { Icon: SupervisionIcon, titleKey: "home.features.professorSupervision" },
  { Icon: DocsIcon,        titleKey: "home.features.automatedDocs" },
  { Icon: FeedbackIcon,    titleKey: "home.features.feedbackReporting" },
  { Icon: DashboardIcon,   titleKey: "home.features.roleBasedDashboards" },
];

/* ─── Trusted stats ─── */
const stats = [
  { value: "50+",    label: "Universities",      icon: "🏛️" },
  { value: "200+",   label: "Partner Companies",  icon: "🏢" },
  { value: "5,000+", label: "Students Placed",    icon: "🎓" },
  { value: "98%",    label: "Satisfaction Rate",  icon: "⭐" },
];

export default function Home() {
  const { t } = useTranslation();

  const mockup = (
    <div className={styles.mockup}>
      <div className={styles.window}>
        <div className={styles.winBar}>
          <span className={styles.dot} style={{ background: "#ff5f57" }} />
          <span className={styles.dot} style={{ background: "#febc2e" }} />
          <span className={styles.dot} style={{ background: "#28c840" }} />
        </div>
        <div className={styles.winBody}>
          <p className={styles.winTitle}>{t('home.hero.mockupTitle')}</p>
          <div className={styles.progress}>
            <img src={workflowImg} alt="Internship workflow" className={styles.workflowImg} />
          </div>
          <div className={styles.bars}>
            <div className={styles.bar} style={{ width: "80%", background: "#dbeafe" }} />
            <div className={styles.bar} style={{ width: "60%", background: "#e5e7eb" }} />
            <div className={styles.bar} style={{ width: "90%", background: "#dbeafe" }} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main>

      {/* ── Hero ── */}
      <PageHero
        title={<>{t('home.hero.titleLine1')}<br />{t('home.hero.titleLine2')}</>}
        subtitle={t('home.hero.subtitle')}
        rightContent={mockup}
        primaryBtn={{ label: t('home.hero.primaryBtn'), href: CONTACT_PAGE_PATH }}
        secondaryBtn={{ label: t('home.hero.secondaryBtn'), href: STAZHLINK_APP_URL, target: "_blank", rel: "noopener noreferrer" }}
        waveColor="#f0f4fa"
      />

      {/* ── Problem / How It Works ── */}
      <section className={styles.probWrapper}>
        <h2 className={styles.brokenTitle}>
          {t('home.problem.title')} <strong>{t('home.problem.titleStrong')}</strong>
        </h2>
        <div className={styles.probGrid}>
          {problemCardsMeta.map((c) => (
            <div className={styles.probCard} key={c.id}>
              <div className={styles.avatarWrap}>
                <span className={styles.avatarEmoji}>{c.avatar}</span>
                <span className={styles.badge} style={{ background: c.badgeColor }}>{c.badge}</span>
              </div>
              <p className={styles.cardText}>
                <strong>{t(c.boldKey)}</strong> {t(c.descKey)}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.dividerRow}>
          <span className={styles.line} />
          <h2 className={styles.fixesTitle}>{t('home.problem.fixesTitle')}</h2>
          <span className={styles.line} />
        </div>
        <p className={styles.fixesSub}>{t('home.problem.fixesSub')}</p>

        <div className={styles.dividerRow} style={{ marginTop: "36px" }}>
          <span className={styles.line} />
          <h2 className={styles.howTitle}>{t('home.problem.howTitle')}</h2>
          <span className={styles.line} />
        </div>
        <div className={styles.probFlow}>
          {stepsMeta.map((s, i) => (
            <div key={s.num} className={styles.stepGroup}>
              <div className={styles.probStep}>
                <div className={styles.stepNum} style={{ background: s.color }}>{s.num}</div>
                <span className={styles.stepLabel}>{t(`home.steps.${i}`)}</span>
              </div>
              {i < stepsMeta.length - 1 && <div className={styles.probArrow}>▶</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── For Everyone ── */}
      <section className={styles.feSection}>
        <div className={styles.dividerRow}>
          <span className={styles.line} />
          <h2 className={styles.feTitle}>{t('home.everyone.title')}</h2>
          <span className={styles.line} />
        </div>
        <div className={styles.feGrid}>
          {roleCardsMeta.map((c) => (
            <div className={styles.feCard} key={c.id}>
              <div className={styles.pill} style={{ background: c.color }}>
                {t(c.labelKey)}
              </div>
              <div className={styles.action}>
                <span className={styles.actionIcon}><c.Icon /></span>
                <span className={styles.actionText}>{t(c.actionKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.featSection}>
        <div className={styles.dividerRow}>
          <span className={styles.line} />
          <h2 className={styles.featTitle}>
            {t('home.features.title')} <span className={styles.accent}>{t('home.features.titleAccent')}</span>
          </h2>
          <span className={styles.line} />
        </div>
        <div className={styles.featGrid}>
          {featuresMeta.map((f) => (
            <div className={styles.featItem} key={f.titleKey}>
              <div className={styles.iconCircle}><f.Icon /></div>
              <span className={styles.featLabel}>{t(f.titleKey)}</span>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
