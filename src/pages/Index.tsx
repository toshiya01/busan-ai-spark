import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Programs = lazy(() => import("@/components/Programs"));
const Features = lazy(() => import("@/components/Features"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <About />
        <Programs />
        <Features />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
