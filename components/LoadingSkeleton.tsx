export default function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-xl bg-white p-6 shadow-sm border border-[#E5E5E3]"
        >
          <div className="h-4 w-3/4 rounded bg-[#F0EEEB]" />
          <div className="mt-2 h-3 w-1/2 rounded bg-[#F0EEEB]" />
          <div className="mt-4 flex gap-3">
            <div className="h-3 w-16 rounded bg-[#F0EEEB]" />
            <div className="h-3 w-12 rounded bg-[#F0EEEB]" />
          </div>
        </div>
      ))}
    </div>
  );
}
