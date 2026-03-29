"use client";

import { useCallback, useEffect, useState } from "react";
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

export default function NewsList() {
  const [data, setData] = useState<NewsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeRegion, setActiveRegion] = useState("All");

  const fetchNews = useCallback(() => {
    setLoading(true);
    setError(false);
    fetch("/api/news")
      .then((r) => {
        if (!r.ok) throw new Error("fetch failed");
        return r.json();
      })
      .then((d: NewsResponse) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const filtered =
    data?.articles.filter(
      (a) => activeRegion === "All" || a.region === activeRegion
    ) ?? [];

  function timeAgoShort(iso: string) {
    const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    return `${Math.floor(mins / 60)}h ago`;
  }

  return (
    <section className="space-y-6">
      {/* Header row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Latest Conflict News</h2>
        {data && (
          <span className="text-sm text-[#6B7280]">
            Updated {timeAgoShort(data.lastUpdated)}
            {data.stale && " (cached)"}
          </span>
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
      {error && <ErrorState onRetry={fetchNews} />}
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
