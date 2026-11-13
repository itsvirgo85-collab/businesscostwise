import { NAV_SECTIONS, PLAIN_NAV_LINKS, type NavLink, type NavSection } from "@/data/navigation";

export default function JsonLd() {
  const siteUrl = "https://www.getllccostcalculator.com";

  const navElement = (label: string, href: string, children?: NavLink[]) => {
    const node: {
      "@type": string;
      name: string;
      url: string;
      hasPart?: { "@type": string; name: string; url: string }[];
    } = {
      "@type": "SiteNavigationElement",
      name: label,
      url: `${siteUrl}${href}`,
    };
    if (children && children.length > 0) {
      node.hasPart = children.map((link) => ({
        "@type": "SiteNavigationElement",
        name: link.label,
        url: `${siteUrl}${link.href}`,
      }));
    }
    return node;
  };

  const sectionElement = (section: NavSection) => {
    const parts: { "@type": string; name: string; url: string; hasPart?: { "@type": string; name: string; url: string }[] }[] =
      section.links.map((link) => navElement(link.label, link.href));
    for (const subgroup of section.subgroups ?? []) {
      parts.push(navElement(subgroup.label, subgroup.href, subgroup.links));
    }
    return {
      "@type": "SiteNavigationElement",
      name: section.label,
      url: `${siteUrl}${section.href}`,
      hasPart: parts,
    };
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Get LLC Cost Calculator",
        legalName: "Get LLC Cost Calculator",
        alternateName: ["GetLLCCostCalculator", "LLC Cost Calculator"],
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteUrl}/#logo`,
          url: `${siteUrl}/opengraph-image`,
          contentUrl: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          caption: "Get LLC Cost Calculator",
        },
        image: { "@id": `${siteUrl}/#logo` },
        description:
          "Independent educational resource for US LLC formation costs, verified state fee data, and small-business structure comparisons. Built to give founders one clear platform for real, source-linked information.",
        foundingDate: "2026",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            url: `${siteUrl}/contact`,
            availableLanguage: ["English"],
          },
        ],
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        knowsAbout: [
          "Limited liability company formation costs",
          "US state LLC filing fees",
          "LLC annual report requirements",
          "Business structure comparisons",
          "LLC vs sole proprietorship",
          "LLC vs corporation",
          "Employer Identification Number (EIN)",
        ],
        slogan: "One platform for real LLC costs — before you file",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Get LLC Cost Calculator",
        description:
          "Free LLC cost calculator for all 50 US states and DC. Formation fees, annual reports, franchise taxes, and multi-year totals with official source links.",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
        about: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${siteUrl}/#navigation`,
        name: "Main navigation",
        hasPart: [
          ...NAV_SECTIONS.map((section) => sectionElement(section)),
          ...PLAIN_NAV_LINKS.map((link) => navElement(link.label, link.href)),
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
