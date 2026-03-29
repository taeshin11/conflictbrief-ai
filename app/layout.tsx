import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#1A1A1A] font-sans">
        {children}
      </body>
    </html>
  );
}
