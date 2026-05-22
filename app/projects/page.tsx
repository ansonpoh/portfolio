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
    "A recruiter-friendly archive of Anson Poh's featured software engineering projects, including problem statements, contributions, stacks, challenges, outcomes, and project evidence.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Anson Poh",
    description:
      "A recruiter-friendly archive of Anson Poh's featured software engineering projects, including problem statements, contributions, stacks, challenges, outcomes, and project evidence.",
    url: absoluteUrl("/projects"),
  },
  twitter: {
    title: "Projects | Anson Poh",
    description:
      "A recruiter-friendly archive of Anson Poh's featured software engineering projects, including problem statements, contributions, stacks, challenges, outcomes, and project evidence.",
  },
};

export default function ProjectsPage() {
  return (
    <PortfolioChrome name={siteProfile.name} navItems={portfolioNavItems}>
      <ProjectsDirectory projects={featuredProjects} />
    </PortfolioChrome>
  );
}
