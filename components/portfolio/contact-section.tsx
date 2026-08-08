import type { SiteProfile } from "@/content/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

type ContactSectionProps = {
  profile: SiteProfile;
};

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section id="contact">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something useful."
          description={profile.availability}
        />

        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="text-sm text-[var(--muted)]">Email</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 block break-all text-xl font-semibold text-[var(--text)] hover:text-[var(--accent)] sm:text-2xl"
          >
            {profile.email}
          </a>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
            {profile.socials.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)] hover:border-[#48505c]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)] hover:border-[#48505c]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
