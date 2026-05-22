type PortfolioImageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  accent: string;
};

export function PortfolioSocialImage({
  eyebrow,
  title,
  subtitle,
  accent,
}: PortfolioImageProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, rgba(0,229,255,0.18), transparent 36%), radial-gradient(circle at bottom right, rgba(245,211,0,0.18), transparent 34%), #07090D",
        color: "#F5F7FA",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 28,
          border: "1px solid rgba(147, 164, 184, 0.28)",
          borderRadius: 28,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 110,
          width: 300,
          height: "100%",
          transform: "skewX(-18deg)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0))",
          opacity: 0.24,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
          opacity: 0.18,
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 76px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            textTransform: "uppercase",
            letterSpacing: 6,
            color: "#93A4B8",
          }}
        >
          <div>{eyebrow}</div>
          <div style={{ color: accent }}>Signal Online</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.02,
              letterSpacing: -2.5,
              display: "flex",
              maxWidth: 920,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 860,
              color: "#CBD6E2",
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 180,
                height: 10,
                borderRadius: 999,
                background: accent,
                boxShadow: `0 0 36px ${accent}`,
              }}
            />
            <div
              style={{
                fontSize: 22,
                textTransform: "uppercase",
                letterSpacing: 5,
                color: "#93A4B8",
              }}
            >
              Projects. Systems. Execution.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              color: "#93A4B8",
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            <div>CY-01</div>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: accent,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
