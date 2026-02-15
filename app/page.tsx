import Skills from "@/src/components/Skills";
import Hero from "@/src/components/Hero";
import Projects from "@/src/components/Projects";
import Experience from "@/src/components/Experience";
import ThemeToggle from "@/src/components/ThemeToggle";
import Loading from "@/src/components/Loading";

export default function Home() {
  return (
    <>
      <Loading />
      <main className="min-h-screen transition-colors duration-300">
        <ThemeToggle />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>
    </>
  );
}
