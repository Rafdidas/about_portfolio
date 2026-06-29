import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Career from "@/components/Career";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AiUsage from "@/components/AiUsage";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Career />
        <Projects />
        <Skills />
        <AiUsage />
        <About />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
