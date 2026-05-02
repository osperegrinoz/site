import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ESCRITOS_DIR = path.join(process.cwd(), "content/escritos");

export interface Escrito {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  substack_url?: string;
  content: string;
}

export type EscritoMeta = Omit<Escrito, "content">;

function parseEscrito(slug: string, raw: string): Escrito {
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    substack_url: data.substack_url,
    content,
  };
}

export function getAllEscritos(): EscritoMeta[] {
  if (!fs.existsSync(ESCRITOS_DIR)) return [];

  return fs
    .readdirSync(ESCRITOS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(ESCRITOS_DIR, filename), "utf-8");
      const { content: _, ...meta } = parseEscrito(slug, raw);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getEscrito(slug: string): Escrito | null {
  const filePath = path.join(ESCRITOS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return parseEscrito(slug, raw);
}
