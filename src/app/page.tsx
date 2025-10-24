import Hero from "@/features/Hero/components/Hero";
import AboutMe from "@/features/About/components/AboutMe";
import Experience from "@/features/Experience/components/Experience";
import Project from "@/features/Project/components/Project";
import Skill from "@/features/Skill/components/Skill";
import Testimonial from "@/features/Testimonial/components/Testimonial";
import Contact from "@/features/Contact/components/Contact";

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
