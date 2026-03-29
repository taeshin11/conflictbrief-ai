const KEYWORDS = "war OR conflict OR military OR invasion OR airstrike OR ceasefire OR troops";
const SOURCES = "reuters,associated-press,bbc-news,al-jazeera-english";

export interface RawArticle {
  title: string;
  source: { name: string };
  url: string;
  publishedAt: string;
  description: string | null;
}

export async function fetchNews(): Promise<RawArticle[]> {
  const apiKey = process.env.NEWSAPI_KEY;
  if (!apiKey) throw new Error("NEWSAPI_KEY not set");

  const url = new URL("https://newsapi.org/v2/everything");
  url.searchParams.set("q", KEYWORDS);
  url.searchParams.set("sources", SOURCES);
  url.searchParams.set("sortBy", "publishedAt");
  url.searchParams.set("pageSize", "20");
  url.searchParams.set("apiKey", apiKey);

  const res = await fetch(url.toString(), { next: { revalidate: 0 } });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`NewsAPI error ${res.status}: ${body}`);
  }

  const json = await res.json();
  return json.articles as RawArticle[];
}
