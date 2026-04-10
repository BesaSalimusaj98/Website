import { Link } from 'react-router-dom';
import { CONTACT_PAGE_PATH, PRIVACY_POLICY_PATH, STAZHLINK_APP_URL, TERMS_PATH } from '../../constants/links';
import styles from './Footer.module.css';

export default function Footer() {
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
        <h2>Bring Structure to Your Internship Program</h2>
        <div className={styles.actions}>
          <a href={CONTACT_PAGE_PATH} className={styles.demoBtn}>Request Demo</a>
          <a href={STAZHLINK_APP_URL} className={styles.startBtn} target="_blank" rel="noopener noreferrer">Get Started Today</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2025 StazhLink. All rights reserved.</span>
        <div className={styles.links}>
          <Link to={PRIVACY_POLICY_PATH}>Privacy Policy</Link>
          <Link to={TERMS_PATH}>Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
