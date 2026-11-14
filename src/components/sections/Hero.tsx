import Image from "next/image";
import AppStoreButton from "@components/elements/AppStoreButton";
import { Arrow, Tape, Underline } from "@components/elements/Doodles";
import { PRICING } from "@src/lib/site";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="scribble-eyebrow hand">
          for the one-person crew
          <Arrow className="scribble-arrow" />
        </p>
        <h1>
          You’re great at the work. We’ll handle the{" "}
          <span className="underlined">
            paperwork.
            <Underline className="underlined-mark" />
          </span>
        </h1>
        <p className="hero-lede">
          Clients, schedule, hours, invoices and mileage, all in one tidy app for iPhone,
          iPad and Mac. Made for home organizers, handymen, cleaners and anyone else
          who <em>is</em> the whole company.
        </p>
        <div className="hero-cta" id="get-it">
          <AppStoreButton />
          <p className="hero-cta-note hand">
            free to start. Pro is <b>{PRICING.monthly}/mo</b>,
            <br />
            and your first month is on us.
          </p>
        </div>
      </div>

      <div className="hero-art">
        <div className="taped hero-phone">
          <Tape className="hero-phone-tape" />
          <Image
            src="/screens/iphone-job-billing.webp"
            alt="Klex Books job screen showing hours worked and an invoice ready to send"
            width={720}
            height={1492}
            priority
            sizes="(max-width: 960px) 260px, 300px"
          />
        </div>
        <div className="sticky sticky-yellow hero-sticky-1 hand" aria-hidden="true">Invoice sent from the driveway.</div>
        <div className="sticky sticky-sage hero-sticky-2 hand" aria-hidden="true">
          5 hrs × $70
          <br />= done.
        </div>
        <div className="stamp hero-stamp" aria-hidden="true">PAID</div>
      </div>
    </section>
  );
};

export default Hero;
