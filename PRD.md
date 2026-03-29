# PRD.md — ConflictBrief AI (Daily War News Aggregator)

> **This document is the single source of truth.** Claude Code must read this file at the start of every session and follow it exactly. Do not deviate from the architecture, stack, or milestone order described below.

---

## 0. Project Meta

| Field | Value |
|---|---|
| Service Name | **ConflictBrief AI** |
| Short Title | Daily War Summary |
| Repo Name | `conflictbrief-ai` |
| Domain Goal | Aggregate war/conflict news from major wire services, summarize each via free LLM, display in a clean dashboard |
| Monetization | Adsterra ads (primary), Google AdSense (secondary/future) |
| Cost Target | **$0 operating cost.** Every service must be free-tier or open-source. |
| Deployment | **Vercel** (free tier, auto-deploy from `main` branch) |
| Data Collection | Google Sheets via Apps Script webhook — zero cost |

---

## 1. Harness Design — Session Rules for Claude Code

### 1.1 Initialization (First Session Only)

On the very first run, create these files in the project root:

```
feature_list.json   — ordered array of features with id, title, status
claude-progress.txt — plain-text log: which feature is done, current, next
init.sh             — script to install deps, set env, start dev server
```

### 1.2 Every Session Start Routine (MANDATORY)

```
1. Read claude-progress.txt → understand where you left off
2. Read feature_list.json   → pick the next "pending" feature
3. Run `npm run dev` or `npm run build` to confirm the project compiles
4. Implement ONE feature end-to-end (code + test + visual check)
5. After the feature works:
   a. Update feature status to "done" in feature_list.json
   b. Append a timestamped line to claude-progress.txt
   c. git add -A && git commit -m "feat: <feature-title>"
6. If this commit is a **milestone** (see §5), also run: git push origin main
7. Move to the next feature. Repeat steps 4-6.
```

### 1.3 Separation of Roles

- **Builder agent**: writes code, implements features.
- **Reviewer agent**: after each feature, re-read the code and check against this PRD. Fix any deviation before committing.

### 1.4 Automation-First Rule

> **If you are stuck and the problem can be solved via CLI, solve it via CLI automatically. Do NOT just print instructions for a human.**

Examples: creating repos with `gh`, deploying with `vercel`, installing packages with `npm`, setting env vars with `vercel env add`, etc.

---

## 2. Tech Stack (All Free)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | Free on Vercel, SSR for SEO, API routes built-in |
| Language | TypeScript | Type safety |
| Styling | **Tailwind CSS** | Utility-first, responsive, easy soft-color theming |
| News Data | **NewsAPI.org** (free tier: 100 req/day) | Keyword filtering for war/conflict topics |
| AI Summary | **Hugging Face Inference API** (free tier) — model: `facebook/bart-large-cnn` or any free summarization model | Zero cost summarization |
| Fallback LLM | If HF is slow/down, use **Groq API** free tier (llama-3.1-8b) | Fast, generous free tier |
| Data Store | Google Sheets via **Apps Script webhook** | Free, no DB cost |
| Visitor Counter | **CountAPI** or a simple Vercel KV (free tier) or local JSON-based via API route | Zero cost |
| Ads | **Adsterra** (primary) | Fast approval, good CPM, works with new sites |
| Hosting | **Vercel** free tier | Auto-deploy, HTTPS, CDN |
| Link Shortener | **Vercel Redirect** or **dub.co** free tier | Hide GitHub username from public links |
| Analytics | Vercel Analytics (free) or **Umami** self-hosted on Vercel | Free, privacy-friendly |

---

## 3. Architecture Overview

```
┌──────────────────────────────────────────────┐
│                   BROWSER                    │
│  Next.js SSR Page ──► Tailwind UI            │
│  - News summary cards                        │
│  - Adsterra ad slots (banner + native)       │
│  - Visitor counter (footer / subtle corner)  │
│  - "Subscribe" or feedback form              │
└──────────────┬───────────────────────────────┘
               │ fetch /api/*
┌──────────────▼───────────────────────────────┐
│            NEXT.JS API ROUTES                │
│                                              │
│  /api/news       → NewsAPI fetch + HF summary│
│  /api/visitor    → increment & return counts │
│  /api/collect    → POST to Google Sheets     │
└──────────────┬───────────────────────────────┘
               │
    ┌──────────┴──────────┐
    ▼                     ▼
 NewsAPI.org        Hugging Face
 (raw articles)     Inference API
                    (summarization)
```

---

## 4. Feature List (Implementation Order)

