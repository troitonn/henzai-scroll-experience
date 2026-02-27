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
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Usinas: de 0 a 3000
  const usinas = useCountUp(3000, 2000);

  // Economia: de 0 até 1.000.000.000
  const economia = useCountUp(1000000000, 3000);

  // Força autoplay em todos os dispositivos (desktop + mobile)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Garante que o vídeo esteja mutado (necessário para autoplay em todos os browsers)
    video.muted = true;
    video.setAttribute('muted', '');

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Se falhar, tenta novamente após pequeno delay
          setTimeout(() => {
            video.muted = true;
            video.play().catch(() => {});
          }, 500);
        });
      }
    };

    // Tenta imediatamente
    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('canplay', tryPlay, { once: true });
    }

    // Fallback: tenta ao interagir com a página (mobile)
    const handleInteraction = () => {
      if (video.paused) tryPlay();
    };

    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('scroll', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      video.removeEventListener('canplay', tryPlay);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F2D3A] to-[#1B4B6A]">

      {/* Fundo */}
      <div className="absolute inset-0 overflow-hidden bg-[hsl(var(--henzai-blue))]">
        <img
          src="/lovable-uploads/hero-energy-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/15"></div>
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
                className="bg-henzai-terracota hover:bg-henzai-terracota/90 text-white font-gantari font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Quero minha simulação gratuita
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document.getElementById('soluções')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="border-2 border-white text-white bg-white/20 hover:bg-white/30 font-gantari font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 backdrop-blur-md shadow-lg"
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
