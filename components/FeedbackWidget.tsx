"use client";

import { useState } from "react";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button — bottom-left, subtle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Send feedback or suggest improvements"
        className="fixed bottom-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-lg transition-all hover:bg-[#1D4ED8] hover:scale-105"
      >
        {open ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-16 left-4 z-50 w-80 rounded-xl bg-white p-5 shadow-xl border border-[#E5E5E3]">
          <h4 className="text-sm font-semibold text-[#1A1A1A]">Suggest an Improvement</h4>
          <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">
            Found a bug? Want a new feature? Have feedback about the experience?
            We read every message and respond within 48 hours.
          </p>

          <div className="mt-4 space-y-2">
            <a
              href="mailto:taeshinkim11@gmail.com?subject=ConflictBrief%20AI%20—%20Feature%20Request&body=Hi%20ConflictBrief%20team%2C%0A%0AI'd%20like%20to%20suggest%3A%0A%0A"
              className="flex w-full items-center gap-3 rounded-lg border border-[#E5E5E3] px-4 py-2.5 text-sm text-[#1A1A1A] transition-colors hover:bg-[#F0EEEB]"
            >
              <svg className="h-4 w-4 shrink-0 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <div>
                <div className="font-medium">Suggest a Feature</div>
                <div className="text-xs text-[#6B7280]">Request new functionality</div>
              </div>
            </a>

            <a
              href="mailto:taeshinkim11@gmail.com?subject=ConflictBrief%20AI%20—%20Bug%20Report&body=Hi%20ConflictBrief%20team%2C%0A%0AI%20found%20an%20issue%3A%0A%0ASteps%20to%20reproduce%3A%0A1.%20%0A%0AExpected%20behavior%3A%0A%0AActual%20behavior%3A%0A"
              className="flex w-full items-center gap-3 rounded-lg border border-[#E5E5E3] px-4 py-2.5 text-sm text-[#1A1A1A] transition-colors hover:bg-[#F0EEEB]"
            >
              <svg className="h-4 w-4 shrink-0 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <div className="font-medium">Report a Bug</div>
                <div className="text-xs text-[#6B7280]">Something not working right</div>
              </div>
            </a>

            <a
              href="mailto:taeshinkim11@gmail.com?subject=ConflictBrief%20AI%20—%20General%20Feedback&body=Hi%20ConflictBrief%20team%2C%0A%0A"
              className="flex w-full items-center gap-3 rounded-lg border border-[#E5E5E3] px-4 py-2.5 text-sm text-[#1A1A1A] transition-colors hover:bg-[#F0EEEB]"
            >
              <svg className="h-4 w-4 shrink-0 text-[#6B7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <div className="font-medium">General Feedback</div>
                <div className="text-xs text-[#6B7280]">Share your thoughts</div>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
