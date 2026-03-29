import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    siteName: "ConflictBrief AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConflictBrief AI — Daily War News Summary",
    description:
      "AI-powered one-sentence summaries of today's war and conflict news.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://conflictbrief-ai.vercel.app" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ConflictBrief AI",
              url: "https://conflictbrief-ai.vercel.app",
              description:
                "AI-powered one-sentence summaries of today's war and conflict news from Reuters, AP, BBC, and Al Jazeera.",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#1A1A1A] font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:rounded-md focus:bg-[#2563EB] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
