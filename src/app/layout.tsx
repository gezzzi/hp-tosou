import type { Metadata } from "next";
import { Noto_Sans_JP, M_PLUS_1p, Mochiy_Pop_P_One } from "next/font/google";
import "./globals.css";
import MobileFloatingCTA from "@/components/MobileFloatingCTA";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const mPlus1p = M_PLUS_1p({
  variable: "--font-m-plus-1p",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const mochiyPopPOne = Mochiy_Pop_P_One({
  variable: "--font-mochiy-pop-p-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "株式会社マルヨ | 静岡県富士市の塗装・不用品回収",
  description: "静岡県富士市を拠点に塗装工事、不用品回収、遺品整理を行う株式会社マルヨです。祖父の代から続く確かな技術と、2トントラック積み放題28,000円のお手頃価格で、お客様の「困った」を解決します。くらしのマーケット評価5.00の信頼と実績。",
  keywords: "塗装, 外壁塗装, 屋根塗装, 不用品回収, 遺品整理, 静岡県, 富士市, ゴミ屋敷清掃",
  openGraph: {
    title: "株式会社マルヨ | 静岡県富士市の塗装・不用品回収",
    description: "塗装も、不用品回収も。安心と丁寧をお届けします。",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "株式会社マルヨ",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${mPlus1p.variable} ${mochiyPopPOne.variable} antialiased`}>
        {children}
        <MobileFloatingCTA />
      </body>
    </html>
  );
}
