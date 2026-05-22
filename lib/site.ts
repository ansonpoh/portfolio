export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const siteTitle = "Anson Poh | Software Engineering Portfolio";

export const siteDescription =
  "Portfolio of Anson Poh, a Singapore-based Software Engineering student building full-stack web applications with modern frameworks and AI-assisted features.";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
