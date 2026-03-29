"use client";

export default function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-12 text-center shadow-sm border border-[#E5E5E3]">
      <p className="text-lg font-medium text-[#1A1A1A]">Unable to load news</p>
      <p className="text-sm text-[#6B7280]">
        Something went wrong fetching the latest conflict updates.
      </p>
      <button
        onClick={onRetry}
        className="rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
      >
        Try Again
      </button>
    </div>
  );
}
