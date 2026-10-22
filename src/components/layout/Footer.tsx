import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CONTACT_PAGE_PATH, PRIVACY_POLICY_PATH, STAZHLINK_APP_URL, TERMS_PATH } from '../../constants/links';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer} id="cta">
      {/* Single curved wave — page bg colour masks the top edge */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L1440,0 L1440,24 C1100,72 340,4 0,52 Z" fill="#f0f4fa" />
        </svg>
      </div>

      {/* Decorative depth blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.inner}>
        <h2>{t('footer.cta')}</h2>
        <div className={styles.actions}>
          <a href={CONTACT_PAGE_PATH} className={styles.demoBtn}>{t('footer.requestDemo')}</a>
          <a href={STAZHLINK_APP_URL} className={styles.startBtn} target="_blank" rel="noopener noreferrer">{t('footer.getStarted')}</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>{t('footer.copyright')}</span>
        <div className={styles.links}>
          <Link to={PRIVACY_POLICY_PATH}>{t('footer.privacyPolicy')}</Link>
          <Link to={TERMS_PATH}>{t('footer.terms')}</Link>
        </div>
      </div>
    </footer>
  );
}
