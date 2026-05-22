import { ImageResponse } from "next/og";
import { siteProfile } from "@/content/portfolio";
import { PortfolioSocialImage } from "@/lib/og";

export const alt = `${siteProfile.name} Twitter card`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <PortfolioSocialImage
        eyebrow="Share Card"
        title={`${siteProfile.name} // Projects`}
        subtitle="Full-stack portfolio featuring public safety, volunteer matching, and game-based learning projects."
        accent="#00E5FF"
      />
    ),
    size,
  );
}
