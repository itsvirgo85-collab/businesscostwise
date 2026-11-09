import type { MetadataRoute } from "next";
import { STATE_FEES } from "@/data/stateFees";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.getllccostcalculator.com";
  const now = new Date();

  const staticPaths: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/what-is-an-llc", changeFrequency: "monthly", priority: 0.9 },
    { path: "/how-much-does-it-cost-to-start-an-llc", changeFrequency: "weekly", priority: 0.95 },
    { path: "/llc-cost-calculator", changeFrequency: "weekly", priority: 0.95 },
    { path: "/llc-cost-by-state", changeFrequency: "weekly", priority: 0.9 },
    { path: "/how-to-form-an-llc", changeFrequency: "monthly", priority: 0.85 },
    { path: "/how-long-does-it-take-to-start-an-llc", changeFrequency: "monthly", priority: 0.8 },
    { path: "/how-to-get-an-ein-for-free", changeFrequency: "monthly", priority: 0.8 },
    { path: "/business-structures", changeFrequency: "monthly", priority: 0.85 },
    { path: "/business-structures/llc-vs-s-corp", changeFrequency: "monthly", priority: 0.8 },
    { path: "/business-structures/llc-vs-sole-proprietorship", changeFrequency: "monthly", priority: 0.8 },
    { path: "/business-structures/llc-vs-corporation", changeFrequency: "monthly", priority: 0.8 },
    {
      path: "/business-structures/single-member-vs-multi-member-llc",
      changeFrequency: "monthly",
      priority: 0.75,
    },
    { path: "/asset-protection", changeFrequency: "monthly", priority: 0.7 },
    { path: "/cheapest-states-to-form-an-llc", changeFrequency: "monthly", priority: 0.85 },
    { path: "/most-expensive-states-to-form-an-llc", changeFrequency: "monthly", priority: 0.85 },
    { path: "/hidden-costs-of-forming-an-llc", changeFrequency: "monthly", priority: 0.8 },
    { path: "/annual-report-requirements-by-state", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.5 },
    { path: "/about/sources-and-methodology", changeFrequency: "monthly", priority: 0.5 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
    { path: "/disclaimer", changeFrequency: "yearly", priority: 0.3 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const statePages: MetadataRoute.Sitemap = STATE_FEES.filter((s) => s.status === "verified").map(
    (s) => ({
      url: `${base}/llc-cost-by-state/${s.slug}`,
      lastModified: new Date(s.verifiedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticPages, ...statePages];
}
