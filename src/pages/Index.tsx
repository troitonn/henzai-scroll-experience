import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ResultsSection from '@/components/ResultsSection';
import CTAFinalSection from '@/components/CTAFinalSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <DiferenciaisSection />
      <HowItWorksSection />
      <CTAFinalSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
