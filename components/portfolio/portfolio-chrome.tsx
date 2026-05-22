"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  sectionId?: string;
};

type PortfolioChromeProps = {
  name: string;
  navItems: NavItem[];
  children: React.ReactNode;
};

export function PortfolioChrome({
  name,
  navItems,
  children,
}: PortfolioChromeProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(navItems[0]?.sectionId ?? "");
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = navItems
      .map((item) => item.sectionId)
      .filter((sectionId): sectionId is string => Boolean(sectionId))
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (sections.length === 0) {
      return;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const viewportHeight = window.innerHeight;
      const focusLine =
        headerHeight + Math.max(120, (viewportHeight - headerHeight) * 0.35);
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      let nextSection = sections[0]?.id ?? "";
      let closestDistance = Number.POSITIVE_INFINITY;

      if (scrolledToBottom) {
        setActiveSection(sections.at(-1)?.id ?? nextSection);
        return;
      }

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= focusLine && rect.bottom >= focusLine) {
          nextSection = section.id;
          break;
        }

        const distance = Math.min(
          Math.abs(rect.top - focusLine),
          Math.abs(rect.bottom - focusLine),
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          nextSection = section.id;
        }
      }

      setActiveSection(nextSection);
    };

    const queueUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    queueUpdate();

    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
    window.addEventListener("hashchange", queueUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
      window.removeEventListener("hashchange", queueUpdate);
    };
  }, [navItems]);

  return (
    <div className="cyber-shell min-h-screen">
      <header ref={headerRef} className="header-shell sticky top-0 z-40">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative flex h-12 w-12 items-center justify-center border border-[var(--color-line)] bg-[rgba(8,11,17,0.88)] font-display text-sm uppercase tracking-[0.32em] text-[var(--color-primary)] shadow-[var(--shadow-yellow)] [clip-path:polygon(0_0,calc(100%_-_14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%_-_14px))]">
                  {name
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div className="space-y-1">
                  <p className="font-display text-sm uppercase tracking-[0.24em] text-white sm:text-base">
                    {name}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[var(--color-muted)]">
                      Developer Portfolio
                    </p>
                    <span className="h-1 w-8 bg-[var(--color-secondary)] shadow-[var(--shadow-cyan)]" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[var(--color-primary)]">
                      Interface Online
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden min-w-[300px] justify-end lg:flex">
                <div className="status-cell w-full max-w-[300px]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                    Navigation Sync
                  </p>
                  <p className="mt-3 whitespace-nowrap font-display text-[1.15rem] uppercase tracking-[0.12em] text-white">
                    {pathname === "/projects" ? "Projects Archive" : "Live Portfolio"}
                  </p>
                </div>
              </div>
            </div>

            <nav
              aria-label="Section navigation"
              className="flex flex-wrap items-center gap-2 pb-1 md:flex-nowrap md:overflow-x-auto md:[scrollbar-width:none] md:[-ms-overflow-style:none] md:[&::-webkit-scrollbar]:hidden"
            >
              {navItems.map((item) => {
                const isActive = item.sectionId
                  ? pathname === "/" && item.sectionId === activeSection
                  : pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="nav-link shrink-0"
                    data-active={isActive}
                  >
                    <span className="nav-link-dot" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="footer-shell">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="space-y-3">
            <p className="section-kicker">End Transmission</p>
            <div>
              <p className="font-display text-2xl uppercase tracking-[0.16em] text-white">
                {name}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                Open to software engineering roles and collaborative full-stack
                product work.
              </p>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-2">
            {navItems.map((item) => {
              const isActive = item.sectionId
                ? pathname === "/" && item.sectionId === activeSection
                : pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  data-active={isActive}
                >
                  <span className="nav-link-dot" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </footer>
    </div>
  );
}
