import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Can a Non-Resident Form an LLC in the USA? (2026)" },
  description:
    "Yes — no SSN or US address is needed to form an LLC. Learn how non-residents get an EIN, which states work best, and the Form 5472 reporting trap.",
  alternates: { canonical: "/guides/non-resident-llc" },
  openGraph: {
    title: "Can a Non-Resident Form an LLC in the USA? (2026)",
    description:
      "Yes — no SSN or US address is needed to form an LLC. Learn how non-residents get an EIN, which states work best, and the Form 5472 reporting trap.",
    type: "website",
    url: "/guides/non-resident-llc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Can a Non-Resident Form an LLC in the USA? (2026)",
    description:
      "Yes — no SSN or US address is needed to form an LLC. Learn how non-residents get an EIN, which states work best, and the Form 5472 reporting trap.",
    images: ["/twitter-image"],
  },
};

export default function NonResidentLlcPage() {
  const faqs = [
    {
      question: "Can a non-resident or foreigner form an LLC in the USA?",
      answer:
        "Yes. There is no citizenship or residency requirement to form an LLC in any US state, and you do not need a Social Security Number or a US address to file. You will need a registered agent with a physical address in the formation state, and an EIN to open a US bank account and file taxes.",
    },
    {
      question: "How does a non-resident get an EIN without an SSN?",
      answer:
        "File Form SS-4 with the IRS by fax or phone — the online EIN application requires an SSN or ITIN, so it does not work for non-residents without one. On the form, write “Foreign” where it asks for an SSN. Processing by fax typically takes about a week; by phone it can be issued during the call.",
    },
    {
      question: "EIN vs ITIN — which does a foreign LLC owner need?",
      answer:
        "An EIN belongs to the LLC; an ITIN is a personal tax number for an individual. Most foreign LLC owners need an EIN for the LLC and never need an ITIN. You only need an ITIN if you personally must file a US tax return or are claimed on one — for example, if the LLC is a disregarded entity and you have US-source income to report personally.",
    },
    {
      question: "What is Form 5472 and the $25,000 penalty?",
      answer:
        "A foreign-owned single-member LLC that is a disregarded entity must file Form 5472 with a pro forma Form 1120 every year, reporting transactions between the LLC and its foreign owner (including capital contributions). The penalty for missing or incomplete filing is $25,000 per year. This is the single most commonly missed obligation for non-resident owners — the LLC is easy to form and easy to get wrong on taxes.",
    },
    {
      question: "Which state is best for a non-resident LLC?",
      answer:
        "Wyoming and Delaware are the usual picks: Wyoming for low costs and privacy, Delaware for credibility with US customers and partners. New Mexico is also cheap with no annual report. But if you will have a US office, employees, or a warehouse somewhere, form there instead — foreign qualification in that state will cost you anyway.",
    },
    {
      question: "Can a non-resident open a US bank account for the LLC?",
      answer:
        "It is possible but harder than it used to be. Most US banks require an in-person visit with your passport, the LLC's formation documents, the EIN letter, and the operating agreement. A few fintech accounts can be opened remotely, but they are not full banks and have their own limits. Plan a US trip, or work with a bank that explicitly serves non-resident owners.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />

      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: "Non-Resident LLC", item: "/guides/non-resident-llc" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        Can a Non-Resident Form an LLC in the USA?
      </h1>

      <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-relaxed">
        Yes — and it is one of the most common questions from founders outside the US. No state requires citizenship, residency, or a Social Security Number to form an LLC. The hard parts are the EIN, the bank account, and the tax filings that come after.
      </p>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">How to form an LLC as a non-resident, step by step</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li><strong>Choose a state.</strong> Wyoming, Delaware, or New Mexico for a purely online business; the state where you will actually operate if you have a US presence.</li>
          <li><strong>Appoint a registered agent</strong> with a physical address in that state — you cannot use your foreign address.</li>
          <li><strong>File the Articles of Organization</strong> with the Secretary of State (online in most states; a registered agent or formation service can file for you).</li>
          <li><strong>Get an EIN</strong> by filing Form SS-4 by fax or phone — the online application needs an SSN or ITIN, which you do not have.</li>
          <li><strong>Write an operating agreement</strong> — banks will ask for it.</li>
          <li><strong>Open a US bank account</strong> — usually in person, with your passport, formation documents, EIN letter, and operating agreement.</li>
          <li><strong>File taxes every year</strong> — including Form 5472 with a pro forma Form 1120 if the LLC is foreign-owned and disregarded.</li>
        </ol>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">The Form 5472 trap</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          A foreign-owned single-member LLC is a “disregarded entity” for US tax purposes, which sounds like it means no filing. It means the opposite: the LLC must file Form 5472 with a pro forma Form 1120 each year, reporting reportable transactions with its foreign owner — including the initial capital contribution. The penalty is $25,000 per year for a missing or incomplete filing. Many non-resident owners learn about this only when the penalty letter arrives. If your LLC has a foreign owner, put this on your calendar before anything else.
        </p>
      </section>

      <section className="mt-10 max-w-3xl">
        <h2 className="text-xl font-semibold text-[#102A43]">EIN vs ITIN, in one paragraph</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          The EIN is the LLC’s tax number; the ITIN is a personal tax number for an individual who cannot get an SSN. Most foreign owners need the EIN and never need an ITIN. You need an ITIN only if you personally must file a US tax return — for example, if you are the owner of a disregarded-entity LLC with US-source income to report. Do not apply for an ITIN “just in case”; it adds paperwork and a months-long wait for no benefit.
        </p>
      </section>

      <figure className="mt-10 max-w-3xl">
        <Image
          src="/images/non-resident-llc.svg"
          alt="Non-resident LLC guide — form a US LLC and get an EIN without a Social Security number"
          width={1200}
          height={630}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-xl border border-slate-200"
        />
        <figcaption className="mt-2 text-sm text-slate-500">No SSN needed: EIN by fax or phone with Form SS-4.</figcaption>
      </figure>
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
        <h2 className="text-lg font-semibold text-[#102A43]">Related guides &amp; tools</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link href="/how-to-get-an-ein-for-free" className="text-[#1769AA] hover:underline">How to Get an EIN for Free</Link></li>
          <li><Link href="/tools/best-state-to-form-an-llc" className="text-[#1769AA] hover:underline">Best State to Form an LLC Finder</Link></li>
          <li><Link href="/tools/anonymous-llc-state-finder" className="text-[#1769AA] hover:underline">Anonymous LLC State Finder</Link></li>
          <li><Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">LLC Cost Calculator</Link></li>
        </ul>
      </section>

      <p className="mt-10 max-w-3xl text-xs leading-relaxed text-slate-500">
        Educational information only. Not legal or tax advice. US tax rules for foreign owners are complex and the penalties are large — work with a CPA experienced in non-resident filings.
      </p>
    </div>
  );
}
