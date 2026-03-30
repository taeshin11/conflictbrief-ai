"use client";

import ShareButtons from "./ShareButtons";
import { useI18n } from "@/lib/i18n";

interface Article {
  id: string;
  title: string;
  source: string;
  summary: string;
  originalUrl: string;
  publishedAt: string;
  region: string | null;
}

export default function NewsCard({ article }: { article: Article }) {
  const { t } = useI18n();

  function timeAgo(dateStr: string): string {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return t("minutesAgo", { n: mins });
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return t("hoursAgo", { n: hrs });
    return t("daysAgo", { n: Math.floor(hrs / 24) });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    url: article.originalUrl,
    datePublished: article.publishedAt,
    publisher: { "@type": "Organization", name: article.source },
  };

  return (
    <article className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md border border-[#E5E5E3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-base font-medium leading-relaxed text-[#1A1A1A]">
            {article.summary}
          </p>
          <p className="mt-1 text-sm text-[#1A1A1A] opacity-70 line-clamp-1">
            {article.title}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#6B7280]">
            <span className="font-medium">{article.source}</span>
            <span>·</span>
            <time dateTime={article.publishedAt}>{timeAgo(article.publishedAt)}</time>
            {article.region && (
              <>
                <span>·</span>
                <span className="rounded-full bg-[#F0EEEB] px-2 py-0.5 text-xs font-medium">
                  {article.region}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <a
          href={article.originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
        >
          {t("readFullArticle")} &rarr;
        </a>
        <ShareButtons url={article.originalUrl} title={article.title} summary={article.summary} />
      </div>
    </article>
  );
}
