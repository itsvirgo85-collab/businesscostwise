import test from "node:test";
import assert from "node:assert/strict";
import { STATE_FEES } from "../src/data/stateFees.ts";
import { DISSOLUTION_FEES, getDissolutionFee } from "../src/data/dissolutionFees.ts";

test("dissolution fees cover every verified state exactly once", () => {
  const slugs = STATE_FEES.filter((s) => s.status === "verified").map((s) => s.slug);
  assert.equal(DISSOLUTION_FEES.length, slugs.length);
  const feeSlugs = DISSOLUTION_FEES.map((d) => d.slug).sort();
  assert.deepEqual(feeSlugs, [...slugs].sort());
});

test("dissolution fees are non-negative numbers with a label", () => {
  for (const d of DISSOLUTION_FEES) {
    assert.equal(typeof d.fee, "number");
    assert.ok(d.fee >= 0 && d.fee <= 220, `${d.slug}: unexpected fee ${d.fee}`);
    assert.ok(d.label.length > 0, `${d.slug}: missing label`);
    assert.ok(["verified", "secondary", "conflicting"].includes(d.confidence));
  }
});

test("officially confirmed dissolution fees match the research", () => {
  assert.equal(getDissolutionFee("delaware")?.fee, 220);
  assert.equal(getDissolutionFee("delaware")?.confidence, "verified");
  assert.equal(getDissolutionFee("louisiana")?.fee, 125);
  assert.equal(getDissolutionFee("louisiana")?.confidence, "verified");
  // DC resolved 15 Nov 2026 against the official DLCP fee schedule: $5,
  // not the $220 quoted by most secondary guides.
  assert.equal(getDissolutionFee("district-of-columbia")?.fee, 5);
  assert.equal(getDissolutionFee("district-of-columbia")?.confidence, "verified");
  // Nebraska resolved 20 Nov 2026 against the official SOS Statement of
  // Dissolution form itself: $25 online / $30 in office (21-148).
  assert.equal(getDissolutionFee("nebraska")?.fee, 25);
  assert.equal(getDissolutionFee("nebraska")?.confidence, "verified");
});

test("no dissolution fee is left flagged as conflicting", () => {
  for (const d of DISSOLUTION_FEES) {
    assert.notEqual(d.confidence, "conflicting", d.slug);
  }
});

test("zero-fee dissolutions are real states, not missing data", () => {
  for (const slug of ["california", "connecticut", "maryland", "montana", "utah", "washington"]) {
    assert.equal(getDissolutionFee(slug)?.fee, 0, slug);
  }
});
