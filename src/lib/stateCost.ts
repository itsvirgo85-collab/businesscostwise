import type { StateFee } from "@/data/stateFees";

export interface OptionalCostInputs {
  years: 1 | 3 | 5;
  includeRegisteredAgent: boolean;
  registeredAgentCost: number;
  includeNameReservation: boolean;
  nameReservationCost: number;
  expedited: boolean;
  expeditedCost: number;
}

export interface OptionalCostBreakdown {
  registeredAgent: number;
  nameReservation: number;
  expedited: number;
}

function safeNonNegativeAmount(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

/** Calculate optional user-entered costs without allowing negative or non-finite amounts. */
export function calculateOptionalCosts(inputs: OptionalCostInputs): OptionalCostBreakdown {
  return {
    registeredAgent: inputs.includeRegisteredAgent
      ? safeNonNegativeAmount(inputs.registeredAgentCost) * inputs.years
      : 0,
    nameReservation: inputs.includeNameReservation
      ? safeNonNegativeAmount(inputs.nameReservationCost)
      : 0,
    expedited: inputs.expedited ? safeNonNegativeAmount(inputs.expeditedCost) : 0,
  };
}

/**
 * Estimate fixed state-level charges over a selected horizon.
 * Biennial filings are counted after year one unless the state requires an
 * initial filing during year one (for example, California's initial Statement
 * of Information due within 90 days). Variable taxes are not guessed.
 */
export function calculateRecurringStateFees(state: StateFee, years: 1 | 3 | 5): number {
  const currentYear = new Date().getFullYear();
  let annualReportOrFee = 0;
  if (state.annualFrequency === "annual") {
    const firstBillableYear = state.annualFeeFirstYearExempt ? 1 : 0;
    for (let offset = firstBillableYear; offset < years; offset += 1) {
      const projectedYear = currentYear + offset;
      const waiverApplies =
        state.annualFeeWaiverThroughYear != null &&
        projectedYear <= state.annualFeeWaiverThroughYear;
      const fee = waiverApplies
        ? (state.annualFee ?? 0)
        : (state.annualFeeAfterWaiver ?? state.annualFee ?? 0);
      annualReportOrFee += fee;
    }
  }

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

/** Include Washington's $10 initial-report fee only when the filer defers it. */
export function calculateDeferredInitialReportFee(state: StateFee, includeDeferredInitialReport: boolean): number {
  if (!includeDeferredInitialReport) return 0;
  return safeNonNegativeAmount(state.deferredInitialReportFee ?? 0);
}
