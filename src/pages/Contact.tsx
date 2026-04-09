import { useState } from "react";
import universitiesHero from "../assets/universities-hero.png";
import styles from "./Contact.module.css";
import PageHero from "../components/layout/PageHero";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", org: "", phone: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us for any questions or to learn more about StazhLink."
        imgSrc={universitiesHero}
        imgAlt="Contact illustration"
        waveColor="#f0f4fa"
      />

      {/* ── Form section ── */}
      <section className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Send Us a Message</h2>
        <p className={styles.sectionSub}>
          Fill out the form below and our team will get back to you as soon as possible.
        </p>

        <div className={styles.formCard}>
          <h3 className={styles.cardTitle}>Send Us a Message</h3>
          <p className={styles.cardSub}>Fill out the form below and our team will get back to you as soon as possible.</p>

          {submitted ? (
            <div className={styles.successMsg}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#ecfdf5" />
                <path d="M14 24l8 8 12-14" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <strong>Message sent!</strong>
              <p>We'll be in touch shortly.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.inputWrap}>
                  <svg className={styles.inputIcon} width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <circle cx="8.5" cy="6" r="4" stroke="#9ca3af" strokeWidth="1.6" />
                    <path d="M2 15c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" stroke="#9ca3af" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <input required placeholder="Name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className={styles.inputWrap}>
                  <svg className={styles.inputIcon} width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <rect x="2" y="4" width="13" height="9" rx="2" stroke="#9ca3af" strokeWidth="1.6" />
                    <path d="M2 6l6.5 4.5L15 6" stroke="#9ca3af" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <input required type="email" placeholder="Email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.inputWrap}>
                  <svg className={styles.inputIcon} width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <rect x="3" y="2" width="11" height="13" rx="2" stroke="#9ca3af" strokeWidth="1.6" />
                    <rect x="5" y="5" width="4" height="1.5" rx="0.75" fill="#9ca3af" />
                  </svg>
                  <input placeholder="Organization (optional)" value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })} />
                </div>
                <div className={styles.inputWrap}>
                  <svg className={styles.inputIcon} width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M3 3.5C3 3.5 4 2 5.5 3.5L6.5 5C6.5 5 7 5.5 6 6.5C5 7.5 6.5 9 8 10.5C9.5 12 11 13.5 12 12.5C13 11.5 13.5 12 13.5 12L15 13C16.5 14.5 15 15.5 15 15.5C13 17 2 8 3 3.5Z" stroke="#9ca3af" strokeWidth="1.4" />
                  </svg>
                  <input placeholder="Phone (optional)" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
              <div className={styles.inputWrap}>
                <svg className={styles.inputIcon} style={{ top: "14px" }} width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <rect x="2" y="3" width="13" height="11" rx="2" stroke="#9ca3af" strokeWidth="1.6" />
                  <path d="M5 7h7M5 10h5" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <textarea required rows={4} placeholder="Message" value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <div className={styles.formFooter}>
                <span className={styles.privacy}>We'll never share your information.</span>
                <button type="submit" className={styles.submitBtn}>Submit</button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── Get in Touch ── */}
      <section className={styles.getInTouch}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon} style={{ background: "#eff6ff" }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="5" width="18" height="12" rx="2.5" stroke="#2563eb" strokeWidth="1.8" />
                <path d="M2 7l9 6.5L20 7" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <strong className={styles.contactLabel}>Email</strong>
              <p className={styles.contactVal}>info@stazhlink.com.</p>
              <p className={styles.contactNote}>Reach out to us via email for any inquiries.</p>
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon} style={{ background: "#f0fdf4" }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 4.5C4 4.5 5.5 2.5 7.5 4.5L9 6.5C9 6.5 9.8 7.5 8.5 8.8C7.2 10.1 9 11.8 11 13.8C13 15.8 14.7 17.6 16 16.3C17.3 15 18.3 15.8 18.3 15.8L20 17.5C22 19.5 20 21 20 21C17 23.5 2 11 4 4.5Z" stroke="#10b981" strokeWidth="1.6" />
              </svg>
            </div>
            <div>
              <strong className={styles.contactLabel}>Phone</strong>
              <p className={styles.contactVal}>+1 (123) 456-7890</p>
              <p className={styles.contactNote}>Give us a call Monday to Friday, 9am to 6pm (local time).</p>
            </div>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon} style={{ background: "#fff3eb" }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 2C7.7 2 5 4.7 5 8c0 5 6 12 6 12s6-7 6-12c0-3.3-2.7-6-6-6z" stroke="#f46b1b" strokeWidth="1.8" fill="none" />
                <circle cx="11" cy="8" r="2.5" stroke="#f46b1b" strokeWidth="1.6" />
              </svg>
            </div>
            <div>
              <strong className={styles.contactLabel}>Address</strong>
              <p className={styles.contactVal}>123 Internship Ave, Suite 456</p>
              <p className={styles.contactNote}>City, Country</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
