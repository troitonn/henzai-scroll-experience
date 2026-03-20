import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import HubCondominiosSection from '@/components/HubCondominiosSection';
import MobilidadeSection from '@/components/MobilidadeSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ProjectsSection from '@/components/ProjectsSection';
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
      <SolutionsSection />
      <HubCondominiosSection />
      <MobilidadeSection />
      <HowItWorksSection />
      <ProjectsSection />
      <DiferenciaisSection />
      <AboutSection />
      <ClientsSection />
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
