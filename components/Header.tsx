"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E5E3] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-[#1A1A1A]">
            Conflict<span className="text-[#2563EB]">Brief</span> AI
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-[#6B7280]">
          <Link href="/" className="transition-colors hover:text-[#1A1A1A]">
            Dashboard
          </Link>
          <a
            href="#subscribe"
            className="rounded-lg bg-[#2563EB] px-4 py-2 text-white transition-colors hover:bg-[#1D4ED8]"
          >
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  );
}
