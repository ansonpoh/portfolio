import { ImageResponse } from "next/og";
import { siteProfile } from "@/content/portfolio";
import { getInitials } from "@/lib/site";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top left, rgba(245,211,0,0.2), transparent 34%), linear-gradient(135deg, #10141B, #07090D)",
          borderRadius: 36,
          border: "6px solid rgba(0,229,255,0.55)",
          color: "#F5F7FA",
          fontSize: 80,
          fontWeight: 700,
          letterSpacing: 8,
        }}
      >
        {getInitials(siteProfile.name)}
      </div>
    ),
    size,
  );
}
