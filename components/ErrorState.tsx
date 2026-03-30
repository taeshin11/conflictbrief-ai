"use client";

import { useI18n } from "@/lib/i18n";

export default function ErrorState({ onRetry }: { onRetry: () => void }) {
  const { t } = useI18n();

  return (
    <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-12 text-center shadow-sm border border-[#E5E5E3]">
      <p className="text-lg font-medium text-[#1A1A1A]">{t("unableToLoadNews")}</p>
      <p className="text-sm text-[#6B7280]">
        {t("errorDescription")}
      </p>
      <button
        onClick={onRetry}
        className="rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
      >
        {t("tryAgain")}
      </button>
    </div>
  );
}
