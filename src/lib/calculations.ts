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

export function calculateLLCCost(inputs: CalculatorInputs): CostBreakdown {
  const { state, years, includeRegisteredAgent, registeredAgentCost, includeNameReservation, nameReservationCost, expedited, expeditedCost } = inputs;

  const formation = state.formationFee ?? 0;
  const ra = includeRegisteredAgent ? registeredAgentCost : 0;
  const nameRes = includeNameReservation ? nameReservationCost : 0;
  const exp = expedited ? expeditedCost : 0;

  let firstYearRecurring = 0;
  let multiYearRecurring = 0;
  const notes: string[] = [];

  if (state.annualFee != null && state.annualFrequency === "annual") {
    firstYearRecurring = state.annualFee;
    multiYearRecurring = state.annualFee * years;
    notes.push(`Annual report / recurring fee: $${state.annualFee} per year.`);
  } else if (state.annualFee != null && state.annualFrequency === "biennial") {
    firstYearRecurring = 0;
    multiYearRecurring = state.annualFee * Math.ceil(years / 2);
    notes.push(`Biennial fee: $${state.annualFee} every two years (estimate based on ${years}-year period).`);
  } else {
    notes.push("No annual report fee required for this state (or not included).");
  }

  if (state.franchiseTax != null && state.franchiseTax > 0) {
    firstYearRecurring += state.franchiseTax;
    multiYearRecurring += state.franchiseTax * years;
    notes.push(`Franchise / entity tax: $${state.franchiseTax} per year (applies even with zero income in many cases).`);
  }

  if (state.formationIncludesRA) {
    notes.push("Formation fee already includes the required registered agent designation fee.");
  }

  const total =
    formation +
    ra +
    nameRes +
    exp +
    (years === 1 ? firstYearRecurring : multiYearRecurring);

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
