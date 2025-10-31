import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//  Components
import Header from "@/features/Header/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/features/Footer/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const jetbrainsMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
});

const siteUrl = "https://haidarfahmi.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Haidar Fahmi | Web Portfolio Responsive",
    template: "%s | Haidar Fahmi",
  },
  description:
    "Welcome to the portfolio of Haidar Fahmi, a passionate Full-stack Web Developer based in South Tangerang. Explore my projects, skills, and contact me for collaboration.",
  keywords: [
    "Portfolio",
    "Web Developer",
    "Full-Stack",
    "Frontend",
    "Backend",
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "TypeScript",
    "South Tangerang",
  ],
  authors: [{ name: "Haidar Fahmi", url: siteUrl }],
  creator: "Haidar Fahmi",

  alternates: {
    canonical: "/",
  },

  // OpenGraph (for Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Haidar Fahmi | Web Portfolio Responsive",
    description:
      "Welcome to the portfolio of Haidar Fahmi, a passionate Full-stack Web Developer based in South Tangerang. Explore my projects, skills, and contact me for collaboration.",
    url: siteUrl,
    siteName: "Haidar Fahmi Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Haidar Fahmi Portfolio",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Haidar Fahmi | Web Portfolio Responsive",
    creator: "@haidarbiasabae",
    description:
      "Welcome to the portfolio of Haidar Fahmi, a passionate Full-stack Web Developer based in South Tangerang. Explore my projects, skills, and contact me for collaboration.",
    images: "/images/og-image.png",
  },
  // Ikon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Tautan ke Web App Manifest
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased min-w-[300px]`}
        suppressHydrationWarning={true}
      >
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
