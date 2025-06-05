import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Services from "../src/components/services/Services";
import About from "../src/components/about/About";
import Industries from "../src/components/Industries";
import Testimonials from "../src/components/Testimonials";
import CTA from "../src/components/CTA";
import Footer from "../src/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Industries />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
