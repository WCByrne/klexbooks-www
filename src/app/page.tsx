import Container from "@components/elements/Container";
import Hero from "@components/sections/Hero";
import Features from "@components/sections/Features";
import PrivacyCallout from "@components/sections/PrivacyCallout";

export default function Home() {
  return (
    <main className="pageWrapper">
      <Container>
        <Hero />
        <Features />
        <PrivacyCallout />
      </Container>
    </main>
  );
}
