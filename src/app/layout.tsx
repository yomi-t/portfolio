import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { GrainOverlay } from "./_components/GrainOverlay";

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
        <GrainOverlay />
        <div className="relative z-10 flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
