import { NextResponse } from "next/server";

const SITE_URL = "https://conflictbrief-ai.vercel.app";

export async function GET(request: Request) {
  // Fetch news from our own API
  const origin = new URL(request.url).origin;
  let articles: Array<{
    title: string;
    summary: string;
    originalUrl: string;
    publishedAt: string;
    source: string;
    region: string | null;
  }> = [];

  try {
    const res = await fetch(`${origin}/api/news`, { next: { revalidate: 1800 } });
    const data = await res.json();
    articles = data.articles ?? [];
  } catch {
    // Return empty feed on error
  }

  const itemsXml = articles
    .map(
      (a) => `    <item>
      <title><![CDATA[${a.title}]]></title>
      <description><![CDATA[${a.summary}]]></description>
      <link>${escapeXml(a.originalUrl)}</link>
      <guid isPermaLink="false">${escapeXml(a.originalUrl)}-${a.publishedAt}</guid>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      <source url="${SITE_URL}">${a.source} via ConflictBrief AI</source>
      ${a.region ? `<category>${a.region}</category>` : ""}
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>ConflictBrief AI — Daily War News Summary</title>
    <link>${SITE_URL}</link>
    <description>AI-powered one-sentence summaries of today's war and conflict news from Reuters, AP, BBC, and Al Jazeera. Updated every 30 minutes.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/icon-192.png</url>
      <title>ConflictBrief AI</title>
      <link>${SITE_URL}</link>
    </image>
    <ttl>30</ttl>
    <category>News</category>
    <category>War</category>
    <category>Conflict</category>
    <category>Geopolitics</category>
${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
