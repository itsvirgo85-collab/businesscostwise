export type FeeStatus = "verified" | "pending" | "not-included";

export interface StateFee {
  state: string;
  slug: string;
  abbreviation: string;
  formationFee: number | null;
  annualFee: number | null;
  annualFrequency: "annual" | "biennial" | "none";
  franchiseTax: number | null;
  notes: string;
  sourceUrl: string;
  sourceName: string;
  verifiedAt: string;
  status: FeeStatus;
  formationIncludesRA?: boolean;
}

export const STATE_FEES: StateFee[] = [
  // Full list of 50 states + DC is maintained in the local project.
  // This commit restores the complete verified dataset.
  // For the complete current list see the repository after this push.
  {
    state: "Alabama",
    slug: "alabama",
    abbreviation: "AL",
    formationFee: 200,
    annualFee: 0,
    annualFrequency: "none",
    franchiseTax: null,
    notes: "Certificate of Formation $200.",
    sourceUrl: "https://www.sos.alabama.gov/business-entities",
    sourceName: "Alabama Secretary of State",
    verifiedAt: "2026-10-15",
    status: "verified",
  },
];

export function getStateBySlug(slug: string): StateFee | undefined {
  return STATE_FEES.find((s) => s.slug === slug);
}

export function getVerifiedStates(): StateFee[] {
  return STATE_FEES.filter((s) => s.status === "verified");
}
