import test from "node:test";
import assert from "node:assert/strict";
import {
  federalIncomeTax,
  llcTaxEstimate,
  payrollTaxOnWages,
  scorpBreakEvenProfit,
  scorpSavings,
  selfEmploymentTax,
} from "../src/lib/taxCalc.ts";

function approx(actual, expected, epsilon = 0.01) {
  assert.ok(
    Math.abs(actual - expected) <= epsilon,
    `Expected ${actual} to be within ${epsilon} of ${expected}`,
  );
}

test("self-employment tax on $100,000 profit", () => {
  // Base 92,350: SS 12.4% = 11,451.40; Medicare 2.9% = 2,678.15; total 14,129.55.
  approx(selfEmploymentTax(100_000), 14_129.55);
});

test("self-employment tax caps Social Security at the 2026 wage base", () => {
  // Base 184,700: SS capped at 184,500 x 12.4% = 22,878; Medicare 5,356.30.
  approx(selfEmploymentTax(200_000), 28_234.3);
});

test("payroll tax on a $40,000 salary", () => {
  // SS 4,960 + Medicare 1,160 = 6,120.
  approx(payrollTaxOnWages(40_000), 6_120);
});

test("S-corp saving on $100,000 profit with a $40,000 salary", () => {
  const r = scorpSavings({ netProfit: 100_000, reasonableSalary: 40_000, payrollCostPerYear: 1_200 });
  approx(r.llcSelfEmploymentTax, 14_129.55);
  approx(r.scorpPayrollTax, 6_120);
  approx(r.netSavingPerYear, 6_809.55);
  approx(r.distributions, 60_000);
});

test("S-corp election loses money at low profit with payroll overhead", () => {
  const r = scorpSavings({ netProfit: 30_000, reasonableSalary: 20_000, payrollCostPerYear: 1_200 });
  assert.ok(r.netSavingPerYear < 0, `Expected a loss, got ${r.netSavingPerYear}`);
});

test("break-even profit is found for a 40% salary share", () => {
  const be = scorpBreakEvenProfit(0.4, 1_200);
  assert.ok(be !== null && be > 0 && be < 100_000, `Unexpected break-even ${be}`);
  const at = scorpSavings({ netProfit: be, reasonableSalary: be * 0.4, payrollCostPerYear: 1_200 });
  assert.ok(at.netSavingPerYear >= 0);
});

test("federal income tax is marginal, not flat", () => {
  // $50,000 taxable, single: 10% x 12,400 = 1,240; 12% x 37,600 = 4,512.
  approx(federalIncomeTax(50_000, "single"), 5_752);
  approx(federalIncomeTax(0, "single"), 0);
  // Married, $50,000 taxable: 10% x 24,800 = 2,480; 12% x 25,200 = 3,024.
  approx(federalIncomeTax(50_000, "married"), 5_504);
});

test("LLC tax estimate on $100,000 profit, single, no QBI", () => {
  const r = llcTaxEstimate({ netProfit: 100_000, status: "single", includeQbi: false });
  approx(r.selfEmploymentTax, 14_129.55);
  approx(r.halfSelfEmploymentTax, 7_064.78, 0.01);
  approx(r.qbiDeduction, 0);
  // Taxable: 100,000 - 7,064.78 - 16,100 = 76,835.22.
  approx(r.taxableIncome, 76_835.22, 0.01);
  // Income tax: 1,240 + 4,560 + 22% x 26,435.22 = 11,615.75.
  approx(r.federalIncomeTax, 11_615.75, 0.01);
  approx(r.totalFederalTax, 25_745.3, 0.01);
  approx(r.quarterlyPayment, 6_436.33, 0.01);
});

test("QBI deduction lowers the LLC tax estimate", () => {
  const without = llcTaxEstimate({ netProfit: 100_000, status: "single", includeQbi: false });
  const withQbi = llcTaxEstimate({ netProfit: 100_000, status: "single", includeQbi: true });
  assert.ok(withQbi.totalFederalTax < without.totalFederalTax);
  approx(withQbi.qbiDeduction, 0.2 * (100_000 - 7_064.78), 0.01);
});
