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

export const metadata: Metadata = {
  title: "Haidar Fahmi | Web Portfolio Responsive",
  description:
    "Welcome to the portfolio of Haidar Fahmi, a passionate Front-End Web Developer based in South Tangerang. Explore my projects, skills, and contact me for collaboration.",
  keywords: [
    "Portfolio",
    "Web Developer",
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "TypeScript",
    "South Tangerang",
  ],
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
