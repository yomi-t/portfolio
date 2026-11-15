import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { GrainOverlay } from "./_components/GrainOverlay";
import { Footer } from "./_components/footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { ClickTracker } from "./_components/analytics/ClickTracker";

// GTMコンテナID（例: GTM-XXXXXXX）。未設定の環境（ローカル開発など）では計測を無効にする
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mochiy = localFont({
  src: "../../public/fonts/mochiy.otf",
  variable: "--font-mochiy",
  display: "swap",
})

export const metadata: Metadata = {
  title: "よみ | Portfolio",
  description: "ポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${mochiy.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {gtmId && (
          <>
            <GoogleTagManager gtmId={gtmId} />
            <ClickTracker />
          </>
        )}
        <GrainOverlay />
        <div className="relative z-10 flex min-h-full flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