> Copy this into `feature_list.json` on init. Each feature has: `id`, `title`, `description`, `status` (pending | in-progress | done), `milestone` (boolean).

```json
[
  {
    "id": 1,
    "title": "Project Scaffold",
    "description": "Create Next.js 14 app with TypeScript, Tailwind CSS. Configure tailwind.config with soft color palette. Set up folder structure: app/, components/, lib/, public/. Create .env.example with all needed keys. Write init.sh.",
    "status": "pending",
    "milestone": true
  },
  {
    "id": 2,
    "title": "GitHub Repo & CI Setup",
    "description": "Use `gh repo create conflictbrief-ai --public --source=. --push` to create repo. Set up .gitignore for Next.js. Make initial commit and push.",
    "status": "pending",
    "milestone": true
  },
  {
    "id": 3,
    "title": "Core Layout & Responsive Shell",
    "description": "Build responsive layout: Header (logo + nav), Main content area, Footer. Mobile-first with Tailwind breakpoints (sm, md, lg, xl). Soft background: use bg-slate-50 or custom warm off-white (#FAFAF8 / #F5F3EF). Dark mode support optional but nice-to-have. Modern, comfortable UI: rounded corners, generous whitespace, subtle shadows, clean typography (Inter or system font).",
    "status": "pending",
    "milestone": false
  },
  {
    "id": 4,
    "title": "NewsAPI Integration",
    "description": "Create /api/news route. Fetch from NewsAPI with keywords: war, conflict, military, invasion, airstrike, ceasefire, troops. Filter sources: reuters, associated-press, bbc-news, al-jazeera-english. Cache results in memory or Vercel KV (free) for 30 minutes to save API calls. Return top 20 articles with title, source, url, publishedAt, description.",
    "status": "pending",
    "milestone": true
  },
  {
    "id": 5,
    "title": "AI Summarization Pipeline",
    "description": "For each article returned by NewsAPI, send the title+description to Hugging Face Inference API (facebook/bart-large-cnn) to get a one-sentence summary. If HF fails, fallback to Groq API with llama model. Implement retry logic (max 2 retries). Cache summaries alongside news cache. Each summary must be exactly 1 sentence, max 150 characters.",
    "status": "pending",
    "milestone": true
  },
  {
    "id": 6,
    "title": "News Dashboard UI",
    "description": "Display summarized news as a card list. Each card: one-sentence AI summary (prominent), source name + time ago (subtle), 'Read Full Article' link (opens original in new tab). Cards should be clean, scannable, and mobile-friendly. Add a 'Last updated: X minutes ago' indicator at top. Add loading skeleton while fetching. Add error state with retry button. Sort by publishedAt descending (newest first). Add region/conflict filter tabs if data allows (e.g., Ukraine, Middle East, Sudan).",
    "status": "pending",
    "milestone": true
  },
  {
    "id": 7,
    "title": "Visitor Counter",
    "description": "Create /api/visitor route. On page load, POST to increment today's count and total count. Store counts in a JSON file on Vercel (or use Vercel KV free tier, or CountAPI). Display in footer or a subtle fixed-bottom-right badge: 'Today: X | Total: Y'. Style it to NOT disrupt user experience — small font, muted color, unobtrusive position. Consider a small bar at the very bottom of the footer.",
    "status": "pending",
    "milestone": false
  },
  {
    "id": 8,
    "title": "Google Sheets Data Collection",
    "description": "Create a Google Apps Script that acts as a webhook (doPost). Deploy it as a web app (anyone can access). In the Next.js app, create /api/collect proxy route. When user clicks 'Subscribe' or 'Get Daily Brief' button, collect their email and POST it to the Google Sheets webhook. Show success/error toast. DO NOT just write a guide — actually create the Apps Script code and the Next.js API route. Provide the Apps Script code in a file: google-apps-script/Code.gs so user can paste it. Include step-by-step deployment instructions in SETUP.md.",
    "status": "pending",
    "milestone": true
  },
  {
    "id": 9,
    "title": "Adsterra Ad Integration",
    "description": "Integrate Adsterra ads in these placements: 1) Banner ad at top of page (below header), 2) Native ad between news cards (after every 5th card), 3) Social bar or push notification ad (Adsterra script). Create placeholder components: <AdBanner />, <AdNative />, <AdSocialBar />. Use environment variable NEXT_PUBLIC_ADSTERRA_SITE_KEY for the site key. Leave clear comments: '// REPLACE_WITH_ADSTERRA_KEY — get from Adsterra dashboard after approval'. Ad components must be responsive and not break layout on mobile. Include Adsterra script in <head> via next/script. In SETUP.md, document: 1) Sign up at adsterra.com, 2) Add site, 3) Create ad units (banner 728x90, native, social bar), 4) Copy keys into .env.local.",
    "status": "pending",
    "milestone": true
  },
  {
    "id": 10,
    "title": "SEO Optimization",
    "description": "Add comprehensive SEO: 1) Dynamic <title> and <meta description> per page, 2) Open Graph tags + Twitter Card tags, 3) JSON-LD structured data (NewsArticle schema for each summary), 4) sitemap.xml (auto-generated), 5) robots.txt, 6) Canonical URLs, 7) Semantic HTML (article, section, header, footer, nav, main), 8) Alt text on all images, 9) Fast Core Web Vitals (Vercel handles most). Add next-sitemap package for auto sitemap generation.",
    "status": "pending",
    "milestone": false
  },
  {
    "id": 11,
    "title": "Vercel Deployment",
    "description": "Deploy to Vercel using CLI: `npx vercel --prod`. Set environment variables via `vercel env add`. Confirm the site is live. Get the Vercel URL. Do NOT expose GitHub username — use the Vercel-provided URL (e.g., conflictbrief-ai.vercel.app) as the public link. If custom domain is wanted later, document in SETUP.md. Create a short link using dub.co or similar free service to mask any identifiable URLs.",
    "status": "pending",
    "milestone": true
  },
  {
    "id": 12,
    "title": "Final QA & Polish",
    "description": "1) Test all pages on mobile (320px), tablet (768px), desktop (1440px). 2) Check Lighthouse score — aim for 90+ on Performance, SEO, Accessibility. 3) Verify all API routes work. 4) Verify ads render (or placeholders show). 5) Verify visitor counter increments. 6) Verify Google Sheets collection works. 7) Fix any console errors. 8) Final git push.",
    "status": "pending",
    "milestone": true
  }
]
```

