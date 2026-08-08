import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { absoluteUrl, siteDescription, siteTitle, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Anson Poh",
  },
  description: siteDescription,
  applicationName: "Anson Poh Portfolio",
  keywords: [
    "developer portfolio",
    "software engineering student",
    "full-stack developer",
    "next.js portfolio",
    "react portfolio",
    "singapore developer",
    "ai web applications",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Anson Poh" }],
  creator: "Anson Poh",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: absoluteUrl("/"),
    siteName: "Anson Poh Portfolio",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0d10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
