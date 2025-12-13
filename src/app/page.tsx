import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Projects from "@/components/Projects";
import Languages from "@/components/Languages";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Languages />
      <Contact />
      <Footer />
    </>
  );
}
