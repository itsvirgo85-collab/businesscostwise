// Single source of truth for the site navigation.
// Header, footer, hub pages and JSON-LD all import from here so the
// taxonomy (Costs by State / Guides / Tools) stays consistent everywhere.
// Every href must be a real route — see src/app for the page inventory.

export type NavLink = {
  label: string;
  href: string;
  description: string;
};

export type NavSubgroup = {
  label: string;
  href: string;
  description: string;
  links: NavLink[];
};

export type NavSection = {
  id: string;
  label: string;
  href: string;
  description: string;
  links: NavLink[];
  subgroups?: NavSubgroup[];
};

export const COSTS_BY_STATE_SECTION: NavSection = {
  id: "costs-by-state",
  label: "Costs by State",
  href: "/llc-cost-by-state",
  description: "Verified LLC formation fees and recurring costs for all 50 states + DC.",
  links: [
    {
      label: "All 50 States + DC",
      href: "/llc-cost-by-state",
      description: "Verified formation fees and recurring costs for every state.",
    },
    {
      label: "Cheapest States",
      href: "/cheapest-states-to-form-an-llc",
      description: "Ranked by formation fees and 5-year totals.",
    },
    {
      label: "Most Expensive States",
      href: "/most-expensive-states-to-form-an-llc",
      description: "High fees, annual reports, and franchise taxes ranked.",
    },
  ],
};

export const GUIDES_SECTION: NavSection = {
  id: "guides",
  label: "Guides",
  href: "/guides",
  description: "Plain-English LLC guides: formation, costs, timelines, and compliance.",
  links: [
    {
      label: "What Is an LLC?",
      href: "/what-is-an-llc",
      description: "How an LLC works: liability protection, taxes, benefits, and limits.",
    },
    {
      label: "How to Form an LLC",
      href: "/how-to-form-an-llc",
      description: "7 steps: choose a state and name, appoint an agent, file, get an EIN.",
    },
    {
      label: "How Much Does It Cost to Start an LLC?",
      href: "/how-much-does-it-cost-to-start-an-llc",
      description: "Filing fees from $35 to about $500, plus yearly recurring costs.",
    },
    {
      label: "How Long Does It Take to Start an LLC?",
      href: "/how-long-does-it-take-to-start-an-llc",
      description: "Most states approve online filings in 1–5 business days.",
    },
    {
      label: "How to Get an EIN for Free",
      href: "/how-to-get-an-ein-for-free",
      description: "Apply free on irs.gov and usually get it immediately.",
    },
    {
      label: "Hidden Costs of Forming an LLC",
      href: "/hidden-costs-of-forming-an-llc",
      description: "Annual reports, franchise taxes, and agent fees beyond the filing fee.",
    },
    {
      label: "Annual Report Requirements by State",
      href: "/annual-report-requirements-by-state",
      description: "Which states charge a fee, and which add franchise tax.",
    },
    {
      label: "Does an LLC Protect Your Assets?",
      href: "/asset-protection",
      description: "When courts pierce the veil and how to strengthen protection.",
    },
  ],
  subgroups: [
    {
      label: "Business Structures",
      href: "/business-structures",
      description: "Compare LLC, sole proprietorship, corporation, and S-Corp side by side.",
      links: [
        {
          label: "Business Structures Compared",
          href: "/business-structures",
          description: "Liability, taxes, formalities, and formation costs side by side.",
        },
        {
          label: "LLC vs Sole Proprietorship",
          href: "/business-structures/llc-vs-sole-proprietorship",
          description: "Liability, taxes, formation cost, and when each fits.",
        },
        {
          label: "LLC vs Corporation",
          href: "/business-structures/llc-vs-corporation",
          description: "Flexibility, formalities, ownership, and growth trade-offs.",
        },
        {
          label: "LLC vs S-Corp",
          href: "/business-structures/llc-vs-s-corp",
          description: "Default taxation vs S-Corp election and self-employment tax.",
        },
        {
          label: "Single-Member vs Multi-Member LLC",
          href: "/business-structures/single-member-vs-multi-member-llc",
          description: "Ownership count, default tax treatment, and operating agreements.",
        },
      ],
    },
  ],
};

export const TOOLS_SECTION: NavSection = {
  id: "tools",
  label: "Tools",
  href: "/tools",
  description: "Free calculators for LLC formation, multi-year, and multi-state costs.",
  links: [
    {
      label: "LLC Cost Calculator",
      href: "/llc-cost-calculator",
      description: "Formation fees, annual reports, and 1, 3 & 5-year totals by state.",
    },
    {
      label: "Multi-State LLC Cost Comparator",
      href: "/tools/multi-state-llc-cost-comparator",
      description: "Compare LLC costs in up to five states side by side.",
    },
    {
      label: "Registered Agent Cost Calculator",
      href: "/tools/registered-agent-cost-calculator",
      description: "Commercial service costs vs serving as your own agent.",
    },
    {
      label: "Foreign Qualification Cost Calculator",
      href: "/tools/foreign-qualification-cost-calculator",
      description: "Costs of operating your LLC in a second state.",
    },
  ],
};

/** The three dropdown groups in the main menu, in display order. */
export const NAV_SECTIONS: NavSection[] = [
  COSTS_BY_STATE_SECTION,
  GUIDES_SECTION,
  TOOLS_SECTION,
];

/** Plain top-level links (no dropdown). */
export const PLAIN_NAV_LINKS: NavLink[] = [
  {
    label: "About",
    href: "/about",
    description: "Who we are and how this site works.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch with questions or corrections.",
  },
];

export const COMPANY_LINKS: NavLink[] = [
  {
    label: "About",
    href: "/about",
    description: "Who we are and how this site works.",
  },
  {
    label: "Sources & Methodology",
    href: "/about/sources-and-methodology",
    description: "How every fee is verified against official sources.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Get in touch with questions or corrections.",
  },
];

export const LEGAL_LINKS: NavLink[] = [
  {
    label: "Privacy Policy",
    href: "/privacy",
    description: "How we handle your information.",
  },
  {
    label: "Terms of Use",
    href: "/terms",
    description: "Rules for using this site.",
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
    description: "Educational information only — not legal or tax advice.",
  },
];

/** Every navigation href in one flat list (used for checks and JSON-LD). */
export function allNavHrefs(): string[] {
  const hrefs: string[] = [];
  for (const section of NAV_SECTIONS) {
    hrefs.push(section.href);
    for (const link of section.links) hrefs.push(link.href);
    for (const subgroup of section.subgroups ?? []) {
      hrefs.push(subgroup.href);
      for (const link of subgroup.links) hrefs.push(link.href);
    }
  }
  for (const link of [...PLAIN_NAV_LINKS, ...COMPANY_LINKS, ...LEGAL_LINKS]) {
    hrefs.push(link.href);
  }
  return [...new Set(hrefs)];
}
