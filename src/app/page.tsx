import type { Metadata } from "next";
import Hero from "@components/sections/Hero";
import Trades from "@components/sections/Trades";
import SoundFamiliar from "@components/sections/SoundFamiliar";
import DayInTheLife from "@components/sections/DayInTheLife";
import Features from "@components/sections/Features";
import Everywhere from "@components/sections/Everywhere";
import Story from "@components/sections/Story";
import PrivacyCallout from "@components/sections/PrivacyCallout";
import Pricing from "@components/sections/Pricing";
import Faq, { FAQS } from "@components/sections/Faq";
import FinalCta from "@components/sections/FinalCta";
import { PRICING, SITE } from "@src/lib/site";
import { jsonLd } from "@src/lib/jsonld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const price = (amount: string) => amount.replace("$", "");

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  applicationCategory: "BusinessApplication",
  operatingSystem: "iOS, iPadOS, macOS",
  image: `${SITE.url}/app-icon.png`,
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
    {
      "@type": "Offer",
      name: "Pro (monthly)",
      price: price(PRICING.monthly),
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Pro (yearly)",
      price: price(PRICING.yearly),
      priceCurrency: "USD",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <main className="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(appJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqJsonLd)} />
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
