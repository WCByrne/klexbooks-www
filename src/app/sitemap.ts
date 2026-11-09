import { MetadataRoute } from "next";
import { getAllArticles } from "@src/lib/help";
import { SITE } from "@src/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = (await getAllArticles()).map((article) => ({
    url: `${SITE.url}/help/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: SITE.url, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE.url}/help`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    ...articles,
  ];
}
