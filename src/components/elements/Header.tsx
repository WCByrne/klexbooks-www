import Link from "next/link";
import Image from "next/image";
import { SITE } from "@src/lib/site";

const LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/help", label: "Help" },
];

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-header-logo" aria-label={`${SITE.name} Home`}>
          <Image src="/app-icon.png" alt="" width={36} height={36} priority />
          <span>{SITE.name}</span>
        </Link>
        <nav className="site-header-nav">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link href="/#get-it" className="btn btn-small">
            Get the app
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
