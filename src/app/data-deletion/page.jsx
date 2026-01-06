import styles from "./page.module.css";

export const metadata = {
  title: "Data Deletion Request",
};

export default function DataDeletionPage() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.title}>Data Deletion Request</h1>
        </header>

        <p className={styles.lead}>
          Users may request deletion of their personal data collected through
          this WhatsApp-based appointment booking service.
        </p>

        <h2 className={styles.sectionTitle}>How to Request Data Deletion</h2>
        <p className={styles.muted}>
          To request deletion, please send an email with your WhatsApp phone
          number to:
        </p>

        <div className={styles.contact}>
          <strong className={styles.email}>support@workfast.ai</strong>
        </div>

        <h2 className={styles.sectionTitle}>Processing Time</h2>
        <p className={styles.lead}>
          Data deletion requests will be processed within <strong>7 business
          days</strong>.
        </p>

        <p className={styles.lead}>
          Once deleted, all associated appointment records will be permanently
          removed from our systems.
        </p>
      </div>
    </main>
  );
}
