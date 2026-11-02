# BusinessCostWise

US-focused educational website for **LLC formation costs**, business structure comparisons, and small-business asset protection.

**Live-ready Next.js 15 + TypeScript + Tailwind site.**

## Status

- Homepage with hero + tools + trust section
- Interactive **LLC Cost Calculator** (state select, 1/3/5 year, optional registered agent / name reservation / expedite)
- **30 verified states + DC** with official government source links and verification dates
- Dynamic state detail pages (`/llc-cost-by-state/[state]`)
- LLC Costs by State comparison table
- LLC vs Sole Proprietorship comparison guide
- Asset Protection educational checklist
- About, Sources & Methodology, Disclaimer pages
- SEO: metadata, sitemap, robots.txt

Every published state fee is tied to an official source. Unverified fees are never shown as $0.

### States covered (30 + DC)

AL, AZ, AR, CA, CO, DE, FL, GA, HI, ID, IL, IN, KY, MA, MI, MO, MT, NV, NM, NY, NC, OH, PA, SC, TX, UT, VA, WA, WY + DC

## Deploy to Vercel (live)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. **Add New Project** → Import `itsvirgo85-collab/businesscostwise`
3. Framework Preset: **Next.js** (auto-detected)
4. Click **Deploy**
5. You will get a live `*.vercel.app` URL in under a minute

Optional later: add a custom domain in Vercel project settings.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Expanding state data

Edit `src/data/stateFees.ts`. Every new record **must** include:
- `sourceUrl` (official government page)
- `sourceName`
- `verifiedAt` (ISO date)
- `status: "verified"`

## Important

This is an educational resource only. It is **not** legal, tax, or financial advice. Always confirm current fees on the official state website before filing.
