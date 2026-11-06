import { StateFee } from "@/data/stateFees";

/**
 * Project recurring state-level fees over a selected number of years.
 * Annual charges are counted once per year. Biennial reports are modeled
 * as first due after the first year, then every two years.
 * Variable or unverified amounts are deliberately not estimated.
 */
export function calculateRecurringStateFees(state: StateFee, years: 1 | 3 | 5): number {
  const annualReportOrTax = state.annualFrequency === "annual" ? (state.annualFee ?? 0) * years : 0;
  const biennialReport = state.annualFrequency === "biennial" ? (state.annualFee ?? 0) * Math.floor(years / 2) : 0;
  const annualEntityTax = (state.franchiseTax ?? 0) * years;
  return annualReportOrTax + biennialReport + annualEntityTax;
}

export function calculateFiveYearStateCost(state: StateFee): number {
  return (state.formationFee ?? 0) + calculateRecurringStateFees(state, 5);
}
