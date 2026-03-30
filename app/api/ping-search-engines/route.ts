import { NextResponse } from "next/server";

const SITE_URL = "https://conflictbrief-ai.vercel.app";

const PING_URLS = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`,
  `https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/news-sitemap.xml`)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`,
];

export async function POST() {
  const results: { url: string; status: number | string }[] = [];

  for (const url of PING_URLS) {
    try {
      const res = await fetch(url, { method: "GET" });
      results.push({ url, status: res.status });
    } catch (err) {
      results.push({ url, status: String(err) });
    }
  }

  // Also trigger IndexNow for Bing/Yandex
  try {
    const indexNowRes = await fetch(`${SITE_URL}/api/indexnow`, {
      method: "POST",
    });
    results.push({ url: "indexnow", status: indexNowRes.status });
  } catch {
    results.push({ url: "indexnow", status: "failed" });
  }

  return NextResponse.json({ pinged: results });
}
