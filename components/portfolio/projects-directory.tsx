import type { FeaturedProject } from "@/content/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

type ProjectsDirectoryProps = {
  projects: FeaturedProject[];
};

export function ProjectsDirectory({ projects }: ProjectsDirectoryProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work, from problem to delivery."
        description="Seven projects across full-stack products, backend systems, applied AI, automation, and user-facing software."
      />

      <div className="mt-12 space-y-6">
        {projects.map((project, index) => {
          const visibleLinks = project.links.filter(
            (link) => link.label !== "Case Study",
          );

          return (
            <article
              key={project.id}
              id={project.id}
              className="scroll-mt-28 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
            >
              <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_15rem]">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="font-medium text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[var(--muted)]">{project.status}</span>
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)]">
                    {project.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--muted)]">
                    {project.summary}
                  </p>
                </div>

                {project.metrics ? (
                  <dl className="grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-6 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                          {metric.label}
                        </dt>
                        <dd className="mt-1 text-sm text-[var(--text)]">
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </div>

              <dl className="mt-8 grid gap-px overflow-hidden rounded-md border border-[var(--border)] bg-[var(--border)] md:grid-cols-2">
                {[
                  ["Problem", project.problem],
                  ["My contribution", project.role],
                  ["Core challenge", project.challenge],
                  ["Outcome", project.outcome],
                ].map(([label, value]) => (
                  <div key={label} className="bg-[var(--surface-raised)] p-5">
                    <dt className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                      {label}
                    </dt>
                    <dd className="mt-3 text-sm leading-7 text-[var(--text)]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-col gap-6 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                    Stack
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex shrink-0 flex-wrap gap-3">
                  {visibleLinks.map((link) =>
                    link.href ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                        className="rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)] hover:border-[#48505c]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span
                        key={link.label}
                        className="self-center text-xs leading-5 text-[var(--muted)] sm:max-w-48 sm:text-right"
                      >
                        {link.status}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
