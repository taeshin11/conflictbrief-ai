"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function VisitorBadge() {
  const [counts, setCounts] = useState<{ today: number; total: number } | null>(null);
  const { t } = useI18n();

  useEffect(() => {
    fetch("/api/visitor", { method: "POST" })
      .then((r) => r.json())
      .then(setCounts)
      .catch(() => {});
  }, []);

  if (!counts) return null;

  return (
    <span className="text-xs text-gray-400">
      {t("today")}: {counts.today.toLocaleString()} · {t("total")}: {counts.total.toLocaleString()}
    </span>
  );
}
