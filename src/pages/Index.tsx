import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import ServicesFilterSection from '@/components/ServicesFilterSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ProjectsSection from '@/components/ProjectsSection';
import HybridSystemSection from '@/components/HybridSystemSection';
import DiferenciaisSection from '@/components/DiferenciaisSection';
import AboutSection from '@/components/AboutSection';
import ClientsSection from '@/components/ClientsSection';
import PartnershipSection from '@/components/PartnershipSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <ServicesFilterSection />
      <HowItWorksSection />
      <ProjectsSection />
      <HybridSystemSection />
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
