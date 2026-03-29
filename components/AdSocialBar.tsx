"use client";

import Script from "next/script";

export default function AdSocialBar() {
  const siteKey = process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_KEY;

  if (!siteKey) return null;

  return (
    <Script
      src={`//www.highperformanceformat.com/${siteKey}/invoke.js`}
      strategy="afterInteractive"
    />
  );
}
