import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

const useCountUp = (end: number, duration: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
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
  const usinas = useCountUp(3000, 2000);
  const economia = useCountUp(1000000000, 3000);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    tryPlay();

    const handleInteraction = () => {
      tryPlay();
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('scroll', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('/lovable-uploads/istockphoto-1453859222-612x612.jpg')`
          }}
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          // @ts-ignore
          webkit-playsinline="true"
          x5-playsinline="true"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* overlay melhorado */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="text-white space-y-10">

            <h1
              className="text-5xl md:text-7xl font-libre-franklin font-bold leading-tight animate-fade-in"
              style={{ textShadow: '2px 4px 20px rgba(0,0,0,0.6)' }}
            >
              Energia não é custo.<br />
              <span className="text-henzai-terracota">É estratégia.</span>
            </h1>

            <p
              className="text-xl md:text-2xl font-gantari text-henzai-off-white animate-fade-in animation-delay-300 max-w-3xl"
              style={{ textShadow: '1px 2px 10px rgba(0,0,0,0.5)' }}
            >
              Transformamos economia de energia em capital que acelera negócios.
            </p>

            {/* Métricas */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 animate-fade-in animation-delay-200">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-henzai-terracota drop-shadow-lg">
                  +{usinas.toLocaleString('pt-BR')}
                </div>
                <div className="text-sm uppercase tracking-wider text-henzai-off-white">
                  Usinas Instaladas
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-white/20"></div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-henzai-terracota drop-shadow-lg">
                  {economia < 1000000000
                    ? `+R$ ${economia.toLocaleString('pt-BR')}`
                    : '+R$ 1 Bi'}
                </div>
                <div className="text-sm uppercase tracking-wider text-henzai-off-white">
                  em Economia
                </div>
              </div>
            </div>

            {/* BOTÕES AJUSTADOS */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in animation-delay-500">

              {/* CTA Principal */}
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="
                  bg-gradient-to-r from-henzai-terracota to-orange-500
                  hover:from-henzai-terracota/90 hover:to-orange-500/90
                  text-white 
                  font-semibold
                  px-10 py-5 
                  rounded-full 
                  text-lg 
                  transition-all duration-300 
                  hover:scale-105
                  shadow-xl 
                  hover:shadow-[0_0_25px_rgba(255,120,80,0.6)]
                  backdrop-blur-md
                "
              >
                Quero minha simulação gratuita
              </Button>

              {/* Secundário */}
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document.getElementById('soluções')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="
                  border border-white/40
                  text-white
                  hover:bg-white/10
                  hover:border-white/70
                  font-medium
                  px-10 py-5
                  rounded-full
                  text-lg
                  transition-all duration-300
                  backdrop-blur-md
                  hover:scale-105
                  shadow-lg
                "
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
