import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-business-woman.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-henzai-blue/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-4xl md:text-6xl font-libre-franklin font-bold leading-tight animate-fade-in">
              Transformamos<br />
              <span className="text-henzai-terracota">economia de energia</span><br />
              em capital que<br />
              acelera negócios.
            </h1>
            
            <p className="text-lg md:text-xl font-gantari text-henzai-off-white animate-fade-in animation-delay-300">
              A inteligência que conecta energia, capital e crescimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-500">
              <Button 
                size="lg"
                className="bg-henzai-terracota hover:bg-henzai-terracota/90 text-white font-gantari font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Falar com Especialista
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-henzai-terracota text-henzai-terracota hover:bg-henzai-terracota hover:text-white font-gantari font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
              >
                Ver Soluções
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;