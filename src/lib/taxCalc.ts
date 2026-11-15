/**
 * Federal tax maths for the LLC tax tools (tax year 2026).
 *
 * Sources (all figures are for tax year 2026, returns filed in early 2027):
 * - Social Security wage base $184,500 (SSA, Contribution and Benefit Base).
 * - Self-employment tax 15.3% on 92.35% of net earnings (12.4% Social
 *   Security up to the wage base + 2.9% Medicare on all earnings), plus
 *   0.9% Additional Medicare Tax on earnings over $200,000 (single).
 * - Federal income tax brackets and standard deductions from IRS
 *   Revenue Procedure 2025-32.
 *
 * These are estimates for education only. They ignore state income tax,
 * credits, and many special rules. QBI is modelled in simplified form
 * (20% of profit after the half-SE-tax deduction) and is off by default.
 */

export const SS_WAGE_BASE_2026 = 184_500;
export const SE_TAX_RATE_SS = 0.124;
export const SE_TAX_RATE_MEDICARE = 0.029;
export const ADDITIONAL_MEDICARE_THRESHOLD_SINGLE = 200_000;
export const ADDITIONAL_MEDICARE_RATE = 0.009;

export type FilingStatus = "single" | "married";

interface Bracket {
  upTo: number;
  rate: number;
}

const SINGLE_BRACKETS: Bracket[] = [
  { upTo: 12_400, rate: 0.1 },
  { upTo: 50_400, rate: 0.12 },
  { upTo: 105_700, rate: 0.22 },
  { upTo: 201_775, rate: 0.24 },
  { upTo: 256_225, rate: 0.32 },
  { upTo: 640_600, rate: 0.35 },
  { upTo: Number.POSITIVE_INFINITY, rate: 0.37 },
];

const MARRIED_BRACKETS: Bracket[] = [
  { upTo: 24_800, rate: 0.1 },
  { upTo: 100_800, rate: 0.12 },
  { upTo: 211_400, rate: 0.22 },
  { upTo: 403_550, rate: 0.24 },
  { upTo: 512_450, rate: 0.32 },
  { upTo: 768_700, rate: 0.35 },
  { upTo: Number.POSITIVE_INFINITY, rate: 0.37 },
];

export const STANDARD_DEDUCTION_2026: Record<FilingStatus, number> = {
  single: 16_100,
  married: 32_200,
};

export function federalIncomeTax(taxableIncome: number, status: FilingStatus): number {
  if (taxableIncome <= 0) return 0;
  const brackets = status === "single" ? SINGLE_BRACKETS : MARRIED_BRACKETS;
  let tax = 0;
  let lower = 0;
  for (const b of brackets) {
    if (taxableIncome <= lower) break;
    const inBracket = Math.min(taxableIncome, b.upTo) - lower;
    tax += inBracket * b.rate;
    lower = b.upTo;
  }
  return tax;
}

/** Payroll tax (both halves) on a given earnings base, e.g. an S-corp salary. */
export function payrollTaxOnWages(wages: number): number {
  if (wages <= 0) return 0;
  const ss = SE_TAX_RATE_SS * Math.min(wages, SS_WAGE_BASE_2026);
  const medicare = SE_TAX_RATE_MEDICARE * wages;
  const additional =
    ADDITIONAL_MEDICARE_RATE * Math.max(0, wages - ADDITIONAL_MEDICARE_THRESHOLD_SINGLE);
  return ss + medicare + additional;
}

/** Self-employment tax on LLC net profit (default disregarded-entity / partnership treatment). */
export function selfEmploymentTax(netProfit: number): number {
  if (netProfit <= 0) return 0;
  const base = 0.9235 * netProfit;
  const ss = SE_TAX_RATE_SS * Math.min(base, SS_WAGE_BASE_2026);
  const medicare = SE_TAX_RATE_MEDICARE * base;
  const additional =
    ADDITIONAL_MEDICARE_RATE * Math.max(0, base - ADDITIONAL_MEDICARE_THRESHOLD_SINGLE);
  return ss + medicare + additional;
}

