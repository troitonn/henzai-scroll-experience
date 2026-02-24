import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesFilterSection from '@/components/ServicesFilterSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import HybridSystemSection from '@/components/HybridSystemSection';
import ClientsSection from '@/components/ClientsSection';
import CTAFinalSection from '@/components/CTAFinalSection';
import PartnershipSection from '@/components/PartnershipSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesFilterSection />
      <AboutSection />
      <SolutionsSection />
      <DiferenciaisSection />
      <HowItWorksSection />
      <HybridSystemSection />
      <ClientsSection />
      <CTAFinalSection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
