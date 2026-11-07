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
          "Educational resource for US LLC formation costs, state fee data, and small-business structure comparisons.",
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