export interface ScorpSavingsInput {
  netProfit: number;
  reasonableSalary: number;
  /** Yearly payroll service + admin overhead of running payroll, $/year. */
  payrollCostPerYear: number;
}

export interface ScorpSavingsResult {
  llcSelfEmploymentTax: number;
  scorpPayrollTax: number;
  payrollCostPerYear: number;
  /** SE tax saved minus payroll tax on the salary minus payroll overhead. */
  netSavingPerYear: number;
  /** Profit left after paying the salary (distributions, before income tax). */
  distributions: number;
}

/**
 * S-corp election comparison. Income tax is deliberately excluded: the
 * salary and the remaining profit are both subject to federal income tax,
 * so the election's saving comes from payroll/SE tax, not income tax.
 * QBI effects are not modelled here; the page warns about them.
 */
export function scorpSavings(input: ScorpSavingsInput): ScorpSavingsResult {
  const profit = Math.max(0, input.netProfit);
  const salary = Math.max(0, Math.min(input.reasonableSalary, profit));
  const payrollCost = Math.max(0, input.payrollCostPerYear);
  const llcSelfEmploymentTax = selfEmploymentTax(profit);
  const scorpPayrollTax = payrollTaxOnWages(salary);
  return {
    llcSelfEmploymentTax,
    scorpPayrollTax,
    payrollCostPerYear: payrollCost,
    netSavingPerYear: llcSelfEmploymentTax - scorpPayrollTax - payrollCost,
    distributions: profit - salary,
  };
}

/** Approximate profit at which the S-corp election first breaks even, assuming salary is a fixed share of profit. */
export function scorpBreakEvenProfit(
  salaryShare: number,
  payrollCostPerYear: number,
): number | null {
  const share = Math.min(0.9, Math.max(0.05, salaryShare));
  for (let profit = 5_000; profit <= 1_000_000; profit += 1_000) {
    const r = scorpSavings({
      netProfit: profit,
      reasonableSalary: profit * share,
      payrollCostPerYear,
    });
    if (r.netSavingPerYear >= 0) return profit;
  }
  return null;
}

export interface LlcTaxEstimateInput {
  netProfit: number;
  status: FilingStatus;
  /** Simplified 20% QBI deduction, off by default. */
  includeQbi: boolean;
}

export interface LlcTaxEstimateResult {
  selfEmploymentTax: number;
  halfSelfEmploymentTax: number;
  qbiDeduction: number;
  taxableIncome: number;
  federalIncomeTax: number;
  totalFederalTax: number;
  quarterlyPayment: number;
  effectiveRate: number;
}

export const QUARTERLY_DUE_DATES_2026 = [
  "15 April 2026",
  "15 June 2026",
  "15 September 2026",
  "15 January 2027",
];

export function llcTaxEstimate(input: LlcTaxEstimateInput): LlcTaxEstimateResult {
  const profit = Math.max(0, input.netProfit);
  const seTax = selfEmploymentTax(profit);
  const halfSe = seTax / 2;
  const qbiDeduction = input.includeQbi ? 0.2 * Math.max(0, profit - halfSe) : 0;
  const taxableIncome = Math.max(
    0,
    profit - halfSe - qbiDeduction - STANDARD_DEDUCTION_2026[input.status],
  );
  const incomeTax = federalIncomeTax(taxableIncome, input.status);
  const total = seTax + incomeTax;
  return {
    selfEmploymentTax: seTax,
    halfSelfEmploymentTax: halfSe,
    qbiDeduction,
    taxableIncome,
    federalIncomeTax: incomeTax,
    totalFederalTax: total,
    quarterlyPayment: total / 4,
    effectiveRate: profit > 0 ? total / profit : 0,
  };
}
