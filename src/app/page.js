import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ScrollTicker from "@/components/sections/ScrollTicker";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CtaMid from "@/components/sections/CtaMid";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import WorkProcess from "@/components/sections/WorkProcess";
import CtaBottom from "@/components/sections/CtaBottom";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import LetsCta from "@/components/sections/LetsCta";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="one1" className="maininner relative">
      <Header />
      <Hero />
      <ScrollTicker />
      <About />
      <Services />
      <CtaMid />
      <Projects />
      <Skills />
      <WorkProcess />
      <CtaBottom />
      <Testimonials />
      <Faq />
      <Blog />
      <Contact />
      <LetsCta />
      <Footer />
    </main>
  );
}
