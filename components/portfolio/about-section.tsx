import type { AboutCard, SiteProfile } from "@/content/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

type AboutSectionProps = {
  profile: SiteProfile;
  cards: AboutCard[];
};

export function AboutSection({ profile, cards }: AboutSectionProps) {
  return (
    <section id="about" className="border-b border-[var(--border)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading
          eyebrow="About"
          title="Grounded in useful, dependable software."
          description={profile.tagline}
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`bg-[var(--surface)] p-6 ${card.span === "full" ? "sm:col-span-2" : ""}`}
            >
              <h3 className="font-semibold text-[var(--text)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
