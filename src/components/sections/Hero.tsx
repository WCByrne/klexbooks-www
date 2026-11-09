import Image from "next/image";
import AppStoreButton from "@components/elements/AppStoreButton";
import { SITE } from "@src/lib/site";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <Image
        className="hero-icon"
        src="/app-icon.png"
        alt={`${SITE.name} app icon`}
        width={160}
        height={160}
        priority
      />
      <p className="eyebrow">For iPhone, iPad and Mac</p>
      <h1>{SITE.tagline}</h1>
      <p className="hero-lede">
        Clients, scheduling, time tracking, invoices and expenses — everything
        your one-person business runs on, in one simple app.
      </p>
      <AppStoreButton />
    </section>
  );
};

export default Hero;
