"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [counts, setCounts] = useState<{ today: number; total: number } | null>(null);

  useEffect(() => {
    fetch("/api/visitor", { method: "POST" })
      .then((r) => r.json())
      .then(setCounts)
      .catch(() => {});
  }, []);

  return (
    <footer className="mt-auto border-t border-[#E5E5E3] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-[#6B7280]">
          &copy; {new Date().getFullYear()} ConflictBrief AI. News summaries are AI-generated.
        </p>
        {counts && (
          <span className="text-xs text-gray-400">
            👁 Today: {counts.today.toLocaleString()} · Total:{" "}
            {counts.total.toLocaleString()}
          </span>
        )}
      </div>
    </footer>
  );
}
