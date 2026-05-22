import type { CSSProperties } from "react";
import type { FeaturedProject } from "@/content/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

type ProjectsDirectoryProps = {
  projects: FeaturedProject[];
};

export function ProjectsDirectory({ projects }: ProjectsDirectoryProps) {
  return (
    <section
      id="projects-directory"
      className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <SectionHeading
        eyebrow="Project Archive"
        title="Detailed builds, one expandable brief at a time."
        description="Each project opens into a fuller breakdown covering the product goal, implementation approach, technical stack, and supporting links."
      />

      <div className="grid gap-5">
        {projects.map((project, index) => (
          <details
            key={project.id}
            className="project-disclosure cyber-panel cut-corner surface-grid overflow-hidden"
            style={{ "--project-accent": project.accent } as CSSProperties}
            open={index === 0}
          >
            <summary className="project-disclosure-summary list-none p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="chip"
                  style={{ borderColor: project.accent, color: project.accent }}
                >
                  0{index + 1}
                </span>
                <span className="chip">{project.status}</span>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div className="space-y-4">
                  <p
                    className="font-mono text-xs uppercase tracking-[0.24em]"
                    style={{ color: project.accent }}
                  >
                    {project.tagline}
                  </p>
                  <h2
                    data-text={project.title}
                    className="glitch-hover font-display text-3xl uppercase tracking-[0.14em] text-white sm:text-4xl"
                  >
                    {project.title}
                  </h2>
                  <p className="max-w-3xl text-sm leading-7 text-[#d4dde8] sm:text-base">
                    {project.summary}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {project.metrics?.map((metric) => (
                    <div key={metric.label} className="status-cell">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-display text-lg uppercase tracking-[0.12em] text-white">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </summary>

            <div className="border-t border-white/8 bg-[rgba(4,6,9,0.44)] px-6 pb-6 pt-2 lg:px-8 lg:pb-8">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="hud-frame">
                      <span className="hud-label">Role</span>
                      <p className="mt-4 text-sm leading-7 text-[#d4dde8]">
                        {project.role}
                      </p>
                    </div>
                    <div className="hud-frame">
                      <span className="hud-label">Stack</span>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="status-cell text-sm leading-7 text-[#d4dde8]">
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {project.links && project.links.length > 0 ? (
                    <div className="flex flex-col gap-3 sm:flex-row">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={
                            linkIndex === 0
                              ? "hud-button hud-button-primary"
                              : "hud-button hud-button-secondary"
                          }
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="scanline relative min-h-[280px] overflow-hidden border border-white/10 bg-[rgba(255,255,255,0.02)] p-6 [clip-path:polygon(0_0,calc(100%_-_20px)_0,100%_20px,100%_100%,0_100%,0_0)]">
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      background:
                        "radial-gradient(circle at top right, color-mix(in srgb, var(--project-accent) 20%, transparent), transparent 32%), radial-gradient(circle at bottom left, rgba(36,229,255,0.14), transparent 30%)",
                    }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />
                  <div className="relative flex h-full flex-col justify-between gap-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                          Visual Key
                        </p>
                        <p className="mt-3 font-display text-2xl uppercase tracking-[0.14em] text-white">
                          {project.visualKey}
                        </p>
                      </div>
                      <div
                        className="h-4 w-20 shadow-[0_0_24px_var(--project-accent)] [clip-path:polygon(0_0,100%_0,100%_50%,82%_100%,0_100%)]"
                        style={{ backgroundColor: project.accent }}
                      />
                    </div>

                    <div className="space-y-3">
                      {project.visualTags.map((item) => (
                        <div
                          key={item}
                          className="status-cell font-mono text-xs uppercase tracking-[0.22em] text-[#e4eaf1]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
