const siteUrl = "https://www.getllccostcalculator.com";

type ArticleJsonLdProps = {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
};

export default function ArticleJsonLd({
  headline,
  description,
  datePublished,
  dateModified,
  url,
}: ArticleJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Get LLC Cost Calculator",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Get LLC Cost Calculator",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
