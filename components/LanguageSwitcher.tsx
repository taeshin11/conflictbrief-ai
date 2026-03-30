"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { LOCALE_NAMES, type Locale } from "@/lib/translations";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm text-[#6B7280] transition-colors hover:bg-[#F0EEEB] hover:text-[#1A1A1A]"
        aria-label={t("language")}
        aria-expanded={open}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <span className="hidden sm:inline">{LOCALE_NAMES[locale]}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 max-h-80 w-48 overflow-y-auto rounded-xl border border-[#E5E5E3] bg-white py-1 shadow-xl">
          {(Object.entries(LOCALE_NAMES) as [Locale, string][]).map(([code, name]) => (
            <button
              key={code}
              onClick={() => {
                setLocale(code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-[#F0EEEB] ${
                locale === code ? "bg-[#F0EEEB] font-medium text-[#2563EB]" : "text-[#1A1A1A]"
              }`}
            >
              {name}
              {locale === code && (
                <svg className="ml-auto h-4 w-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
