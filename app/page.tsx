import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDiv from "@/components/sectiondiv";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-center px-2">
      <Intro />
      <SectionDiv />
      <About />
    </div>
  );
}
