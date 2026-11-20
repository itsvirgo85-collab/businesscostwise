/**
 * LLC dissolution / cancellation filing fees by state (voluntary dissolution
 * of a domestic LLC), researched 15 Nov 2026.
 *
 * Method: two independent 2026 50-state tables (DissolveMyLLC, Feb 2026;
 * Micahguru, Oct 2026) cross-checked against each other, plus IncACA and
 * Rebellink tables, with targeted official-source checks for conflicts.
 * Only Delaware ($220: Division of Corporations fee schedule rev. 1 Aug
 * 2026), Louisiana ($125: SOS fee schedule, Act 921, eff. 1 Oct 2026),
 * DC ($5: DLCP Corporations Division fee schedule, checked 15 Nov 2026)
 * and Nebraska ($25 online / $30 in office: fee printed on the official
 * SOS Statement of Dissolution form itself, Neb. Rev. Stat. 21-148,
 * checked 20 Nov 2026) were confirmed against an official source. The
 * rest are secondary sources — the calculator labels them as estimates
 * and tells the user to confirm the fee with the Secretary of State
 * before filing.
 *
 * Nebraska was resolved 15 Nov 2026 as an online/paper split ($25 online,
 * $30 in office), concordant across IncACA, LegalClarity, Northwest and
 * LegalZoom; on 20 Nov 2026 it was confirmed against the official SOS
 * form PDF (sos.nebraska.gov, "FILING FEE: $30.00 (In-Office) / $25.00
 * (Online)", Neb. Rev. Stat. 21-148) and is now marked "verified".
 * (The earlier note cited 21-192; the form itself cites 21-148 for the
 * Statement of Dissolution.)
 * No state remains "conflicting".
 */

export type DissolutionConfidence = "verified" | "secondary" | "conflicting";

export interface DissolutionFee {
  slug: string;
  fee: number;
  label: string;
  note?: string;
  confidence: DissolutionConfidence;
}

