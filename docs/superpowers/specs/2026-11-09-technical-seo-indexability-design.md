# Technical SEO Indexability Remediation — Design

**Date:** 2026-11-09  
**Site:** https://www.getllccostcalculator.com  
**Repository:** itsvirgo85-collab/businesscostwise  
**Branch:** fix/technical-seo-indexability-2026-11-09

## Intent

Correct the confirmed sitemap freshness defect without making unsupported changes to URLs, page content, canonical tags, robots directives, or the LLC fee dataset. The goal is to ensure sitemap `lastmod` communicates real content/data changes rather than the time Google (or another crawler) requests the sitemap.

## Evidence observed

- The supplied Search Console Coverage Drilldown export dated 2026-11-09 lists 35 URLs as **Crawled - currently not indexed**; 24 are `/llc-cost-by-state/` URLs. The export is a snapshot, not live Search Console access.
- The live `robots.txt` returned HTTP 200 and allows `/`, disallowing only `/api/`; the affected URLs are public pages, not API endpoints.
- The live sitemap returned HTTP 200 and already includes `/contact`.
- In the inspected live page sample, pages returned HTTP 200, declared `index, follow`, had one H1, and declared a self-referencing canonical. This sample does not prove every URL has identical behavior.
- In `src/app/sitemap.ts`, static pages set `lastModified: now` where `now = new Date()`. Two live sitemap fetches showed the static-page timestamps changing between requests, although page content had not been shown to change.
- State-page sitemap entries already use `new Date(s.verifiedAt)`, which is tied to the fee-data verification date and should be retained.

## Approaches considered

1. **Keep the current request-time timestamp.** Rejected because it falsely reports every static URL as freshly modified whenever the sitemap is generated.
2. **Omit `lastmod` for static pages; keep verified data dates for state pages.** Recommended: no artificial timestamps, no invented page modification dates, and the state-data timestamp remains meaningful.
3. **Add a hand-maintained modification date for every static route.** Rejected for this narrow fix because no trustworthy per-page change log currently exists; guessed dates would be misleading.

## Goals

- Static sitemap URLs omit `lastmod` when a real page-specific modification date is unavailable.
- Verified state URLs keep `lastmod` based on `verifiedAt`.
- Keep Contact and existing sitemap URLs unchanged.
- Add a regression test and include it in the project's normal test command.

## Non-goals

- Guarantee Google indexation or submit indexing requests.
- Add `noindex`, remove, redirect, or consolidate any of the 35 URLs without URL-level evidence and an explicit content decision.
- Rewrite the 24 state pages with generic filler or alter official state fee data.
- Change the preferred www host, URL paths, canonical tags, or robots policy without a verified defect.
- Claim Core Web Vitals, traffic, ranking, or Search Console URL Inspection results that have not been measured.

## Constraints and implementation decisions

- Preserve the existing Next.js App Router and metadata sitemap route.
- Keep the current URL inventory and `STATE_FEES.filter((s) => s.status === "verified")` behavior.
- Do not alter `lastModified: new Date(s.verifiedAt)` for state pages.
- Run the full repository tests, lint, dependency audit, and production build before release.
- Work on a dedicated feature branch; production is not changed until the tested branch is reviewed and released.
