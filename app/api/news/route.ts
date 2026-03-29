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

function getDemoArticles(): Article[] {
  const now = new Date();
  return [
    { id: "demo-1", title: "Ukraine launches new counteroffensive operations in eastern Donetsk region", source: "Reuters", summary: "Ukrainian forces advanced along multiple axes in Donetsk, recapturing several villages amid intensified fighting.", originalUrl: "https://www.reuters.com", publishedAt: new Date(now.getTime() - 25 * 60000).toISOString(), region: "Ukraine" },
    { id: "demo-2", title: "UN Security Council holds emergency session on Gaza humanitarian crisis", source: "BBC News", summary: "The UN Security Council convened to discuss deteriorating humanitarian conditions in Gaza as aid access remains restricted.", originalUrl: "https://www.bbc.com/news", publishedAt: new Date(now.getTime() - 55 * 60000).toISOString(), region: "Middle East" },
    { id: "demo-3", title: "Sudan's RSF and army clash in renewed fighting near Khartoum", source: "Al Jazeera", summary: "Heavy fighting erupted between Sudan's military and the Rapid Support Forces in suburbs south of the capital.", originalUrl: "https://www.aljazeera.com", publishedAt: new Date(now.getTime() - 90 * 60000).toISOString(), region: "Sudan" },
    { id: "demo-4", title: "NATO allies agree to increase ammunition production amid security concerns", source: "Associated Press", summary: "NATO members pledged to ramp up ammunition manufacturing capacity to address growing European security challenges.", originalUrl: "https://apnews.com", publishedAt: new Date(now.getTime() - 120 * 60000).toISOString(), region: null },
    { id: "demo-5", title: "Ceasefire negotiations resume in Middle East peace talks", source: "Reuters", summary: "Mediators resumed indirect negotiations aimed at securing a ceasefire and hostage release deal in the region.", originalUrl: "https://www.reuters.com", publishedAt: new Date(now.getTime() - 150 * 60000).toISOString(), region: "Middle East" },
    { id: "demo-6", title: "Russia intensifies drone attacks targeting Ukrainian energy infrastructure", source: "BBC News", summary: "Russia launched a large-scale drone and missile attack on Ukrainian power facilities across multiple regions overnight.", originalUrl: "https://www.bbc.com/news", publishedAt: new Date(now.getTime() - 180 * 60000).toISOString(), region: "Ukraine" },
    { id: "demo-7", title: "Humanitarian corridor opened for civilians trapped in Darfur conflict zone", source: "Al Jazeera", summary: "Aid agencies established a temporary humanitarian corridor to evacuate civilians from besieged areas in western Darfur.", originalUrl: "https://www.aljazeera.com", publishedAt: new Date(now.getTime() - 210 * 60000).toISOString(), region: "Sudan" },
    { id: "demo-8", title: "Yemen's Houthi forces launch new maritime attacks in Red Sea shipping lanes", source: "Reuters", summary: "Houthi militants targeted commercial shipping vessels in the Red Sea, disrupting major international trade routes.", originalUrl: "https://www.reuters.com", publishedAt: new Date(now.getTime() - 240 * 60000).toISOString(), region: "Middle East" },
    { id: "demo-9", title: "Myanmar resistance forces claim territorial gains in northern Shan State", source: "Associated Press", summary: "Ethnic armed groups in Myanmar reported capturing several military outposts in ongoing offensives across Shan State.", originalUrl: "https://apnews.com", publishedAt: new Date(now.getTime() - 300 * 60000).toISOString(), region: "Other" },
    { id: "demo-10", title: "International arms treaty talks stall as major powers disagree on scope", source: "BBC News", summary: "Negotiations on a new international arms control framework collapsed over disagreements between major military powers.", originalUrl: "https://www.bbc.com/news", publishedAt: new Date(now.getTime() - 360 * 60000).toISOString(), region: null },
  ];
}

export async function GET() {
  // Check cache first
  const cached = getCache<{ lastUpdated: string; articles: Article[] }>(CACHE_KEY);
  if (cached) {
    return NextResponse.json(cached);
  }

  // If no NewsAPI key, serve demo data
  if (!process.env.NEWSAPI_KEY) {
    return NextResponse.json({
      lastUpdated: new Date().toISOString(),
      articles: getDemoArticles(),
      demo: true,
    });
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
