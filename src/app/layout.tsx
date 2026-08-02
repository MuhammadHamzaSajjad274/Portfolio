import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import CustomCursor from "@/components/effects/CustomCursor";
import Preloader from "@/components/effects/Preloader";
import { PreloaderProvider } from "@/components/effects/PreloaderContext";
import ScrollProgress from "@/components/effects/ScrollProgress";
import SiteBackground from "@/components/effects/SiteBackground";
import SmoothScroll from "@/components/effects/SmoothScroll";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "AI/ML Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <PreloaderProvider>
          <SiteBackground />
          <CustomCursor />
          <ScrollProgress />
          <Preloader />
          <SmoothScroll>{children}</SmoothScroll>
        </PreloaderProvider>
      </body>
    </html>
  );
}
