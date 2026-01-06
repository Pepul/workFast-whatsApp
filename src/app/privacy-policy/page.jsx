import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Privacy Policy</h1>

        <p className={styles.lead}>
          This application provides WhatsApp-based appointment booking services
          for businesses such as hotels, restaurants, and salon shops.
        </p>

        <h2 className={styles.sectionTitle}>Information We Collect</h2>
        <ul className={styles.list}>
          <li>Name</li>
          <li>Phone number</li>
          <li>Appointment date and time</li>
          <li>Service-related details</li>
        </ul>

        <h2 className={styles.sectionTitle}>How We Use the Information</h2>
        <p className={styles.lead}>
          The collected information is used only for scheduling, confirming,
          and managing appointments via WhatsApp automation using n8n workflows.
        </p>

        <h2 className={styles.sectionTitle}>Data Sharing</h2>
        <p className={styles.lead}>
          We do not sell, trade, or share personal information with third
          parties. Data is processed securely using the WhatsApp Business
          Platform.
        </p>

        <h2 className={styles.sectionTitle}>Data Retention</h2>
        <p className={styles.lead}>
          Data is retained only as long as required to fulfill appointment
          services or to comply with legal requirements.
        </p>

        <h2 className={styles.sectionTitle}>Contact</h2>
        <div className={styles.contact}>
          <strong className={styles.email}>support@workfast.ai</strong>
        </div>
      </div>
    </main>
  );
}
