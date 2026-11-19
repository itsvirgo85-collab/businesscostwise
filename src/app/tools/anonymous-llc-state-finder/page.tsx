import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnonymousLlcFinder from "@/components/calculators/AnonymousLlcFinder";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Anonymous LLC State Finder: Privacy by State (2026)" },
  description:
    "Compare Wyoming, New Mexico, Delaware and Nevada for LLC privacy: which states list member names on public filings, plus formation and 5-year costs.",
  alternates: { canonical: "/tools/anonymous-llc-state-finder" },
  openGraph: {
    title: "Anonymous LLC State Finder: Privacy by State (2026)",
    description:
      "Compare Wyoming, New Mexico, Delaware and Nevada for LLC privacy: which states list member names on public filings, plus formation and 5-year costs.",
    type: "website",
    url: "/tools/anonymous-llc-state-finder",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Anonymous LLC State Finder: Privacy by State (2026)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anonymous LLC State Finder: Privacy by State (2026)",
    description:
      "Compare Wyoming, New Mexico, Delaware and Nevada for LLC privacy: which states list member names on public filings, plus formation and 5-year costs.",
    images: ["/twitter-image"],
  },
};

export default function AnonymousLlcPage() {
  const calculatorJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Anonymous LLC State Finder",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free educational finder ranking US states for LLC privacy by what appears on the public record, with formation and 5-year costs.",
  };

  const faqs = [
    {
      question: "Which state is best for an anonymous LLC?",
      answer:
        "New Mexico and Wyoming are the strongest choices. New Mexico has no annual report and does not list member names on the formation filing. Wyoming also keeps member names off public filings. Delaware does not disclose members on formation either, but its $400 annual tax makes it more expensive.",
    },
    {
      question: "Is a Nevada LLC anonymous?",
      answer:
        "Not in practice. Nevada requires an Annual List of Managers or Members, which is a public filing — member names appear on the record. Nevada is often marketed as private, but for member privacy it is weaker than Wyoming or New Mexico.",
    },
    {
      question: "Does an anonymous LLC hide me from the IRS or my bank?",
      answer:
        "No. Privacy on the state public record is not invisibility. The IRS knows the owners through tax filings, banks collect beneficial-owner information under their own rules, and a court can order disclosure. An anonymous LLC keeps your name out of a casual public search — nothing more.",
    },
    {
      question: "Do I still need to file a BOI report for my LLC?",
      answer:
        "No, if your LLC was formed in the US. FinCEN's final rule effective 14 August 2026 permanently exempts US-formed companies and US persons from beneficial ownership reporting. Only companies formed under foreign law that register to do business in a US state still report — within 30 days of registration. Note that New York's LLC Transparency Act (in effect from 1 January 2026) is a separate state disclosure for NY LLCs.",
    },
    {
      question: "If I form an anonymous LLC in Wyoming but live in another state, am I still private?",
      answer:
        "Usually not. If you operate in your home state, you will generally need to foreign qualify there — and that filing typically puts your name on that state's public record. Privacy works best when the LLC genuinely operates where it is formed.",
    },
    {
      question: "Which state is best for an anonymous LLC in 2026?",
      answer: "New Mexico and Wyoming tie at the top. New Mexico charges $50 to form and $0 a year, with no annual report and no member names on any public filing. Wyoming charges $100 to form and $60 a year, with member names kept off public filings. Delaware is third — members are not disclosed, but the $400 annual tax makes it the most expensive of the three over five years.",
    },
    {
      question: "Does an anonymous LLC hide you from the IRS?",
      answer: "No. An anonymous LLC hides your name from the state's public business register, not from the government. The IRS sees you on the EIN application and on your tax return, and banks see you when you open the account. Since 14 August 2026, US-formed LLCs are also exempt from FinCEN beneficial ownership reporting, so there is no federal ownership database to hide from either — the privacy that matters now is the state public record, which is exactly what this finder measures.",
    },
    {
      question: "What is the best anonymous LLC state for privacy and low cost?",
      answer: "New Mexico: a privacy score of 9 out of 10 and a five-year cost of $50 — the cheapest state in our data and one of the most private. Wyoming is second on the combined measure: the same privacy score, $400 over five years. Use the finder above sorted by five-year cost to see the full ranking.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Tools", item: "/tools" },
          { name: "Anonymous LLC State Finder", item: "/tools/anonymous-llc-state-finder" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        Anonymous LLC State Finder 2026
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        “Anonymous LLC” means one thing: your name does not appear on the state’s public business record. Some states publish member names, some do not — and the difference matters more than the marketing suggests.
      </p>

      <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
        This finder ranks Wyoming, New Mexico, Delaware and Nevada by privacy, shows what each costs over five years, and compares them with your home state.
      </p>

      <p className="mt-3 max-w-3xl text-sm text-slate-500">
        Educational tool only. Not legal advice.
      </p>

      <div className="mt-10">
        <AnonymousLlcFinder />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How privacy differs by state</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The formation filing is the first test: Delaware, Wyoming and New Mexico ask only for the LLC name and registered agent, while most states also want member or manager information. The annual report is the second test: New Mexico has no annual report at all, Wyoming’s does not list members, and Nevada’s Annual List of Managers or Members does — which is why Nevada scores low here despite its reputation.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          A registered agent can keep your home address off the record in most states, but it cannot keep member names off a filing that requires them. And privacy has limits: the IRS, banks and courts can always identify the owners.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">The BOI trap: most “anonymous LLC” advice is outdated</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Many guides still warn that LLC owners must file a beneficial ownership (BOI) report with FinCEN. That is no longer true for US-formed LLCs: FinCEN’s final rule effective 14 August 2026 permanently exempted domestic companies and US persons. Only foreign-formed companies that register in a US state still report, within 30 days. Separately, New York’s LLC Transparency Act took effect on 1 January 2026 and adds a state-level disclosure for New York LLCs.
        </p>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/anonymous-llc-finder.svg"
          alt="Anonymous LLC state finder ranking Wyoming New Mexico Delaware and Nevada by privacy"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">New Mexico and Wyoming score highest on privacy; Nevada scores lowest of the four.</figcaption>
      </figure>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Is a Nevada LLC really anonymous?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          No — not in the way most people mean it. Nevada requires an Annual List of
          Managers or Managing Members, and that list is public, so the people behind the
          LLC are visible. Nevada also costs $425 to form and $350 a year to keep, the
          most expensive of the four &quot;privacy&quot; states. The finder above scores
          Nevada 4 out of 10 for privacy, against 9 for New Mexico (no annual report at
          all, members never listed) and 9 for Wyoming (members are not on public
          filings). If a guide tells you Nevada is the anonymous-LLC state, it is repeating
          outdated marketing, not the current filing rules.
        </p>
      </section>
      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Anonymous LLC for non-residents: Wyoming or New Mexico?</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          Both work, and the choice is price versus paperwork. New Mexico is cheaper over
          five years ($50 total: $50 to form, $0 a year) and never asks for member names,
          but it has no online filing portal as polished as Wyoming&apos;s and no annual
          report to remind you the LLC exists. Wyoming costs $100 to form and $60 a year
          ($400 over five years), with a $60 annual report that keeps the LLC in good
          standing. Non-residents can form in either state without a Social Security
          number — see our{" "}
          <Link href="/guides/non-resident-llc" className="text-[#1769AA] hover:underline">
            non-resident LLC guide
          </Link>{" "}
          for the EIN and bank-account steps. Neither state hides you from the IRS: your
          EIN application and tax returns still identify you.
        </p>
      </section>
      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">Frequently asked questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-[#102A43]">
                <span className="flex items-center justify-between">
                  {f.question}
                  <span className="ml-4 text-slate-400 transition group-open:rotate-180">▼</span>
                </span>
              </summary>
              <p className="mt-3 text-slate-600 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-3xl rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related tools &amp; guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/tools/best-state-to-form-an-llc" className="text-[#1769AA] hover:underline">
              Best State to Form an LLC Finder
            </Link>
          </li>
          <li>
            <Link href="/tools/registered-agent-cost-calculator" className="text-[#1769AA] hover:underline">
              Registered Agent Cost Calculator — privacy is one reason to hire one
            </Link>
          </li>
          <li>
            <Link href="/guides/what-is-an-operating-agreement" className="text-[#1769AA] hover:underline">
              What Is an Operating Agreement?
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-by-state" className="text-[#1769AA] hover:underline">
              LLC Costs by State
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. This finder and page provide general information and estimates. They are not legal advice. Privacy rules change; confirm what your state discloses on its current filing forms. This site is not affiliated with any government agency.
      </p>
    </div>
  );
}