---

## 5. Milestones & Git Strategy

| Milestone | After Feature | Git Command |
|---|---|---|
| M1: Scaffold Ready | #1 + #2 | `git push origin main` |
| M2: News Pipeline Live | #4 + #5 | `git push origin main` |
| M3: Dashboard UI Complete | #6 | `git push origin main` |
| M4: Data Collection Wired | #8 | `git push origin main` |
| M5: Monetization Ready | #9 | `git push origin main` |
| M6: Deployed & Live | #11 | `git push origin main` |
| M7: QA Complete | #12 | `git push origin main` |

**Git commit convention:** `feat: <feature-title>`, `fix: <what>`, `chore: <what>`

**IMPORTANT:** At every milestone, run:
```bash
git add -A
git commit -m "milestone: M<number> - <description>"
git push origin main
```

**Create the GitHub repo using gh CLI:**
```bash
gh repo create conflictbrief-ai --public --source=. --push
```

---

## 6. Design System

### 6.1 Color Palette (Soft & Comfortable)

```
Background Primary:    #FAFAF8  (warm off-white)
Background Secondary:  #F0EEEB  (light warm gray)
Surface / Card:        #FFFFFF  (white)
Text Primary:          #1A1A1A  (near-black, not pure black)
Text Secondary:        #6B7280  (muted gray)
Accent / CTA:          #2563EB  (blue-600, trustworthy)
Accent Hover:          #1D4ED8  (blue-700)
Danger / Breaking:     #DC2626  (red-600, for urgent news tags)
Border:                #E5E5E3  (very subtle)
```

### 6.2 Typography

- **Font:** `Inter` via Google Fonts, fallback: system-ui, sans-serif
- **Heading:** font-semibold, tracking-tight
- **Body:** font-normal, text-base (16px), leading-relaxed
- **Caption:** text-sm, text-secondary

### 6.3 Component Patterns

- **Cards:** bg-white, rounded-xl, shadow-sm, p-6, hover:shadow-md transition
- **Buttons:** rounded-lg, px-4 py-2, font-medium, transition-colors
- **Spacing:** Generous — use gap-6, space-y-8, py-12 for sections
- **Max width:** max-w-4xl mx-auto for content, max-w-7xl for full layouts
- **Responsive:** Mobile-first. Stack vertically on mobile, grid on desktop.

### 6.4 Visitor Counter Placement

- Position: **Inside footer**, far-right or centered below copyright.
- Style: `text-xs text-gray-400` — extremely subtle.
- Format: `👁 Today: 42 · Total: 1,203`
- Must NOT overlay content or use a modal/popup. Must NOT be visually prominent.

---

