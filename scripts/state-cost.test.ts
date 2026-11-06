import test from "node:test";
import assert from "node:assert/strict";
import { STATE_FEES } from "../src/data/stateFees.ts";
import { calculateFiveYearStateCost, calculateRecurringStateFees } from "../src/lib/stateCost.ts";

function state(name: string) {
  const match = STATE_FEES.find((item) => item.state === name);
  assert.ok(match, `Missing state record: ${name}`);
  return match;
}

test("Pennsylvania annual report is counted once per year", () => {
  const pa = state("Pennsylvania");
  assert.equal(calculateRecurringStateFees(pa, 1), 7);
  assert.equal(calculateRecurringStateFees(pa, 3), 21);
  assert.equal(calculateRecurringStateFees(pa, 5), 35);
  assert.equal(calculateFiveYearStateCost(pa), 160);
});

test("Delaware annual LLC tax is counted in every projected year", () => {
  const de = state("Delaware");
  assert.equal(calculateRecurringStateFees(de, 1), 400);
  assert.equal(calculateRecurringStateFees(de, 3), 1200);
  assert.equal(calculateRecurringStateFees(de, 5), 2000);
  assert.equal(calculateFiveYearStateCost(de), 2110);
});

test("California initial biennial statement is counted in year one and then every two years", () => {
  const ca = state("California");
  assert.equal(calculateRecurringStateFees(ca, 1), 820);
  assert.equal(calculateRecurringStateFees(ca, 3), 2440);
  assert.equal(calculateRecurringStateFees(ca, 5), 4060);
  assert.equal(calculateFiveYearStateCost(ca), 4130);
});

test("Arkansas franchise tax is counted once, not duplicated", () => {
  const ar = state("Arkansas");
  assert.equal(ar.annualFee, null);
  assert.equal(ar.franchiseTax, 150);
  assert.equal(calculateRecurringStateFees(ar, 1), 150);
  assert.equal(calculateRecurringStateFees(ar, 5), 750);
  assert.equal(calculateFiveYearStateCost(ar), 795);
});

test("Tennessee member fee and minimum franchise tax are separate components", () => {
  const tn = state("Tennessee");
  assert.equal(calculateRecurringStateFees(tn, 1), 400);
  assert.equal(calculateRecurringStateFees(tn, 5), 2000);
  assert.equal(calculateFiveYearStateCost(tn), 2300);
});

test("zero-dollar annual reports remain filing obligations without inflating cost", () => {
  for (const name of ["Idaho", "Minnesota", "Mississippi", "Texas"]) {
    const item = state(name);
    assert.equal(item.annualFrequency, "annual", `${name} should show an annual filing obligation`);
    assert.equal(item.annualFee, 0);
    assert.equal(calculateRecurringStateFees(item, 5), 0);
  }
});

test("Alabama variable Business Privilege Tax is not presented as verified $0", () => {
  const al = state("Alabama");
  assert.equal(al.status, "pending");
  assert.equal(al.annualFee, null);
  assert.equal(al.franchiseTax, null);
});

test("biennial reports due after year one are not charged in the first-year estimate", () => {
  const ak = state("Alaska");
  assert.equal(calculateRecurringStateFees(ak, 1), 0);
  assert.equal(calculateRecurringStateFees(ak, 3), 100);
  assert.equal(calculateRecurringStateFees(ak, 5), 200);
});
