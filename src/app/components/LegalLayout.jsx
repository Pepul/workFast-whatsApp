import Link from "next/link";
import styles from "./LegalLayout.module.css";

export default function LegalLayout({ icon, title, subtitle, lastUpdated, children }) {
  return (
    <div className={styles.root}>
      {/* ── Top nav ── */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandDot} />
          Workfast AI
        </Link>
        <div className={styles.navLinks}>
          <Link href="/privacy-policy" className={styles.navLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.navLink}>Terms</Link>
          <Link href="/data-deletion" className={styles.navLink}>Data Deletion</Link>
          <a href="mailto:support@workfast.ai" className={styles.navCta}>Support</a>
        </div>
      </nav>

      {/* ── Hero banner ── */}
      <header className={styles.hero}>
        <div className={styles.heroIcon}>{icon}</div>
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        {lastUpdated && (
          <span className={styles.lastUpdated}>Last updated: {lastUpdated}</span>
        )}
      </header>

      {/* ── Content card ── */}
      <main className={styles.main}>
        <div className={styles.card}>{children}</div>

        {/* ── Contact / Support block ── */}
        <div className={styles.contactCard}>
          <div className={styles.contactLeft}>
            <h2 className={styles.contactTitle}>Need help or have questions?</h2>
            <p className={styles.contactDesc}>
              Our support team is available Monday – Friday, 9 AM – 6 PM IST.
              We typically respond within one business day.
            </p>
          </div>
          <div className={styles.contactRight}>
            <a href="mailto:support@workfast.ai" className={styles.contactEmail}>
              <span className={styles.contactEmailIcon}>✉</span>
              support@workfast.ai
            </a>
            <p className={styles.contactNote}>
              For urgent matters, include <strong>URGENT</strong> in the subject line.
            </p>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} Workfast AI · All rights reserved ·{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> ·{" "}
          <Link href="/terms">Terms of Service</Link> ·{" "}
          <Link href="/data-deletion">Data Deletion</Link>
        </p>
      </footer>
    </div>
  );
}
