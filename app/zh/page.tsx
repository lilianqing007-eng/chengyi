import type { Metadata } from "next";
import { SitePage } from "../SitePage";

export const metadata: Metadata = {
  title: "食品原料与烘焙应用",
  description:
    "橙益食品面向烘焙、餐饮及食品加工客户，提供食品原料产品信息、应用方向与选型沟通支持。",
  alternates: {
    canonical: "/zh/",
    languages: { "zh-CN": "/zh/", en: "/en/" },
  },
};

export default function ChinesePage() {
  return <SitePage lang="zh" />;
}
