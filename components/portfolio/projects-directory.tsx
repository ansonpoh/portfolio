"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import type { FeaturedProject } from "@/content/portfolio";
import { SectionHeading } from "@/components/portfolio/section-heading";

type ProjectsDirectoryProps = {
  projects: FeaturedProject[];
};

export function ProjectsDirectory({ projects }: ProjectsDirectoryProps) {
  useEffect(() => {
    const syncOpenProjectWithHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) {
        return;
      }

      const allProjects = document.querySelectorAll<HTMLDetailsElement>(
        "[data-project-entry]",
      );

      allProjects.forEach((entry) => {
        entry.open = entry.id === hash;
      });

      const target = document.getElementById(hash);
      target?.scrollIntoView({ block: "start", behavior: "smooth" });
    };

    syncOpenProjectWithHash();
    window.addEventListener("hashchange", syncOpenProjectWithHash);

    return () => {
      window.removeEventListener("hashchange", syncOpenProjectWithHash);
    };
  }, []);

  return (
    <section
      id="projects-directory"
      className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="content-card p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <SectionHeading
            eyebrow="Project Archive"
            title="Detailed project breakdowns, one build at a time."
            description="Each entry keeps the focus on the problem, my role, the stack, the core challenge, the outcome, and a short preview summary."
          />

          <div className="mt-10 grid gap-5">
            {projects.map((project, index) => {
              const repositoryLinks = project.links.filter(
                (link) => link.label === "GitHub Repo" && link.href,
              );

              return (
                <details
                  key={project.id}
                  id={project.id}
                  data-project-entry
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
                      <span className="project-disclosure-hint">
                        Click to expand project details
                      </span>
                    </div>

                    <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-start">
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
                        <p className="max-w-3xl text-sm leading-7 text-[#dbe4ee] sm:text-base">
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
                    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                      <div className="space-y-6">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="hud-frame">
                            <span className="hud-label">Problem</span>
                            <p className="mt-4 text-sm leading-7 text-[#d4dde8]">
                              {project.problem}
                            </p>
                          </div>
                          <div className="hud-frame">
                            <span className="hud-label">My Role</span>
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
                          <div className="hud-frame">
                            <span className="hud-label">Challenge</span>
                            <p className="mt-4 text-sm leading-7 text-[#d4dde8]">
                              {project.challenge}
                            </p>
                          </div>
                        </div>

                        <div className="hud-frame">
                          <span className="hud-label">Outcome</span>
                          <p className="mt-4 text-sm leading-7 text-[#d4dde8]">
                            {project.outcome}
                          </p>
                        </div>

                        {repositoryLinks.length > 0 ? (
                          <div className="grid gap-3 sm:max-w-xs">
                            {repositoryLinks.map((link) =>
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${link.label} for ${project.title}`}
                                className="hud-button hud-button-secondary w-full"
                              >
                                {link.label}
                              </a>
                            )}
                          </div>
                        ) : null}
                      </div>

                      <div className="space-y-6">
                        <div className="project-preview-panel min-h-[320px]">
                          <div className="project-preview-backdrop" />
                          <div className="project-preview-grid" />
                          <div className="project-preview-content">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                                  {project.preview.eyebrow}
                                </p>
                                <p className="mt-3 font-display text-2xl uppercase tracking-[0.14em] text-white">
                                  {project.preview.title}
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

                            <div className="hud-frame">
                              <span className="hud-label">Preview Notes</span>
                              <p className="mt-4 text-sm leading-7 text-[#d4dde8]">
                                {project.preview.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
