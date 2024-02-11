import Introduction from "@/components/Introduction";
import SectionDivider from "@/components/Section-divider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Introduction />
      <SectionDivider />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
