import Link from "next/link";
import Image from "next/image";
import { SITE } from "@src/lib/site";

const LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/help", label: "Help" },
  { href: "/privacy", label: "Privacy" },
];

const Header: React.FC = () => {
  return (
    <header className="site-header">
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
      </nav>
    </header>
  );
};

export default Header;
