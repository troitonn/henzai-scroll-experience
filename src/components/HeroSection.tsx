import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const useCountUp = (end: number, duration: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [end, duration]);

  return count;
};

const HeroSection: React.FC = () => {
  // Usinas: de 0 a 3000
  const usinas = useCountUp(3000, 2000);

  // Economia: de 0 até 1.000.000.000
  const economia = useCountUp(1000000000, 3000);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F2D3A] to-[#1B4B6A]">

      {/* Fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/istockphoto-1453859222-612x612.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-[#264563]/50 backdrop-blur-sm"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#264563]/40 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#264563]/30 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="text-white space-y-8">

            {/* Título */}
            <h1
              className="text-5xl md:text-7xl font-libre-franklin font-bold leading-tight"
              style={{ textShadow: '2px 2px 8px #274563' }}
            >
              Energia não é custo.<br />
              <span className="text-henzai-terracota">É estratégia.</span>
            </h1>

            <p
              className="text-xl md:text-2xl font-gantari text-henzai-off-white max-w-3xl"
              style={{ textShadow: '1px 1px 6px #274563' }}
            >
              Transformamos economia de energia em capital que acelera negócios.
            </p>

            {/* Destaques numéricos animados */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl font-libre-franklin font-bold text-henzai-terracota"
                  style={{ textShadow: '2px 2px 8px #274563' }}
                >
                  +{usinas.toLocaleString('pt-BR')}
                </div>
                <div className="font-gantari text-sm uppercase tracking-wider text-henzai-off-white">
                  Usinas Instaladas
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-white/30"></div>

              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl font-libre-franklin font-bold text-henzai-terracota"
                  style={{ textShadow: '2px 2px 8px #274563' }}
                >
                  {/* Mostra +R$ 1 Bi quando chega no fim */}
                  {economia < 1000000000
                    ? `+R$ ${economia.toLocaleString('pt-BR')}`
                    : '+R$ 1 Bi'}
                </div>
                <div className="font-gantari text-sm uppercase tracking-wider text-henzai-off-white">
                  em Economia
                </div>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-henzai-terracota/30 hover:bg-henzai-terracota/45 text-white font-gantari font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 glass-button backdrop-blur-[1px]"
              >
                Quero minha simulação gratuita
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document.getElementById('soluções')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="border-2 border-[#264563] text-[#264563] hover:bg-[#264563]/10 font-gantari font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-[1px] glass-button hover:scale-105"
              >
                Ver Soluções
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animações */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob { animation: blob 20s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
