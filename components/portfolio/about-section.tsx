import type { CSSProperties } from "react";
import type { AboutCard, SiteProfile } from "@/content/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

type AboutSectionProps = {
  profile: SiteProfile;
  cards: AboutCard[];
};

const accentStyles: Record<AboutCard["accent"], CSSProperties> = {
  primary: { "--card-accent": "var(--color-primary)" } as CSSProperties,
  secondary: { "--card-accent": "var(--color-secondary)" } as CSSProperties,
  alert: { "--card-accent": "var(--color-magenta)" } as CSSProperties,
};

export function AboutSection({ profile, cards }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <SectionHeading
          eyebrow="About"
          title="Full-stack builder with a product mindset."
          description={`${profile.intro} ${profile.tagline}`}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              style={accentStyles[card.accent]}
              className={`cyber-panel cut-corner p-6 ${
                card.span === "full" ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <p
                  className="font-mono text-xs uppercase tracking-[0.24em]"
                  style={{ color: "var(--card-accent)" }}
                >
                  {card.title}
                </p>
                <span
                  className="h-[3px] w-16"
                  style={{
                    backgroundColor: "var(--card-accent)",
                    boxShadow: "0 0 18px var(--card-accent)",
                  }}
                />
              </div>
              <p className="mt-5 text-sm leading-7 text-[#d4dde8]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
