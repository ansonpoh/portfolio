import type { CSSProperties } from "react";
import type { CredentialGroup } from "@/content/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

type PrinciplesSectionProps = {
  credentials: CredentialGroup[];
};

export function CredentialsSection({ credentials }: PrinciplesSectionProps) {
  const accentPalette = [
    "var(--color-alert)",
    "var(--color-primary)",
    "var(--color-secondary)",
  ];

  return (
    <section
      id="credentials"
      className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <SectionHeading
        eyebrow="Credentials"
        title="Education, certifications, and growth signal."
        description="The portfolio is backed by current academic progress, technical certifications, and evidence of active learning through events and shipped builds."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-12">
        {credentials.map((group, index) => (
          <article
            key={group.title}
            className="cyber-panel cut-corner p-6"
            style={
              { "--group-accent": accentPalette[index % accentPalette.length] } as CSSProperties
            }
          >
            <div className="flex items-center justify-between gap-4">
              <span className="section-kicker">File 0{index + 1}</span>
              <span
                className="h-3 w-3"
                style={{
                  backgroundColor: "var(--group-accent)",
                  boxShadow: "0 0 16px var(--group-accent)",
                  clipPath: "polygon(0 0, 100% 0, 100% 55%, 55% 100%, 0 100%)",
                }}
              />
            </div>
            <h3
              data-text={group.title}
              className="glitch-hover mt-5 font-display text-2xl uppercase tracking-[0.14em] text-white"
            >
              {group.title}
            </h3>
            <div className="mt-4 space-y-3">
              {group.items.map((item) => (
                <div key={item} className="status-cell text-sm leading-7 text-[#d4dde8]">
                  {item}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
