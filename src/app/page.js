import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
     

      <div className={styles.card}>
        <div className={styles.left}>
          <h1 className={styles.title}>Welcome to WorkFast WhatsApp Integration</h1>
          <p className={styles.subtitle}>
            Automate appointment bookings and confirmations over WhatsApp using
            n8n workflows. Fast to set up, simple to use.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>WhatsApp automation</div>
            <div className={styles.feature}>Quick setup</div>
            <div className={styles.feature}>Secure data handling</div>
            <div className={styles.feature}>Business-friendly</div>
          </div>
        </div>

        <aside className={styles.right}>
          <a className={styles.cta} href="mailto:support@workfast.ai">Contact Support</a>
          <div className={styles.infoBox}>
            Need help integrating with your business? Email us and we&apos;ll assist
            with the n8n workflow setup.
          </div>
        </aside>
      </div>
    </div>
  );
}
