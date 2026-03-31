"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  type Locale,
  type TranslationStrings,
  RTL_LOCALES,
  translations,
  t as translate,
} from "./translations";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  strings: TranslationStrings;
  t: (key: keyof TranslationStrings, params?: Record<string, string | number>) => string;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  // 1. Check localStorage (user explicitly chose a language)
  const stored = localStorage.getItem("conflictbrief-locale");
  if (stored && stored in translations) return stored as Locale;
  // 2. Check cookie set by proxy (server-side Accept-Language detection)
  const cookie = getCookie("conflictbrief-locale");
  if (cookie && cookie in translations) return cookie as Locale;
  // 3. Check browser navigator
  const browserLang = navigator.language.split("-")[0].toLowerCase();
  if (browserLang in translations) return browserLang as Locale;
  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      // On first mount, re-detect in case SSR defaulted to "en"
      const detected = detectLocale();
      if (detected !== locale) setLocaleState(detected);
      setMounted(true);
    }
  }, [locale, mounted]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("conflictbrief-locale", newLocale);
    // Also update cookie so proxy doesn't override
    document.cookie = `conflictbrief-locale=${newLocale};path=/;max-age=${365 * 24 * 60 * 60};samesite=lax`;
  }, []);

  const strings = translations[locale];
  const isRTL = RTL_LOCALES.includes(locale);

  const t = useCallback(
    (key: keyof TranslationStrings, params?: Record<string, string | number>) =>
      translate(strings, key, params),
    [strings]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, strings, t, isRTL }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
