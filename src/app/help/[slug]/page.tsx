import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@components/elements/Container";
import PageHeader from "@components/elements/PageHeader";
import { getAllArticles, getArticleBySlug } from "@src/lib/help";
import { jsonLd } from "@src/lib/jsonld";
import { SITE } from "@src/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/help/${slug}` },
    openGraph: {
      type: "article",
      url: `/help/${slug}`,
      title: article.title,
      description: article.description,
      ...(article.date && { publishedTime: article.date }),
    },
  };
}

export default async function HelpArticle({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    ...(article.description && { description: article.description }),
    ...(article.date && { datePublished: article.date, dateModified: article.date }),
    mainEntityOfPage: `${SITE.url}/help/${slug}`,
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };

  return (
    <main className="pageWrapper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleJsonLd)} />
      <PageHeader title={article.title} subtitle={article.description} />
      <Container narrow>
        <Link href="/help" className="back-link">
          ← All help articles
        </Link>
        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </Container>
    </main>
  );
}
