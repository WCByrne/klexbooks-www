import Image from "next/image";
import Link from "next/link";
import { SITE, SOCIAL } from "@src/lib/site";
import SocialIcon from "@components/elements/SocialIcon";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <div className="site-footer-brand-col">
          <Link href="/" className="site-footer-brand" aria-label={`${SITE.name} Home`}>
            <Image src="/app-icon.png" alt="" width={48} height={48} />
            <span>{SITE.name}</span>
          </Link>
          <p className="site-footer-note hand">made for people who do the work themselves.</p>
          <ul className="site-footer-social">
            {SOCIAL.map((network) => (
              <li key={network.name}>
                <a
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.name} on ${network.name}`}
                  title={`${network.name} · ${network.handle}`}
                >
                  <SocialIcon network={network.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="site-footer-links">
          <div className="site-footer-group">
            <span className="site-footer-label">Product</span>
            <Link href="/#features">Features</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/#faq">FAQ</Link>
          </div>
          <div className="site-footer-group">
            <span className="site-footer-label">Support</span>
            <Link href="/help">Help</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <a href={`mailto:${SITE.supportEmail}`}>Contact</a>
          </div>
        </div>
      </div>
      <p className="site-footer-copy">
        © {new Date().getFullYear()} {SITE.name}. For iPhone, iPad and Mac.
      </p>
    </footer>
  );
};

export default Footer;
