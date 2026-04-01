import LegalLayout from "../components/LegalLayout";

export const metadata = {
  title: "Privacy Policy – Workfast AI",
  description:
    "Learn how Workfast AI collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      icon="🔒"
      title="Privacy Policy"
      subtitle="We are committed to protecting your personal information and being transparent about how we use it."
      lastUpdated="March 2025"
    >
      <p>
        This Privacy Policy describes how <strong>Workfast AI</strong> ("we",
        "us", or "our") collects, uses, and safeguards information when you use
        our WhatsApp-based appointment booking and business automation services.
        By using our services, you agree to the practices described below.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect only the information necessary to provide our services. This
        includes:
      </p>
      <ul>
        <li>
          <strong>Contact details</strong> — your name and WhatsApp phone number
        </li>
        <li>
          <strong>Appointment data</strong> — preferred date, time, and
          service type
        </li>
        <li>
          <strong>Business information</strong> — details you provide when
          setting up workflows for your business
        </li>
        <li>
          <strong>Usage data</strong> — message interactions processed through
          the WhatsApp Business Platform
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>The information we collect is used solely to:</p>
      <ul>
        <li>Schedule, confirm, and manage appointments on your behalf</li>
        <li>Send automated reminders and follow-up messages via WhatsApp</li>
        <li>Operate and improve our AI-powered workflow automation</li>
        <li>Respond to support requests and customer inquiries</li>
        <li>Comply with applicable legal and regulatory obligations</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        We do <strong>not</strong> sell, rent, or trade your personal
        information to third parties. Limited data sharing occurs only in the
        following situations:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> — trusted partners (e.g., Meta's
          WhatsApp Business Platform) who process data on our behalf under
          strict confidentiality agreements
        </li>
        <li>
          <strong>Legal compliance</strong> — when required by law, court order,
          or governmental authority
        </li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement industry-standard security measures including encrypted
        data transmission, access controls, and regular security reviews. While
        no system is 100% secure, we take all reasonable precautions to protect
        your data.
      </p>

      <h2>Data Retention</h2>
      <p>
        Personal data is retained only for as long as required to deliver the
        requested services or comply with legal obligations. Once no longer
        needed, data is securely deleted. You can request deletion at any time
        — see our{" "}
        <a href="/data-deletion" style={{ color: "#0066ff" }}>
          Data Deletion page
        </a>
        .
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate or outdated information</li>
        <li>Request deletion of your personal data</li>
        <li>Withdraw consent for data processing at any time</li>
        <li>Lodge a complaint with your local data protection authority</li>
      </ul>

      <h2>Children's Privacy</h2>
      <p>
        Our services are not directed to children under the age of 13. We do
        not knowingly collect personal data from minors. If you believe a child
        has provided us with their data, please contact us immediately.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify
        users of material changes via email or an in-app notice. Continued use
        of our services after an update constitutes your acceptance of the
        revised policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any privacy-related questions or requests, please contact us at{" "}
        <a href="mailto:support@workfast.ai" style={{ color: "#0066ff" }}>
          support@workfast.ai
        </a>
        . We aim to respond to all inquiries within 2 business days.
      </p>
    </LegalLayout>
  );
}
