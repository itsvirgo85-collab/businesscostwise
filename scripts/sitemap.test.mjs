import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const sitemapSource = readFileSync(new URL("../src/app/sitemap.ts", import.meta.url), "utf8");

test("static sitemap URLs do not claim a fresh lastmod on every request", () => {
  const staticPagesBlock = sitemapSource.match(/const staticPages[\\s\\S]*?const statePages/)?.[0];
  assert.ok(staticPagesBlock, "Expected static sitemap mapping to exist");
  assert.doesNotMatch(staticPagesBlock, /lastModified:\\s*now/);
});

test("verified state sitemap URLs retain their actual data verification date", () => {
  assert.match(sitemapSource, /lastModified:\\s*new Date\\(s\\.verifiedAt\\)/);
});

test("the Contact page remains included in the sitemap", () => {
  assert.match(sitemapSource, /path:\\s*["']\\/contact["']/);
});
