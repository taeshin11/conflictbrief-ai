import VisitorBadge from "./VisitorBadge";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#E5E5E3] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-[#6B7280]">
          &copy; {new Date().getFullYear()} ConflictBrief AI. News summaries are AI-generated.
        </p>
        <VisitorBadge />
      </div>
    </footer>
  );
}
