import styles from "./page.module.css";

const plans = [
  {
    name: "Starter Plan",
    price: "₹999 / month",
    description:
      "Perfect for solo entrepreneurs. Includes WhatsApp message automation, appointment booking via chat, and up to 500 messages/month.",
    features: ["500 messages/month", "1 WhatsApp number", "Appointment booking", "Email support"],
  },
  {
    name: "Basic Plan",
    price: "₹2,499 / month",
    description:
      "For small businesses getting started with WhatsApp automation. Includes automated confirmations, reminders, and CRM sync.",
    features: ["2,000 messages/month", "2 WhatsApp numbers", "Automated reminders", "CRM integration"],
  },
  {
    name: "Professional Plan",
    price: "₹5,999 / month",
    description:
      "Built for growing teams. Full workflow automation, multi-agent support, and analytics dashboard included.",
    features: ["10,000 messages/month", "5 WhatsApp numbers", "Multi-agent inbox", "Analytics dashboard"],
  },
  {
    name: "Business Plan",
    price: "₹11,999 / month",
    description:
      "Advanced features for established businesses. Priority support, custom bot flows, payment collection via WhatsApp.",
    features: ["30,000 messages/month", "10 WhatsApp numbers", "Payment collection", "Priority support"],
  },
  {
    name: "Enterprise Plan",
    price: "Custom Pricing",
    description:
      "Tailored solutions for large-scale operations. Dedicated account manager, SLA guarantees, white-label options available.",
    features: ["Unlimited messages", "Unlimited numbers", "Dedicated manager", "White-label option"],
  },
];

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>WorkFast WhatsApp Integration</h1>
        <p className={styles.heroSubtitle}>
          Automate appointment bookings, payment confirmations, and customer
          communication over WhatsApp — powered by Workfast AI workflows.
        </p>
        <div className={styles.heroBadges}>
          <span className={styles.badge}>WhatsApp Automation</span>
          <span className={styles.badge}>Quick Setup</span>
          <span className={styles.badge}>Secure Payments</span>
          <span className={styles.badge}>Business-Friendly</span>
        </div>
        <a className={styles.heroCta} href="mailto:support@workfast.ai">
          Contact Support
        </a>
      </div>

      <section className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Products &amp; Services</h2>
        <p className={styles.sectionSubtitle}>
          Choose the plan that fits your business. All plans include onboarding
          assistance and access to Workfast AI automation workflows.
        </p>

        <div className={styles.plansGrid}>
          {plans.map((plan) => (
            <div key={plan.name} className={styles.planCard}>
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <span className={styles.planPrice}>{plan.price}</span>
              </div>
              <p className={styles.planDesc}>{plan.description}</p>
              <ul className={styles.planFeatures}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.planFeatureItem}>
                    <span className={styles.check}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a className={styles.planCta} href="mailto:support@workfast.ai">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} Workfast AI · All rights reserved ·{" "}
          <a href="/privacy-policy">Privacy Policy</a> ·{" "}
          <a href="/terms">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}
