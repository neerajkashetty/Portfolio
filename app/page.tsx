import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDiv from "@/components/sectiondiv";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center px-2">
      <Intro />
      <SectionDiv />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}
