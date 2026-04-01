import LegalLayout from "../components/LegalLayout";

export const metadata = {
  title: "Data Deletion Request – Workfast AI",
  description:
    "Request the deletion of your personal data from Workfast AI services.",
};

export default function DataDeletionPage() {
  return (
    <LegalLayout
      icon="🗑️"
      title="Data Deletion Request"
      subtitle="You have the right to request deletion of your personal data at any time. We make the process simple and transparent."
      lastUpdated="March 2025"
    >
      <p>
        At <strong>Workfast AI</strong>, we respect your right to data privacy
        and control. This page explains how you can request the deletion of
        personal data we have collected in connection with our WhatsApp-based
        appointment booking and business automation services.
      </p>

      <h2>What Data Can Be Deleted</h2>
      <p>
        Upon a verified deletion request, we will permanently remove the
        following data associated with your account:
      </p>
      <ul>
        <li>Your name and WhatsApp phone number</li>
        <li>All appointment booking records linked to your number</li>
        <li>Chat history and interaction logs stored by our system</li>
        <li>Any business profile or workflow data you have created</li>
        <li>Payment or transaction metadata (where applicable)</li>
      </ul>

      <h2>How to Submit a Deletion Request</h2>
      <p>
        To request deletion of your data, send an email to{" "}
        <a href="mailto:support@workfast.ai" style={{ color: "#0066ff" }}>
          support@workfast.ai
        </a>{" "}
        with the subject line: <strong>Data Deletion Request</strong>.
      </p>
      <p>Please include the following in your email:</p>
      <ul>
        <li>Your full name</li>
        <li>
          Your WhatsApp phone number (in international format, e.g.,
          +91 98765 43210)
        </li>
        <li>The email address associated with your account (if applicable)</li>
        <li>A brief description of the data you wish to have deleted</li>
      </ul>

      <h2>Verification</h2>
      <p>
        To protect against unauthorized deletion requests, we may ask you to
        verify your identity before processing the request. This may involve
        confirming a One-Time Passcode (OTP) sent to your registered WhatsApp
        number.
      </p>

      <h2>Processing Time</h2>
      <p>
        We will acknowledge your request within <strong>2 business days</strong>{" "}
        and complete the deletion process within <strong>7 business days</strong>{" "}
        of verification. You will receive a confirmation email once deletion is
        complete.
      </p>

      <h2>Exceptions</h2>
      <p>
        In certain cases, we may be required to retain some data to comply with
        legal, regulatory, or tax obligations. Where retention is necessary, we
        will inform you of the specific data retained, the legal basis for
        retention, and the expected retention period.
      </p>

      <h2>After Deletion</h2>
      <p>
        Once your data is deleted, it cannot be recovered. All associated
        appointment records, messages, and automation workflows tied to your
        account will be permanently erased from our systems and all backup
        storage within 30 days.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about the deletion process or your rights
        under applicable data protection laws, please contact us at{" "}
        <a href="mailto:support@workfast.ai" style={{ color: "#0066ff" }}>
          support@workfast.ai
        </a>
        . Our support team is available Monday – Friday, 9 AM – 6 PM IST.
      </p>
    </LegalLayout>
  );
}
