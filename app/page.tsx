import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/Motion";
import { About, Drive, Skills, Certs, Contact, Footer, Hero, Marquee, Metrics, Research, Work } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Drive />
        <Skills />
        <Work />
        <Certs />
        <Research />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
