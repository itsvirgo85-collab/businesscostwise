import Link from "next/link";

type BreadcrumbItem = { name: string; item: string };

const SITE_URL = "https://www.getllccostcalculator.com";

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: new URL(entry.item, SITE_URL).toString(),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
        {items.map((entry, index) => (
          <span key={entry.item}>
            {index > 0 && <span className="mx-2">/</span>}
            {index === items.length - 1 ? (
              <span className="text-slate-800" aria-current="page">{entry.name}</span>
            ) : (
              <Link href={entry.item} className="hover:text-[#1769AA]">{entry.name}</Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
