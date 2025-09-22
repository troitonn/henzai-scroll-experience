import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fundo com overlay em degradê */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/lovable-uploads/istockphoto-1453859222-612x612.jpg')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D3A]/70 via-[#0F2D3A]/50 to-[#0F2D3A]/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center text-white space-y-10">
          
          {/* Título */}
          <h1 className="text-5xl md:text-7xl font-libre-franklin font-bold leading-tight animate-fade-in">
            Energia não é custo.<br />
            <span className="text-henzai-terracota">É estratégia.</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl font-gantari text-henzai-off-white animate-fade-in animation-delay-300 max-w-3xl mx-auto">
            Transformamos economia de energia em <span className="font-semibold">capital inteligente</span> que acelera negócios.
          </p>

          {/* Destaques numéricos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-in animation-delay-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-libre-franklin font-bold text-henzai-terracota">
                +10
              </div>
              <div className="font-gantari text-sm uppercase tracking-wider text-henzai-off-white">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-libre-franklin font-bold text-henzai-terracota">
                +3.000
              </div>
              <div className="font-gantari text-sm uppercase tracking-wider text-henzai-off-white">
                Usinas Instaladas
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-libre-franklin font-bold text-henzai-terracota">
                +R$ 1Bi
              </div>
              <div className="font-gantari text-sm uppercase tracking-wider text-henzai-off-white">
                em Economia
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-libre-franklin font-bold text-henzai-terracota">
                +15
              </div>
              <div className="font-gantari text-sm uppercase tracking-wider text-henzai-off-white">
                Estados Atendidos
              </div>
            </div>
          </div>
          
          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-500">
            <Button 
              size="lg"
              className="bg-henzai-terracota/90 hover:bg-henzai-terracota text-white font-gantari font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 glass-button backdrop-blur-md shadow-lg"
            >
              Quero minha simulação gratuita
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/20 font-gantari font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-md glass-button hover:scale-105"
            >
              Ver Soluções
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
