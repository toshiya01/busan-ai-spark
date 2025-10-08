import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
