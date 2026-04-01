import { NextResponse } from "next/server";

const SITE_URL = "https://conflictbrief-ai.vercel.app";
const KEY = "conflictbriefai2025";

// GET serves the key file for verification
export async function GET() {
  return new NextResponse(KEY, {
    headers: { "Content-Type": "text/plain" },
  });
}

// POST triggers IndexNow submission for all pages
export async function POST() {
  const urls = [
    SITE_URL,
    `${SITE_URL}/about`,
    `${SITE_URL}/how-to-use`,
    `${SITE_URL}/privacy`,
    `${SITE_URL}/terms`,
    `${SITE_URL}/feed.xml`,
  ];

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "conflictbrief-ai.vercel.app",
        key: KEY,
        keyLocation: `${SITE_URL}/api/indexnow`,
        urlList: urls,
      }),
    });

    return NextResponse.json({
      success: res.ok,
      status: res.status,
      submitted: urls.length,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
