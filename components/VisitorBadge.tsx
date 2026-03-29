"use client";

import { useEffect, useState } from "react";

export default function VisitorBadge() {
  const [counts, setCounts] = useState<{ today: number; total: number } | null>(null);

  useEffect(() => {
    fetch("/api/visitor", { method: "POST" })
      .then((r) => r.json())
      .then(setCounts)
      .catch(() => {});
  }, []);

  if (!counts) return null;

  return (
    <span className="text-xs text-gray-400">
      👁 Today: {counts.today.toLocaleString()} · Total: {counts.total.toLocaleString()}
    </span>
  );
}
