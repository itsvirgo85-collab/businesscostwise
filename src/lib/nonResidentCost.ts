import { calculateRecurringStateFees } from "./stateCost.ts";
import type { StateFee } from "../data/stateFees.ts";

/**
 * Non-resident LLC cost maths.
 *
 * State fees come ONLY from stateFees.ts. Totals use
 * calculateRecurringStateFees (the same function calculateLLCCost uses for
 * its recurring portion) plus the formation fee from the state record, so a
 * total here always equals calculateLLCCost with the same state, years and
 * agent settings and no optional extras (no name reservation, no expedited
 * filing, no deferred initial report).
 *
 * This module deliberately uses relative imports only: the repo's node:test
 * suite runs with --experimental-strip-types and cannot resolve the `@/`
 * alias, so importing calculations.ts (which uses `@/lib/stateCost`) would
 * break the tests. calculateRecurringStateFees is imported relatively and
 * is node-safe.
 *
 * FIVE-YEAR CONVENTION (site-wide, decided 19 Nov 2026): a five-year horizon
 * counts FIVE recurring payments. That gives the published five-year state
 * totals (see the phase-1 tests for the exact figures). The four-payment
 * figures sometimes quoted elsewhere undercount by one annual payment and
 * must not be used.
 */

export type NonResidentCurrencyCode =
  | "GBP"
  | "EUR"
  | "CAD"
  | "AUD"
  | "NZD"
  | "CHF"
  | "SGD"
  | "AED"
  | "INR";

export interface CurrencyInfo {
  code: NonResidentCurrencyCode;
  label: string;
  /** Units of home currency per 1 USD (foreign currency per USD). */
  defaultRate: number;
}

/** Date of the default FX rates (Bank of England spot + Fed H.10, 18 Nov 2026). */
export const FX_RATE_DATE = "18 November 2026";
export const FX_RATE_SOURCE = "Bank of England spot rates and Federal Reserve H.10";

/**
 * Default FX rates, verified 18–19 Nov 2026. CHF 0.84 is the rounded
 * 1 USD = 0.84378 CHF rate; AED 3.67 is the pegged rate. Every rate is
 * editable by the user in the calculator.
 */
export const NON_RESIDENT_CURRENCIES: CurrencyInfo[] = [
  { code: "GBP", label: "British pound (GBP)", defaultRate: 0.75 },
  { code: "EUR", label: "Euro (EUR)", defaultRate: 0.89 },
  { code: "CAD", label: "Canadian dollar (CAD)", defaultRate: 1.41 },
  { code: "AUD", label: "Australian dollar (AUD)", defaultRate: 1.49 },
  { code: "NZD", label: "New Zealand dollar (NZD)", defaultRate: 1.81 },
  { code: "CHF", label: "Swiss franc (CHF)", defaultRate: 0.84 },
  { code: "SGD", label: "Singapore dollar (SGD)", defaultRate: 1.29 },
  { code: "AED", label: "UAE dirham (AED)", defaultRate: 3.67 },
  { code: "INR", label: "Indian rupee (INR)", defaultRate: 93.5 },
];

export const NON_RESIDENT_CURRENCY_CODES: NonResidentCurrencyCode[] =
  NON_RESIDENT_CURRENCIES.map((c) => c.code);

export function isNonResidentCurrencyCode(
  value: string,
): value is NonResidentCurrencyCode {
  return (NON_RESIDENT_CURRENCY_CODES as string[]).includes(value);
}

export function getCurrencyInfo(code: NonResidentCurrencyCode): CurrencyInfo {
  return (
    NON_RESIDENT_CURRENCIES.find((c) => c.code === code) ??
    NON_RESIDENT_CURRENCIES[0]
  );
}

export function getDefaultRate(code: NonResidentCurrencyCode): number {
  return getCurrencyInfo(code).defaultRate;
}

/** Site-standard commercial registered-agent estimate, per year. */
export const DEFAULT_AGENT_COST_PER_YEAR = 125;
/** Midpoint of the $10–$30/month virtual-mailbox range (Q20). */
export const DEFAULT_MAIL_FORWARDING_COST_PER_MONTH = 15;
/** Mid-range paid EIN filing service (agencies charge $75–$300, Q19). */
export const DEFAULT_EIN_SERVICE_COST = 99;

/** Convert a USD amount at a foreign-currency-per-USD rate. */
export function convertUsd(usdAmount: number, rate: number): number {
  if (!Number.isFinite(usdAmount) || !Number.isFinite(rate) || rate <= 0) {
    return Number.NaN;
  }
  return usdAmount * rate;
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatConverted(
  amount: number,
  code: NonResidentCurrencyCode,
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export interface NonResidentInputs {
  state: StateFee;
  includeRegisteredAgent: boolean;
  registeredAgentCostPerYear: number;
  includeMailForwarding: boolean;
  mailForwardingCostPerMonth: number;
  /** "diy" = file IRS Form SS-4 yourself by fax/mail ($0). */
  einService: "diy" | "paid";
  einServiceCost: number;
}

export interface NonResidentLineItem {
  label: string;
  year1: number;
  fiveYear: number;
}

export interface NonResidentTotals {
  state: StateFee;
  year1Usd: number;
  fiveYearUsd: number;
  items: NonResidentLineItem[];
}

function safeAmount(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

/**
 * Year-1 and 5-year totals in USD for a non-resident founder.
 * Year 1 = formation + first-year recurring state fees + 1 year of agent /
 * mail + EIN service once. 5 years = formation + five recurring payments +
 * 5 years of agent / mail + EIN service once.
 */
export function calculateNonResidentCost(
  inputs: NonResidentInputs,
): NonResidentTotals {
  const formation = safeAmount(inputs.state.formationFee ?? 0);
  const recurringYear1 = calculateRecurringStateFees(inputs.state, 1);
  const recurringFiveYear = calculateRecurringStateFees(inputs.state, 5);
  const agentPerYear = inputs.includeRegisteredAgent
    ? safeAmount(inputs.registeredAgentCostPerYear)
    : 0;
  const mailPerMonth = inputs.includeMailForwarding
    ? safeAmount(inputs.mailForwardingCostPerMonth)
    : 0;
  const ein =
    inputs.einService === "paid" ? safeAmount(inputs.einServiceCost) : 0;

  const items: NonResidentLineItem[] = [
    { label: "State formation filing", year1: formation, fiveYear: formation },
    {
      label: "Recurring state fees",
      year1: recurringYear1,
      fiveYear: recurringFiveYear,
    },
    {
      label: "Registered agent",
      year1: agentPerYear,
      fiveYear: agentPerYear * 5,
    },
    {
      label: "US mail forwarding",
      year1: mailPerMonth * 12,
      fiveYear: mailPerMonth * 60,
    },
    { label: "EIN filing", year1: ein, fiveYear: ein },
  ];

  return {
    state: inputs.state,
    year1Usd: items.reduce((sum, item) => sum + item.year1, 0),
    fiveYearUsd: items.reduce((sum, item) => sum + item.fiveYear, 0),
    items,
  };
}

/** State-fees-only totals (no agent, mail or EIN) — used by scenario tables. */
export function calculateStateOnlyTotals(state: StateFee): {
  year1Usd: number;
  fiveYearUsd: number;
} {
  return {
    year1Usd:
      safeAmount(state.formationFee ?? 0) +
      calculateRecurringStateFees(state, 1),
    fiveYearUsd:
      safeAmount(state.formationFee ?? 0) +
      calculateRecurringStateFees(state, 5),
  };
}
