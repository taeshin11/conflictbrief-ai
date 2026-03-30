import { NextResponse } from "next/server";

export async function GET(request: Request) {
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
    // Return empty sitemap on error
  }

  const SITE_URL = "https://conflictbrief-ai.vercel.app";
  const now = new Date().toISOString();

  const urlEntries = articles
    .map(
      (a) => `  <url>
    <loc>${escapeXml(a.originalUrl)}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeXml(a.source)} via ConflictBrief AI</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(a.publishedAt).toISOString()}</news:publication_date>
      <news:title>${escapeXml(a.title)}</news:title>
      <news:keywords>war, conflict, ${a.region ? escapeXml(a.region) + ", " : ""}military, geopolitics</news:keywords>
    </news:news>
    <lastmod>${new Date(a.publishedAt).toISOString()}</lastmod>
    <changefreq>hourly</changefreq>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>hourly</changefreq>
    <priority>1.0</priority>
  </url>
${urlEntries}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
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
