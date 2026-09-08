import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./site-shell";
import { courseHref, courseRoutes } from "./site-paths";

export const metadata: Metadata = {
  title: {
    default: "现代计算系统结构与算力技术｜浙江科技大学",
    template: "%s｜现代计算系统结构与算力技术",
  },
  description: "浙江科技大学自动化与电气工程学院现代计算系统结构与算力技术课程网站，提供教学日历、PPT 课件、实验课程、思考题与学习资源。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "./favicon.svg",
    shortcut: "./favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        {courseRoutes.map((route) => (
          <link key={route} rel="prefetch" href={courseHref(route)} as="document" />
        ))}
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
