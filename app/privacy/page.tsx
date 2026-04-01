import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — ConflictBrief AI",
  description:
    "Read the ConflictBrief AI privacy policy. Learn how we handle your data, cookies, and third-party services on our free conflict news platform.",
  keywords:
    "privacy policy, data protection, cookie policy, conflict brief privacy, news aggregator privacy",
  openGraph: {
    title: "Privacy Policy — ConflictBrief AI",
    description:
      "Our privacy policy explains how ConflictBrief AI handles user data, cookies, and third-party integrations.",
    url: "https://conflictbrief-ai.vercel.app/privacy",
    siteName: "ConflictBrief AI",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[#6B7280]">Last updated: March 29, 2025</p>

          <section className="mt-8 space-y-6 text-[#1A1A1A] leading-relaxed">
            <p>
              At ConflictBrief AI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are
              committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, and safeguard information when you visit our website at
              conflictbrief-ai.vercel.app (the &quot;Service&quot;). By using the Service, you
              agree to the practices described in this policy.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">1. Information We Collect</h2>
            <h3 className="text-lg font-semibold">1.1 Information You Provide Voluntarily</h3>
            <p>
              If you choose to subscribe to our daily newsletter, we collect your email address.
              This information is stored securely via Google Sheets and is used solely to send you
              conflict news summaries. We do not sell, rent, or share your email address with any
              third party.
            </p>
            <h3 className="text-lg font-semibold">1.2 Automatically Collected Information</h3>
            <p>
              When you visit ConflictBrief AI, we may automatically collect certain non-personal
              information, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URL</li>
              <li>Pages visited and time spent on each page</li>
              <li>Approximate geographic location (country/region level only)</li>
            </ul>
            <p>
              This data is collected in aggregate and cannot be used to identify individual users.
              We use this information to understand traffic patterns and improve the Service.
            </p>
            <h3 className="text-lg font-semibold">1.3 Visitor Counter</h3>
            <p>
              Our anonymous visitor counter tracks daily and total visit counts. It does not store
              IP addresses, set tracking cookies, or collect any personally identifiable
              information. The counter is purely statistical.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">2. Cookies and Tracking Technologies</h2>
            <h3 className="text-lg font-semibold">2.1 Essential Cookies</h3>
            <p>
              ConflictBrief AI itself does not set any cookies for its core functionality. The
              Service works without requiring cookies from users.
            </p>
            <h3 className="text-lg font-semibold">2.2 Third-Party Cookies</h3>
            <p>
              Our advertising and analytics partners may set cookies on your device to serve
              relevant ads and measure performance:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google AdSense:</strong> Google may use cookies to serve ads based on your
                prior visits to this and other websites. You can opt out of personalized
                advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  Google Ads Settings
                </a>
                .
              </li>
              <li>
                <strong>Google Analytics:</strong> We may use Google Analytics to understand how
                visitors interact with the Service. Google Analytics uses cookies to collect
                anonymous usage data. You can opt out by installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                .
              </li>
              <li>
                <strong>Adsterra:</strong> Adsterra may use cookies and similar technologies to
                deliver advertisements. You can learn more about their practices in the{" "}
                <a
                  href="https://www.adsterra.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563EB] hover:text-[#1D4ED8]"
                >
                  Adsterra Privacy Policy
                </a>
                .
              </li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight">3. How We Use Your Information</h2>
            <p>We use collected information exclusively to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Deliver and maintain the Service</li>
              <li>Send newsletter emails to subscribers who opted in</li>
              <li>Analyze aggregate usage patterns to improve the user experience</li>
              <li>Display relevant advertisements to sustain the free Service</li>
              <li>Prevent abuse and ensure system security (rate limiting)</li>
            </ul>

            <h2 className="text-2xl font-semibold tracking-tight">4. Third-Party Services</h2>
            <p>ConflictBrief AI integrates with the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>NewsAPI.org</strong> — for sourcing news articles</li>
              <li><strong>Hugging Face</strong> — for AI-powered text summarization</li>
              <li><strong>Groq</strong> — as a fallback summarization provider</li>
              <li><strong>Google Sheets</strong> — for securely storing newsletter subscriptions</li>
              <li><strong>Vercel</strong> — for hosting and content delivery</li>
              <li><strong>Google AdSense / Adsterra</strong> — for advertising</li>
            </ul>
            <p>
              Each of these services has its own privacy policy governing how they handle data. We
              encourage you to review their respective policies.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">5. Data Retention</h2>
            <p>
              Newsletter subscription emails are retained until you request removal. Aggregate
              analytics data is retained indefinitely in anonymized form. We do not retain any
              personally identifiable browsing data.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Access:</strong> Request a copy of any personal data we hold about you.</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate personal data.</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data (e.g., unsubscribe from the newsletter).</li>
              <li><strong>Objection:</strong> Object to the processing of your personal data for specific purposes.</li>
              <li><strong>Portability:</strong> Request your data in a structured, commonly used format.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:taeshinkim11@gmail.com" className="text-[#2563EB] hover:text-[#1D4ED8]">
                taeshinkim11@gmail.com
              </a>
              . We will respond to your request within 30 days.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">7. Children&apos;s Privacy</h2>
            <p>
              ConflictBrief AI is not directed at children under the age of 13. We do not
              knowingly collect personal information from children. If you believe a child has
              provided us with personal data, please contact us and we will promptly delete it.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated &quot;Last updated&quot; date. Your continued use of the
              Service after any changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please
              contact us at{" "}
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
