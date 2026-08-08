import Link from "next/link";

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
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            className="flex w-fit items-center gap-3 text-sm font-semibold tracking-tight text-[var(--text)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--accent)]">
              {initials}
            </span>
            {name}
          </Link>

          <nav
            aria-label="Primary navigation"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 hover:text-[var(--text)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-[var(--muted)] sm:px-8 sm:flex-row sm:items-center sm:justify-between">
          <p>{name} · Software Engineering Portfolio</p>
          <Link href="/#contact" className="w-fit hover:text-[var(--text)]">
            Get in touch
          </Link>
        </div>
      </footer>
    </div>
  );
}
