import Hero from "@/feature/Hero/components/Hero";
import AboutMe from "@/feature/About/components/AboutMe";
import Experience from "@/feature/Experience/components/Experience";
import Project from "@/feature/Project/components/Project";
import Skill from "@/feature/Skill/components/Skill";
import Testimonial from "@/feature/Testimonial/components/Testimonial";
import Contact from "@/feature/Contact/components/Contact";

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
