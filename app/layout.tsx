import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "食品原料与烘焙应用｜橙益食品",
    template: "%s｜橙益食品",
  },
  description:
    "上海橙益食品贸易有限公司提供预拌粉、膳食纤维与代糖、高蛋白原料、变性淀粉、馅料及烘焙配料等产品信息与选型支持。",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "橙益食品 CHENGYI",
    images: [{ url: "/assets/hero-ingredients.png", alt: "橙益食品原料与烘焙应用" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f7f4",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
