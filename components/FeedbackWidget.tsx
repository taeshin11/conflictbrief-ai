"use client";

import { useState } from "react";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button — bottom-left, subtle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Send feedback"
        className="fixed bottom-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-lg transition-all hover:bg-[#1D4ED8] hover:scale-105"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-16 left-4 z-50 w-72 rounded-xl bg-white p-5 shadow-xl border border-[#E5E5E3] animate-in">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-[#1A1A1A]">Send Feedback</h4>
            <button
              onClick={() => setOpen(false)}
              className="text-[#6B7280] hover:text-[#1A1A1A]"
              aria-label="Close feedback"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-xs text-[#6B7280] leading-relaxed">
            Have a suggestion, found a bug, or want a new feature? We&apos;d love to hear from you.
          </p>
          <a
            href="mailto:taeshinkim11@gmail.com?subject=ConflictBrief%20AI%20Feedback"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Us
          </a>
        </div>
      )}
    </>
  );
}
