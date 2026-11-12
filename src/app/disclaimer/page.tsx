import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Disclaimer" },
  description:
    "Get LLC Cost Calculator provides educational information only — not legal, tax or financial advice. Always verify official state sources before filing.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Disclaimer",
    description: "Get LLC Cost Calculator provides educational information only — not legal, tax or financial advice. Always verify official state sources before filing.",
    type: "article",
    url: "/disclaimer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer",
    description: "Get LLC Cost Calculator provides educational information only — not legal, tax or financial advice. Always verify official state sources before filing.",
    images: ["/twitter-image"],
  },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Disclaimer", item: "/disclaimer" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Disclaimer</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: November 2026</p>

      <div className="mt-6 space-y-5 text-slate-700 leading-relaxed">
        <p className="font-medium text-[#102A43]">
          Educational information only. Get LLC Cost Calculator provides general educational information about US LLC formation costs, state fees, business structures, and related topics. Nothing on this website constitutes legal, tax, accounting, or financial advice.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">1. Purpose of This Site</h2>
        <p>
          This site was built to solve a practical problem: founders and small-business owners often encounter scattered, inconsistent, or outdated information when trying to understand how much it costs to form and maintain an LLC in different states. Official fee schedules are published by individual state agencies. Comparison posts on the open web sometimes lag behind changes or mix marketing claims with government fees.
        </p>
        <p>
          Get LLC Cost Calculator consolidates verified formation and recurring fee information with links to official sources, multi-year cost estimates, and plain-language guides. The goal is transparency and convenience for research — not to replace professional judgment or official government processes.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">2. Not Legal, Tax, or Financial Advice</h2>
        <p>
          The content on this site — including articles, tables, calculators, FAQs, structure comparisons, and methodology explanations — is for general educational purposes. It does not address your specific facts, risk profile, industry, or goals.
        </p>
        <p>
          Forming a business entity, choosing a tax classification, maintaining limited liability protection, and complying with state and federal rules involve legal and tax considerations that depend on individual circumstances. Laws and administrative practices differ by state and can change. Only a qualified professional licensed in the relevant jurisdiction can provide advice tailored to your situation.
        </p>
        <p>
          Use of this website does not create an attorney-client, tax-advisor, or any other professional relationship. No communication through the site (including the contact form) creates such a relationship.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">3. Fee Data, Estimates, and Official Sources</h2>
        <p>
          Base fee figures are drawn from official state sources and marked with verification dates where applicable. We maintain a registry of source URLs and monitor those pages so that published amounts can be updated when they change. Details of the process are described on the{' '}
          <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">Sources & Methodology</Link> page.
        </p>
        <p>
          Despite these efforts:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Fees, forms, processing times, and eligibility rules change.</li>
          <li>Some costs (expedite fees, publication requirements, local licenses, professional service fees) may not appear in every estimate.</li>
          <li>Optional inputs in the calculator (such as registered-agent cost) are planning assumptions, not quotes from specific providers.</li>
          <li>Multi-year totals are illustrative projections based on currently known recurring fees; future legislative or administrative changes can alter actual costs.</li>
        </ul>
        <p>
          Always confirm the current schedule, forms, and instructions on the official website of the relevant Secretary of State (or equivalent agency) and other applicable government sources before filing, budgeting, or relying on any number you see here.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">4. No Affiliation with Government Agencies</h2>
        <p>
          Get LLC Cost Calculator is an independent educational resource. It is not affiliated with, endorsed by, or sponsored by any state Secretary of State office, the Internal Revenue Service, or any other government agency. Links to official sources are provided for verification and convenience only.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">5. Limited Liability and Business Structure Information</h2>
        <p>
          Guides that discuss limited liability, piercing the corporate veil, sole proprietorships, corporations, S-Corp elections, and similar topics are educational overviews. Limited liability protection is not absolute. Courts can disregard the entity in certain circumstances (for example, fraud, undercapitalization, or failure to maintain separation between personal and business affairs). Personal guarantees and certain professional or regulatory obligations can also affect exposure.
        </p>
        <p>
          Whether an LLC (or any other structure) is appropriate for you depends on your activities, risk tolerance, growth plans, tax situation, and other factors. This site does not recommend a specific structure for any individual reader.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">6. Calculators and Planning Tools</h2>
        <p>
          The LLC cost calculator and related tools are planning aids. They help you see approximate formation and multi-year state costs based on available data. They are not guarantees of actual costs, processing times, or outcomes. Real-world costs can differ based on choices you make (expedited filing, commercial registered agent, publication, local permits) and based on future changes in state schedules.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">7. Third-Party Content and Links</h2>
        <p>
          The site links to official government pages and may reference external resources. We do not control the content, accuracy, or availability of third-party sites. Visiting those sites is at your own risk, and their terms and privacy practices apply.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">8. No Formation or Filing Services</h2>
        <p>
          This site does not form LLCs, file documents, act as a registered agent, collect state fees, or provide registered-agent services. Any formation services you may encounter elsewhere are independent of Get LLC Cost Calculator. “Free” formation offers from third parties almost always still require you to pay the official state filing fee.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, the operators of this site and their contributors are not liable for any damages arising from your use of, or reliance on, the site or its content. This includes direct, indirect, incidental, consequential, and special damages. Your sole remedy is to discontinue use of the site.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">10. Changes</h2>
        <p>
          Content and this Disclaimer may be updated as practices, data, or legal requirements evolve. The “Last updated” date reflects the most recent revision of this page.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">11. Contact and Corrections</h2>
        <p>
          If you believe a fee figure is outdated or a source link is incorrect, please use the{' '}
          <Link href="/contact" className="text-[#1769AA] hover:underline">contact form</Link>{' '}
          and include the state, the fee type, the amount you believe is current, and a link to the official page. We welcome corrections that help keep the educational data accurate.
        </p>
        <p>
          For questions about methodology, see{' '}
          <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">Sources & Methodology</Link>.
        </p>

        <p className="pt-4">
          See also our{' '}
          <Link href="/privacy" className="text-[#1769AA] hover:underline">Privacy Policy</Link>
          {' '}and{' '}
          <Link href="/terms" className="text-[#1769AA] hover:underline">Terms of Use</Link>.
        </p>

        <p className="pt-2 text-sm text-slate-500">
          This Disclaimer is part of the educational framing of the site. It is not a substitute for professional advice specific to your circumstances.
        </p>
      </div>
    </div>
  );
}
