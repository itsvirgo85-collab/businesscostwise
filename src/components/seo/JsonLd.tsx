export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.getllccostcalculator.com/#website",
        url: "https://www.getllccostcalculator.com",
        name: "Get LLC Cost Calculator",
        description:
          "Free LLC cost calculator for 49 verified US states and DC. Formation fees, annual reports, franchise taxes, and multi-year totals with official source links.",
        publisher: { "@id": "https://www.getllccostcalculator.com/#organization" },
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://www.getllccostcalculator.com/#organization",
        name: "Get LLC Cost Calculator",
        url: "https://www.getllccostcalculator.com",
        description:
          "Independent educational resource for US LLC formation costs, verified state fee data, and small-business structure comparisons. Built to give founders one clear platform for real, source-linked information.",
        email: "info@getllccostcalculator.com",
        foundingDate: "2026",
        sameAs: [],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "info@getllccostcalculator.com",
          availableLanguage: "English",
        },
      },
      {
        "@type": "Person",
        "@id": "https://www.getllccostcalculator.com/#founder",
        name: "Get LLC Cost Calculator Founder",
        jobTitle: "Founder & Editor",
        url: "https://www.getllccostcalculator.com/about",
        worksFor: { "@id": "https://www.getllccostcalculator.com/#organization" },
        description:
          "Independent researcher and product builder who created Get LLC Cost Calculator so founders can compare verified US LLC formation costs and structure options on one trustworthy platform.",
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
