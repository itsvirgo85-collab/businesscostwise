import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

// SEO audit fixes, 27 Nov 2026 (SEMrush Site Audit 24 Nov 2026 follow-up).
// Source-level regression tests: titles <= 60 chars, descriptions in the
// 150-164 band, llms.txt present, exact-phrase keyword FAQs present, and no
// SoftwareApplication JSON-LD (invalid without reviews; removed 24 Nov).

const root = new URL("..", import.meta.url).pathname;

function read(rel) {
  return readFileSync(join(root, rel), "utf8");
}

function pageFiles() {
  const out = [];
  (function walk(dir) {
    for (const entry of readdirSync(join(root, dir), { withFileTypes: true })) {
      const rel = `${dir}/${entry.name}`;
      if (entry.isDirectory()) walk(rel);
      else if (entry.name === "page.tsx") out.push(rel);
    }
  })("src/app");
  return out;
}

test("llms.txt exists and lists the sitemap and key pages", () => {
  const llmsPath = join(root, "public/llms.txt");
  assert.ok(existsSync(llmsPath), "public/llms.txt is missing (SEMrush notice 24 Nov 2026)");
  const llms = read("public/llms.txt");
  assert.match(llms, /getllccostcalculator\.com/);
  assert.match(llms, /sitemap\.xml/);
  assert.match(llms, /llc-cost-by-state/);
  assert.match(llms, /tools\/non-resident-llc-cost-calculator/);
});

test("sitemap static lastmod was bumped for the 27 Nov 2026 audit fixes", () => {
  const sitemap = read("src/app/sitemap.ts");
  assert.match(sitemap, /staticLastMod = new Date\("2026-11-27"\)/);
});

test("the four short descriptions fixed 27 Nov 2026 are in the 150-164 band", () => {
  const pages = [
    "src/app/business-structures/llc-vs-partnership/page.tsx",
    "src/app/guides/llc-for-real-estate/page.tsx",
    "src/app/guides/move-llc-to-another-state/page.tsx",
    "src/app/tools/anonymous-llc-state-finder/page.tsx",
  ];
  for (const page of pages) {
    const src = read(page);
    const descs = [...src.matchAll(/description:\s*"([^"]+)"/g)].map((m) => m[1]);
    assert.ok(descs.length >= 1, `${page}: no description found`);
    for (const d of descs) {
      assert.ok(
        d.length >= 150 && d.length <= 164,
        `${page}: description ${d.length} chars (want 150-164): ${d}`,
      );
    }
  }
});

test("no static page title exceeds 60 chars", () => {
  for (const page of pageFiles()) {
    const src = read(page);
    const titles = [...src.matchAll(/title:\s*(?:\{\s*absolute:\s*)?"([^"]+)"/g)].map((m) => m[1]);
    for (const t of titles) {
      assert.ok(t.length <= 60, `${page}: title ${t.length} chars: ${t}`);
    }
  }
});

test("exact-phrase keyword FAQs are present (SEMrush Keyword Magic 24 Nov 2026)", () => {
  const statePage = read("src/app/llc-cost-by-state/[state]/page.tsx");
  // "cost for llc in florida" — 170 vol, KD 1%, CPC $9.41 (SEMrush 24 Nov)
  assert.match(statePage, /What is the cost for llc in florida\?/);
  // "how to form an llc in nebraska" — 260 vol, KD 2%, CPC $9.69
  assert.match(statePage, /How to form an LLC in Nebraska\?/);
  // "form an llc in nj" — 110 vol, KD 1%, CPC $31.08
  assert.match(statePage, /How to form an LLC in NJ\?/);

  const howMuch = read("src/app/how-much-does-it-cost-to-start-an-llc/page.tsx");
  // "cost of filing an llc" — 140 vol, KD 1%, CPC $6.42
  assert.match(howMuch, /What is the cost of filing an LLC\?/);
  // "what does it cost to start an llc" — 140 vol, KD 2%, CPC $3.16 (H1 phrase)
  assert.match(howMuch, /what does it cost to start an llc/i);
});

test("no SoftwareApplication JSON-LD remains anywhere in src", () => {
  const out = [];
  (function walk(dir) {
    for (const entry of readdirSync(join(root, dir), { withFileTypes: true })) {
      const rel = `${dir}/${entry.name}`;
      if (entry.isDirectory()) walk(rel);
      else if (/\.(tsx?|ts)$/.test(entry.name) && read(rel).includes("SoftwareApplication")) {
        out.push(rel);
      }
    }
  })("src");
  assert.deepEqual(out, []);
});
