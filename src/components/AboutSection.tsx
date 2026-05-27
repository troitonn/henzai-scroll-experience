import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import teamMeetingImage from '@/assets/corporate-meeting.jpg';
import ceoPhoto from '@/assets/ceo-photo.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const useCountUp = (end: number, duration: number, trigger: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

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
  }, [end, duration, trigger]);

  return count;
};

const AboutSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation();

  const usinas = useCountUp(3000, 2000, statsVisible);
  const economia = useCountUp(1000000000, 3000, statsVisible);

  return (
    <section id="sobre" className="relative overflow-hidden bg-[#1D3557] py-24">
      {/* Background principal da seção */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(29, 53, 87, 0.98) 0%, rgba(29, 53, 87, 0.92) 100%), url(${teamMeetingImage})`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Camada azul para uniformizar o fundo */}
      <div className="absolute inset-0 bg-[#1D3557]/25" />

      <div className="container relative z-10 mx-auto px-6 text-white">
        <div className="mx-auto max-w-7xl">
          {/* Seção Principal */}
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div
              ref={titleRef}
              className={`transition-all duration-1000 ${
                titleVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <h2 className="mb-8 font-libre-franklin text-4xl font-bold leading-tight md:text-6xl">
                Mais que energia.
                <br />
                <span className="text-henzai-terracota">
                  Uma decisão estratégica.
                </span>
              </h2>

              <p className="max-w-xl font-gantari text-xl leading-relaxed text-henzai-off-white">
                A Henzai nasceu da convicção de que energia não deve ser tratada apenas como despesa técnica
                ela é estratégia de crescimento. Conectamos empresas às melhores soluções energéticas com
                visão de negócio, clareza e compromisso.
              </p>
            </div>

            {/* Imagem tratada como composição visual, sem card/quadrado aparente */}
            <div
              className={`flex justify-center transition-all delay-300 duration-1000 lg:justify-end ${
                titleVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="relative w-full max-w-[360px] md:max-w-[430px] lg:max-w-[500px]">
                {/* Mancha de cor atrás para integrar com a seção */}
                <div className="absolute inset-0 rounded-full bg-henzai-terracota/10 blur-3xl" />

                {/* Camada azul atrás da imagem */}
                <div className="absolute inset-0 rounded-[3rem] bg-[#1D3557]" />

                <img
                  src={ceoPhoto}
                  alt="Especialista da Henzai"
                  className="relative z-10 block w-full select-none object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.35)]"
                  style={{
                    WebkitMaskImage:
                      'radial-gradient(ellipse 78% 78% at 50% 50%, black 58%, rgba(0,0,0,0.85) 70%, transparent 100%)',
                    maskImage:
                      'radial-gradient(ellipse 78% 78% at 50% 50%, black 58%, rgba(0,0,0,0.85) 70%, transparent 100%)',
                  }}
                  draggable={false}
                />

                {/* Overlay azul leve para igualar o tom da foto com o fundo */}
                <div
                  className="pointer-events-none absolute inset-0 z-20 rounded-[3rem] bg-[#1D3557]/10"
                  style={{
                    WebkitMaskImage:
                      'radial-gradient(ellipse 78% 78% at 50% 50%, black 58%, rgba(0,0,0,0.85) 70%, transparent 100%)',
                    maskImage:
                      'radial-gradient(ellipse 78% 78% at 50% 50%, black 58%, rgba(0,0,0,0.85) 70%, transparent 100%)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Métricas e Quote */}
          <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div
                className={`text-left transition-all duration-700 ${
                  statsVisible
                    ? 'scale-100 opacity-100'
                    : 'scale-95 opacity-0'
                }`}
              >
                <div className="mb-1 text-4xl font-bold text-henzai-terracota">
                  +{usinas.toLocaleString('pt-BR')}
                </div>

                <div className="text-xs uppercase tracking-widest text-white/60">
                  Usinas Instaladas
                </div>
              </div>

              <div
                className={`text-left transition-all delay-200 duration-700 ${
                  statsVisible
                    ? 'scale-100 opacity-100'
                    : 'scale-95 opacity-0'
                }`}
              >
                <div className="mb-1 text-4xl font-bold text-henzai-terracota">
                  {economia < 1000000000
                    ? `+R$ ${economia.toLocaleString('pt-BR')}`
                    : '+R$ 1 Bi'}
                </div>

                <div className="text-xs uppercase tracking-widest text-white/60">
                  em Economia
                </div>
              </div>
            </div>

            <div
              ref={quoteRef}
              className={`transition-all duration-1000 ${
                quoteVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="mb-8 border-l-4 border-henzai-terracota pl-6">
                <p className="text-lg italic leading-relaxed text-white/80">
                  "Combinamos visão estratégica, responsabilidade técnica e presença constante para transformar
                  consumo em vantagem, despesa em capital e futuro em oportunidade."
                </p>
              </div>

              <Button
                variant="secondary"
                size="lg"
                className="rounded-full px-10 py-6 font-gantari text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() =>
                  document
                    .getElementById('contato')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Conheça Nossa História
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
