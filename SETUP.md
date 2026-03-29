# ConflictBrief AI — Setup Guide

## 1. Prerequisites

- Node.js 18+
- npm

## 2. Local Development

```bash
cp .env.example .env.local
# Fill in your API keys (see below)
npm install
npm run dev
```

## 3. API Keys (All Free)

### NewsAPI
1. Sign up at https://newsapi.org
2. Get your free API key (100 requests/day)
3. Set `NEWSAPI_KEY` in `.env.local`

### Hugging Face
1. Sign up at https://huggingface.co
2. Go to Settings → Access Tokens → New Token
3. Set `HF_API_TOKEN` in `.env.local`

### Groq (Fallback)
1. Sign up at https://console.groq.com
2. Create an API key
3. Set `GROQ_API_KEY` in `.env.local`

## 4. Google Sheets Data Collection

1. Create a new Google Sheet
2. Go to **Extensions → Apps Script**
3. Paste the code from `google-apps-script/Code.gs`
4. Click **Deploy → New deployment**
5. Select **Web app**, set access to **Anyone**
6. Copy the deployment URL
7. Set `GOOGLE_SHEETS_WEBHOOK_URL` in `.env.local`

## 5. Adsterra Ads

1. Sign up at https://www.adsterra.com
2. Add your site URL
3. Create ad units:
   - Banner: 728×90 (desktop) / 320×50 (mobile)
   - Native: responsive
   - Social Bar: auto
4. Copy the site keys into `.env.local`:
   - `NEXT_PUBLIC_ADSTERRA_BANNER_KEY`
   - `NEXT_PUBLIC_ADSTERRA_NATIVE_KEY`
   - `NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_KEY`

## 6. Deployment (Vercel)

```bash
npx vercel link
npx vercel env add NEWSAPI_KEY
npx vercel env add HF_API_TOKEN
npx vercel env add GROQ_API_KEY
npx vercel env add GOOGLE_SHEETS_WEBHOOK_URL
npx vercel env add NEXT_PUBLIC_ADSTERRA_BANNER_KEY
npx vercel env add NEXT_PUBLIC_ADSTERRA_NATIVE_KEY
npx vercel env add NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_KEY
npx vercel --prod
```
