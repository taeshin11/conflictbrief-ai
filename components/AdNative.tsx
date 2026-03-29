"use client";

import Script from "next/script";

export default function AdNative() {
  const siteKey = process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_KEY;

  if (!siteKey) {
    return (
      <div className="my-6 flex items-center justify-center rounded-lg bg-[#F0EEEB] p-4 text-xs text-[#6B7280]" style={{ minHeight: 100 }}>
        {/* Native ad placeholder */}
      </div>
    );
  }

  return (
    <div className="my-6" style={{ minHeight: 100 }}>
      <Script
        src={`//www.highperformanceformat.com/${siteKey}/invoke.js`}
        strategy="afterInteractive"
      />
      <div id={`container-${siteKey}`} />
    </div>
  );
}
