import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoIcon from '../../assets/logo-icon.png';
import { CONTACT_PAGE_PATH, STAZHLINK_LOGIN_URL } from '../../constants/links';
import styles from './Navbar.module.css';

const navLinkKeys = [
  { key: 'navbar.product',          href: '/product',          isRoute: true },
  { key: 'navbar.forUniversities',  href: '/for-universities', isRoute: true },
  { key: 'navbar.forCompanies',     href: '/for-companies',    isRoute: true },
  { key: 'navbar.faq',              href: '/faq',              isRoute: true },
  { key: 'navbar.about',            href: '/about',            isRoute: true },
];

const langs = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'sq', label: 'AL' },
];

function LangSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const currentCode = i18n.language.slice(0, 2);
  const currentLang = langs.find((l) => l.code === currentCode) ?? langs[0];

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onEscape);
    };
  }, []);

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    setOpen(false);
  };

  return (
    <div className={styles.langSwitcher} ref={rootRef}>
      <button
        className={styles.langBtn}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <span className={styles.langCode}>{currentLang.label}</span>
        <svg className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1l4 4 4-4" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <div className={styles.langDropdown} role="listbox" aria-label="Languages">
          {langs.map(lang => (
            <button
              key={lang.code}
              className={`${styles.langOption} ${i18n.language.slice(0, 2) === lang.code ? styles.langActive : ''}`}
              onClick={() => handleChange(lang.code)}
              role="option"
              aria-selected={i18n.language.slice(0, 2) === lang.code}
            >
              <span className={styles.langOptionCode}>{lang.label}</span>
              {i18n.language.slice(0, 2) === lang.code ? <span className={styles.langCheck}>•</span> : null}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/">
          <img src={logoIcon} alt="StazhLink logo" />
          <span>StazhLink</span>
        </Link>

        <ul className={styles.links}>
          {navLinkKeys.map((l) => (
            <li key={l.key}>
              {l.isRoute
                ? <Link to={l.href}>{t(l.key)}</Link>
                : <a href={l.href}>{t(l.key)}</a>}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <LangSwitcher />
          <a href={STAZHLINK_LOGIN_URL} className={styles.loginBtn} target="_blank" rel="noopener noreferrer">{t('navbar.login')}</a>
          <Link to={CONTACT_PAGE_PATH} className={styles.demoBtn}>{t('navbar.requestDemo')}</Link>
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
        {navLinkKeys.map((l) =>
          l.isRoute
            ? <Link key={l.key} to={l.href} onClick={() => setOpen(false)}>{t(l.key)}</Link>
            : <a key={l.key} href={l.href} onClick={() => setOpen(false)}>{t(l.key)}</a>
        )}
        <div className={styles.drawerActions}>
          <LangSwitcher />
          <a href={STAZHLINK_LOGIN_URL} className={styles.loginBtn} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{t('navbar.login')}</a>
          <Link to={CONTACT_PAGE_PATH} className={styles.demoBtn} onClick={() => setOpen(false)}>{t('navbar.requestDemo')}</Link>
        </div>
      </div>
    </>
  );
}
