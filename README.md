# BusinessCostWise

US-focused educational website for LLC formation costs, business structure comparisons, and small-business asset protection.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Browser-based LLC cost calculator
- Official government source links for every published state fee

## Features

- **LLC Cost Calculator** – Select verified states, optional registered agent / name reservation / expedite, 1/3/5 year estimates
- **Costs by State** – Table of formation + recurring fees with source URLs and verification dates
- **LLC vs Sole Proprietorship** – Side-by-side comparison with IRS/SBA references
- **Asset Protection** – Educational checklist (not legal advice)
- SEO: metadata, sitemap, robots, clean URLs

## Important rules

- No fee is published without an official source URL
- Unverified fees are never shown as $0
- Content is educational only — not legal or tax advice

## Deploy to Vercel

1. Import this repository in [Vercel](https://vercel.com)
2. Framework preset: Next.js
3. Deploy — you get a live `*.vercel.app` URL immediately
4. Optional: add a custom domain later

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Expanding state data

Edit `src/data/stateFees.ts`. Every new record must include `sourceUrl`, `sourceName`, `verifiedAt`, and `status`.
