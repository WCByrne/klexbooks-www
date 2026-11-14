import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Help articles are markdown files in content/help. Files starting with "_" are ignored.
const helpDirectory = path.join(process.cwd(), "content/help");

export type ArticleMeta = {
  slug: string;
  title: string;
  description?: string;
  order: number;
  /** Optional ISO date (YYYY-MM-DD) from front matter, used for sitemap and structured data. */
  date?: string;
};

export type Article = ArticleMeta & {
  contentHtml: string;
};

function isArticleFile(filename: string) {
  return filename.endsWith(".md") && !filename.startsWith("_");
}

function readArticle(slug: string) {
  const fileContents = fs.readFileSync(path.join(helpDirectory, `${slug}.md`), "utf8");
  const { data, content } = matter(fileContents);
  const meta: ArticleMeta = {
    slug,
    title: data.title ?? slug,
    description: data.description,
    date:
      data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : typeof data.date === "string"
          ? data.date
          : undefined,
    order: typeof data.order === "number" ? data.order : 999,
  };
  return { meta, content };
}

export async function getAllArticles(): Promise<ArticleMeta[]> {
  if (!fs.existsSync(helpDirectory)) return [];
  return fs
    .readdirSync(helpDirectory)
    .filter(isArticleFile)
    .map((filename) => readArticle(filename.replace(/\.md$/, "")).meta)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (slug.startsWith("_")) return null;
  const filePath = path.join(helpDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { meta, content } = readArticle(slug);
  const processed = await remark().use(html).process(content);
  return { ...meta, contentHtml: processed.toString() };
}
