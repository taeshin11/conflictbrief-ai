"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import NewsCard from "./NewsCard";
import LoadingSkeleton from "./LoadingSkeleton";
import ErrorState from "./ErrorState";
import AdNative from "./AdNative";

interface Article {
  id: string;
  title: string;
  source: string;
  summary: string;
  originalUrl: string;
  publishedAt: string;
  region: string | null;
}

interface NewsResponse {
  lastUpdated: string;
  stale?: boolean;
  articles: Article[];
}

const REGIONS = ["All", "Ukraine", "Middle East", "Sudan", "Other"];
const AUTO_REFRESH_MS = 5 * 60 * 1000; // 5 minutes

export default function NewsList() {
  const [data, setData] = useState<NewsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeRegion, setActiveRegion] = useState("All");
  const [refreshIn, setRefreshIn] = useState(AUTO_REFRESH_MS / 1000);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const fetchNews = useCallback((silent = false) => {
    if (!silent) {
      setLoading(true);
      setError(false);
    }
    fetch("/api/news")
      .then((r) => {
        if (!r.ok) throw new Error("fetch failed");
        return r.json();
      })
      .then((d: NewsResponse) => {
        setData(d);
        setLoading(false);
        setRefreshIn(AUTO_REFRESH_MS / 1000);
      })
      .catch(() => {
        if (!silent) {
          setError(true);
          setLoading(false);
        }
      });
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const refreshTimer = setInterval(() => fetchNews(true), AUTO_REFRESH_MS);
    timerRef.current = setInterval(() => {
      setRefreshIn((prev) => (prev <= 1 ? AUTO_REFRESH_MS / 1000 : prev - 1));
    }, 1000);
    return () => {
      clearInterval(refreshTimer);
      clearInterval(timerRef.current);
    };
  }, [fetchNews]);

  const filtered =
    data?.articles.filter(
      (a) => activeRegion === "All" || a.region === activeRegion
    ) ?? [];

  const articleCount = filtered.length;

  function timeAgoShort(iso: string) {
    const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    return `${Math.floor(mins / 60)}h ago`;
  }

  function formatRefresh(secs: number) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  return (
    <section className="space-y-6">
      {/* Header row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Latest Conflict News</h2>
          {data && (
            <p className="mt-1 text-sm text-[#6B7280]">
              {articleCount} article{articleCount !== 1 ? "s" : ""}
              {activeRegion !== "All" ? ` in ${activeRegion}` : ""}
            </p>
          )}
        </div>
        {data && (
          <div className="flex items-center gap-3 text-sm text-[#6B7280]">
            <span>
              Updated {timeAgoShort(data.lastUpdated)}
              {data.stale && " (cached)"}
            </span>
            <span className="hidden sm:inline" title="Auto-refreshes every 5 minutes">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F0EEEB] px-2 py-0.5 text-xs">
                <svg className="h-3 w-3 animate-spin" style={{ animationDuration: "3s" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {formatRefresh(refreshIn)}
              </span>
            </span>
          </div>
        )}
      </div>

      {/* Region filters */}
      <div className="flex flex-wrap gap-2">
        {REGIONS.map((r) => (
          <button
            key={r}
            onClick={() => setActiveRegion(r)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              activeRegion === r
                ? "bg-[#2563EB] text-white"
                : "bg-[#F0EEEB] text-[#6B7280] hover:bg-[#E5E5E3]"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading && <LoadingSkeleton />}
      {error && <ErrorState onRetry={() => fetchNews()} />}
      {!loading && !error && filtered.length === 0 && (
        <p className="text-center text-[#6B7280] py-12">
          No articles found{activeRegion !== "All" ? ` for "${activeRegion}"` : ""}.
        </p>
      )}
      {!loading && !error && (
        <div className="space-y-6">
          {filtered.map((article, idx) => (
            <div key={article.id}>
              <NewsCard article={article} />
              {(idx + 1) % 5 === 0 && <AdNative />}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
