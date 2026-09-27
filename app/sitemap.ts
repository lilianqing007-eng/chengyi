import type { MetadataRoute } from "next";
import { siteConfig } from "./site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/zh/", "/en/"].map((path) => ({
    url: `${siteConfig.domain}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.9,
  }));
}
