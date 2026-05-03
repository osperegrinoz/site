const FEED_URL = "https://osperegrinoz.substack.com/feed";

export interface SubstackPost {
  title: string;
  excerpt: string;
  url: string;
  date: string;
}

function extractTag(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = xml.match(regex);
  if (!match) return "";
  const raw = match[1];
  const cdata = raw.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return (cdata ? cdata[1] : raw).trim();
}

function decodeEntities(str: string): string {
  return str
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];

    const xml = await res.text();
    const items: SubstackPost[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null) {
      const item = match[1];
      const title = decodeEntities(extractTag(item, "title"));
      const excerpt = decodeEntities(extractTag(item, "description"));
      const link = extractTag(item, "link");
      const pubDate = extractTag(item, "pubDate");

      if (!title || !link) continue;

      items.push({
        title,
        excerpt,
        url: link,
        date: new Date(pubDate).toISOString().split("T")[0],
      });
    }

    return items;
  } catch {
    return [];
  }
}
