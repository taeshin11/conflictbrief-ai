"use client";

import Script from "next/script";

export default function AdBanner() {
  const siteKey = process.env.NEXT_PUBLIC_ADSTERRA_BANNER_KEY;

  if (!siteKey) {
    return (
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4">
        <div className="h-[90px] w-full max-w-[728px] rounded-lg bg-[#F0EEEB] flex items-center justify-center text-xs text-[#6B7280] sm:block hidden">
          {/* Ad placeholder — banner 728x90 */}
        </div>
        <div className="h-[50px] w-full max-w-[320px] rounded-lg bg-[#F0EEEB] flex items-center justify-center text-xs text-[#6B7280] sm:hidden">
          {/* Ad placeholder — mobile 320x50 */}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-center px-4" style={{ minHeight: 90 }}>
      <Script
        src={`//www.highperformanceformat.com/${siteKey}/invoke.js`}
        strategy="afterInteractive"
      />
      <div id={`container-${siteKey}`} />
    </div>
  );
}