## 7. API Specifications

### 7.1 GET /api/news

```
Response: {
  lastUpdated: ISO string,
  articles: [
    {
      id: string,
      title: string,
      source: string,
      summary: string,        // AI-generated one-sentence summary
      originalUrl: string,
      publishedAt: ISO string,
      region: string | null    // optional tag: "Ukraine", "Middle East", etc.
    }
  ]
}
```

- Cache for 30 minutes (in-memory or Vercel KV).
- If NewsAPI quota exhausted, return cached data with a `stale: true` flag.

### 7.2 POST /api/visitor

```
Request:  {} (empty body, just hit it)
Response: { today: number, total: number }
```

### 7.3 POST /api/collect

```
Request:  { email: string, source: "subscribe_form" }
Response: { success: boolean }
```

- Validates email format before forwarding to Google Sheets webhook.
- Rate-limit: max 5 requests per IP per hour (simple in-memory check).

---

## 8. Google Sheets Webhook — Full Implementation

### 8.1 Apps Script Code (save as `google-apps-script/Code.gs`)

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.email || "",
      data.source || "unknown",
      data.userAgent || ""
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 8.2 Setup Instructions (include in SETUP.md)

1. Create a new Google Sheet.
2. Go to Extensions → Apps Script.
3. Paste the code from `google-apps-script/Code.gs`.
4. Deploy → New deployment → Web app → Anyone can access.
5. Copy the deployment URL.
6. Set it as `GOOGLE_SHEETS_WEBHOOK_URL` in `.env.local` and Vercel env.

---

## 9. Adsterra Integration Guide

### 9.1 Ad Placements

| Placement | Component | Size | Position |
|---|---|---|---|
| Top Banner | `<AdBanner />` | 728×90 (desktop) / 320×50 (mobile) | Below header |
| Native In-Feed | `<AdNative />` | Responsive | After every 5th news card |
| Social Bar | `<AdSocialBar />` | Auto | Fixed, managed by Adsterra script |

### 9.2 Implementation

- All ad components read from `NEXT_PUBLIC_ADSTERRA_SITE_KEY`.
- Use `next/script` with `strategy="afterInteractive"` to load Adsterra scripts.
- Wrap each ad in a container with `min-height` to prevent layout shift (CLS).
- On mobile, only show the 320×50 banner and social bar (hide large banners).

### 9.3 Revenue Optimization Notes

- Adsterra pays per impression (CPM) and per click (CPC).
- Social Bar typically has the highest CPM for new sites.
- Apply at: https://www.adsterra.com — approval is usually within 24 hours.
- After approval, create ad units in dashboard → copy the script/key → set as env variable.
- **This is the primary revenue stream. Google AdSense is slower to approve and can be added later.**

---

## 10. Environment Variables

```env
# .env.example — copy to .env.local and fill in values

# NewsAPI (get free key at https://newsapi.org)
NEWSAPI_KEY=

# Hugging Face (get free token at https://huggingface.co/settings/tokens)
HF_API_TOKEN=

# Groq (fallback LLM — get free key at https://console.groq.com)
GROQ_API_KEY=

# Google Sheets Webhook (see SETUP.md for creation steps)
GOOGLE_SHEETS_WEBHOOK_URL=

# Adsterra (get after ad unit approval at https://adsterra.com)
NEXT_PUBLIC_ADSTERRA_BANNER_KEY=
NEXT_PUBLIC_ADSTERRA_NATIVE_KEY=
NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_KEY=

# Visitor Counter (optional — if using external service)
# Leave empty to use built-in file-based counter
COUNTER_API_URL=
```

---

## 11. SEO Checklist

- [ ] `<title>` tag: "ConflictBrief AI — Daily War News Summary & Conflict Updates"
- [ ] `<meta name="description">`: "Get AI-powered one-sentence summaries of today's war and conflict news from Reuters, AP, BBC, and Al Jazeera. Updated every 30 minutes."
- [ ] Open Graph image (create a simple OG image with project name)
- [ ] JSON-LD `WebSite` schema on homepage
- [ ] JSON-LD `NewsArticle` schema on each summary card
- [ ] `sitemap.xml` via `next-sitemap`
- [ ] `robots.txt` allowing all crawlers
- [ ] Semantic HTML throughout
- [ ] All external links: `rel="noopener noreferrer"`
- [ ] Page load < 3 seconds (Vercel CDN helps)

---

## 12. Responsive Breakpoints

```
Mobile:   < 640px   → single column, stacked cards, small banner ad
Tablet:   640-1024px → single column, wider cards, medium banner
Desktop:  > 1024px   → max-w-4xl centered, full banner, side margins
```

