import { StateFee } from "@/data/stateFees";

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

/**
 * Educational cost estimate from official state fee fields.
 * Does NOT include: publication, local licenses, federal taxes, professional fees.
 */
export function calculateLLCCost(inputs: CalculatorInputs): CostBreakdown {
  const {
    state,
    years,
    includeRegisteredAgent,
    registeredAgentCost,
    includeNameReservation,
    nameReservationCost,
    expedited,
    expeditedCost,
  } = inputs;

  const formation = state.formationFee ?? 0;
  const ra = includeRegisteredAgent ? registeredAgentCost * years : 0;
  const nameRes = includeNameReservation ? nameReservationCost : 0;
  const exp = expedited ? expeditedCost : 0;

  let firstYearRecurring = 0;
  let multiYearRecurring = 0;
  const notes: string[] = [];

  if (state.annualFee != null && state.annualFee > 0 && state.annualFrequency === "annual") {
    firstYearRecurring += state.annualFee;
    multiYearRecurring += state.annualFee * years;
    notes.push(`Annual report / recurring fee: $${state.annualFee} per year.`);
  } else if (state.annualFee != null && state.annualFee > 0 && state.annualFrequency === "biennial") {
    const payments = Math.ceil(years / 2);
    firstYearRecurring += 0;
    multiYearRecurring += state.annualFee * payments;
    notes.push(
      `Biennial fee: $${state.annualFee} every two years (~${payments} payment(s) over ${years} years).`
    );
  } else {
    notes.push("No annual report fee required for this state (or not included in this estimate).");
  }

  if (state.franchiseTax != null && state.franchiseTax > 0) {
    firstYearRecurring += state.franchiseTax;
    multiYearRecurring += state.franchiseTax * years;
    notes.push(
      `Franchise / entity tax: $${state.franchiseTax} per year (often applies even with $0 income).`
    );
  }

  if (state.formationIncludesRA) {
    notes.push("Formation fee already includes the required registered agent designation with the state.");
  }

  if (includeRegisteredAgent && registeredAgentCost > 0) {
    notes.push(
      `Commercial registered agent estimated at $${registeredAgentCost}/year × ${years} year(s).`
    );
  }

  const recurringForPeriod = years === 1 ? firstYearRecurring : multiYearRecurring;
  const total = formation + ra + nameRes + exp + recurringForPeriod;

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
    sources: [{ name: state.sourceName, url: state.sourceUrl }],
  };
}
