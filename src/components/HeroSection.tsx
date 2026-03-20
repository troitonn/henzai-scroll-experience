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

      {/* Video background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
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
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="text-white space-y-8">

            <h1
              className="text-5xl md:text-7xl font-libre-franklin font-bold leading-tight animate-fade-in"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
            >
              Energia não é custo.<br />
              <span className="text-henzai-terracota">É estratégia.</span>
            </h1>

            <p
              className="text-xl md:text-2xl font-gantari text-henzai-off-white animate-fade-in animation-delay-300 max-w-3xl"
              style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.4)' }}
            >
              Transformamos economia de energia em capital que acelera negócios.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in animation-delay-200">
              <div className="text-center">
                <div
                  className="text-3xl md:text-4xl font-libre-franklin font-bold text-henzai-terracota"
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
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
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
                >
                  {economia < 1000000000
                    ? `+R$ ${economia.toLocaleString('pt-BR')}`
                    : '+R$ 1 Bi'}
                </div>
                <div className="font-gantari text-sm uppercase tracking-wider text-henzai-off-white">
                  em Economia
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-500">
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
                className="border-2 border-white/30 text-white hover:bg-white/10 font-gantari font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-[1px] glass-button hover:scale-105"
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
