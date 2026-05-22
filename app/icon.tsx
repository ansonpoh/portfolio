import { ImageResponse } from "next/og";
import { siteProfile } from "@/content/portfolio";
import { getInitials } from "@/lib/site";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
            "radial-gradient(circle at top left, rgba(0,229,255,0.26), transparent 34%), linear-gradient(135deg, #0F131B, #07090D)",
          border: "2px solid rgba(245,211,0,0.65)",
          color: "#F5D300",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: 4,
        }}
      >
        {getInitials(siteProfile.name)}
      </div>
    ),
    size,
  );
}
