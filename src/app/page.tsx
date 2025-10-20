"use client";

import Image from "next/image";
import Header from "@/components/Header";
// import Services from "@/app/services/page";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
    </main>
  );
}
