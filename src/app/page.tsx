import Hero from "@components/sections/Hero";
import Trades from "@components/sections/Trades";
import SoundFamiliar from "@components/sections/SoundFamiliar";
import DayInTheLife from "@components/sections/DayInTheLife";
import Features from "@components/sections/Features";
import Everywhere from "@components/sections/Everywhere";
import Story from "@components/sections/Story";
import PrivacyCallout from "@components/sections/PrivacyCallout";
import Pricing from "@components/sections/Pricing";
import Faq from "@components/sections/Faq";
import FinalCta from "@components/sections/FinalCta";

export default function Home() {
  return (
    <main className="home">
      <div className="grid-paper">
        <div className="wrap">
          <Hero />
        </div>
      </div>
      <Trades />
      <SoundFamiliar />
      <DayInTheLife />
      <Features />
      <Everywhere />
      <Story />
      <PrivacyCallout />
      <Pricing />
      <Faq />
      <FinalCta />
    </main>
  );
}
