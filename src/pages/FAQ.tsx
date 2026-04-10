import { useState } from "react";
import universitiesHero from "../assets/universities-hero.png";
import styles from "./FAQ.module.css";
import PageHero from "../components/layout/PageHero";

type FAQItem = { q: string; a: string };

const general: FAQItem[] = [
  {
    q: "What is StazhLink?",
    a: "StazhLink is an internship management platform that connects students, professors, companies, and university administrators into a centralized system to oversee and manage the full internship lifecycle.",
  },
  {
    q: "How does the internship workflow work?",
    a: "Students apply to internships, companies review applications, professors approve supervision requests, and administrators oversee the entire process all from one platform.",
  },
  {
    q: "Can my university quickly integrate StazhLink?",
    a: "Yes. StazhLink is designed for fast onboarding. Your admin team can set up departments, invite faculty, and start managing internships within days.",
  },
  {
    q: "Is the platform secure and GDPR compliant?",
    a: "Absolutely. StazhLink follows GDPR guidelines, encrypts all sensitive data, and provides role-based access control to protect student and institutional information.",
  },
  {
    q: "How can I contact support?",
    a: "You can reach our support team at info@stazhlink.com or use the live chat inside the platform. We typically respond within one business day.",
  },
  {
    q: "Is StazhLink free for students?",
    a: "Yes, students access StazhLink for free through their university. There are no fees for students to apply or track their internships.",
  },
];

const forStudents: FAQItem[] = [
  { q: "How do I find and apply for internships?", a: "Browse available listings from partner companies directly in your student dashboard and submit your application with one click." },
  { q: "Do I need faculty supervision to apply to internships?", a: "Some internships require a professor to approve your supervision request before the company can proceed. Your university sets this policy." },
  { q: "Can I track my internship application status?", a: "Yes, your dashboard shows real-time status updates for every application you've submitted." },
  { q: "How do I download my internship completion certificate?", a: "Once your internship is marked complete by both the company and your professor, you can download your official certificate from your profile." },
];

const forCompanies: FAQItem[] = [
  { q: "How can a company post internships?", a: "After registering your company, go to your dashboard and click 'Post Internship'. Fill in the details, requirements, and available spots." },
  { q: "How does a company review and accept student applications?", a: "Applications appear in your dashboard as students apply. You can review documents, leave notes, and accept or reject with one click." },
  { q: "Can we leave feedback on interns?", a: "Yes, at the end of the internship, companies can submit a structured feedback report which becomes part of the student's record." },
  { q: "Are internship agreements generated automatically?", a: "Yes. Once all parties approve, StazhLink generates an official internship feedback that can be signed and downloaded by all stakeholders." },
];

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

const tabs = ["General Questions", "For Students", "For Companies"] as const;
type Tab = typeof tabs[number];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<Tab>("General Questions");
  const [search, setSearch] = useState("");

  const allItems = [...general, ...forStudents, ...forCompanies];
  const filtered = search.trim()
    ? allItems.filter(
        (i) =>
          i.q.toLowerCase().includes(search.toLowerCase()) ||
          i.a.toLowerCase().includes(search.toLowerCase())
      )
    : null;

  const tabItems: Record<Tab, FAQItem[]> = {
    "General Questions": general,
    "For Students": forStudents,
    "For Companies": forCompanies,
  };

  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about StazhLink and how our internship management platform works."
        imgSrc={universitiesHero}
        imgAlt="FAQ illustration"
        leftExtra={
          <div className={styles.searchWrap}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search for a question..."
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
                {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{search}"
              </p>
              <Accordion items={filtered.length ? filtered : []} />
              {filtered.length === 0 && (
                <p className={styles.noResults}>No questions matched your search.</p>
              )}
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className={styles.tabs}>
                {tabs.map((t) => (
                  <button
                    key={t}
                    className={`${styles.tab} ${activeTab === t ? styles.tabActive : ""}`}
                    onClick={() => setActiveTab(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <Accordion items={tabItems[activeTab]} />
            </>
          )}

          {/* Bottom 2-col summary */}
          {!filtered && (
            <div className={styles.summaryGrid}>
              <div className={styles.summaryCard}>
                <div className={styles.summaryCardHeader}>
                  <strong>Questions for Students</strong>
                  <span className={styles.summaryPlus}>+</span>
                </div>
                <ul className={styles.summaryList}>
                  {forStudents.slice(0, 3).map((i) => (
                    <li key={i.q}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M2.5 7.5l3.5 3.5 6-7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {i.q}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.summaryCard}>
                <div className={styles.summaryCardHeader}>
                  <strong>Questions for Companies</strong>
                  <span className={styles.summaryPlus}>+</span>
                </div>
                <ul className={styles.summaryList}>
                  {forCompanies.slice(0, 2).map((i) => (
                    <li key={i.q}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M2.5 7.5l3.5 3.5 6-7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {i.q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
