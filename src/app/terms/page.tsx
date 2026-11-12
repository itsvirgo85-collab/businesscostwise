import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: { absolute: "Terms of Use" },
  description:
    "Terms of use for Get LLC Cost Calculator: educational purpose, no warranties, acceptable use and liability limits for LLC cost guides and tools on this site.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use",
    description: "Terms of use for Get LLC Cost Calculator: educational purpose, no warranties, acceptable use and liability limits for LLC cost guides and tools on this site.",
    type: "article",
    url: "/terms",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use",
    description: "Terms of use for Get LLC Cost Calculator: educational purpose, no warranties, acceptable use and liability limits for LLC cost guides and tools on this site.",
    images: ["/twitter-image"],
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Terms of Use", item: "/terms" },
        ]}
      />

      <h1 className="text-3xl font-bold tracking-tight text-[#102A43]">Terms of Use</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: November 2026</p>

      <div className="mt-6 space-y-5 text-slate-700 leading-relaxed">
        <p>
          Welcome to Get LLC Cost Calculator. By accessing or using this website (getllccostcalculator.com and related pages), you agree to these Terms of Use. If you do not agree, please do not use the site.
        </p>

        <p>
          These Terms govern your use of the educational content, calculators, state fee tables, structure comparisons, and other materials published on the site. They are intended to set clear expectations about the nature of the information provided and the limits of our responsibility.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">1. Educational Purpose Only</h2>
        <p>
          Get LLC Cost Calculator is an independent educational platform. All content — including fee tables, multi-year cost estimates, formation guides, structure comparisons, FAQs, and methodology explanations — is provided for general informational and educational purposes only.
        </p>
        <p>
          Nothing on this site constitutes legal advice, tax advice, accounting advice, financial advice, or professional services of any kind. The site does not create an attorney-client, advisor-client, or any other professional relationship between you and the site operators.
        </p>
        <p>
          Business formation, taxation, and liability protection involve facts and rules that vary by state, by business activity, and by individual circumstances. Always confirm current requirements with the official state agency (usually the Secretary of State or equivalent) and consult a qualified professional licensed in your jurisdiction before filing documents, paying fees, or making decisions based on information you find online.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">2. Nature of Fee Data and Calculators</h2>
        <p>
          State filing fees, annual report fees, franchise taxes, and related costs change over time. We maintain a registry of official source URLs and update verified figures when published amounts change. Verification dates and source links are provided so you can check the primary government pages yourself.
        </p>
        <p>
          Calculators and tables produce estimates based on the data available at the time of verification. They may not include every possible fee (for example, expedited processing, name reservation, publication requirements in certain states, local business licenses, or professional service costs). Optional inputs such as registered-agent fees are illustrative and depend on the provider or arrangement you choose.
        </p>
        <p>
          You remain solely responsible for verifying the current official schedule before budgeting or filing.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">3. No Warranties</h2>
        <p>
          The site and all content are provided “as is” and “as available” without warranties of any kind, whether express or implied. This includes, without limitation, implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
        </p>
        <p>
          We do not warrant that:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Fee data or other information is complete, accurate, current, or error-free at all times</li>
          <li>The site will be uninterrupted, secure, or free of defects</li>
          <li>Results from calculators will match every possible real-world cost scenario</li>
          <li>Links to official sources will remain active or unchanged</li>
        </ul>
        <p>
          Official government sources are the authoritative reference. When there is any discrepancy, rely on the official source.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">4. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, the operators of Get LLC Cost Calculator and their contributors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the site, reliance on its content, or inability to use the site. This includes damages for loss of profits, data, goodwill, or business opportunities, whether based on contract, tort, strict liability, or any other theory, even if advised of the possibility of such damages.
        </p>
        <p>
          Your sole remedy for dissatisfaction with the site is to stop using it.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">5. Acceptable Use</h2>
        <p>
          You agree to use the site only for lawful purposes and in a manner that does not harm the site, its operators, or other users. Prohibited conduct includes, but is not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Attempting to disrupt, overload, or interfere with the operation or security of the site</li>
          <li>Using automated means (scrapers, bots, crawlers) in a way that imposes an unreasonable load or circumvents technical measures, except for standard search-engine indexing consistent with robots.txt</li>
          <li>Misrepresenting the source or nature of the content, or using content to create misleading materials that could harm others</li>
          <li>Submitting false, abusive, or malicious content through the contact form</li>
          <li>Attempting to gain unauthorized access to systems, data, or accounts</li>
        </ul>
        <p>
          We reserve the right to restrict or block access in cases of abuse or violation of these Terms.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">6. Intellectual Property</h2>
        <p>
          The original content, organization, design, and compilation of materials on this site are protected by applicable intellectual property laws. You may view and use the educational content for personal, non-commercial research and decision-making purposes. You may not systematically republish, sell, or commercially exploit large portions of the site’s unique compilation of fee data and guides without permission, except as allowed by fair use or similar doctrines.
        </p>
        <p>
          Official government fee schedules and forms remain the property of the relevant government agencies. Links to those sources are provided for verification and convenience.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">7. Third-Party Links</h2>
        <p>
          The site contains links to official state and federal websites and other external resources. These links are provided for convenience and verification. We do not control and are not responsible for the content, accuracy, availability, or practices of third-party sites. Inclusion of a link does not imply endorsement.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">8. No Formation or Filing Services</h2>
        <p>
          Get LLC Cost Calculator is not a business formation service, registered agent service, or filing intermediary. We do not prepare or file documents on your behalf, act as your registered agent, or collect state fees for transmission to government agencies. Any “free formation” offers you encounter on other sites are independent of this platform and typically still require payment of the official state filing fee.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">9. Changes to the Site and Terms</h2>
        <p>
          We may update content, features, fee data, or these Terms at any time. Material changes to the Terms will be reflected by updating the “Last updated” date. Continued use of the site after changes constitutes acceptance of the revised Terms to the extent permitted by law.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">10. Governing Law and Miscellaneous</h2>
        <p>
          These Terms are governed by applicable law without regard to conflict-of-law principles. If any provision is found unenforceable, the remaining provisions continue in effect. These Terms constitute the entire agreement between you and the site operators regarding use of the site and supersede prior understandings on that subject.
        </p>

        <h2 className="text-xl font-semibold text-[#102A43] pt-4">11. Contact</h2>
        <p>
          Questions about these Terms may be sent through the{' '}
          <Link href="/contact" className="text-[#1769AA] hover:underline">contact form</Link>.
          For fee data methodology, see{' '}
          <Link href="/about/sources-and-methodology" className="text-[#1769AA] hover:underline">Sources & Methodology</Link>.
        </p>

        <p className="pt-4">
          See also our{' '}
          <Link href="/privacy" className="text-[#1769AA] hover:underline">Privacy Policy</Link>
          {' '}and{' '}
          <Link href="/disclaimer" className="text-[#1769AA] hover:underline">Disclaimer</Link>.
        </p>

        <p className="pt-2 text-sm text-slate-500">
          Educational information only. These Terms describe the conditions of use of the website and are not legal advice about your specific situation.
        </p>
      </div>
    </div>
  );
}
