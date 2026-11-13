"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_SECTIONS, PLAIN_NAV_LINKS, type NavSection } from "@/data/navigation";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function DropdownLink({
  href,
  label,
  description,
  onNavigate,
}: {
  href: string;
  label: string;
  description: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block rounded-lg px-3 py-2.5 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA]"
    >
      <span className="block text-sm font-medium text-slate-800">{label}</span>
      <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">{description}</span>
    </Link>
  );
}

function DropdownPanel({ section, onNavigate }: { section: NavSection; onNavigate: () => void }) {
  const isGuides = section.subgroups && section.subgroups.length > 0;

  if (isGuides) {
    const subgroup = section.subgroups![0];
    return (
      <div className="absolute left-1/2 top-full z-50 w-[38rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-2">
        <div className="grid grid-cols-2 gap-6 rounded-xl border border-slate-200 bg-white p-5 shadow-lg">
          <div>
            <p className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
              {section.label}
            </p>
            <div className="mt-2 space-y-0.5">
              {section.links.map((link) => (
                <DropdownLink key={link.href} {...link} onNavigate={onNavigate} />
              ))}
            </div>
            <Link
              href={section.href}
              onClick={onNavigate}
              className="mt-3 inline-block rounded-lg px-3 py-2 text-sm font-semibold text-[#1769AA] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA]"
            >
              View all guides →
            </Link>
          </div>
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
              {subgroup.label}
            </p>
            <div className="mt-2 space-y-0.5">
              {subgroup.links.map((link) => (
                <DropdownLink key={link.href} {...link} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-1/2 top-full z-50 w-80 max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-2">
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
        {section.links.map((link) => (
          <DropdownLink key={link.href} {...link} onNavigate={onNavigate} />
        ))}
        <div className="mt-1 border-t border-slate-100 pt-1">
          <Link
            href={section.href}
            onClick={onNavigate}
            className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#1769AA] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA]"
          >
            View all {section.label.toLowerCase()} →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  // Close menus on route change.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  // Close the desktop dropdown on Escape.
  useEffect(() => {
    if (!openMenu) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openMenu]);

  // Close the desktop dropdown on outside click.
  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex min-h-[44px] shrink-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA]"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#102A43] text-xs font-bold text-white">
            LLC
          </div>
          <div className="flex items-baseline">
            <span className="text-lg font-semibold tracking-tight text-[#102A43]">
              Get LLC Cost Calculator
            </span>
            <span className="ml-2 hidden text-xs text-slate-500 xl:inline">
              Free US LLC fees by state
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_SECTIONS.map((section) => {
            const isOpen = openMenu === section.id;
            return (
              <div
                key={section.id}
                className="relative"
                onMouseEnter={() => setOpenMenu(section.id)}
                onMouseLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(section.id)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null);
                }}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMenu(isOpen ? null : section.id)}
                  className="flex min-h-[44px] items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#1769AA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA]"
                >
                  {section.label}
                  <Chevron open={isOpen} />
                </button>
                {isOpen && <DropdownPanel section={section} onNavigate={closeAll} />}
              </div>
            );
          })}

          {PLAIN_NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-[44px] items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#1769AA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/llc-cost-calculator"
            className="ml-2 flex min-h-[44px] items-center rounded-lg bg-[#102A43] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1769AA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA] focus-visible:ring-offset-2"
          >
            Calculate Costs
          </Link>
        </nav>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-3 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`border-t border-slate-100 bg-white px-4 pb-4 pt-2 sm:px-6 lg:hidden ${
          mobileOpen ? "" : "hidden"
        }`}
      >
        <nav aria-label="Mobile">
          {NAV_SECTIONS.map((section) => {
            const isOpen = mobileSection === section.id;
            const subgroup = section.subgroups?.[0];
            return (
              <div key={section.id} className="border-b border-slate-100">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setMobileSection(isOpen ? null : section.id)}
                  className="flex min-h-[44px] w-full items-center justify-between rounded-lg py-3 text-left text-sm font-semibold text-[#102A43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA]"
                >
                  {section.label}
                  <Chevron open={isOpen} />
                </button>
                <div className={isOpen ? "" : "hidden"}>
                  <div className="pb-3 pl-2">
                    <Link
                      href={section.href}
                      onClick={closeAll}
                      className="block min-h-[44px] rounded-lg px-3 py-2.5 text-sm font-semibold text-[#1769AA] hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA]"
                    >
                      View all {section.label.toLowerCase()} →
                    </Link>
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeAll}
                        className="block min-h-[44px] rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA]"
                      >
                        {link.label}
                      </Link>
                    ))}
                    {subgroup && (
                      <>
                        <p className="mt-2 px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                          {subgroup.label}
                        </p>
                        {subgroup.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeAll}
                            className="block min-h-[44px] rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA]"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {PLAIN_NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeAll}
              className="block min-h-[44px] border-b border-slate-100 py-3 text-sm font-semibold text-[#102A43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/llc-cost-calculator"
            onClick={closeAll}
            className="mt-4 flex min-h-[44px] items-center justify-center rounded-lg bg-[#102A43] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1769AA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1769AA]"
          >
            Calculate Costs
          </Link>
        </nav>
      </div>
    </header>
  );
}
