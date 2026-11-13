import Image from "next/image";
import AppStoreButton from "@components/elements/AppStoreButton";
import { PRICING } from "@src/lib/site";

const FinalCta: React.FC = () => {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-note">
          <Image src="/app-icon.png" alt="" width={88} height={88} className="final-icon" />
          <h2>Give your evenings back.</h2>
          <p className="hand final-hand">
            less paperwork, more of the work you’re actually good at.
          </p>
          <AppStoreButton />
          <p className="final-fine">
            Free to start · Pro from {PRICING.yearlyPerMonth}/mo · iPhone, iPad &amp; Mac
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
