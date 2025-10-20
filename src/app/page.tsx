"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <Experience />
      <Project />
      <Skill />
    </main>
  );
}
