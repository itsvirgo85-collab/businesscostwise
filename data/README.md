# Fee data automation

This folder stores outputs from the **automated fee-source monitor** — the loop
that keeps the site's fees current when a state changes them.

## Files

- `fee-source-snapshot.json` — last successful fingerprints of official state source pages
- `fee-monitor-report.json` — latest run report (reachable / changed / unreachable)
- `fee-update-proposals.json` — fee-change proposals extracted from changed sources, with confidence
- `fee-updates-applied.json` — what the last apply run did (applied / reverted / review)

## How the loop works

1. **Monitor** — `scripts/monitor-fee-sources.mjs` reads official `sourceUrl`
   values from `src/data/stateFees.ts`, fetches each government page, and
   compares content fingerprints to the previous snapshot. A changed
   fingerprint only means "look at this page"; it does not mean a fee changed.
2. **Extract** — `scripts/extract-fee-changes.mjs` re-fetches each changed
   source, extracts its text (HTML or PDF), and looks for dollar amounts
   linked to fee keywords (formation, annual report, franchise tax). Each
   proposal carries a confidence of `high` or `review`.
3. **Apply** — `scripts/apply-fee-updates.mjs` applies **high-confidence
   proposals only**, by editing just that field's line in `src/data/stateFees.ts`
   and stamping `verifiedAt` with today's date. Then the test suite runs: if
   it fails, the file is restored from git and the proposals move to review.
4. **Commit + deploy** — GitHub Actions (`.github/workflows/fee-monitor.yml`,
   Mon + Thu 14:00 UTC and manual dispatch) runs the three scripts, commits
   any outputs and auto-applied fee changes, and Vercel deploys the new commit.
5. **Issue** — the same workflow opens or updates a `fee-monitor` issue
   listing auto-applied changes, items needing human review, and unreachable
   sources.

Run the whole loop locally with `npm run fees:update`.

## When is a proposal "high" confidence?

All of these must hold: the amount is the single unambiguous match for its
field (keyword linked to the first amount after it on the same or an adjacent
line); the amount is a plain number (integer or .00/.50); it is within sane
bounds (at most 2× the current dataset maximum for that field, with a floor);
it differs from the current value; its line holds exactly one amount; it is
not one component of the current fee (e.g. $100 + $25 = $125); and the change
is at most 50%. A proposal for an annual fee where the state has no annual
report is never high confidence. Everything else is `review` and is never
auto-applied. See the header comment in `scripts/extract-fee-changes.mjs`.

## Honest limits

- **Sources that block automated fetching can never auto-update.** Some
  state sites return 403, bot-block pages, or time out (currently 11 of 51:
  Alaska, Georgia, Illinois, Iowa, Maine, Michigan, Montana, New Hampshire,
  Ohio, Tennessee, Wisconsin). They stay in the review queue; a human has to
  check them.
- **Whole-page fingerprints are noisy.** Government pages embed per-request
  content (timestamps, session tokens), so a "changed" flag often means the
  page moved, not that a fee moved. The extractor is the filter that looks
  only at fee amounts; most "changed" flags produce no proposal at all.
- **PDF extraction can fail** (scanned or malformed PDFs, fetch blocks) and
  falls back to review.
- **Ambiguous amounts are never auto-applied.** Fee tables that itemise a
  total, list mail/online/in-person variants, or mix entity types go to a
  human. A wrong number can still slip past the tests if no test pins that
  exact value — the review queue and the confidence rules are the main
  defence, so check the `fee-monitor` issue after each run.

This process is the operational backbone of "auto-fetch latest information
from official sources" for Get LLC Cost Calculator.
