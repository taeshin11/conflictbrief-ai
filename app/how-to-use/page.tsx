import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Use & FAQ — ConflictBrief AI",
  description:
    "Learn how to use ConflictBrief AI to get instant AI-powered war news summaries. Step-by-step guide and frequently asked questions.",
  keywords:
    "how to use conflict brief, war news tool guide, AI news summary FAQ, conflict tracker help, news aggregator tutorial",
  openGraph: {
    title: "How to Use ConflictBrief AI — Guide & FAQ",
    description:
      "Step-by-step guide to using ConflictBrief AI for instant conflict news summaries, plus answers to common questions.",
    url: "https://conflictbrief-ai.vercel.app/how-to-use",
    siteName: "ConflictBrief AI",
    type: "website",
  },
};

export default function HowToUsePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl">
            How to Use ConflictBrief AI
          </h1>

          <section className="mt-8 space-y-6 text-[#1A1A1A] leading-relaxed">
            <p>
              ConflictBrief AI is designed to be effortless. There is no signup, no login, and no
              configuration required. Here is how to get the most out of the platform in three
              simple steps.
            </p>

            <div className="rounded-xl bg-white p-8 shadow-sm border border-[#E5E5E3] space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-[#2563EB]">Step 1: Open the Dashboard</h2>
                <p className="mt-2">
                  Visit{" "}
                  <a href="/" className="text-[#2563EB] hover:text-[#1D4ED8] font-medium">
                    the ConflictBrief AI homepage
                  </a>{" "}
                  to see the latest conflict news summaries. The dashboard loads automatically with
                  the most recent articles from Reuters, AP, BBC News, and Al Jazeera, sorted by
                  publication time (newest first). Each news card shows a one-sentence AI summary,
                  the original article title, the source name, and how long ago it was published.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#2563EB]">Step 2: Filter by Region</h2>
                <p className="mt-2">
                  Use the region filter tabs at the top of the news feed to focus on a specific
                  conflict zone. Available filters include <strong>Ukraine</strong>,{" "}
                  <strong>Middle East</strong> (covering Gaza, Israel, Yemen, Lebanon, Iran),{" "}
                  <strong>Sudan</strong> (covering Khartoum, Darfur, RSF), and{" "}
                  <strong>Other</strong> (covering Myanmar, Sahel, Ethiopia, Congo, and other
                  regions). Click <strong>All</strong> to see every article regardless of region.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#2563EB]">Step 3: Read the Full Article</h2>
                <p className="mt-2">
                  When a summary catches your attention, click the{" "}
                  <strong>&quot;Read Full Article →&quot;</strong> link on any card to open the
                  original article from the wire service in a new tab. ConflictBrief AI always
                  links to the primary source so you can verify facts, read full context, and
                  explore related coverage directly from the publisher.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-[#F0EEEB] p-6">
              <p className="text-sm text-[#6B7280]">
                <strong>Bonus:</strong> Subscribe to the daily brief by entering your email in the
                subscription form at the bottom of the homepage. You will receive a curated morning
                digest of the most important conflict developments delivered directly to your inbox.
              </p>
            </div>
          </section>

          <section className="mt-16 space-y-6 text-[#1A1A1A] leading-relaxed">
            <h2 className="text-2xl font-semibold tracking-tight">Frequently Asked Questions</h2>

            <div className="space-y-8">
              <div className="rounded-xl bg-white p-6 shadow-sm border border-[#E5E5E3]">
                <h3 className="text-lg font-semibold">
                  1. How often is the news updated?
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  ConflictBrief AI refreshes its news feed every 30 minutes. Each time you visit
                  the dashboard, you see the most recent batch of articles from our source wire
                  services. The &quot;Updated X minutes ago&quot; indicator at the top of the feed
                  shows exactly when the last refresh occurred. If the news API is temporarily
                  unavailable, the system serves the most recent cached version with a
                  &quot;(cached)&quot; label so you always have access to recent information.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-[#E5E5E3]">
                <h3 className="text-lg font-semibold">
                  2. Which news sources does ConflictBrief AI use?
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  We exclusively aggregate articles from four of the world&apos;s most trusted wire
                  services: <strong>Reuters</strong>, <strong>Associated Press (AP)</strong>,{" "}
                  <strong>BBC News</strong>, and <strong>Al Jazeera English</strong>. These sources
                  are chosen for their editorial independence, global reach, rigorous fact-checking
                  standards, and comprehensive conflict coverage. We do not include opinion
                  columns, blog posts, or unverified social media content.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-[#E5E5E3]">
                <h3 className="text-lg font-semibold">
                  3. How does the AI summarization work?
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Each article&apos;s title and description are processed through Facebook&apos;s
                  BART-Large-CNN model, a transformer-based neural network specifically trained for
                  news summarization. The model extracts the most salient information and generates
                  a single sentence of no more than 150 characters. The AI does not add
                  interpretation or opinion — it condenses the original reporting into its most
                  essential facts. If the primary model is unavailable, we automatically fall back
                  to Meta&apos;s LLaMA 3.1 model via Groq for uninterrupted service.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-[#E5E5E3]">
                <h3 className="text-lg font-semibold">
                  4. Is ConflictBrief AI free to use?
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Yes, ConflictBrief AI is completely free. There is no subscription fee, no
                  premium tier, and no login required. The service is sustained through
                  non-intrusive advertising partnerships. We are committed to keeping conflict
                  news accessible to everyone, regardless of their ability to pay for news
                  subscriptions.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-[#E5E5E3]">
                <h3 className="text-lg font-semibold">
                  5. Can I trust the accuracy of the AI summaries?
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  Our AI summaries are generated directly from the source article text and are
                  designed to be factually faithful to the original reporting. However, AI
                  summarization is not perfect — there is always a small risk of information loss
                  or subtle misrepresentation when condensing a full article into one sentence.
                  This is why every summary card includes a direct link to the original article.
                  We strongly encourage users to click through to the source whenever a story is
                  particularly important to their work or decision-making.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-[#E5E5E3]">
                <h3 className="text-lg font-semibold">
                  6. What conflict regions are covered?
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  ConflictBrief AI covers all major active conflict zones worldwide. Our region
                  detection system automatically categorizes articles into Ukraine (including
                  Donbas, Crimea, and Kyiv developments), Middle East (including Gaza, Israel,
                  Yemen, Lebanon, Iran, and Houthi activity), Sudan (including Khartoum, Darfur,
                  and RSF operations), and Other (including Myanmar, Sahel, Ethiopia, Tigray,
                  Congo, and DRC). Articles covering global military or diplomatic topics that
                  don&apos;t fit a specific region appear under the &quot;All&quot; filter.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm border border-[#E5E5E3]">
                <h3 className="text-lg font-semibold">
                  7. How can I provide feedback or suggest improvements?
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  We welcome all feedback. You can reach us directly at{" "}
                  <a
                    href="mailto:taeshinkim11@gmail.com"
                    className="text-[#2563EB] hover:text-[#1D4ED8]"
                  >
                    taeshinkim11@gmail.com
                  </a>
                  . Whether you have a feature request, found a bug, want to suggest a new
                  conflict region to track, or have general feedback about the user experience, we
                  read every message and typically respond within 48 hours.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
