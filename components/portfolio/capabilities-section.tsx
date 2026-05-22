import type { CSSProperties } from "react";
import type { SkillGroup } from "@/content/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

type CapabilitiesSectionProps = {
  skillGroups: SkillGroup[];
};

export function CapabilitiesSection({
  skillGroups,
}: CapabilitiesSectionProps) {
  const accentPalette = [
    "var(--color-primary)",
    "var(--color-secondary)",
    "var(--color-magenta)",
  ];

  return (
    <section
      id="capabilities"
      className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="content-card p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <SectionHeading
            eyebrow="Skills"
            title="Languages, frameworks, and team-ready workflow."
            description="The stack spans frontend, backend, and delivery tooling, supported by problem solving, communication, and collaborative development habits."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-12">
            {skillGroups.map((group, index) => (
              <article
                key={group.title}
                className="cyber-panel cut-corner p-6"
                style={
                  { "--group-accent": accentPalette[index % accentPalette.length] } as CSSProperties
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--group-accent)]">
                    Node 0{index + 1}
                  </p>
                  <span
                    className="h-[3px] w-16"
                    style={{
                      backgroundColor: "var(--group-accent)",
                      boxShadow: "0 0 18px var(--group-accent)",
                    }}
                  />
                </div>
                <h3
                  data-text={group.title}
                  className="glitch-hover mt-5 font-display text-2xl uppercase tracking-[0.14em] text-white"
                >
                  {group.title}
                </h3>
                <div className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <div key={item} className="status-cell text-sm leading-7 text-[#d4dde8]">
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
