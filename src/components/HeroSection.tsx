import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F2D3A] to-[#1B4B6A]">
      
      {/* Fundo com elementos inovadores */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in-slow"
          style={{ 
            backgroundImage: `url('/lovable-uploads/istockphoto-1453859222-612x612.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-[#0F2D3A]/50 backdrop-blur-lg"></div>

        {/* Formas abstratas animadas */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-[#FF6B6B]/40 via-[#FFD93D]/30 to-[#6BCB77]/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-[#6B5B95]/40 via-[#FF6F61]/30 to-[#88B04B]/30 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="text-white space-y-8">
            
            {/* Título com sombra elegante */}
            <h1 className="text-5xl md:text-7xl font-libre-franklin font-bold leading-tight animate-fade-in" 
                style={{ textShadow: '2px 2px 8px #274563' }}>
              Energia não é custo.<br />
              <span className="text-henzai-terracota">É estratégia.</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-gantari text-henzai-off-white animate-fade-in animation-delay-300 max-w-3xl" 
               style={{ textShadow: '1px 1px 6px #274563' }}>
              Transformamos economia de energia em capital que acelera negócios.
            </p>

            {/* Destaques numéricos com sombra */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in animation-delay-200">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-libre-franklin font-bold text-henzai-terracota" 
                     style={{ textShadow: '2px 2px 8px #274563' }}>
                  +3.000
                </div>
                <div className="font-gantari text-sm uppercase tracking-wider text-henzai-off-white">
                  Usinas Instaladas
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-libre-franklin font-bold text-henzai-terracota"
                     style={{ textShadow: '2px 2px 8px #274563' }}>
                  +R$ 1Bi
                </div>
                <div className="font-gantari text-sm uppercase tracking-wider text-henzai-off-white">
                  em Economia
                </div>
              </div>
            </div>
            
            {/* Botões com efeito glass reduzido */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-500">
              <Button 
                size="lg"
                className="bg-henzai-terracota/40 hover:bg-henzai-terracota/60 text-white font-gantari font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 glass-button backdrop-blur-[4px]"
              >
                Quero minha simulação gratuita
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 font-gantari font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-[4px] glass-button hover:scale-105"
              >
                Ver Soluções
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Estilo para animações */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob { animation: blob 20s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animate-fade-in { animation: fadeIn 1.2s ease-in forwards; opacity: 0; }
          .animate-fade-in-slow { animation: fadeIn 2s ease-in forwards; opacity: 0; }
          @keyframes fadeIn { to { opacity: 1; } }
        `}
      </style>

    </section>
  );
};

export default HeroSection;
