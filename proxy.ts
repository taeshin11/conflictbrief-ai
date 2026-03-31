import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LOCALES = [
  "en", "ko", "ja", "zh", "es", "fr", "ar",
  "de", "pt", "ru", "hi", "tr", "uk", "vi", "th",
];

function getLocaleFromHeader(acceptLanguage: string | null): string {
  if (!acceptLanguage) return "en";
  // Parse Accept-Language header: "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, qStr] = lang.trim().split(";q=");
      return { code: code.split("-")[0].toLowerCase(), q: qStr ? parseFloat(qStr) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { code } of languages) {
    if (SUPPORTED_LOCALES.includes(code)) return code;
  }
  return "en";
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Only set locale cookie if not already set (first visit)
  const existingLocale = request.cookies.get("conflictbrief-locale")?.value;
  if (!existingLocale) {
    const acceptLanguage = request.headers.get("accept-language");
    const detectedLocale = getLocaleFromHeader(acceptLanguage);
    response.cookies.set("conflictbrief-locale", detectedLocale, {
      path: "/",
      maxAge: 365 * 24 * 60 * 60, // 1 year
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files, API routes, and Next.js internals
    "/((?!api|_next/static|_next/image|favicon\\.ico|.*\\.png$|.*\\.xml$|.*\\.json$|.*\\.txt$|.*\\.ico$).*)",
  ],
};
