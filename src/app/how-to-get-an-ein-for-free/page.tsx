import type { Metadata } from "next";
import Link from "next/link";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "How to Get an EIN for Free (2026)" },
  description:
    "An EIN is free from the IRS: apply online on irs.gov and usually get it immediately. Step-by-step checklist, what you need first, and avoid paid services.",
  alternates: { canonical: "/how-to-get-an-ein-for-free" },
  openGraph: {
    title: "How to Get an EIN for Free (2026)",
    description:
      "An EIN is free from the IRS: apply online on irs.gov and usually get it immediately. Step-by-step checklist, what you need first, and avoid paid services.",
    type: "article",
    url: "/how-to-get-an-ein-for-free",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get an EIN for Free (2026)",
    description:
      "An EIN is free from the IRS: apply online on irs.gov and usually get it immediately. Step-by-step checklist, what you need first, and avoid paid services.",
    images: ["/twitter-image"],
  },
};

export default function GetEINFreePage() {
  const faqs = [
    {
      question: "How to get an EIN for free?",
      answer:
        "Apply directly on the IRS website using the online EIN application. The EIN is issued free of charge by the IRS. You do not need to pay a third-party website for the number itself.",
    },
    {
      question: "Is the EIN free?",
      answer:
        "Yes. The IRS does not charge a fee to issue an Employer Identification Number. Services that charge for an EIN are charging for convenience, not for the government filing.",
    },
    {
      question: "Do I need an EIN for a single-member LLC?",
      answer:
        "A single-member LLC with no employees may sometimes use the owner’s SSN for federal taxes, but many banks require an EIN to open a business account. Multi-member LLCs and LLCs with employees generally need an EIN.",
    },
    {
      question: "How long does it take to get an EIN?",
      answer:
        "Online applications completed during IRS service hours usually receive the EIN immediately. Keep a copy of the confirmation notice.",
    },
    {
      question: "Can I get an EIN before my LLC is approved?",
      answer:
        "In most cases you should form the LLC with the state first so you can accurately list the entity type and formation details. Some applicants apply after state approval to avoid mismatches.",
    },
    {
      question: "What if I lose my EIN confirmation letter?",
      answer:
        "You can request a copy or verification from the IRS. Do not apply for a new EIN if you already have one for the same entity.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <FaqJsonLd faqs={faqs} />
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "How to Form an LLC", item: "/how-to-form-an-llc" },
          { name: "Get an EIN for Free", item: "/how-to-get-an-ein-for-free" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43] sm:text-4xl">
        How to Get an EIN for Free
      </h1>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        <strong>Short answer:</strong> An Employer Identification Number (EIN) is a federal tax ID issued by the IRS. You can obtain one at <strong>no cost</strong> on the official IRS website. You do not need to pay a third-party service for the number itself.
      </p>

      <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-950">
        <strong>Key point:</strong> The IRS does not charge for an EIN. If a website asks you to pay only for the EIN number, apply on IRS.gov instead.
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/how-to-form-an-llc"
          className="rounded-lg bg-[#102A43] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1769AA]"
        >
          How to form an LLC
        </Link>
        <Link
          href="/how-long-does-it-take-to-start-an-llc"
          className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#1769AA]"
        >
          Formation timeline
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">What you need before you apply</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Have these details ready before you open the IRS application — it makes the process faster and reduces the chance of a mismatch with your state filing:
        </p>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Your LLC&apos;s legal name exactly as approved by the state, and the state where it was formed.</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> The responsible party&apos;s name and taxpayer identification number (Social Security number or ITIN).</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> The LLC&apos;s mailing address and principal business address.</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> The reason you are applying — for example, you started a new business, hired employees, or need the EIN to open a bank account.</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> The date the business started and the type of entity (LLC) for the application.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Steps to get an EIN free online</h2>
        <ol className="mt-4 space-y-3 text-slate-700">
          <li>
            <strong>1.</strong> Form your LLC with the state first (or have responsible party details ready).
          </li>
          <li>
            <strong>2.</strong> Go to the official IRS EIN online application (confirm the domain is irs.gov).
          </li>
          <li>
            <strong>3.</strong> Complete the form: entity type (LLC), responsible party, addresses, and reason for applying.
          </li>
          <li>
            <strong>4.</strong> Submit during IRS online hours. Save the EIN confirmation notice immediately.
          </li>
        </ol>
        <p className="mt-4 text-slate-700 leading-relaxed">
          The online application is the fastest method for most applicants who have a valid taxpayer identification number and are authorized to apply.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Step-by-step checklist for the IRS online application</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Walk through the application in this order. The whole process is free — the IRS never charges a fee for an EIN.
        </p>
        <ol className="mt-4 space-y-3 text-slate-700">
          <li>
            <strong>1.</strong> Confirm you are on irs.gov and that the online EIN application is open — it is only available during IRS service hours, so check the time before you start.
          </li>
          <li>
            <strong>2.</strong> Select the entity type (LLC) and the reason you are applying.
          </li>
          <li>
            <strong>3.</strong> Enter the LLC&apos;s legal name and address exactly as filed with the state — a mismatch is a common reason for rejection or delay.
          </li>
          <li>
            <strong>4.</strong> Enter the responsible party&apos;s details and taxpayer identification number.
          </li>
          <li>
            <strong>5.</strong> Review every field carefully before submitting. Corrections after submission are much slower than getting it right the first time.
          </li>
          <li>
            <strong>6.</strong> Submit the application. In most cases the EIN is issued immediately and shown on screen.
          </li>
          <li>
            <strong>7.</strong> Save the EIN confirmation notice (CP 575) right away — print it and keep a copy with your formation documents. If you close the page without saving it, getting a replacement takes extra time.
          </li>
          <li>
            <strong>8.</strong> Use the EIN to open the business bank account and for any tax filings. Do not apply for a second EIN for the same entity.
          </li>
        </ol>
        <p className="mt-4 text-slate-700 leading-relaxed">
          If the online application is unavailable — for example, outside IRS service hours or if you do not have a valid taxpayer identification number — the IRS also accepts applications by fax or mail, but those take longer. The online route is the fastest option for most applicants.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">When you typically need an EIN</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Multi-member LLC</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Hiring employees</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Opening a business bank account (most banks require it)</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Certain tax elections (for example, electing S-corporation taxation)</li>
          <li className="flex gap-2"><span className="text-[#1769AA]">•</span> Operating as a partnership or corporation for tax purposes</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Avoiding paid third-party EIN services</h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Many commercial websites charge $50–$200 or more to “get your EIN.” In most cases they are simply submitting the same free IRS application on your behalf. You can do the identical filing yourself at no cost on the official IRS site.
        </p>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Paying a service can make sense only if you specifically want hand-holding or have a complex situation that prevents online self-application. For a standard single-member or multi-member LLC, the free IRS online application is usually sufficient.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[#102A43]">Frequently asked questions</h2>
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

      <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-[#102A43]">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/how-to-form-an-llc" className="text-[#1769AA] hover:underline">
              How to form an LLC
            </Link>
          </li>
          <li>
            <Link href="/how-long-does-it-take-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How long does it take to start an LLC?
            </Link>
          </li>
          <li>
            <Link href="/how-much-does-it-cost-to-start-an-llc" className="text-[#1769AA] hover:underline">
              How much does it cost to start an LLC?
            </Link>
          </li>
          <li>
            <Link href="/llc-cost-calculator" className="text-[#1769AA] hover:underline">
              LLC cost calculator
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Educational only. Always use the official IRS website for EIN applications. This site is not affiliated with the IRS or any government agency.
      </p>
    </div>
  );
}
