# BusinessCostWise

US-focused educational website for **LLC formation costs**, business structure comparisons, and small-business asset protection.

**Stack:** Next.js 15 · TypeScript · Tailwind CSS  
**Ready for live deploy on Vercel.**

## What’s included

### Cost tools & data
- Interactive **LLC Cost Calculator** (1 / 3 / 5 year estimates, optional registered agent)
- **All 50 states + DC** fee data with official government source links and verification dates
- Dynamic state detail pages with multi-year cost estimates (`/llc-cost-by-state/[state]`)
- **Cheapest States** and **Most Expensive States** rankings (2026)
- **Hidden Costs of Forming an LLC** guide
- **Annual Report Requirements by State**

### Structure & protection guides
- LLC vs Sole Proprietorship
- LLC vs Corporation
- Single-Member vs Multi-Member LLC
- Does an LLC Protect Personal Assets?

### Trust & legal
- About + Sources & Methodology
- Privacy Policy, Terms of Use, Disclaimer
- JSON-LD (WebSite + Organization) + per-state structured data
- Dynamic sitemap (all static + every state page), robots.txt

Every published state fee is tied to an official source. Unverified fees are never shown as $0.

## Deploy to Vercel (live in ~2 minutes)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. **Add New Project** → Import `itsvirgo85-collab/businesscostwise`
3. Framework Preset: **Next.js** (auto-detected)
4. Leave settings default → **Deploy**
5. You receive a live `*.vercel.app` URL

Optional: add a custom domain in Project Settings → Domains.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Data rules

Edit `src/data/stateFees.ts`. Every record **must** include:

- `sourceUrl` — official government page
- `sourceName`
- `verifiedAt` (ISO date)
- `status: "verified"`

Never invent fees. Prefer “Not verified” over a guessed number.

## Important disclaimer

This is an **educational resource only**. It is not legal, tax, or financial advice. Always confirm current fees and requirements on the official state website before filing or budgeting.
