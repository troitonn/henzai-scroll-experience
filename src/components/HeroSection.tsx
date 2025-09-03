import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/lovable-uploads/866a2684-ad49-4b9f-9371-c9fa94b01c90.png')` 
        }}
      >
        <div className="absolute inset-0 bg-[#0F2D3A] bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="text-white space-y-8">
            <h1 className="text-5xl md:text-7xl font-libre-franklin font-bold leading-tight animate-fade-in">
              Transformamos<br />
              <span className="text-henzai-terracota">economia de energia</span><br />
              em capital que<br />
              acelera negócios.
            </h1>
            
            <p className="text-xl md:text-2xl font-gantari text-henzai-off-white animate-fade-in animation-delay-300 max-w-3xl">
              Consultoria & Representações em Eficiência Energética. 
              A inteligência que conecta energia, capital e crescimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-500">
              <Button 
                size="lg"
                className="bg-henzai-terracota hover:bg-[#A34F2E] text-henzai-off-white font-gantari font-semibold px-8 py-4 rounded-3xl text-lg transition-all duration-300 hover:scale-105"
              >
                Falar com Especialista
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-henzai-terracota text-henzai-terracota hover:bg-henzai-terracota hover:text-henzai-off-white font-gantari font-semibold px-8 py-4 rounded-3xl text-lg transition-all duration-300"
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