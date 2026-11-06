import type { StateFee } from "@/data/stateFees";
import { calculateRecurringStateFees } from "@/lib/stateCost";

export interface CalculatorInputs {
  state: StateFee;
  years: 1 | 3 | 5;
  includeRegisteredAgent: boolean;
  registeredAgentCost: number;
  includeNameReservation: boolean;
  nameReservationCost: number;
  expedited: boolean;
  expeditedCost: number;
}

export interface CostBreakdown {
  formationFee: number;
  registeredAgent: number;
  nameReservation: number;
  expedited: number;
  firstYearRecurring: number;
  multiYearRecurring: number;
  total: number;
  years: number;
  notes: string[];
  sources: { name: string; url: string }[];
}

function safeNonNegativeAmount(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

/**
 * Educational estimate based on fixed state fee fields.
 * Variable income/net-worth taxes, publication, local licenses, federal taxes,
 * and professional fees are excluded unless separately entered by the user.
 */
export function calculateLLCCost(inputs: CalculatorInputs): CostBreakdown {
  const { state, years } = inputs;
  const formation = safeNonNegativeAmount(state.formationFee ?? 0);
  const agentAnnual = safeNonNegativeAmount(inputs.registeredAgentCost);
  const ra = inputs.includeRegisteredAgent ? agentAnnual * years : 0;
  const nameRes = inputs.includeNameReservation
    ? safeNonNegativeAmount(inputs.nameReservationCost)
    : 0;
  const exp = inputs.expedited ? safeNonNegativeAmount(inputs.expeditedCost) : 0;

  const firstYearRecurring = calculateRecurringStateFees(state, 1);
  const multiYearRecurring = calculateRecurringStateFees(state, years);
  const recurringForPeriod = years === 1 ? firstYearRecurring : multiYearRecurring;
  const total = formation + ra + nameRes + exp + recurringForPeriod;
  const notes: string[] = [
    state.notes,
    "Timing note: this is a fixed-fee budget estimate, not a filing calendar. Annual and biennial due dates depend on the formation date and state rules; a charge may fall before or after the exact 12-month anniversary. Confirm deadlines with the linked agency.",
  ];

  if (state.annualFrequency === "annual") {
    if (state.annualFee == null) {
      notes.push("An annual filing or fee may apply, but its fixed amount is not verified and is not included.");
    } else if (state.annualFee === 0) {
      if (state.annualFeeAfterWaiver != null && state.annualFeeWaiverThroughYear != null) {
        notes.push(
          `${state.recurringFeeLabel ?? "Annual filing"}: $0 through ${state.annualFeeWaiverThroughYear}; this projection assumes ${state.annualFeeAfterWaiver} per year after the waiver expires.`
        );
      } else {
        notes.push(`${state.recurringFeeLabel ?? "Annual filing"}: required annually; $0 state filing fee in this estimate.`);
      }
    } else {
      notes.push(`${state.recurringFeeLabel ?? "Annual report / recurring fee"}: $${state.annualFee} per year.`);
    }
  } else if (state.annualFrequency === "biennial" && (state.annualFee ?? 0) > 0) {
    const payments = state.biennialInitialPayment ? Math.ceil(years / 2) : Math.floor(years / 2);
    notes.push(
      state.biennialInitialPayment
        ? `${state.recurringFeeLabel ?? "Biennial filing"}: $${state.annualFee} initially within year one, then every two years (${payments} estimated payment(s) over ${years} years).`
        : `${state.recurringFeeLabel ?? "Biennial filing"}: $${state.annualFee} every two years (${payments} estimated payment(s) over ${years} years).`
    );
  } else if (state.annualFrequency === "none" && state.annualFee == null && state.franchiseTax == null) {
    notes.push("A recurring state fee has not been verified and is not included in this estimate.");
  } else if (state.annualFrequency === "none") {
    notes.push("No standard annual or biennial report fee is listed in the verified state data.");
  }

  if (state.franchiseTax != null && state.franchiseTax > 0) {
    notes.push(
      `Franchise / entity tax minimum or fixed amount: $${state.franchiseTax} per year. Any variable amount above this figure is not estimated.`
    );
  }
  if (state.formationIncludesRA) {
    notes.push("The state formation fee includes the registered-agent designation filing; it does not necessarily include a commercial agent service.");
  }
  if (inputs.includeRegisteredAgent && ra > 0) {
    notes.push(`Commercial registered agent estimate: $${agentAnnual}/year × ${years} year(s).`);
  }
  if (inputs.includeNameReservation && nameRes > 0) {
    notes.push(`Optional name reservation entered by user: $${nameRes}.`);
  }
  if (inputs.expedited && exp > 0) {
    notes.push(`Optional expedited processing entered by user: $${exp}.`);
  }

  return {
    formationFee: formation,
    registeredAgent: ra,
    nameReservation: nameRes,
    expedited: exp,
    firstYearRecurring,
    multiYearRecurring,
    total,
    years,
    notes,
    sources: [
      { name: state.sourceName, url: state.sourceUrl },
      ...(state.additionalSources ?? []),
    ],
  };
}
