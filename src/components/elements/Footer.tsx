import Image from "next/image";
import Link from "next/link";
import { SITE } from "@src/lib/site";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <Link href="/" className="site-footer-brand" aria-label={`${SITE.name} Home`}>
          <Image src="/app-icon.png" alt="" width={56} height={56} />
          <span>{SITE.name}</span>
        </Link>
        <div className="site-footer-links">
          <div className="site-footer-group">
            <span className="site-footer-label">Product</span>
            <Link href="/">Home</Link>
            <Link href="/#features">Features</Link>
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
        © {new Date().getFullYear()} {SITE.name}
      </p>
    </footer>
  );
};

export default Footer;
