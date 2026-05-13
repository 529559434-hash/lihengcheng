import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.role}${site.name}的个人作品集 — ${site.tagline}`,
  keywords: [
    site.name,
    site.nameEn,
    site.role,
    site.roleEn,
    "AI 产品经理",
    "AI Product Manager",
    "LLM",
    "Agent",
    "RAG",
    "作品集",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: site.url,
    siteName: `${site.name} | ${site.role}`,
    title: `${site.name} | ${site.role}`,
    description: `${site.role}${site.name}的个人作品集 — ${site.tagline}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: `${site.role}${site.name}的个人作品集 — ${site.tagline}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
