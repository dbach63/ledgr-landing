# Ledgr Landing Page

Marketing landing page for **Ledgr** — bookkeeping for independent contractors.
Built with Next.js 14 (App Router), TypeScript, Tailwind CSS v3, and deployed on Cloudflare Pages.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Icons | lucide-react |
| Fonts | Sora (headings), Inter (body) via next/font |
| Deployment | Cloudflare Pages via @cloudflare/next-on-pages |

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables and fill in values
cp .env.local.example .env.local

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

The waitlist API route (`app/api/waitlist/route.ts`) currently logs submissions to the console.
To connect a real email service, set the appropriate variables in `.env.local` and in the
Cloudflare Pages dashboard under **Settings → Environment Variables**.

### Resend

```
RESEND_API_KEY=re_...
RESEND_AUDIENCE_ID=aud_...
```

### ConvertKit

```
CK_API_KEY=...
CK_FORM_ID=...
```

### Mailchimp

```
MC_API_KEY=...abc123-us21
MC_LIST_ID=...
```

See the TODO block in `app/api/waitlist/route.ts` for integration code for each option.

---

## i18n

All page copy lives in `lib/i18n.ts`. The `LanguageContext` in `lib/LanguageContext.tsx`
auto-detects the user's browser language (`navigator.language`) on first load and persists
their choice to `localStorage` under the key `ledgr-locale`.

Supported locales: `en`, `es`.

---

## Cloudflare Pages Deployment

### First deploy

```bash
# 1. Build for Cloudflare Pages
npm run pages:build

# 2. Deploy (prompts for project name on first run)
npx wrangler pages deploy .vercel/output/static
```

### Subsequent deploys

```bash
npm run pages:build && npm run deploy
```

### Local preview with Cloudflare Workers runtime

```bash
npm run preview
```

### Convenience scripts (defined in package.json)

| Script | What it does |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm run build` | Standard Next.js production build |
| `npm run pages:build` | Compiles for Cloudflare Pages via @cloudflare/next-on-pages |
| `npm run preview` | pages:build + local Wrangler Pages dev server |
| `npm run deploy` | pages:build + wrangler pages deploy |

---

## Project Structure

```
app/
  api/waitlist/route.ts   # Waitlist POST endpoint (edge runtime)
  layout.tsx              # Root layout — fonts, metadata, LanguageProvider
  page.tsx                # Page shell — composes all section components
  globals.css             # Tailwind base/components/utilities
components/
  Navbar.tsx              # Sticky nav, EN/ES toggle, Join Waitlist CTA
  Hero.tsx                # Full-viewport hero with phone mockup
  Features.tsx            # 3-column feature card grid
  HowItWorks.tsx          # 3-step horizontal flow with connector line
  SocialProof.tsx         # Stat strip, testimonials, trust badges
  WaitlistForm.tsx        # Email capture form with success/error states
  Footer.tsx              # Wordmark, tagline, legal links, copyright
lib/
  i18n.ts                 # All page copy in EN and ES, fully typed
  LanguageContext.tsx     # React context — locale state, setLocale, t
public/
  robots.txt
  sitemap.xml
wrangler.toml             # Cloudflare Pages config
```
