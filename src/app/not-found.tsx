import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@components/elements/PageHeader";
import Container from "@components/elements/Container";

export const metadata: Metadata = {
  // Next already adds noindex to not-found pages.
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="pageWrapper">
      <PageHeader
        title="Page not found"
        subtitle="Sorry, we couldn't find the page you were looking for."
      />
      <Container>
        <div className="not-found-actions">
          <Link href="/" className="cta-button">
            Go back to the homepage
          </Link>
        </div>
      </Container>
    </main>
  );
}
