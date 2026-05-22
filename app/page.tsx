import {
  aboutCards,
  credentialGroups,
  featuredProjects,
  portfolioNavItems,
  siteProfile,
  skillGroups,
} from "@/content/portfolio";
import { AboutSection } from "@/components/portfolio/about-section";
import { CapabilitiesSection } from "@/components/portfolio/capabilities-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { PortfolioChrome } from "@/components/portfolio/portfolio-chrome";
import { CredentialsSection } from "@/components/portfolio/principles-section";

export default function Home() {
  return (
    <PortfolioChrome
      name={siteProfile.name}
      navItems={portfolioNavItems}
    >
      <HeroSection profile={siteProfile} projects={featuredProjects} />
      <AboutSection profile={siteProfile} cards={aboutCards} />
      <CapabilitiesSection skillGroups={skillGroups} />
      <CredentialsSection credentials={credentialGroups} />
      <ContactSection profile={siteProfile} />
    </PortfolioChrome>
  );
}
