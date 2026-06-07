import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import SaseDiagram from '@/components/SaseDiagram';
import ThreatDashboard from '@/components/ThreatDashboard';
import PricingCalculator from '@/components/PricingCalculator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <Header />
      <Hero />
      <Logos />
      <SaseDiagram />
      <ThreatDashboard />
      <PricingCalculator />
      <Footer />
    </main>
  );
};

export default Index;
