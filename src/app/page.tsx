import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Skill from "@/components/Skill";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <Experience />
      <Project />
      <Skill />
      <Testimonial />
      <Contact />
    </main>
  );
}
