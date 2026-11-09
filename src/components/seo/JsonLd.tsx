export default function JsonLd() {
  const siteUrl = "https://www.getllccostcalculator.com";

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
        founder: { "@id": `${siteUrl}/#founder` },
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
        sameAs: [],
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#founder`,
        name: "Get LLC Cost Calculator Founder",
        jobTitle: "Founder & Editor",
        url: `${siteUrl}/about`,
        worksFor: { "@id": `${siteUrl}/#organization` },
        description:
          "Independent researcher and product builder who created Get LLC Cost Calculator so founders can compare verified US LLC formation costs and structure options on one trustworthy platform.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Get LLC Cost Calculator",
        description:
          "Free LLC cost calculator for 49 verified US states and DC. Formation fees, annual reports, franchise taxes, and multi-year totals with official source links.",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en-US",
        about: { "@id": `${siteUrl}/#organization` },
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
