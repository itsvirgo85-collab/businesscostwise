# Fee data automation

This folder stores outputs from the **automated fee-source monitor**.

## Files

- `fee-source-snapshot.json` — last successful fingerprints of official state source pages
- `fee-monitor-report.json` — latest run report (reachable / changed / unreachable)

## How it works

1. `scripts/monitor-fee-sources.mjs` reads official `sourceUrl` values from `src/data/stateFees.ts`
2. Each government page is fetched with a clear educational User-Agent
3. Content fingerprints are compared to the previous snapshot
4. GitHub Actions runs the script on a schedule (and on manual dispatch)
5. When pages change or become unreachable, an issue is opened/updated for review
6. Confirmed fee amount changes are applied to `src/data/stateFees.ts` so the calculator and state pages stay current

This process is the operational backbone of “auto-fetch latest information from official sources” for Get LLC Cost Calculator.
