import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/lovable-uploads/solução-de-energia-digital.png')` 
        }}
      >
        <div className="absolute inset-0 bg-[#0F2D3A] bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="text-white space-y-8">
            <h1 className="text-5xl md:text-7xl font-libre-franklin font-bold leading-tight animate-fade-in">
              Energia não é custo.<br />
              <span className="text-henzai-terracota">É estratégia.</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-gantari text-henzai-off-white animate-fade-in animation-delay-300 max-w-3xl">
              Transformamos economia de energia em capital que acelera negócios.
            </p>

            {/* Destaques numéricos */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in animation-delay-200">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-libre-franklin font-bold text-henzai-terracota">
                  +3.000
                </div>
                <div className="font-gantari text-sm uppercase tracking-wider text-henzai-off-white">
                  Usinas Instaladas
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-libre-franklin font-bold text-henzai-terracota">
                  +R$ 1Bi
                </div>
                <div className="font-gantari text-sm uppercase tracking-wider text-henzai-off-white">
                  em Economia
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-500">
              <Button 
                size="lg"
                className="bg-henzai-terracota/90 hover:bg-henzai-terracota text-white font-gantari font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 glass-button backdrop-blur-md"
              >
                Quero minha simulação gratuita
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/20 font-gantari font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-md glass-button hover:scale-105"
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