export const DISSOLUTION_FEES: DissolutionFee[] = [
  { slug: "alabama", fee: 100, label: "Articles of Dissolution", confidence: "secondary" },
  { slug: "alaska", fee: 25, label: "Articles of Dissolution (Form 08-490)", confidence: "secondary" },
  { slug: "arizona", fee: 35, label: "Articles of Termination (Form L031)", confidence: "secondary" },
  { slug: "arkansas", fee: 50, label: "Statement of Dissolution (Form LL-04)", note: "The $150 final franchise tax is separate — it is included in the unpaid-fees line below, not in this filing fee.", confidence: "secondary" },
  { slug: "california", fee: 0, label: "Certificate of Cancellation (LLC-4/7)", note: "A Certificate of Dissolution (LLC-3) is also required unless the vote to dissolve was unanimous.", confidence: "secondary" },
  { slug: "colorado", fee: 10, label: "Statement of Dissolution", confidence: "secondary" },
  { slug: "connecticut", fee: 0, label: "Certificate of Dissolution", confidence: "secondary" },
  { slug: "delaware", fee: 220, label: "Certificate of Cancellation", note: "Includes the $20 municipality fee on top of the $200 base fee (fee schedule rev. 1 Aug 2026). All annual LLC taxes must be paid first — $400 for tax year 2026 onward, no proration.", confidence: "verified" },
  { slug: "district-of-columbia", fee: 5, label: "Statement of Dissolution (Form DLC-8)", note: "Confirmed 15 Nov 2026 on the DLCP Corporations Division fee schedule: $5 for a domestic LLC's Statement of Dissolution. The $220 figure in many guides is the fee for most other DC LLC filings (and for a foreign LLC's withdrawal on dissolution) — not this one. A $300 biennial report must also be current.", confidence: "verified" },
  { slug: "florida", fee: 25, label: "Articles of Dissolution (Form CR2E048)", confidence: "secondary" },
  { slug: "georgia", fee: 10, label: "Certificate of Termination (Form CD 415)", note: "$0 if filed online via eCorp; $10 paper filing surcharge.", confidence: "secondary" },
  { slug: "hawaii", fee: 25, label: "Articles of Termination (Form LLC-11)", confidence: "secondary" },
  { slug: "idaho", fee: 20, label: "Statement of Dissolution", note: "$0 online; $20 manual-processing fee on paper filings.", confidence: "secondary" },
  { slug: "illinois", fee: 5, label: "Statement of Termination (Form LLC-35.15)", confidence: "secondary" },
  { slug: "indiana", fee: 30, label: "Articles of Dissolution (Form 49465)", note: "$20 online, $30 on paper.", confidence: "secondary" },
  { slug: "iowa", fee: 10, label: "Statement of Dissolution + Statement of Termination", note: "Two filings at $5 each — $10 total to fully close.", confidence: "secondary" },
  { slug: "kansas", fee: 35, label: "Certificate of Cancellation (Form KC)", confidence: "secondary" },
  { slug: "kentucky", fee: 40, label: "Articles of Dissolution (Form LLD)", confidence: "secondary" },
  { slug: "louisiana", fee: 125, label: "Affidavit to Dissolve (Form 368)", note: "Raised from $100 to $125 by Act 921, effective 1 Oct 2026.", confidence: "verified" },
  { slug: "maine", fee: 75, label: "Certificate of Cancellation (Form MLLC-11C)", confidence: "secondary" },
  { slug: "maryland", fee: 0, label: "Articles of Cancellation", confidence: "secondary" },
  { slug: "massachusetts", fee: 100, label: "Certificate of Cancellation", confidence: "secondary" },
  { slug: "michigan", fee: 10, label: "Certificate of Dissolution (Form 730)", confidence: "secondary" },
  { slug: "minnesota", fee: 70, label: "Statement of Dissolution + Statement of Termination", note: "Two filings at $35 each by mail ($70 total); online or in-person filings are treated as expedited at $55 each.", confidence: "secondary" },
  { slug: "mississippi", fee: 50, label: "Certificate of Dissolution", confidence: "secondary" },
  { slug: "missouri", fee: 50, label: "Notice of Winding Up (LLC-13) + Articles of Termination (LLC-5)", note: "Two filings at $25 each — $50 total.", confidence: "secondary" },
  { slug: "montana", fee: 0, label: "Articles of Termination", confidence: "secondary" },
  { slug: "nebraska", fee: 25, label: "Statement of Dissolution", note: "$25 online via eDelivery, $30 in office or by paper — fee printed on the official NE SOS Statement of Dissolution form (sos.nebraska.gov, Neb. Rev. Stat. 21-148, checked 20 Nov 2026). A separate Statement of Termination is also filed to fully close, at the same $25/$30 fee.", confidence: "verified" },
  { slug: "nevada", fee: 100, label: "Articles of Dissolution", confidence: "secondary" },
  { slug: "new-hampshire", fee: 35, label: "Certificate of Cancellation (Form LLC-7)", confidence: "secondary" },
  { slug: "new-jersey", fee: 100, label: "Certificate of Cancellation", confidence: "secondary" },
  { slug: "new-mexico", fee: 25, label: "Articles of Dissolution", confidence: "secondary" },
  { slug: "new-york", fee: 60, label: "Articles of Dissolution (DOS-1366-f)", confidence: "secondary" },
  { slug: "north-carolina", fee: 30, label: "Articles of Dissolution (Form L-07)", confidence: "secondary" },
  { slug: "north-dakota", fee: 20, label: "Articles of Dissolution and Termination", confidence: "secondary" },
  { slug: "ohio", fee: 50, label: "Certificate of Dissolution (Form 616)", confidence: "secondary" },
  { slug: "oklahoma", fee: 50, label: "Articles of Dissolution (SOS Form 0080)", confidence: "secondary" },
  { slug: "oregon", fee: 100, label: "Articles of Amendment/Dissolution", confidence: "secondary" },
  { slug: "pennsylvania", fee: 70, label: "Certificate of Dissolution / Termination", confidence: "secondary" },
  { slug: "rhode-island", fee: 50, label: "Articles of Dissolution (Form 404)", confidence: "secondary" },
  { slug: "south-carolina", fee: 10, label: "Articles of Termination", confidence: "secondary" },
  { slug: "south-dakota", fee: 10, label: "Articles of Termination", confidence: "secondary" },
  { slug: "tennessee", fee: 40, label: "Notice of Dissolution (SS-4246) + Articles of Termination (SS-4245)", note: "$40 total for both filings.", confidence: "secondary" },
  { slug: "texas", fee: 40, label: "Certificate of Termination (Form 651)", confidence: "secondary" },
  { slug: "utah", fee: 0, label: "Statement of Dissolution, then Statement of Termination", confidence: "secondary" },
  { slug: "vermont", fee: 20, label: "Articles of Termination", confidence: "secondary" },
  { slug: "virginia", fee: 25, label: "Articles of Cancellation (Form LLC1050)", confidence: "secondary" },
  { slug: "washington", fee: 0, label: "Certificate of Dissolution", confidence: "secondary" },
  { slug: "west-virginia", fee: 25, label: "Articles of Termination (Form LLD-9)", confidence: "secondary" },
  { slug: "wisconsin", fee: 20, label: "Statement of Dissolution or Termination (Form 510)", note: "$20 online, $35 on paper.", confidence: "secondary" },
  { slug: "wyoming", fee: 60, label: "Articles of Dissolution", confidence: "secondary" },
];

export function getDissolutionFee(slug: string): DissolutionFee | undefined {
  return DISSOLUTION_FEES.find((d) => d.slug === slug);
}

/** States that commonly require a tax clearance certificate before the dissolution filing is accepted. */
export const TAX_CLEARANCE_STATES = new Set([
  "texas",
  "pennsylvania",
  "tennessee",
  "rhode-island",
  "new-hampshire",
]);
