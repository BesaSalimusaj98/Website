import { useState } from "react";
import universitiesHero from "../assets/universities-hero.png";
import styles from "./FAQ.module.css";
import PageHero from "../components/layout/PageHero";
import { useTranslation } from "react-i18next";

type FAQItem = { q: string; a: string };
type TabId = "general" | "students" | "companies";

function Accordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={styles.accordion}>
      {items.map((item, i) => (
        <div key={i} className={`${styles.accordionItem} ${open === i ? styles.active : ""}`}>
          <button className={styles.accordionQ} onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span className={styles.accordionIcon}>{open === i ? "×" : "+"}</span>
          </button>
          {open === i && <div className={styles.accordionA}>{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

const tabIds: TabId[] = ["general", "students", "companies"];

export default function FAQ() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabId>("general");
  const [search, setSearch] = useState("");

  const general = Array.from({ length: 6 }, (_, i) => ({ q: t(`faq.general.${i}.q`), a: t(`faq.general.${i}.a`) }));
  const students = Array.from({ length: 4 }, (_, i) => ({ q: t(`faq.students.${i}.q`), a: t(`faq.students.${i}.a`) }));
  const companies = Array.from({ length: 4 }, (_, i) => ({ q: t(`faq.companies.${i}.q`), a: t(`faq.companies.${i}.a`) }));

  const allItems = [...general, ...students, ...companies];
  const filtered = search.trim()
    ? allItems.filter(
        (i) =>
          i.q.toLowerCase().includes(search.toLowerCase()) ||
          i.a.toLowerCase().includes(search.toLowerCase())
      )
    : null;

  const tabItems: Record<TabId, FAQItem[]> = { general, students, companies };

  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <PageHero
        title={t('faq.hero.title')}
        subtitle={t('faq.hero.subtitle')}
        imgSrc={universitiesHero}
        imgAlt="FAQ illustration"
        leftExtra={
          <div className={styles.searchWrap}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder={t('faq.hero.searchPlaceholder')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="7.5" cy="7.5" r="5.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" />
              <path d="M12 12l3.5 3.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
        }
        waveColor="#f0f4fa"
      />

      {/* ── FAQ Body ── */}
      <section className={styles.body}>
        <div className={styles.bodyInner}>

          {filtered ? (
            /* Search results */
            <div>
              <p className={styles.searchResultLabel}>
                {t('faq.searchResult', { count: filtered.length, query: search })}
              </p>
              <Accordion items={filtered.length ? filtered : []} />
              {filtered.length === 0 && (
                <p className={styles.noResults}>{t('faq.noResults')}</p>
              )}
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className={styles.tabs}>
                {tabIds.map((id) => (
                  <button
                    key={id}
                    className={`${styles.tab} ${activeTab === id ? styles.tabActive : ""}`}
                    onClick={() => setActiveTab(id)}
                  >
                    {t(`faq.tabs.${id}`)}
                  </button>
                ))}
              </div>

              <Accordion items={tabItems[activeTab]} />
            </>
          )}

        </div>
      </section>

    </main>
  );
}
