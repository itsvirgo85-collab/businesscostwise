import type { StateFee } from "@/data/stateFees";

/**
 * Estimate fixed state-level charges over a selected horizon.
 * Biennial filings are counted after year one unless the state requires an
 * initial filing during year one (for example, California's initial Statement
 * of Information due within 90 days). Variable taxes are not guessed.
 */
export function calculateRecurringStateFees(state: StateFee, years: 1 | 3 | 5): number {
  const annualReportOrFee =
    state.annualFrequency === "annual" ? (state.annualFee ?? 0) * years : 0;

  const biennialPayments =
    state.annualFrequency === "biennial"
      ? state.biennialInitialPayment
        ? Math.ceil(years / 2)
        : Math.floor(years / 2)
      : 0;
  const biennialReport = (state.annualFee ?? 0) * biennialPayments;
  const annualEntityTax = (state.franchiseTax ?? 0) * years;

  return annualReportOrFee + biennialReport + annualEntityTax;
}

export function calculateFiveYearStateCost(state: StateFee): number {
  return (state.formationFee ?? 0) + calculateRecurringStateFees(state, 5);
}
