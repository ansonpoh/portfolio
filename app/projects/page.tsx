import type { Metadata } from "next";
import { PortfolioChrome } from "@/components/portfolio/portfolio-chrome";
import { ProjectsDirectory } from "@/components/portfolio/projects-directory";
import {
  featuredProjects,
  portfolioNavItems,
  siteProfile,
} from "@/content/portfolio";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A detailed archive of Anson Poh's software engineering projects, including stacks, highlights, and product context.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Anson Poh",
    description:
      "A detailed archive of Anson Poh's software engineering projects, including stacks, highlights, and product context.",
    url: absoluteUrl("/projects"),
  },
  twitter: {
    title: "Projects | Anson Poh",
    description:
      "A detailed archive of Anson Poh's software engineering projects, including stacks, highlights, and product context.",
  },
};

export default function ProjectsPage() {
  return (
    <PortfolioChrome name={siteProfile.name} navItems={portfolioNavItems}>
      <ProjectsDirectory projects={featuredProjects} />
    </PortfolioChrome>
  );
}
