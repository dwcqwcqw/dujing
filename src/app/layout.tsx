import type { Metadata } from "next";
import { Noto_Sans_SC, Space_Grotesk } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "读境 AI — 让每本书都有生命",
  description: "读境 AI 官网：面向公众与教育伙伴的沉浸式 AI 阅读平台介绍。",
  keywords: ["读境 AI", "AI 阅读", "沉浸式学习", "教育科技", "知识图谱"],
  openGraph: {
    title: "读境 AI — 让每本书都有生命",
    description: "探索读境 AI 的产品功能、技术架构与合作方式。",
    url: "https://dujing.ai",
    siteName: "读境 AI",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "读境 AI — 让每本书都有生命",
    description: "沉浸式 AI 阅读世界生成器。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body
        className={`${notoSans.variable} ${spaceGrotesk.variable} bg-blue-50 text-slate-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
