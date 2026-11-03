export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://businesscostwise.com/#website",
        url: "https://businesscostwise.com",
        name: "BusinessCostWise",
        description:
          "US LLC formation costs by state, calculators, and educational business structure guides with official source links.",
        publisher: { "@id": "https://businesscostwise.com/#organization" },
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://businesscostwise.com/#organization",
        name: "BusinessCostWise",
        url: "https://businesscostwise.com",
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
