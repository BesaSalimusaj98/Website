import aboutheropage from "../assets/Diskutime biznesi dhe teknologjia.png";
import aboutStory from "../assets/Menaxhimi i praktikave të stazhit.png";
import styles from "./About.module.css";
import PageHero from "../components/layout/PageHero";
import { useTranslation } from "react-i18next";
import { STAZHLINK_APP_URL } from "../constants/links";

export default function About() {
  const { t } = useTranslation();
  return (
    <main className={styles.page}>

      {/* ── Section 1: Hero ── */}
      <PageHero
        title={<><strong>{t('about.hero.titleStrong1')}</strong>{t('about.hero.titleRest')}<br /><strong>{t('about.hero.titleLine2Strong')}</strong>{t('about.hero.titleLine2Rest')}</>}
        subtitle={t('about.hero.subtitle')}
        imgSrc={aboutheropage}
        imgAlt="StazhLink platform"
        primaryBtn={{ label: t('about.hero.primaryBtn'), href: "#story" }}
        secondaryBtn={{ label: t('about.hero.secondaryBtn'), href: STAZHLINK_APP_URL, target: "_blank", rel: "noopener noreferrer" }}
        waveColor="#fff"
      />

      {/* ── Section 2: Our Story ── */}
      <section className={styles.story} id="story">
        <div className={styles.storyInner}>
          <div className={styles.storyLeft}>
            <h2 className={styles.storyTitle}>{t('about.story.title')}</h2>
            <p className={styles.storyText}>{t('about.story.text')}</p>
          </div>
          <div className={styles.storyRight}>
            <img src={aboutStory} alt="Our story" className={styles.storyImg} />
          </div>
        </div>
      </section>

      {/* ── Section 3: Mission & Vision ── */}
      <section className={styles.mission}>
        <h2 className={styles.sectionTitle}>{t('about.mission.title')}</h2>
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
            <h3 className={styles.missionCardTitle}>{t('about.mission.missionTitle')}</h3>
            <p className={styles.missionCardText}>
              {t('about.mission.missionPre')}<strong>{t('about.mission.missionStudents')}</strong>{t('about.mission.missionComma')}<strong>{t('about.mission.missionProfessors')}</strong>{t('about.mission.missionAnd')}<strong>{t('about.mission.missionCompanies')}</strong>{t('about.mission.missionPost')}
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
            <h3 className={styles.missionCardTitle}>{t('about.mission.visionTitle')}</h3>
            <p className={styles.missionCardText}>{t('about.mission.visionText')}</p>
          </div>
        </div>
      </section>

    </main>
  );
}
