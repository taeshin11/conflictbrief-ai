"use client";

import Link from "next/link";
import VisitorBadge from "./VisitorBadge";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-auto border-t border-[#E5E5E3] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#6B7280]">
            <Link href="/about" className="transition-colors hover:text-[#1A1A1A]">{t("aboutUs")}</Link>
            <Link href="/how-to-use" className="transition-colors hover:text-[#1A1A1A]">{t("howToUseFaq")}</Link>
            <Link href="/privacy" className="transition-colors hover:text-[#1A1A1A]">{t("privacyPolicy")}</Link>
            <Link href="/terms" className="transition-colors hover:text-[#1A1A1A]">{t("termsOfService")}</Link>
            <a href="/feed.xml" className="transition-colors hover:text-[#1A1A1A]" title="RSS Feed">
              <span className="inline-flex items-center gap-1">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
                </svg>
                {t("rss")}
              </span>
            </a>
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-2 sm:items-end">
            <a
              href="mailto:taeshinkim11@gmail.com?subject=ConflictBrief%20AI%20—%20Improvement%20Suggestion"
              className="text-sm text-[#6B7280] transition-colors hover:text-[#2563EB]"
            >
              {t("suggestImprovement")}
            </a>
            <a
              href="mailto:taeshinkim11@gmail.com"
              className="text-xs text-[#6B7280] transition-colors hover:text-[#2563EB]"
            >
              taeshinkim11@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-[#E5E5E3] pt-6 sm:flex-row">
          <p className="text-sm text-[#6B7280]">
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
          <VisitorBadge />
        </div>
      </div>
    </footer>
  );
}
