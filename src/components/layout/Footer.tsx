import Link from "next/link";
import {
  COSTS_BY_STATE_SECTION,
  GUIDES_SECTION,
  TOOLS_SECTION,
  COMPANY_LINKS,
  LEGAL_LINKS,
  type NavLink,
} from "@/data/navigation";

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#102A43]">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-slate-600">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="inline-block py-2 hover:text-[#1769AA]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const guideLinks: NavLink[] = [
    ...GUIDES_SECTION.links,
    {
      label: "Business Structures",
      href: "/business-structures",
      description: "Compare LLC, sole proprietorship, corporation, and S-Corp side by side.",
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-[#102A43]">Get LLC Cost Calculator</h3>
            <p className="mt-2 text-sm text-slate-600">
              Independent educational platform for verified US LLC formation costs, multi-year estimates, and structure guides — one place for real, source-linked information.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              <Link href="/contact" className="inline-block py-2 text-[#1769AA] hover:underline">
                Contact us
              </Link>
            </p>
          </div>

          <FooterColumn title="Guides" links={guideLinks} />
          <FooterColumn title="Tools" links={TOOLS_SECTION.links} />
          <FooterColumn title="Costs by State" links={COSTS_BY_STATE_SECTION.links} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn title="Legal" links={LEGAL_LINKS} />
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          <p>Educational information only. Not legal, tax, or financial advice.</p>
          <p className="mt-2">
            © {new Date().getFullYear()} Get LLC Cost Calculator. All rights reserved. · Educational resource ·
            Not affiliated with any government agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
