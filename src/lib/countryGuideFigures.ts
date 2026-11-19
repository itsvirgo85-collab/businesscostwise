import { getStateBySlug, STATE_FEES } from "../data/stateFees.ts";
import { getDissolutionFee } from "../data/dissolutionFees.ts";
import { calculateRecurringStateFees } from "./stateCost.ts";
import {
  DEFAULT_AGENT_COST_PER_YEAR,
  FX_RATE_DATE,
  calculateNonResidentCost,
  convertUsd,
  formatConverted,
  formatUsd,
  getDefaultRate,
  type NonResidentCurrencyCode,
} from "./nonResidentCost.ts";

/**
 * Pre-formatted figures for the Phase 2 country guides.
 *
 * Every US state fee here is computed from stateFees.ts /
 * dissolutionFees.ts at render time — never a literal. Converted figures
 * use the corrected default FX rate for the page's currency (EUR 0.89,
 * NZD 1.81, GBP 0.75, CAD 1.41, AUD 1.49, SGD 1.29, AED 3.67, INR 93.50)
 * as of FX_RATE_DATE and are labelled estimates on the page.
 * Five-year totals count five recurring payments (site convention).
 */
export interface CountryGuideFigures {
  currency: NonResidentCurrencyCode;
  rate: number;
  agentPerYear: string;
  /** Wyoming ongoing cost per year with a $125/yr agent (state + agent). */
  wyOngoingUsd: string;
  wyOngoingLocal: string;
  /** New Mexico ongoing cost per year with a $125/yr agent ($0 state fee). */
  nmOngoingUsd: string;
  nmOngoingLocal: string;
  /** Delaware ongoing cost per year with a $125/yr agent. */
  deOngoingUsd: string;
  deOngoingLocal: string;
  wyYear1Usd: string;
  wyYear1Local: string;
  wyFiveYearUsd: string;
  wyFiveYearLocal: string;
  nmYear1Usd: string;
  nmYear1Local: string;
  nmFiveYearUsd: string;
  nmFiveYearLocal: string;
  deYear1Usd: string;
  deYear1Local: string;
  deFiveYearUsd: string;
  deFiveYearLocal: string;
  /** State-fees-only 5-year totals (no agent). */
  nmFiveYearStateOnly: string;
  wyFiveYearStateOnly: string;
  deFiveYearStateOnly: string;
  wyFormation: string;
  nmFormation: string;
  deFormation: string;
  wyAnnualReport: string;
  deAnnualTax: string;
  /** Dissolution filing fees from dissolutionFees.ts. */
  nmDissolution: string;
  wyDissolution: string;
  deDissolution: string;
  /** Dissolution fees converted into the page's currency. */
  nmDissolutionLocal: string;
  wyDissolutionLocal: string;
  deDissolutionLocal: string;
  /** States with a $0 annual report fee, computed from stateFees.ts. */
  zeroReportStates: string;
}

function withAgentTotals(slug: string) {
  const state = getStateBySlug(slug)!;
  return calculateNonResidentCost({
    state,
    includeRegisteredAgent: true,
    registeredAgentCostPerYear: DEFAULT_AGENT_COST_PER_YEAR,
    includeMailForwarding: false,
    mailForwardingCostPerMonth: 0,
    einService: "diy",
    einServiceCost: 0,
  });
}

function stateOnlyFiveYear(slug: string): number {
  const state = getStateBySlug(slug)!;
  return (state.formationFee ?? 0) + calculateRecurringStateFees(state, 5);
}

export function countryGuideFigures(
  currency: NonResidentCurrencyCode,
): CountryGuideFigures {
  const rate = getDefaultRate(currency);
  const local = (usd: number) => formatConverted(convertUsd(usd, rate), currency);
  const wy = withAgentTotals("wyoming");
  const nm = withAgentTotals("new-mexico");
  const de = withAgentTotals("delaware");
  const wyoming = getStateBySlug("wyoming")!;
  const newMexico = getStateBySlug("new-mexico")!;
  const delaware = getStateBySlug("delaware")!;
  const wyOngoing =
    calculateRecurringStateFees(wyoming, 1) + DEFAULT_AGENT_COST_PER_YEAR;
  const nmOngoing =
    calculateRecurringStateFees(newMexico, 1) + DEFAULT_AGENT_COST_PER_YEAR;
  const deOngoing =
    calculateRecurringStateFees(delaware, 1) + DEFAULT_AGENT_COST_PER_YEAR;
  const zeroReport = STATE_FEES.filter(
    (s) =>
      (s.annualFee ?? null) === 0 &&
      s.annualFrequency === "none" &&
      (s.franchiseTax ?? 0) === 0,
  ).map((s) => s.state);

  return {
    currency,
    rate,
    agentPerYear: formatUsd(DEFAULT_AGENT_COST_PER_YEAR),
    wyOngoingUsd: formatUsd(wyOngoing),
    wyOngoingLocal: local(wyOngoing),
    nmOngoingUsd: formatUsd(nmOngoing),
    nmOngoingLocal: local(nmOngoing),
    deOngoingUsd: formatUsd(deOngoing),
    deOngoingLocal: local(deOngoing),
    wyYear1Usd: formatUsd(wy.year1Usd),
    wyYear1Local: local(wy.year1Usd),
    wyFiveYearUsd: formatUsd(wy.fiveYearUsd),
    wyFiveYearLocal: local(wy.fiveYearUsd),
    nmYear1Usd: formatUsd(nm.year1Usd),
    nmYear1Local: local(nm.year1Usd),
    nmFiveYearUsd: formatUsd(nm.fiveYearUsd),
    nmFiveYearLocal: local(nm.fiveYearUsd),
    deYear1Usd: formatUsd(de.year1Usd),
    deYear1Local: local(de.year1Usd),
    deFiveYearUsd: formatUsd(de.fiveYearUsd),
    deFiveYearLocal: local(de.fiveYearUsd),
    nmFiveYearStateOnly: formatUsd(stateOnlyFiveYear("new-mexico")),
    wyFiveYearStateOnly: formatUsd(stateOnlyFiveYear("wyoming")),
    deFiveYearStateOnly: formatUsd(stateOnlyFiveYear("delaware")),
    wyFormation: formatUsd(wyoming.formationFee ?? 0),
    nmFormation: formatUsd(newMexico.formationFee ?? 0),
    deFormation: formatUsd(delaware.formationFee ?? 0),
    wyAnnualReport: formatUsd(wyoming.annualFee ?? 0),
    deAnnualTax: formatUsd(delaware.franchiseTax ?? 0),
    nmDissolution: formatUsd(getDissolutionFee("new-mexico")?.fee ?? 0),
    wyDissolution: formatUsd(getDissolutionFee("wyoming")?.fee ?? 0),
    deDissolution: formatUsd(getDissolutionFee("delaware")?.fee ?? 0),
    nmDissolutionLocal: local(getDissolutionFee("new-mexico")?.fee ?? 0),
    wyDissolutionLocal: local(getDissolutionFee("wyoming")?.fee ?? 0),
    deDissolutionLocal: local(getDissolutionFee("delaware")?.fee ?? 0),
    zeroReportStates: zeroReport.join(", "),
  };
}

export { FX_RATE_DATE };
