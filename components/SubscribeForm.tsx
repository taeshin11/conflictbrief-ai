"use client";

import { FormEvent, useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { t } = useI18n();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/collect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "subscribe_form" }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="subscribe"
      className="rounded-xl bg-white p-8 shadow-sm border border-[#E5E5E3] text-center"
    >
      <h3 className="text-xl font-semibold tracking-tight">{t("getTheDailyBrief")}</h3>
      <p className="mt-2 text-sm text-[#6B7280]">
        {t("subscribeDescription")}
      </p>
      <form onSubmit={handleSubmit} className="mx-auto mt-4 flex max-w-md gap-2">
        <input
          type="email"
          required
          placeholder={t("emailPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-lg border border-[#E5E5E3] bg-[#FAFAF8] px-4 py-2 text-sm outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-[#2563EB] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8] disabled:opacity-60"
        >
          {status === "loading" ? t("subscribing") : t("subscribe")}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-3 text-sm text-green-600">{t("subscribeSuccess")}</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">{t("subscribeError")}</p>
      )}
    </section>
  );
}
