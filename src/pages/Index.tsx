import React, { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

// Lazy load seções abaixo do fold para otimizar carregamento
const SolutionsSection = lazy(() => import('@/components/SolutionsSection'));
const HowItWorksSection = lazy(() => import('@/components/HowItWorksSection'));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'));
const HybridSystemSection = lazy(() => import('@/components/HybridSystemSection'));
const DiferenciaisSection = lazy(() => import('@/components/DiferenciaisSection'));
const AboutSection = lazy(() => import('@/components/AboutSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const ClientsSection = lazy(() => import('@/components/ClientsSection'));
const PartnershipSection = lazy(() => import('@/components/PartnershipSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

const SectionFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <SolutionsSection />
        <HowItWorksSection />
        <ProjectsSection />
        <HybridSystemSection />
        <DiferenciaisSection />
        <AboutSection />
        <TestimonialsSection />
        <ClientsSection />
        <PartnershipSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
