import Link from "next/link";
import type { SiteProfile } from "@/content/portfolio";

type HeroSectionProps = {
  profile: SiteProfile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section id="hero" className="border-b border-[var(--border)]">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-end">
        <div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
            <span>{profile.location}</span>
            <span aria-hidden="true">·</span>
            <span>Graduating May 2028</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[var(--text)] sm:text-6xl">
            {profile.role}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#071016] hover:bg-[#a5e3ff]"
            >
              View projects
            </Link>
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] hover:border-[#48505c]"
            >
              View resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md px-5 py-3 text-sm font-semibold text-[var(--muted)] hover:text-[var(--text)]"
            >
              Email me
            </a>
          </div>
        </div>

        <aside className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-sm font-medium text-[var(--accent)]">Currently</p>
          <p className="mt-3 leading-7 text-[var(--text)]">
            {profile.availability}
          </p>
          <dl className="mt-6 grid gap-5 border-t border-[var(--border)] pt-6">
            {profile.heroFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm text-[var(--text)]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
