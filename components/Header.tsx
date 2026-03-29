"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E5E3] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-[#1A1A1A]">
            Conflict<span className="text-[#2563EB]">Brief</span> AI
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm font-medium text-[#6B7280] sm:flex">
          <Link href="/" className="transition-colors hover:text-[#1A1A1A]">Dashboard</Link>
          <Link href="/about" className="transition-colors hover:text-[#1A1A1A]">About</Link>
          <Link href="/how-to-use" className="transition-colors hover:text-[#1A1A1A]">FAQ</Link>
          <a
            href="#subscribe"
            className="rounded-lg bg-[#2563EB] px-4 py-2 text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Subscribe
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center rounded-md p-2 text-[#6B7280] transition-colors hover:bg-[#F0EEEB] sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-[#E5E5E3] bg-white px-4 py-4 sm:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-3 text-sm font-medium text-[#6B7280]">
            <Link href="/" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#1A1A1A]">Dashboard</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#1A1A1A]">About Us</Link>
            <Link href="/how-to-use" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#1A1A1A]">How to Use &amp; FAQ</Link>
            <Link href="/privacy" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#1A1A1A]">Privacy Policy</Link>
            <Link href="/terms" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#1A1A1A]">Terms of Service</Link>
            <a
              href="#subscribe"
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-block rounded-lg bg-[#2563EB] px-4 py-2 text-center text-white transition-colors hover:bg-[#1D4ED8]"
            >
              Subscribe
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
