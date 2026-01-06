import styles from "./page.module.css";

export const metadata = {
  title: "Terms and Conditions",
};

export default function TermsPage() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Terms and Conditions</h1>

        <p className={styles.lead}>
          By using this application, you agree to the following terms and
          conditions.
        </p>

        <h2 className={styles.sectionTitle}>Service Description</h2>
        <p className={styles.lead}>
          This service allows users to book appointments through WhatsApp for
          hotels, restaurants, salons, and similar businesses.
        </p>

        <h2 className={styles.sectionTitle}>User Responsibilities</h2>
        <p className={styles.lead}>
          Users must provide accurate information when booking appointments.
        </p>

        <h2 className={styles.sectionTitle}>Service Availability</h2>
        <p className={styles.lead}>
          We do not guarantee uninterrupted service and may modify or
          discontinue features at any time.
        </p>

        <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
        <p className={styles.lead}>
          We are not responsible for missed appointments, service delays, or
          incorrect information provided by users.
        </p>

        <h2 className={styles.sectionTitle}>Contact</h2>
        <div className={styles.contact}>
          <strong className={styles.email}>support@workfast.ai</strong>
        </div>
      </div>
    </main>
  );
}
