import { ImageResponse } from "next/og";
import { siteProfile } from "@/content/portfolio";
import { PortfolioSocialImage } from "@/lib/og";

export const alt = `${siteProfile.name} portfolio preview`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <PortfolioSocialImage
        eyebrow="Portfolio Preview"
        title={siteProfile.name}
        subtitle="Software Engineering student building full-stack web applications, AI-assisted product features, and user-focused project work."
        accent="#F5D300"
      />
    ),
    size,
  );
}
