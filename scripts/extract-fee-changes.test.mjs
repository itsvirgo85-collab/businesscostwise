import test from "node:test";
import assert from "node:assert/strict";
import {
  proposeFieldChange,
  extractAmountCandidates,
  isPlainAmount,
} from "./extract-fee-changes.mjs";

const filler = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(6);

test("single unambiguous formation-fee match is high confidence", () => {
  const text = `Certificate of Formation: $200. The Certificate of Formation must be filed with the Secretary of State.${filler}Other fees may apply.`;
  const result = proposeFieldChange({
    text,
    field: "formationFee",
    currentValue: 150,
    maxValue: 500,
    annualFrequency: "annual",
  });
  assert.ok(result, "expected a proposal");
  assert.equal(result.newValue, 200);
  assert.equal(result.confidence, "high");
  assert.ok(result.evidence.length <= 300, "evidence must be at most 300 chars");
  assert.match(result.evidence, /\$200/);
});

test("two conflicting amounts near the same keyword are review only", () => {
  const text =
    `Certificate of Formation: $100.${filler}` +
    `Filing fee: $150. The filing fee is due at submission.${filler}`;
  const result = proposeFieldChange({
    text,
    field: "formationFee",
    currentValue: 90,
    maxValue: 500,
    annualFrequency: "annual",
  });
  assert.ok(result, "expected a proposal");
  assert.equal(result.confidence, "review");
});

test("no keyword match produces no proposal", () => {
  const text = "The total is $200 for services rendered. No filing mentioned anywhere here.";
  const result = proposeFieldChange({
    text,
    field: "formationFee",
    currentValue: 100,
    maxValue: 500,
    annualFrequency: "annual",
  });
  assert.equal(result, null);
});

test("an out-of-range amount is review, never high", () => {
  const text = "Certificate of Formation: $99,999. This fee schedule lists the formation fee.";
  const result = proposeFieldChange({
    text,
    field: "formationFee",
    currentValue: 100,
    maxValue: 500,
    annualFrequency: "annual",
  });
  assert.ok(result, "expected a proposal");
  assert.equal(result.newValue, 99999);
  assert.equal(result.confidence, "review");
});

test("an amount equal to the current value produces no proposal", () => {
  const text = "Certificate of Formation: $200. No change to the formation fee.";
  const result = proposeFieldChange({
    text,
    field: "formationFee",
    currentValue: 200,
    maxValue: 500,
    annualFrequency: "annual",
  });
  assert.equal(result, null);
});

test("a non-plain amount such as $138.75 is review, never high", () => {
  const text = "Annual report fee: $138.75, due each year on the anniversary.";
  const result = proposeFieldChange({
    text,
    field: "annualFee",
    currentValue: 100,
    maxValue: 500,
    annualFrequency: "annual",
  });
  assert.ok(result, "expected a proposal");
  assert.equal(result.newValue, 138.75);
  assert.equal(result.confidence, "review");
  assert.equal(isPlainAmount("138.75"), false);
  assert.equal(isPlainAmount("200"), true);
  assert.equal(isPlainAmount("12.50"), true);
  assert.equal(isPlainAmount("12.5"), true);
});

test("an annualFee proposal for a state with no annual report is review only", () => {
  const text = "Annual report fee: $50. Every LLC must file an annual report.";
  const result = proposeFieldChange({
    text,
    field: "annualFee",
    currentValue: null,
    maxValue: 500,
    annualFrequency: "none",
  });
  assert.ok(result, "expected a proposal");
  assert.equal(result.newValue, 50);
  assert.equal(result.confidence, "review");
});

test("a fee-table line with several amounts is review, never high", () => {
  // A real failure mode: a price table with mail / online / in-person variants.
  const text =
    "Chapter 308B Filing Type By Mail Online In Person\n" +
    "Articles of Organization - Original Filing $60.00 $80.00 $80.00\n" +
    "Amendment $35.00 $50.00 $50.00";
  const result = proposeFieldChange({
    text,
    field: "formationFee",
    currentValue: 155,
    maxValue: 500,
    annualFrequency: "annual",
  });
  assert.ok(result, "expected a proposal");
  assert.equal(result.confidence, "review");
});

test("a component of the current fee is review, never high", () => {
  // A real failure mode: the source itemises the current total
  // ($100 articles + $25 agent designation = $125), it did not change.
  const text =
    "Company Fees\nArticles of Organization $100.00\nRegistered Agent Designation $25.00\nCertified Copy (optional) $30.00";
  const result = proposeFieldChange({
    text,
    field: "formationFee",
    currentValue: 125,
    maxValue: 500,
    annualFrequency: "annual",
  });
  assert.ok(result, "expected a proposal");
  assert.equal(result.newValue, 100);
  assert.equal(result.confidence, "review");
});

test("a move of more than 50% from the current value is review, never high", () => {
  const text = "Certificate of Formation: $300. The formation fee is $300.";
  const result = proposeFieldChange({
    text,
    field: "formationFee",
    currentValue: 100,
    maxValue: 500,
    annualFrequency: "annual",
  });
  assert.ok(result, "expected a proposal");
  assert.equal(result.newValue, 300);
  assert.equal(result.confidence, "review");
});

test("a keyword far from the amount (several lines away) produces no proposal", () => {
  const text = "Certificate of Formation\n\n\n$200 is the fee listed in the schedule.";
  const result = proposeFieldChange({
    text,
    field: "formationFee",
    currentValue: 100,
    maxValue: 500,
    annualFrequency: "annual",
  });
  assert.equal(result, null);
});

test("candidates are scored by linked keyword phrases and evidence is capped", () => {
  const text = `Annual report: $60. The annual report fee is $60.${filler}Unrelated charge $999 with no keyword nearby.`;
  const candidates = extractAmountCandidates(text, ["annual report fee", "annual report", "annual fee"]);
  assert.equal(candidates.length, 1, "only the keyword-linked amount is a candidate");
  assert.equal(candidates[0].value, 60);
  assert.ok(candidates[0].score >= 1);
  assert.ok(candidates[0].evidence.length <= 300);
});
