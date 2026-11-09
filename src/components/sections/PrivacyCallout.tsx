import Link from "next/link";

const PrivacyCallout: React.FC = () => {
  return (
    <section className="callout">
      <h2>Your books stay yours</h2>
      <p>
        No account to create and nothing to sign in to. Your data lives on your
        devices and syncs through your own iCloud — we never see it.
      </p>
      <Link href="/privacy" className="callout-link">
        Read the privacy policy →
      </Link>
    </section>
  );
};

export default PrivacyCallout;
