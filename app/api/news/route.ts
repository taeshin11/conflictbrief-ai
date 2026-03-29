import { NextResponse } from "next/server";
import { fetchNews, RawArticle } from "@/lib/newsapi";
import { summarize } from "@/lib/summarizer";
import { getCache, setCache, getStaleCache } from "@/lib/cache";

const CACHE_KEY = "news";
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

interface Article {
  id: string;
  title: string;
  source: string;
  summary: string;
  originalUrl: string;
  publishedAt: string;
  region: string | null;
}

function detectRegion(title: string, description: string | null): string | null {
  const text = `${title} ${description ?? ""}`.toLowerCase();
  if (/ukrain|kyiv|zelensky|donbas|crimea/.test(text)) return "Ukraine";
  if (/gaza|israel|hamas|hezbollah|lebanon|iran|yemen|houthi|palestin/.test(text)) return "Middle East";
  if (/sudan|khartoum|darfur|rsf|rapid support/.test(text)) return "Sudan";
  if (/myanmar|sahel|ethiopia|tigray|congo|drc/.test(text)) return "Other";
  return null;
}

export async function GET() {
  // Check cache first
  const cached = getCache<{ lastUpdated: string; articles: Article[] }>(CACHE_KEY);
  if (cached) {
    return NextResponse.json(cached);
  }

  try {
    const raw: RawArticle[] = await fetchNews();

    const articles: Article[] = await Promise.all(
      raw.map(async (a, i) => {
        const inputText = `${a.title}. ${a.description ?? ""}`;
        const summary = await summarize(inputText);
        return {
          id: `${i}-${Date.now()}`,
          title: a.title,
          source: a.source.name,
          summary,
          originalUrl: a.url,
          publishedAt: a.publishedAt,
          region: detectRegion(a.title, a.description),
        };
      })
    );

    const payload = { lastUpdated: new Date().toISOString(), articles };
    setCache(CACHE_KEY, payload, CACHE_TTL);
    return NextResponse.json(payload);
  } catch (error) {
    // Return stale cache if available
    const stale = getStaleCache<{ lastUpdated: string; articles: Article[] }>(CACHE_KEY);
    if (stale) {
      return NextResponse.json({ ...stale, stale: true });
    }
    console.error("News API error:", error);
    return NextResponse.json(
      { lastUpdated: new Date().toISOString(), articles: [], error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