---

## 13. File Structure

```
conflictbrief-ai/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, Adsterra scripts
│   ├── page.tsx            # Home: news dashboard
│   ├── api/
│   │   ├── news/route.ts   # NewsAPI + AI summary endpoint
│   │   ├── visitor/route.ts # Visitor counter endpoint
│   │   └── collect/route.ts # Google Sheets proxy endpoint
│   └── globals.css         # Tailwind base + custom soft theme
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx          # Includes visitor counter
│   ├── NewsCard.tsx
│   ├── NewsList.tsx
│   ├── SubscribeForm.tsx   # Email collection → Google Sheets
│   ├── AdBanner.tsx        # Adsterra banner ad
│   ├── AdNative.tsx        # Adsterra native ad
│   ├── AdSocialBar.tsx     # Adsterra social bar
│   ├── VisitorBadge.tsx    # Subtle counter display
│   ├── LoadingSkeleton.tsx
│   └── ErrorState.tsx
├── lib/
│   ├── newsapi.ts          # NewsAPI fetch + keyword filter
│   ├── summarizer.ts       # HF / Groq summarization logic
│   ├── cache.ts            # In-memory cache utility
│   ├── sheets.ts           # Google Sheets webhook caller
│   └── visitor.ts          # Visitor count logic
├── google-apps-script/
│   └── Code.gs             # Ready-to-paste Apps Script
├── public/
│   ├── og-image.png        # Open Graph image
│   ├── favicon.ico
│   └── robots.txt
├── feature_list.json       # Feature tracking (auto-managed)
├── claude-progress.txt     # Session progress log
├── init.sh                 # Project init script
├── SETUP.md                # Human-readable setup guide
├── PRD.md                  # THIS FILE
├── .env.example
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 14. Non-Functional Requirements

1. **Zero Cost:** Every external service must be free tier. If a free tier is exhausted, degrade gracefully (show cached data, show placeholder instead of ad).
2. **Performance:** Lighthouse Performance score ≥ 90. Use SSR + caching aggressively.
3. **Accessibility:** Lighthouse Accessibility score ≥ 90. Proper contrast ratios, ARIA labels, keyboard navigation.
4. **Privacy:** No cookies for tracking. Visitor counter is anonymous (IP-based daily unique, but don't store IPs). Comply with basic GDPR principles.

---

## 15. Deployment Checklist

```bash
# 1. Create GitHub repo (MUST use gh CLI)
gh repo create conflictbrief-ai --public --source=. --push

# 2. Deploy to Vercel (MUST use CLI)
npx vercel link
npx vercel env add NEWSAPI_KEY
npx vercel env add HF_API_TOKEN
npx vercel env add GROQ_API_KEY
npx vercel env add GOOGLE_SHEETS_WEBHOOK_URL
npx vercel env add NEXT_PUBLIC_ADSTERRA_BANNER_KEY
npx vercel env add NEXT_PUBLIC_ADSTERRA_NATIVE_KEY
npx vercel env add NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_KEY
npx vercel --prod

# 3. Verify live site
# 4. Create a short/clean public link (dub.co or similar) to avoid exposing GitHub username
# 5. Share the clean link
```

---

## 16. CRITICAL REMINDERS FOR CLAUDE CODE

1. **READ THIS FILE** at the start of every session. No exceptions.
2. **Follow the feature order** in §4. Do not skip ahead.
3. **Git push at every milestone** listed in §5. Not optional.
4. **Use CLI for everything** that can be automated: `gh`, `vercel`, `npm`, etc.
5. **Do not just write guides** — write working code. The Apps Script file must be created. The ad components must be created. The API routes must be created.
6. **Adsterra is the primary ad network.** Set up placeholder components even before getting approved. Use env variables so keys can be swapped in later.
7. **Google Sheets webhook must actually work.** Create the Apps Script code file AND the Next.js proxy route AND the frontend form.
8. **Hide GitHub username** in any public-facing link. Use Vercel URL or a link shortener.
9. **Soft colors only.** No harsh whites (#FFFFFF for cards is fine, but page background must be warm off-white). No neon. No dark backgrounds by default.
10. **Visitor counter must be subtle.** Footer placement, tiny text, muted color. Users should not even notice it unless they look for it.
11. **Cost = $0.** If you find yourself reaching for a paid service, stop and find a free alternative.
12. **Every feature must be responsive.** Test mentally at 320px, 768px, and 1440px widths.

---

*End of PRD. Start building.*