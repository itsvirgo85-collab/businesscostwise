# BusinessCostWise

US-focused educational website for **LLC formation costs**, business structure comparisons, and small-business asset protection.

**Stack:** Next.js 15 · TypeScript · Tailwind CSS  
**Ready for live deploy on Vercel.**

## What’s included

- Interactive **LLC Cost Calculator** (1 / 3 / 5 year estimates, optional registered agent, name reservation, expedite)
- **All 50 states + DC** fee data with official government source links and verification dates
- Dynamic state detail pages (`/llc-cost-by-state/[state]`)
- LLC Costs by State comparison table
- LLC vs Sole Proprietorship comparison guide
- Asset Protection educational checklist
- About, Sources & Methodology, Disclaimer, Privacy Policy, Terms of Use
- SEO: unique metadata, dynamic sitemap (including every state page), robots.txt

Every published state fee is tied to an official source. Unverified fees are never shown as $0.

## Deploy to Vercel (live in ~2 minutes)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. **Add New Project** → Import `itsvirgo85-collab/businesscostwise`
3. Framework Preset: **Next.js** (auto-detected)
4. Leave all other settings default → **Deploy**
5. You receive a live `*.vercel.app` URL

Optional: add a custom domain in Project Settings → Domains.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Data rules

Edit `src/data/stateFees.ts`. Every new or updated record **must** include:

- `sourceUrl` — official government page
- `sourceName`
- `verifiedAt` (ISO date)
- `status: "verified"`

Never invent fees. Prefer “Not verified” over a guessed number.

## Important disclaimer

This is an **educational resource only**. It is not legal, tax, or financial advice. Always confirm current fees and requirements on the official state website before filing or budgeting.

## Project structure (key paths)

```
src/
  app/
    page.tsx                          # Homepage
    llc-cost-calculator/              # Calculator page
    llc-cost-by-state/                # Hub + dynamic [state] pages
    business-structures/...           # Comparison guides
    asset-protection/
    about/ + sources-and-methodology/
    privacy/  terms/  disclaimer/
  components/calculators/LLCCostCalculator.tsx
  data/stateFees.ts                   # Single source of truth for fees
  lib/calculations.ts
```

## Next improvements (optional)

- Custom domain + brand assets
- Additional comparison guides (LLC vs Corporation, etc.)
- Supabase for fee history / admin verification workflow
- Performance and accessibility audit
