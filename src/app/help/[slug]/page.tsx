import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@components/elements/Container";
import PageHeader from "@components/elements/PageHeader";
import { getAllArticles, getArticleBySlug } from "@src/lib/help";

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
  };
}

export default async function HelpArticle({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <main className="pageWrapper">
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
