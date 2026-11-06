import test from "node:test";
import assert from "node:assert/strict";
import { STATE_FEES } from "../src/data/stateFees.ts";
import { calculateFiveYearStateCost, calculateRecurringStateFees } from "../src/lib/stateCost.ts";

function state(name) {
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
  assert.equal(de.annualFrequency, "none");
  assert.equal(de.annualFee, null);
  assert.equal(de.franchiseTax, 400);
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
  assert.equal(ar.annualFee, 0);
  assert.equal(ar.annualFrequency, "annual");
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

test("Indiana and Kansas use their current 2026 filing fees and frequencies", () => {
  const inState = state("Indiana");
  assert.equal(inState.formationFee, 100);
  assert.equal(inState.annualFee, 50);
  assert.equal(inState.annualFrequency, "biennial");
  assert.equal(calculateFiveYearStateCost(inState), 200);

  const ks = state("Kansas");
  assert.equal(ks.formationFee, 85);
  assert.equal(ks.annualFee, 90);
  assert.equal(ks.annualFrequency, "biennial");
  assert.equal(calculateFiveYearStateCost(ks), 265);
});

test("Louisiana 2026 formation fee and Hawaii online report fee are reflected", () => {
  const la = state("Louisiana");
  assert.equal(la.formationFee, 125);
  assert.equal(la.annualFee, 35);
  assert.equal(calculateFiveYearStateCost(la), 300);

  const hi = state("Hawaii");
  assert.equal(hi.annualFee, 12.5);
  assert.equal(calculateFiveYearStateCost(hi), 112.5);
});

test("Missouri, Nebraska and New Jersey use current online state filing fees", () => {
  const mo = state("Missouri");
  assert.equal(mo.formationFee, 45);
  assert.equal(mo.annualFrequency, "none");
  assert.equal(calculateFiveYearStateCost(mo), 45);

  const ne = state("Nebraska");
  assert.equal(ne.annualFee, 30);
  assert.equal(ne.annualFrequency, "biennial");
  assert.equal(calculateFiveYearStateCost(ne), 160);

  const nj = state("New Jersey");
  assert.equal(nj.formationFee, 100);
  assert.equal(nj.annualFee, 75);
  assert.equal(calculateFiveYearStateCost(nj), 475);
});

test("Montana annual report waiver applies through 2027 and standard fee resumes afterward", () => {
  const mt = state("Montana");
  assert.equal(mt.annualFee, 0);
  assert.equal(mt.annualFeeWaiverThroughYear, 2027);
  assert.equal(mt.annualFeeAfterWaiver, 35);
  const currentYear = new Date().getFullYear();
  const expected = (years) => Array.from({ length: years }, (_, i) => currentYear + i)
    .reduce((sum, year) => sum + (year <= 2027 ? 0 : 35), 0);
  assert.equal(calculateRecurringStateFees(mt, 1), expected(1));
  assert.equal(calculateRecurringStateFees(mt, 3), expected(3));
  assert.equal(calculateRecurringStateFees(mt, 5), expected(5));
});

test("Vermont, Washington and Wisconsin use current state fee schedules", () => {
  const vt = state("Vermont");
  assert.equal(vt.formationFee, 155);
  assert.equal(vt.annualFee, 45);
  assert.equal(calculateFiveYearStateCost(vt), 380);

  const wa = state("Washington");
  assert.equal(wa.formationFee, 180);
  assert.equal(wa.annualFee, 70);
  assert.equal(calculateFiveYearStateCost(wa), 530);

  const wi = state("Wisconsin");
  assert.equal(wi.formationFee, 130);
  assert.equal(wi.annualFee, 25);
  assert.equal(calculateFiveYearStateCost(wi), 255);
});

test("South Dakota and District of Columbia report charges are calculated on their correct cycles", () => {
  const sd = state("South Dakota");
  assert.equal(sd.formationFee, 150);
  assert.equal(sd.annualFee, 55);
  assert.equal(calculateFiveYearStateCost(sd), 425);

  const dc = state("Washington DC");
  assert.equal(dc.formationFee, 99);
  assert.equal(dc.annualFee, 300);
  assert.equal(dc.annualFrequency, "biennial");
  assert.equal(calculateFiveYearStateCost(dc), 699);
});

test("biennial reports due after year one are not charged in the first-year estimate", () => {
  const ak = state("Alaska");
  assert.equal(calculateRecurringStateFees(ak, 1), 0);
  assert.equal(calculateRecurringStateFees(ak, 3), 100);
  assert.equal(calculateRecurringStateFees(ak, 5), 200);
});
