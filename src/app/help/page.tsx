import { Metadata } from "next";
import Link from "next/link";
import Container from "@components/elements/Container";
import PageHeader from "@components/elements/PageHeader";
import { getAllArticles } from "@src/lib/help";
import { SITE } from "@src/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  // Keep the page out of search results until there's something on it.
  const hasArticles = (await getAllArticles()).length > 0;
  return {
    title: "Help",
    description: `Guides and answers for getting the most out of ${SITE.name}.`,
    alternates: { canonical: "/help" },
    openGraph: { url: "/help" },
    ...(!hasArticles && { robots: { index: false, follow: true } }),
  };
}

export default async function HelpIndex() {
  const articles = await getAllArticles();

  return (
    <main className="pageWrapper">
      <PageHeader title="Help" subtitle={`Guides and answers for ${SITE.name}.`} />
      <Container narrow>
        {articles.length > 0 ? (
          <ul className="help-list">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link href={`/help/${article.slug}`} className="help-card">
                  <span className="help-card-title">{article.title}</span>
                  {article.description && (
                    <span className="help-card-description">{article.description}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="help-empty">Help articles are on the way.</p>
        )}
        <p className="help-contact">
          Can&apos;t find what you need? Email{" "}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        </p>
      </Container>
    </main>
  );
}
