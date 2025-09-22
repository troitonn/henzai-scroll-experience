import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0F2D3A]">
      
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/lovable-uploads/259949_medium.mp4"
      />

      {/* Overlay 30% para contraste */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 max-w-4xl text-center px-6">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Energia não é custo.<br />
          <span className="text-henzai-terracota">É estratégia.</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Transformamos economia de energia em capital que acelera negócios.
        </p>

        {/* Destaques */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-henzai-terracota">
              +3.000
            </div>
            <div className="text-sm text-white/80 uppercase tracking-wide">
              Usinas Instaladas
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-henzai-terracota">
              +R$ 1Bi
            </div>
            <div className="text-sm text-white/80 uppercase tracking-wide">
              em Economia
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-henzai-terracota text-white px-8 py-4 rounded-full">
            Quero minha simulação gratuita
          </Button>
          <Button size="lg" variant="outline" className="border border-white/30 text-white px-8 py-4 rounded-full">
            Ver Soluções
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
