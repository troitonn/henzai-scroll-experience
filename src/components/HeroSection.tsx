import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F2D3A]">
      
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/lovable-uploads/259949_medium.mp4"
      />

      {/* Overlay semi-transparente 30% */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Efeitos em azul petróleo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#274563]/40 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-[#0F4C6B]/40 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="text-white space-y-8">
            
            {/* Título com sombra e animação de subida */}
            <h1 className="text-5xl md:text-7xl font-libre-franklin font-bold leading-tight animate-slide-up" 
                style={{ textShadow: '2px 2px 8px #274563' }}>
              Energia não é custo.<br />
              <span className="text-henzai-terracota">É estratégia.</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-gantari text-henzai-off-white animate-slide-up animation-delay-300 max-w-3xl" 
               style={{ textShadow: '1px 1px 6px #274563' }}>
              Transformamos economia de energia em capital que acelera negócios.
            </p>

            {/* Destaques numéricos com animação de subida */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-slide-up animation-delay-500">
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
            
            {/* Botões simples */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-700">
              <Button 
                size="lg"
                className="bg-henzai-terracota text-white font-gantari font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Quero minha simulação gratuita
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white font-gantari font-medium px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:bg-white/10 hover:scale-105"
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

          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up { animation: slideUp 1s ease-out forwards; opacity: 0; }
          .animation-delay-300 { animation-delay: 0.3s; }
          .animation-delay-500 { animation-delay: 0.5s; }
          .animation-delay-700 { animation-delay: 0.7s; }

          @keyframes fadeIn { to { opacity: 1; } }
          .animate-fade-in-slow { animation: fadeIn 2s ease-in forwards; opacity: 0; }
        `}
      </style>

    </section>
  );
};

export default HeroSection;
