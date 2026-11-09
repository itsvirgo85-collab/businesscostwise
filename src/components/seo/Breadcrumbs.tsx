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
        <ol className="flex flex-wrap items-center gap-1 list-none p-0 m-0">
          {items.map((entry, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${entry.item}-${index}`} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-slate-400" aria-hidden="true">
                    /
                  </span>
                )}
                {isLast ? (
                  <span className="text-slate-800" aria-current="page">
                    {entry.name}
                  </span>
                ) : (
                  <Link href={entry.item} className="hover:text-[#1769AA]">
                    {entry.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
