import type { Metadata } from "next";
import { SitePage } from "../SitePage";

export const metadata: Metadata = {
  title: "Food Ingredients & Bakery Applications",
  description:
    "Chengyi provides clear food ingredient information and application-oriented selection support for bakery, foodservice and food-processing customers.",
  alternates: {
    canonical: "/en/",
    languages: { "zh-CN": "/zh/", en: "/en/" },
  },
};

export default function EnglishPage() {
  return <SitePage lang="en" />;
}
