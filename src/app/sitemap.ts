import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://businesscostwise.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/llc-cost-calculator`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/llc-cost-by-state`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/business-structures/llc-vs-sole-proprietorship`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/asset-protection`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/about/sources-and-methodology`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
