import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(29, 53, 87, 0.8) 0%, rgba(29, 53, 87, 0.6) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-libre-franklin text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transformamos
            <span className="block text-henzai-terracota">
              economia de energia
            </span>
            em capital que acelera negócios
          </h1>
          
          <p className="font-gantari text-xl md:text-2xl mb-8 text-henzai-off-white opacity-90 max-w-3xl mx-auto">
            A inteligência que conecta energia, capital e crescimento para empresas que buscam eficiência energética e sustentabilidade
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary"
              size="lg"
              className="font-gantari font-semibold text-lg px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Descobrir Soluções
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="font-gantari font-semibold text-lg px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-henzai-blue transition-all duration-300"
            >
              Como Funciona
            </Button>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;