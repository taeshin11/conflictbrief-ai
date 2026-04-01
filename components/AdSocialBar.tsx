"use client";

import Script from "next/script";

export default function AdSocialBar() {
  const siteKey = process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_KEY;

  if (!siteKey) return null;

  return (
    <Script
      src={`//pl29036483.profitablecpmratenetwork.com/76/7d/66/${siteKey}.js`}
      strategy="afterInteractive"
    />
  );
}
