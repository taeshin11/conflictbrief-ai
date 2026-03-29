import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us — ConflictBrief AI | AI War News Summaries",
  description:
    "Learn about ConflictBrief AI, a free tool delivering AI-powered one-sentence summaries of global war and conflict news from Reuters, AP, BBC, and Al Jazeera.",
  keywords:
    "conflict news, war news summary, AI news aggregator, conflict briefing, war updates, military news, geopolitical news",
  openGraph: {
    title: "About ConflictBrief AI — AI-Powered Conflict News Summaries",
    description:
      "Free AI tool summarizing global war and conflict news in one sentence. Updated every 30 minutes from top wire services.",
    url: "https://conflictbrief-ai.vercel.app/about",
    siteName: "ConflictBrief AI",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl">
            About ConflictBrief AI
          </h1>

          <section className="mt-8 space-y-6 text-[#1A1A1A] leading-relaxed">
            <h2 className="text-2xl font-semibold tracking-tight">What Is ConflictBrief AI?</h2>
            <p>
              ConflictBrief AI is a free, intelligent news aggregation platform that delivers
              concise, AI-generated summaries of the world&apos;s most pressing war and conflict
              stories. In a media landscape saturated with lengthy articles, opinion pieces, and
              sensationalist headlines, ConflictBrief AI cuts through the noise to give you the
              essential facts in a single sentence per story.
            </p>
            <p>
              Our platform pulls real-time articles from the most trusted wire services in the world
              — Reuters, Associated Press, BBC News, and Al Jazeera English — and uses advanced
              natural language processing to distill each article into a clear, factual one-sentence
              summary. The result is a clean, scannable dashboard that lets you understand the
              current state of global conflicts in under two minutes.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">The Problem We Solve</h2>
            <p>
              Keeping up with global conflicts is exhausting. War and military news is published
              around the clock across dozens of outlets, often with overlapping coverage, conflicting
              narratives, and buried key facts. Professionals in defense, diplomacy, journalism,
              humanitarian aid, and academic research need a way to quickly scan the day&apos;s most
              important developments without reading 20 full-length articles.
            </p>
            <p>
              ConflictBrief AI solves this by automating the process of reading, filtering, and
              summarizing conflict news. Instead of spending 30–60 minutes scanning multiple news
              sites, you get every major development on a single page, updated every 30 minutes,
              summarized in one sentence each.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">Who Is This For?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Journalists and editors</strong> who need a rapid morning briefing on
                global conflict developments before starting their reporting day.
              </li>
              <li>
                <strong>Policy analysts and diplomats</strong> who track multiple conflict zones
                simultaneously and need a high-level overview before diving into detailed reports.
              </li>
              <li>
                <strong>Humanitarian workers and NGO staff</strong> operating in or near conflict
                zones who need situational awareness without media overwhelm.
              </li>
              <li>
                <strong>Researchers and academics</strong> studying geopolitics, international
                relations, or conflict resolution who want a daily digest of events.
              </li>
              <li>
                <strong>Informed citizens</strong> who care about world events and want to stay
                updated without doom-scrolling through traditional news apps.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight">How It Works — The Technology</h2>
            <p>
              ConflictBrief AI operates on a fully automated pipeline built with modern web
              technologies:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>News Ingestion:</strong> We query the NewsAPI service using carefully
                curated keywords — war, conflict, military, invasion, airstrike, ceasefire, troops
                — filtered to only include articles from Reuters, Associated Press, BBC News, and
                Al Jazeera English. This ensures every article comes from an editorially rigorous,
                internationally recognized news source.
              </li>
              <li>
                <strong>AI Summarization:</strong> Each article&apos;s title and description are
                processed through a state-of-the-art summarization model (Facebook&apos;s
                BART-Large-CNN via Hugging Face Inference API). The model generates a single,
                factual sentence of no more than 150 characters that captures the article&apos;s
                core information. If the primary model is unavailable, the system automatically
                falls back to Groq&apos;s LLaMA model for uninterrupted service.
              </li>
              <li>
                <strong>Region Detection:</strong> Our system automatically tags each article with
                its relevant conflict region — Ukraine, Middle East, Sudan, or Other — using
                keyword-based pattern matching on article content. This powers the region filter
                tabs on the dashboard.
              </li>
              <li>
                <strong>Caching:</strong> Results are cached for 30 minutes to optimize API usage
                and ensure fast page loads. If the news source is temporarily unavailable, the
                system serves the most recent cached data with a &quot;stale&quot; indicator.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold tracking-tight">Our Principles</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Source transparency:</strong> Every summary links directly to the original
                article from the wire service. We never replace the source — we complement it.
              </li>
              <li>
                <strong>No editorial bias:</strong> Our AI summarizes; it does not editorialize.
                Summaries are generated algorithmically from the source text with no human
                editorial intervention.
              </li>
              <li>
                <strong>Free forever:</strong> ConflictBrief AI is and will remain a free tool.
                The service is sustained through non-intrusive advertising partnerships.
              </li>
              <li>
                <strong>Privacy first:</strong> We do not track individual users, store personal
                browsing data, or use invasive analytics. Our visitor counter is fully anonymous.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight">Contact Us</h2>
            <p>
              We value your feedback. If you have suggestions for improving ConflictBrief AI,
              want to report an issue, or have questions about the platform, please reach out to
              us at{" "}
              <a
                href="mailto:taeshinkim11@gmail.com"
                className="text-[#2563EB] hover:text-[#1D4ED8] font-medium"
              >
                taeshinkim11@gmail.com
              </a>
              . We read every message and strive to respond within 48 hours.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
