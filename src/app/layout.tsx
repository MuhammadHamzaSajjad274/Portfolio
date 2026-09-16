import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";

import Preloader from "@/components/effects/Preloader";
import { PreloaderProvider } from "@/components/effects/PreloaderContext";
import ScrollProgress from "@/components/effects/ScrollProgress";
import SiteBackground from "@/components/effects/SiteBackground";
import SmoothScroll from "@/components/effects/SmoothScroll";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/data";
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

const siteTitle = "Hamza Sajjad | AI/ML Engineer";
const siteDescription =
  "AI/ML engineer building multi-agent systems, RAG pipelines, and production ML applications. Recently graduated in Artificial Intelligence from University of Wah, Pakistan.";
const siteUrl = "https://hamzasajjad.vercel.app";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hamza Sajjad",
  jobTitle: "AI/ML Engineer",
  email: EMAIL,
  url: siteUrl,
  sameAs: [LINKEDIN_URL, GITHUB_URL],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PreloaderProvider>
          <SiteBackground />

          <ScrollProgress />
          <Preloader />
          <SmoothScroll>{children}</SmoothScroll>
        </PreloaderProvider>
      </body>
    </html>
  );
}
