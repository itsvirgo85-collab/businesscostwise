import type { MetadataRoute } from "next";
import { STATE_FEES } from "@/data/stateFees";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.getllccostcalculator.com";
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/what-is-an-llc`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/how-much-does-it-cost-to-start-an-llc`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/llc-cost-calculator`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/llc-cost-by-state`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/how-to-form-an-llc`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/how-long-does-it-take-to-start-an-llc`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/how-to-get-an-ein-for-free`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/business-structures/llc-vs-s-corp`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/business-structures/llc-vs-sole-proprietorship`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/business-structures/llc-vs-corporation`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/business-structures/single-member-vs-multi-member-llc`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/asset-protection`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cheapest-states-to-form-an-llc`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/most-expensive-states-to-form-an-llc`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/hidden-costs-of-forming-an-llc`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/annual-report-requirements-by-state`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/about/sources-and-methodology`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const statePages: MetadataRoute.Sitemap = STATE_FEES.filter((s) => s.status === "verified").map((s) => ({
    url: `${base}/llc-cost-by-state/${s.slug}`,
    lastModified: new Date(s.verifiedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...statePages];
}
