import styles from "./PrivacyPolicy.module.css";

export default function Terms() {
  return (
    <main className={styles.page}>

      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.tag}>Legal</span>
          <h1 className={styles.title}>Terms &amp; Conditions</h1>
        </div>
      </div>

      {/* ── Content ── */}
      <div className={styles.content}>

        <div className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the StazhLink platform and website (collectively, the
            "Service"), you agree to be bound by these Terms &amp; Conditions. If you do
            not agree to these terms, please do not use our Service.
          </p>
          <p>
            These terms apply to all users of the Service, including students, professors,
            university administrators, and company representatives.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>2. Description of Service</h2>
          <p>
            StazhLink is an internship management platform that connects universities,
            students, professors, and companies. The platform facilitates internship
            searching, application, supervision, approval workflows, progress tracking,
            and feedback reporting.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>3. User Accounts</h2>
          <p>To use StazhLink, you must create an account. You agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete registration information.</li>
            <li>Keep your password confidential and not share it with others.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
            <li>Be responsible for all activity that occurs under your account.</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that violate these terms
            or engage in fraudulent, abusive, or illegal activity.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>4. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li>Post false, misleading, or fraudulent internship listings or applications.</li>
            <li>Harass, abuse, or harm other users of the platform.</li>
            <li>Upload or transmit viruses, malware, or any other harmful code.</li>
            <li>Attempt to gain unauthorized access to any part of the Service.</li>
            <li>Violate any applicable local, national, or international laws or regulations.</li>
            <li>Use the platform for any purpose other than legitimate internship management.</li>
          </ul>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>5. Roles and Responsibilities</h2>
          <ul>
            <li><strong>Students</strong> are responsible for the accuracy of their profiles, applications, and documents submitted through the platform.</li>
            <li><strong>Professors</strong> are responsible for providing timely and honest supervision, approval decisions, and feedback.</li>
            <li><strong>Companies</strong> are responsible for accurate internship listings and fair treatment of student interns.</li>
            <li><strong>University Administrators</strong> are responsible for managing their institution's settings and ensuring compliance with university policies.</li>
          </ul>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>6. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the StazhLink platform — including
            but not limited to text, graphics, logos, and software — are owned by StazhLink
            and are protected by applicable intellectual property laws.
          </p>
          <p>
            You may not copy, reproduce, distribute, or create derivative works from any
            part of the Service without our prior written permission.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>7. Disclaimers</h2>
          <p>
            The Service is provided on an "as is" and "as available" basis. StazhLink makes
            no warranties, express or implied, regarding the reliability, accuracy, or
            availability of the Service.
          </p>
          <p>
            StazhLink does not guarantee that any student will secure an internship, that any
            company will hire an intern, or that any particular outcome will result from use
            of the platform.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, StazhLink shall not be liable for any
            indirect, incidental, special, or consequential damages arising from your use
            of or inability to use the Service, even if we have been advised of the
            possibility of such damages.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>9. Privacy</h2>
          <p>
            Your use of the Service is also governed by our{" "}
            <a href="/privacy-policy">Privacy Policy</a>, which is incorporated into
            these Terms by reference. Please review it to understand our data practices.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>10. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of
            significant changes via email or a platform notice. Continued use of the Service
            after changes take effect constitutes acceptance of the revised Terms.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with applicable law.
            Any disputes arising from these Terms or use of the Service shall be resolved
            through good-faith negotiation, and if necessary, through competent legal channels.
          </p>
        </div>

        <hr className={styles.divider} />

        <div className={styles.section}>
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms &amp; Conditions, please contact us:
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
