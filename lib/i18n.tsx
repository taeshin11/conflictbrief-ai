"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  type Locale,
  type TranslationStrings,
  RTL_LOCALES,
  translations,
  detectLocale,
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

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(detectLocale());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
  }, [locale, mounted]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("conflictbrief-locale", newLocale);
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
