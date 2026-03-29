import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — ConflictBrief AI",
  description:
    "Read the Terms of Service for ConflictBrief AI. Understand the rules, disclaimers, and limitations for using our free conflict news summary platform.",
  keywords:
    "terms of service, terms and conditions, conflict brief terms, news aggregator terms, user agreement",
  openGraph: {
    title: "Terms of Service — ConflictBrief AI",
    description:
      "Terms and conditions for using ConflictBrief AI, a free AI-powered conflict news summary tool.",
    url: "https://conflictbrief-ai.vercel.app/terms",
    siteName: "ConflictBrief AI",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-[#6B7280]">Last updated: March 29, 2026</p>

          <section className="mt-8 space-y-6 text-[#1A1A1A] leading-relaxed">
            <p>
              Welcome to ConflictBrief AI. These Terms of Service (&quot;Terms&quot;) govern your
              use of the ConflictBrief AI website located at conflictbrief-ai.vercel.app (the
              &quot;Service&quot;). By accessing or using the Service, you agree to be bound by
              these Terms. If you do not agree, please do not use the Service.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">1. Description of Service</h2>
            <p>
              ConflictBrief AI is a free, publicly accessible web application that aggregates war
              and conflict news articles from established wire services (Reuters, Associated Press,
              BBC News, and Al Jazeera English) and generates AI-powered one-sentence summaries of
              each article. The Service is provided &quot;as is&quot; and &quot;as available&quot;
              without any warranties of any kind.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">2. Acceptable Use</h2>
            <p>You agree to use the Service only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the Service to distribute malware, spam, or any harmful content.
              </li>
              <li>
                Attempt to disrupt, overload, or interfere with the Service&apos;s infrastructure,
                including through denial-of-service attacks, automated scraping beyond reasonable
                use, or exploitation of security vulnerabilities.
              </li>
              <li>
                Reproduce, redistribute, or republish AI-generated summaries in bulk for
                commercial purposes without prior written consent.
              </li>
              <li>
                Misrepresent the AI-generated summaries as original journalism or as the official
                position of any news organization.
              </li>
              <li>
                Use the Service in any manner that violates applicable local, national, or
                international laws or regulations.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight">3. Intellectual Property</h2>
            <p>
              The ConflictBrief AI website design, code, branding, and AI summarization pipeline
              are the intellectual property of the ConflictBrief AI team. The original news
              articles linked from the Service are the intellectual property of their respective
              publishers (Reuters, AP, BBC, Al Jazeera). AI-generated summaries are derivative
              works created for informational purposes under fair use principles.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">4. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.
              WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE SERVICE, INCLUDING BUT NOT
              LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Accuracy:</strong> AI-generated summaries may not perfectly reflect the
                content of the original articles. Summarization involves information compression,
                and some nuance or context may be lost.
              </li>
              <li>
                <strong>Completeness:</strong> The Service does not claim to cover every conflict
                or military event worldwide. Coverage depends on the availability of articles from
                our source wire services.
              </li>
              <li>
                <strong>Availability:</strong> We do not guarantee uninterrupted access to the
                Service. The platform may experience downtime due to maintenance, third-party API
                outages, or other factors beyond our control.
              </li>
              <li>
                <strong>Timeliness:</strong> While we refresh news every 30 minutes, delays may
                occur due to caching, API rate limits, or processing time.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight">5. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, CONFLICTBRIEF AI AND ITS OPERATORS SHALL
              NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THE SERVICE. THIS INCLUDES,
              WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, DATA, GOODWILL, OR OTHER
              INTANGIBLE LOSSES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              You acknowledge that the Service provides news summaries for informational purposes
              only. The summaries should not be relied upon as the sole basis for making decisions
              related to personal safety, investment, military operations, or any other
              consequential actions. Always verify critical information with the original source.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">6. Third-Party Content and Links</h2>
            <p>
              The Service contains links to third-party websites (news publishers). We do not
              control, endorse, or assume responsibility for the content, privacy policies, or
              practices of any third-party websites. Accessing third-party links is at your own
              risk.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">7. Newsletter Subscription</h2>
            <p>
              By subscribing to our newsletter, you consent to receiving periodic emails
              containing conflict news summaries. You may unsubscribe at any time by contacting
              us at{" "}
              <a href="mailto:taeshinkim11@gmail.com" className="text-[#2563EB] hover:text-[#1D4ED8]">
                taeshinkim11@gmail.com
              </a>
              . We will process unsubscription requests within 48 hours.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">8. Advertising</h2>
            <p>
              The Service is supported by third-party advertising networks, including Google
              AdSense and Adsterra. Advertisements displayed on the Service are served by these
              third-party networks and are not endorsed by ConflictBrief AI. We are not
              responsible for the content or accuracy of any advertisements.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">9. Modifications to the Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the Service (or any part
              thereof) at any time without prior notice. We shall not be liable to you or any
              third party for any modification, suspension, or discontinuation of the Service.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">10. Changes to These Terms</h2>
            <p>
              We may revise these Terms at any time by posting the updated version on this page.
              Your continued use of the Service after any changes constitutes your acceptance of
              the revised Terms. We encourage you to review this page periodically.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              jurisdiction in which the Service operator resides, without regard to conflict of
              law principles.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">12. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
              <a href="mailto:taeshinkim11@gmail.com" className="text-[#2563EB] hover:text-[#1D4ED8]">
                taeshinkim11@gmail.com
              </a>
              .
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
