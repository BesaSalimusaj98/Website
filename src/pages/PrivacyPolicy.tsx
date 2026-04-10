import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <main className={styles.page}>

      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.tag}>Legal</span>
          <h1 className={styles.title}>Privacy Policy</h1>
        </div>
      </div>

      {/* ── Content ── */}
      <div className={styles.content}>

        <div className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Welcome to StazhLink. We are committed to protecting the personal information of
            students, professors, university administrators, and companies who use our platform.
            This Privacy Policy explains what data we collect, how we use it, and your rights
            regarding that data.
          </p>
          <p>
            By using the StazhLink platform or this website, you agree to the practices described
            in this policy. If you do not agree, please do not use our services.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>We collect information you provide directly when you register or use our services:</p>
          <ul>
            <li><strong>Account information:</strong> Name, email address, university or company affiliation, and role (student, professor, administrator, or company).</li>
            <li><strong>Profile information:</strong> Academic details, department, faculty, and internship-related information.</li>
            <li><strong>Usage data:</strong> Pages visited, features used, and actions taken within the platform.</li>
            <li><strong>Communication data:</strong> Messages sent through the platform between students, professors, and companies.</li>
            <li><strong>Technical data:</strong> IP address, browser type, device information, and cookies.</li>
          </ul>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected data to:</p>
          <ul>
            <li>Provide and operate the StazhLink internship management platform.</li>
            <li>Facilitate communication between students, professors, and companies.</li>
            <li>Process internship applications, approvals, and progress tracking.</li>
            <li>Generate official internship feedback reports and certificates.</li>
            <li>Improve platform features and user experience.</li>
            <li>Send important service notifications and updates.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>4. How We Share Your Information</h2>
          <p>
            We do not sell your personal data. We may share it only in the following circumstances:
          </p>
          <ul>
            <li><strong>Within the platform:</strong> Student information is visible to the assigned professor and the relevant company as needed for the internship process.</li>
            <li><strong>Universities:</strong> Administrators of your affiliated university may access internship activity data for oversight purposes.</li>
            <li><strong>Service providers:</strong> Trusted third-party vendors who assist in operating our infrastructure (e.g., cloud hosting), bound by confidentiality agreements.</li>
            <li><strong>Legal requirements:</strong> When required by law or to protect the rights and safety of users.</li>
          </ul>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>5. Cookies</h2>
          <p>
            StazhLink uses cookies and similar tracking technologies to maintain your session,
            remember your preferences, and analyze platform usage. You can control cookie
            settings through your browser. Disabling cookies may affect some platform features.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard security measures including encryption, secure data
            storage, and access controls to protect your personal information. However, no
            system is completely secure, and we cannot guarantee absolute security of your data.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>7. Data Retention</h2>
          <p>
            We retain your personal data for as long as your account is active or as needed to
            provide our services. Internship records may be retained for a longer period to
            satisfy academic and legal requirements. You may request deletion of your account
            at any time.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>8. Your Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li>Access and receive a copy of the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Object to or restrict certain types of processing.</li>
            <li>Data portability — receive your data in a structured, machine-readable format.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:info@stazhlink.com">info@stazhlink.com</a>.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify registered users
            of material changes by email or via a notice on the platform. Continued use of
            StazhLink after changes constitutes acceptance of the updated policy.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:info@stazhlink.com">info@stazhlink.com</a></li>
            <li>Website: <a href="https://stazhlink.com" target="_blank" rel="noopener noreferrer">stazhlink.com</a></li>
          </ul>
        </div>

      </div>
    </main>
  );
}
