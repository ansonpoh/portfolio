import type { SiteProfile } from "@/content/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

type ContactSectionProps = {
  profile: SiteProfile;
};

export function ContactSection({ profile }: ContactSectionProps) {
  const socialGridClassName =
    profile.socials.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20"
    >
      <div className="cyber-panel cut-corner surface-grid overflow-hidden p-7 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something useful."
            description="If you are hiring for a software engineering internship or want to collaborate on a product build, reach out directly."
          />

          <div className="grid gap-5">
            <a
              href={`mailto:${profile.email}`}
              className="cyber-panel cut-corner block p-6 transition hover:border-[var(--color-primary)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-primary)]">
                Direct Channel
              </p>
              <p className="mt-3 font-display text-2xl uppercase tracking-[0.14em] text-white">
                {profile.email}
              </p>
            </a>

            <div className={`grid gap-4 ${socialGridClassName}`}>
              {profile.socials.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="status-cell block text-center transition hover:border-[var(--color-secondary)]"
                >
                  <p className="font-display text-lg uppercase tracking-[0.12em] text-white">
                    {link.label}
                  </p>
                </a>
              ))}
            </div>

            <div className="hud-frame">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Location
              </p>
              <p className="mt-4 text-sm leading-7 text-[#d4dde8]">
                Based in {profile.location} and open to internship opportunities,
                collaborative software projects, and product teams that value clean
                execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
