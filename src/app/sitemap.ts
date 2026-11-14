import { MetadataRoute } from "next";
import { getAllArticles } from "@src/lib/help";
import { baseUrl } from "@src/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = baseUrl();
  const built = new Date();
  const articles = await getAllArticles();

  return [
    { url: base, lastModified: built },
    { url: `${base}/privacy`, lastModified: built },
    // /help is noindex until it has articles, so only list it once it does.
    ...(articles.length > 0 ? [{ url: `${base}/help`, lastModified: built }] : []),
    ...articles.map((article) => ({
      url: `${base}/help/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : built,
    })),
  ];
}
