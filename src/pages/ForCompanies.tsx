import companiesHero from "../assets/companies-hero.png";
import styles from "./ForCompanies.module.css";
import PageHero from "../components/layout/PageHero";
import { STAZHLINK_APP_URL, STAZHLINK_LOGIN_URL } from "../constants/links";
import { useTranslation } from "react-i18next";

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

export default function ForCompanies() {
  const { t } = useTranslation();

  const features = [
    { num: "1", numColor: "#f46b1b", Icon: PostingIcon, titleKey: "forCompanies.features.c1.title", boldKey: "forCompanies.features.c1.title", items: [t('forCompanies.features.c1.i1'), t('forCompanies.features.c1.i2')] },
    { num: "2", numColor: "#1a3a6e", Icon: ApplicantIcon, titleKey: "forCompanies.features.c2.title", boldKey: "forCompanies.features.c2.title", items: [t('forCompanies.features.c2.i1'), t('forCompanies.features.c2.i2')] },
    { num: "3", numColor: "#10b981", Icon: ComplianceIcon, titleKey: "forCompanies.features.c3.title", boldKey: "forCompanies.features.c3.title", items: [t('forCompanies.features.c3.i1'), t('forCompanies.features.c3.i2')] },
  ];

  const steps = [
    { num: "1", bg: "#1a3a6e", titleKey: "forCompanies.howItWorks.s1.title", items: [t('forCompanies.howItWorks.s1.i1'), t('forCompanies.howItWorks.s1.i2')] },
    { num: "2", bg: "#2563eb", titleKey: "forCompanies.howItWorks.s2.title", items: [t('forCompanies.howItWorks.s2.i1'), t('forCompanies.howItWorks.s2.i2')] },
    { num: "3", bg: "#10b981", titleKey: "forCompanies.howItWorks.s3.title", items: [t('forCompanies.howItWorks.s3.i1'), t('forCompanies.howItWorks.s3.i2')] },
    { num: "4", bg: "#f46b1b", titleKey: "forCompanies.howItWorks.s4.title", items: [t('forCompanies.howItWorks.s4.i1'), t('forCompanies.howItWorks.s4.i2')] },
  ];

  return (
    <main className={styles.page}>

      {/* ── Section 1: Hero ── */}
      <PageHero
        title={<><strong>{t('forCompanies.hero.titleStrong1')}</strong>{t('forCompanies.hero.titleRest')}<br /><strong>{t('forCompanies.hero.titleLine2Strong')}</strong>{t('forCompanies.hero.titleLine2Rest')}</>}
        subtitle={t('forCompanies.hero.subtitle')}
        imgSrc={companiesHero}
        imgAlt="Company internship recruitment"
        primaryBtn={{ label: t('forCompanies.hero.primaryBtn'), href: STAZHLINK_LOGIN_URL, target: "_blank", rel: "noopener noreferrer" }}
        secondaryBtn={{ label: t('forCompanies.hero.secondaryBtn'), href: STAZHLINK_APP_URL, target: "_blank", rel: "noopener noreferrer" }}
        waveColor="#f0f4fa"
      />

      {/* ── Section 2: Features ── */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>
          <strong>{t('forCompanies.features.titleStrong')}</strong>{t('forCompanies.features.titleRest')}<strong>{t('forCompanies.features.titleStrong2')}</strong>
        </h2>

        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.num} className={styles.featureCard}>
              <div className={styles.featureIcon}><f.Icon /></div>
              <div className={styles.featureHeading}>
                <span className={styles.featureNum} style={{ background: f.numColor }}>{f.num}</span>
                <strong>{t(f.boldKey)}</strong>
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

      {/* ── Section 4: How It Works ── */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>
          {t('forCompanies.howItWorks.titlePre')}<strong>{t('forCompanies.howItWorks.titleStrong')}</strong>{t('forCompanies.howItWorks.titleMid')}<strong>{t('forCompanies.howItWorks.titleStrong2')}</strong>
        </h2>

        <div className={styles.stepsGrid}>
          {steps.map((s) => (
            <div key={s.num} className={styles.stepCard}>
              <div className={styles.stepNum} style={{ background: s.bg }}>{s.num}</div>
              <strong className={styles.stepTitle}>{t(s.titleKey)}</strong>
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
