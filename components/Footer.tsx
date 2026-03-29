import Link from "next/link";
import VisitorBadge from "./VisitorBadge";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#E5E5E3] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#6B7280]">
            <Link href="/about" className="transition-colors hover:text-[#1A1A1A]">About Us</Link>
            <Link href="/how-to-use" className="transition-colors hover:text-[#1A1A1A]">How to Use &amp; FAQ</Link>
            <Link href="/privacy" className="transition-colors hover:text-[#1A1A1A]">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-[#1A1A1A]">Terms of Service</Link>
          </nav>

          {/* Contact */}
          <a
            href="mailto:taeshinkim11@gmail.com"
            className="text-sm text-[#6B7280] transition-colors hover:text-[#2563EB]"
          >
            Feedback &amp; Contact
          </a>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-[#E5E5E3] pt-6 sm:flex-row">
          <p className="text-sm text-[#6B7280]">
            &copy; {new Date().getFullYear()} ConflictBrief AI. News summaries are AI-generated.
          </p>
          <VisitorBadge />
        </div>
      </div>
    </footer>
  );
}
