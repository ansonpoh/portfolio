import type { SkillGroup } from "@/content/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

type CapabilitiesSectionProps = {
  skillGroups: SkillGroup[];
};

export function CapabilitiesSection({
  skillGroups,
}: CapabilitiesSectionProps) {
  return (
    <section id="capabilities" className="border-b border-[var(--border)]">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to ship complete products."
          description="A practical toolkit spanning application development, backend services, data, AI-assisted workflows, and team delivery."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7"
            >
              <h3 className="text-base font-semibold text-[var(--text)]">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--border)] bg-[var(--surface-raised)] px-3 py-2 text-sm leading-5 text-[#c7cdd5]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
