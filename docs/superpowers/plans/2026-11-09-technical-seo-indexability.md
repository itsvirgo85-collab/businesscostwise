# Technical SEO Indexability Remediation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stop static sitemap URLs from claiming a new modification date on every request while preserving state-data verification dates.

**Architecture:** Keep the existing Next.js sitemap route and URL inventory. Remove the request-time `lastModified` value from static entries, retain `verifiedAt` for state entries, and add a regression test to the standard test suite.

**Tech Stack:** Next.js 15 App Router, TypeScript, Node.js built-in test runner.

**Spec:** `docs/superpowers/specs/2026-11-09-technical-seo-indexability-design.md`

## Global Constraints

- Preserve the existing canonical host: `https://www.getllccostcalculator.com`.
- Preserve all existing sitemap paths, including `/contact`.
- State pages remain limited to records with `status === "verified"`.
- State-page `lastModified` remains derived from `s.verifiedAt`.
- Do not add artificial static-page modification dates or change robots/canonical directives.
- Do not promise Google indexing.

## Review Focus

- Static routes must not receive a moving timestamp on each sitemap request — covered by the regression test.
- State-page dates must continue to reflect data verification — covered by the regression test.
- Contact must remain in the sitemap — covered by the regression test.
- Pending state records must remain excluded — preserve the existing filter; inspect the final diff.
- The broader test/build/lint commands must still work — run all repository checks.

---

### Task 1: Correct sitemap modification dates

**Files:**
- Create: `scripts/sitemap.test.mjs`
- Modify: `package.json`
- Modify: `src/app/sitemap.ts`
- Create: `docs/superpowers/specs/2026-11-09-technical-seo-indexability-design.md`
- Create: `docs/superpowers/plans/2026-11-09-technical-seo-indexability.md`

**Interfaces:**
- Consumes: existing `MetadataRoute.Sitemap`, `staticPaths`, and `STATE_FEES`.
- Produces: static sitemap entries without `lastModified`; verified state entries with `lastModified = new Date(s.verifiedAt)`.

- [ ] **Step 1: Add regression tests first** in `scripts/sitemap.test.mjs`:
  - `static sitemap URLs do not claim a fresh lastmod on every request`
  - `verified state sitemap URLs retain their actual data verification date`
  - `the Contact page remains included in the sitemap`

- [ ] **Step 2: Run the new test against the existing code.**

  Run: `node --test scripts/sitemap.test.mjs`

  Expected: the static-page test fails because `lastModified: now` is present; the state-date and Contact checks pass.

- [ ] **Step 3: Include all test files in the project test command.**

  Set `package.json` `test` to `node --experimental-strip-types --test scripts/*.test.mjs`.

- [ ] **Step 4: Implement the minimal sitemap correction.**

  In `src/app/sitemap.ts`, remove `const now = new Date()` and remove `lastModified: now` from the static-page mapper. Keep the state-page `lastModified: new Date(s.verifiedAt)` and all current paths/filters.

- [ ] **Step 5: Verify the focused and full test suites.**

  Run: `node --test scripts/sitemap.test.mjs`  
  Expected: 3 tests pass.

  Run: `npm test`  
  Expected: all existing state-cost tests plus the 3 sitemap tests pass.

- [ ] **Step 6: Run quality checks.**

  Run: `npm run lint`  
  Run: `npm run audit`  
  Run: `npm run build`  
  Expected: each command exits successfully; report any environment or dependency limitation rather than assuming success.

- [ ] **Step 7: Inspect the final diff and commit.**

  Confirm only the intended sitemap/test/docs changes are present and the URL inventory is unchanged. Commit with message: `fix(seo): use meaningful sitemap lastmod values`.
