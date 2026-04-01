import LegalLayout from "../components/LegalLayout";

export const metadata = {
  title: "Terms of Service – Workfast AI",
  description:
    "Review the terms and conditions governing your use of Workfast AI services.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      icon="📋"
      title="Terms of Service"
      subtitle="Please read these terms carefully before using our WhatsApp automation and appointment booking services."
      lastUpdated="March 2025"
    >
      <p>
        These Terms of Service ("Terms") govern your access to and use of
        services provided by <strong>Workfast AI</strong> ("Company", "we",
        "us", or "our"), including our WhatsApp-based appointment booking and
        business automation platform. By accessing or using our services, you
        agree to be bound by these Terms.
      </p>

      <h2>1. Service Description</h2>
      <p>
        Workfast AI provides WhatsApp automation workflows that enable
        businesses — including hotels, restaurants, salons, clinics, and other
        service-oriented establishments — to:
      </p>
      <ul>
        <li>Accept and manage appointment bookings via WhatsApp</li>
        <li>Send automated booking confirmations and reminders</li>
        <li>Handle customer queries through AI-powered chat workflows</li>
        <li>Process payments and send payment confirmations</li>
        <li>Integrate with third-party business tools and CRM systems</li>
      </ul>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old and have the legal authority to enter
        into a binding agreement to use our services. By using Workfast AI, you
        represent that you meet these requirements.
      </p>

      <h2>3. Account and Access</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials. You agree to notify us immediately at{" "}
        <a href="mailto:support@workfast.ai" style={{ color: "#0066ff" }}>
          support@workfast.ai
        </a>{" "}
        if you suspect unauthorized access to your account. We are not liable
        for any losses resulting from unauthorized use of your account.
      </p>

      <h2>4. User Responsibilities</h2>
      <p>When using our services, you agree to:</p>
      <ul>
        <li>Provide accurate and complete information during registration and bookings</li>
        <li>Use the service only for lawful, legitimate business purposes</li>
        <li>
          Comply with WhatsApp's Business Policy and Meta's Terms of Service
        </li>
        <li>Not use the service to send spam, unsolicited messages, or illegal content</li>
        <li>Not attempt to reverse-engineer, hack, or disrupt our platform</li>
      </ul>

      <h2>5. Payment Terms</h2>
      <p>
        Subscription fees are billed in advance on a monthly or annual basis.
        All payments are processed securely through our payment partners.
        Refunds are handled on a case-by-case basis — contact us within 7 days
        of a charge if you believe a billing error has occurred.
      </p>

      <h2>6. Service Availability</h2>
      <p>
        We strive to maintain high uptime but do not guarantee uninterrupted
        availability. We reserve the right to modify, suspend, or discontinue
        any feature of the service at any time with reasonable prior notice
        where possible. Planned maintenance will be communicated in advance.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        All content, workflows, designs, and technology on our platform are the
        exclusive property of Workfast AI and are protected by applicable
        intellectual property laws. You may not copy, reproduce, or distribute
        our proprietary materials without written consent.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Workfast AI shall not be liable
        for any indirect, incidental, or consequential damages arising from:
      </p>
      <ul>
        <li>Missed or incorrect appointments due to user-provided information</li>
        <li>Third-party service outages (e.g., WhatsApp platform downtime)</li>
        <li>Data loss beyond our reasonable control</li>
        <li>Delays in message delivery by the carrier or platform</li>
      </ul>

      <h2>9. Termination</h2>
      <p>
        Either party may terminate the service agreement with 30 days' written
        notice. We reserve the right to immediately suspend or terminate access
        if you violate these Terms or engage in fraudulent activity. Upon
        termination, your data will be deleted in accordance with our Privacy
        Policy.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms shall be governed by and interpreted in accordance with the
        laws of India. Any disputes shall be subject to the exclusive
        jurisdiction of the courts in Chennai, Tamil Nadu.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms periodically. We will notify you of
        significant changes via email or in-app notification at least 14 days
        before they take effect. Continued use of our services after the
        effective date constitutes acceptance of the revised Terms.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        For questions about these Terms, please contact us at{" "}
        <a href="mailto:support@workfast.ai" style={{ color: "#0066ff" }}>
          support@workfast.ai
        </a>
        . We aim to respond within 2 business days.
      </p>
    </LegalLayout>
  );
}
