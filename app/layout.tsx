import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FeedbackWidget from "@/components/FeedbackWidget";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "greek", "vietnamese"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://conflictbrief-ai.vercel.app"),
  title: "ConflictBrief AI — Daily War News Summary & Conflict Updates",
  description:
    "Get AI-powered one-sentence summaries of today's war and conflict news from Reuters, AP, BBC, and Al Jazeera. Updated every 30 minutes.",
  openGraph: {
    title: "ConflictBrief AI — Daily War News Summary & Conflict Updates",
    description:
      "AI-powered one-sentence summaries of today's war and conflict news. Updated every 30 minutes.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR", "ja_JP", "zh_CN", "es_ES", "fr_FR", "ar_SA", "de_DE", "pt_BR", "ru_RU", "hi_IN", "tr_TR", "uk_UA", "vi_VN", "th_TH"],
    siteName: "ConflictBrief AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConflictBrief AI — Daily War News Summary",
    description:
      "AI-powered one-sentence summaries of today's war and conflict news.",
    creator: "@ConflictBrief",
  },
  keywords:
    "war news, conflict news, military news, AI news summary, war updates, conflict tracker, geopolitical news, Ukraine war, Middle East conflict, Sudan crisis, breaking war news, daily conflict briefing, real-time war updates, news aggregator, conflict monitor, 전쟁 뉴스, 분쟁 뉴스, 戦争ニュース, 战争新闻, noticias de guerra, nouvelles de guerre, أخبار الحرب, Kriegsnachrichten",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://conflictbrief-ai.vercel.app",
    types: {
      "application/rss+xml": "https://conflictbrief-ai.vercel.app/feed.xml",
    },
  },
  category: "News & Media Tool",
  manifest: "/manifest.json",
  verification: {
    google: "WddgcbVJsL2BGHNAje5m6DK56IcR0Mw5UOqozI2Xtrc",
  },
  other: {
    "google-news-tags": "war, conflict, military, geopolitics",
    "news_keywords": "war, conflict, military, Ukraine, Middle East, Sudan, ceasefire, troops",
    "article:section": "World News",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="dns-prefetch" href="https://newsapi.org" />
        <link rel="dns-prefetch" href="https://api-inference.huggingface.co" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="alternate" type="application/rss+xml" title="ConflictBrief AI RSS Feed" href="/feed.xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="search" type="application/opensearchdescription+xml" title="ConflictBrief AI" href="/opensearch.xml" />
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="en" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="ko" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="ja" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="zh" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="es" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="fr" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="ar" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="de" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="pt" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="ru" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="hi" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="tr" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="uk" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="vi" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="th" href="https://conflictbrief-ai.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://conflictbrief-ai.vercel.app" />
        <meta name="theme-color" content="#2563EB" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ConflictBrief" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        {/* Naver Webmaster verification */}
        <meta name="naver-site-verification" content="" />
        {/* Yandex Webmaster */}
        <meta name="yandex-verification" content="" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7098271335538021"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "ConflictBrief AI",
                url: "https://conflictbrief-ai.vercel.app",
                description:
                  "AI-powered one-sentence summaries of today's war and conflict news from Reuters, AP, BBC, and Al Jazeera.",
                inLanguage: ["en", "ko", "ja", "zh", "es", "fr", "ar", "de", "pt", "ru", "hi", "tr", "uk", "vi", "th"],
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://conflictbrief-ai.vercel.app/?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "ConflictBrief AI",
                url: "https://conflictbrief-ai.vercel.app",
                logo: "https://conflictbrief-ai.vercel.app/icon-512.png",
                description: "Free AI-powered war and conflict news aggregator.",
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "taeshinkim11@gmail.com",
                  contactType: "customer support",
                  availableLanguage: ["English", "Korean", "Japanese", "Chinese", "Spanish", "French", "Arabic", "German", "Portuguese", "Russian"],
                },
                sameAs: [],
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://conflictbrief-ai.vercel.app",
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#1A1A1A] font-sans">
        <I18nProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:rounded-md focus:bg-[#2563EB] focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          {children}
          <FeedbackWidget />
        </I18nProvider>
      </body>
    </html>
  );
}
