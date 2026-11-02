import type { MetadataRoute } from "next";
import { STATE_FEES } from "@/data/stateFees";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://businesscostwise.com";
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/llc-cost-calculator`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/llc-cost-by-state`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/business-structures/llc-vs-sole-proprietorship`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asset-protection`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cheapest-states-to-form-an-llc`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/about/sources-and-methodology`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const statePages: MetadataRoute.Sitemap = STATE_FEES.filter((s) => s.status === "verified").map((s) => ({
    url: `${base}/llc-cost-by-state/${s.slug}`,
    lastModified: new Date(s.verifiedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...statePages];
}
