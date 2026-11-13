import Link from "next/link";

const PROMISES = [
  { title: "No account", body: "Nothing to sign up for, no password to forget." },
  { title: "Your iCloud", body: "Your data lives on your devices and syncs through your own iCloud." },
  { title: "No tracking", body: "No ads, no analytics in the app, nothing sold. We never see your books." },
];

const PrivacyCallout: React.FC = () => {
  return (
    <section className="privacy">
      <div className="wrap privacy-inner">
        <div className="privacy-copy">
          <p className="section-kicker hand on-dark">the fine print, in big print</p>
          <h2>Your books stay yours.</h2>
          <p>
            Your client list is your business. Literally. So Klex Books keeps it with you,
            not on our servers.
          </p>
          <Link href="/privacy" className="privacy-link">
            Read the privacy policy →
          </Link>
        </div>
        <ul className="privacy-list">
          {PROMISES.map((promise) => (
            <li key={promise.title}>
              <span className="privacy-title hand">{promise.title}</span>
              <span>{promise.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PrivacyCallout;
