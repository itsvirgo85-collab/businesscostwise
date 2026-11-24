import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { countryGuideFigures } from "../src/lib/countryGuideFigures.ts";

// Regression test for the live `{f.deAnnualTax}` leak (P3 refresh 399c14b wrote
// `{f.deAnnualTax}` instead of `${f.deAnnualTax}` in 12 FAQ `answer:` template
// literals). A raw `{...}` inside a backtick literal renders literally, so any
// un-interpolated placeholder in a template literal is a defect. JSX
// expressions like `{f.deAnnualTax}` in the page body are valid and are NOT
// template literals, so this test scans template-literal contents only — never
// the whole file (a whole-file scan false-positives on the 18 correct JSX
// expressions).

const GUIDES = [
  "us-llc-cost-from-australia",
  "us-llc-cost-from-canada",
  "us-llc-cost-from-dubai",
  "us-llc-cost-from-germany",
  "us-llc-cost-from-india",
  "us-llc-cost-from-ireland",
  "us-llc-cost-from-netherlands",
  "us-llc-cost-from-new-zealand",
  "us-llc-cost-from-singapore",
  "us-llc-cost-from-uk",
  "us-llc-vs-uk-ltd-cost",
];

const src = (slug) =>
  readFileSync(new URL(`../src/app/guides/${slug}/page.tsx`, import.meta.url), "utf8");

/** Extract backtick template-literal contents (handles multi-line literals). */
function literals(source) {
  const out = [];
  const re = /`(?:[^`\\]|\\.)*`/g;
  let m;
  while ((m = re.exec(source)) !== null) out.push(m[0].slice(1, -1));
  return out;
}

/** Remove ${...} interpolations (brace-depth aware) so braces inside them are not flagged. */
function stripInterpolations(literal) {
  let out = "";
  for (let i = 0; i < literal.length; i++) {
    if (literal[i] === "$" && literal[i + 1] === "{") {
      let depth = 1;
      i += 2;
      while (i < literal.length && depth > 0) {
        if (literal[i] === "{") depth++;
        else if (literal[i] === "}") depth--;
        i++;
      }
      i--; // step back so the loop increment lands after the closing brace
    } else {
      out += literal[i];
    }
  }
  return out;
}

test("FAQ template literals contain no un-interpolated placeholders", () => {
  for (const slug of GUIDES) {
    for (const lit of literals(src(slug))) {
      const text = stripInterpolations(lit);
      assert.doesNotMatch(
        text,
        /(?<!\$)\{f\./,
        `${slug}: raw {f. placeholder in template literal: ${text.slice(0, 80)}`,
      );
      assert.doesNotMatch(
        text,
        /(?<!\$)\{[A-Z_]{2,}/,
        `${slug}: raw {PLACEHOLDER} in template literal: ${text.slice(0, 80)}`,
      );
    }
  }
});

test("all 16 FAQ answers about Delaware annual tax interpolate ${f.deAnnualTax}", () => {
  // 12 fixed by the hotfix + 4 that were already correct (Canada:35,
  // Netherlands:35, UK:35, vs-uk-ltd:39).
  let count = 0;
  for (const slug of GUIDES) {
    for (const line of src(slug).split("\n")) {
      if (!line.includes("answer:")) continue;
      count += (line.match(/\$\{f\.deAnnualTax\}/g) ?? []).length;
      assert.doesNotMatch(
        line,
        /(?<!\$)\{f\.deAnnualTax\}/,
        `${slug}: broken {f.deAnnualTax} in FAQ answer`,
      );
    }
  }
  assert.equal(count, 16, `expected 16 interpolated \${f.deAnnualTax} in FAQ answers, found ${count}`);
});

test('countryGuideFigures("USD").deAnnualTax is $400', () => {
  assert.equal(countryGuideFigures("USD").deAnnualTax, "$400");
});
