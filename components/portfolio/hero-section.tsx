import Link from "next/link";
import type { FeaturedProject, SiteProfile } from "@/content/portfolio";

type HeroSectionProps = {
  profile: SiteProfile;
  projects: FeaturedProject[];
};

export function HeroSection({ profile, projects }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
        <div className="space-y-8">
          <div className="flex flex-wrap gap-3">
            <div className="chip border-[rgba(245,211,0,0.28)] text-[var(--color-primary)]">
              {profile.location}
            </div>
            <div className="chip border-[rgba(36,229,255,0.24)] text-[var(--color-muted-strong)]">
              {profile.availability}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <p className="section-kicker">Signal Intake</p>
              <span className="terminal-rule hidden sm:block" />
            </div>
            <h1
              data-text={profile.name}
              className="glitch-hover font-display text-5xl uppercase leading-[0.92] tracking-[0.1em] text-white sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </h1>
            <div className="max-w-3xl space-y-4">
              <p className="neon-text max-w-2xl text-2xl leading-tight sm:text-3xl lg:text-[2.1rem]">
                {profile.role}
              </p>
              <p className="max-w-2xl text-base leading-8 text-[#d8e0e9] sm:text-lg">
                {profile.intro}
              </p>
              <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted-strong)] sm:text-base">
                {profile.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="hud-button hud-button-primary">
              {profile.ctaPrimaryLabel}
            </a>
            <Link href="/projects" className="hud-button hud-button-secondary">
              {profile.ctaSecondaryLabel}
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {profile.heroFacts.map((fact, index) => (
              <div key={fact.label} className="status-cell">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {fact.label}
                </p>
                <p className="mt-3 font-display text-lg uppercase tracking-[0.14em] text-white">
                  {index === 0 ? projects.length : fact.value}
                  {index === 0 ? " projects" : ""}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="cyber-panel scanline cut-corner surface-grid relative overflow-hidden p-6 sm:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,211,0,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(36,229,255,0.16),transparent_32%),linear-gradient(180deg,rgba(255,79,216,0.06),transparent_48%)]" />
          <div className="relative flex h-full flex-col justify-between gap-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-secondary)]">
                  Live Readout
                </p>
                <h2 className="mt-3 font-display text-2xl uppercase tracking-[0.14em] text-white">
                  Candidate Overview
                </h2>
              </div>
              <div className="chip border-[rgba(255,79,216,0.26)] text-[var(--color-muted-strong)]">
                SGP-2028
              </div>
            </div>

            <div className="grid gap-4">
              {profile.heroReadouts.map((readout) => (
                <div key={readout.label} className="hud-frame">
                  <span className="hud-label">{readout.label}</span>
                  <p className="mt-4 text-sm leading-7 text-[#d6dfe8]">
                    {readout.text}
                  </p>
                </div>
              ))}
              <div className="hud-frame">
                <span className="hud-label">Signal</span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.signalTags.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
