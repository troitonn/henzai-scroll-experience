import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import teamMeetingImage from '@/assets/corporate-meeting.jpg';
import ceoPhoto from '@/assets/ceo-photo.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Hook para animar números
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
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation();

  const usinas = useCountUp(3000, 2000, statsVisible);
  const economia = useCountUp(1000000000, 3000, statsVisible);

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">

      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(29, 53, 87, 0.95) 0%, rgba(29, 53, 87, 0.85) 100%), url(${teamMeetingImage})`,
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Card principal */}
          <div className="
            text-white 
            backdrop-blur-2xl 
            bg-white/[0.08] 
            rounded-3xl 
            p-10 md:p-14 
            border border-white/10 
            shadow-[0_20px_80px_rgba(0,0,0,0.4)]
          ">

            {/* Topo */}
            <div 
              ref={titleRef} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12"
            >
              <div>
                <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold leading-tight transition-all duration-700 ${
                  titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  Mais que energia. <br />
                  <span className="text-henzai-terracota">Uma decisão estratégica.</span>
                </h2>
              </div>

              {/* Imagem refinada */}
              <div className={`transition-all duration-700 ${
                titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <img 
                  src={ceoPhoto} 
                  alt="CEO da Henzai" 
                  className="
                    w-full h-auto 
                    rounded-3xl 
                    shadow-2xl 
                    border border-white/10 
                    ring-1 ring-white/5
                  "
                />
              </div>
            </div>

            {/* Texto */}
            <div ref={textRef}>
              <p className={`font-gantari text-xl leading-relaxed mb-12 text-henzai-off-white max-w-3xl transition-all duration-700 ${
                textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                A Henzai nasceu da convicção de que energia não deve ser tratada apenas como despesa técnica — ela é estratégia de crescimento.
                Conectamos empresas às melhores soluções energéticas com visão de negócio, clareza e compromisso.
              </p>
            </div>

            {/* Métricas */}
            <div 
              ref={statsRef} 
              className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14"
            >
              <div className={`text-center transition-all duration-700 ${
                statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                <div className="text-4xl font-bold text-henzai-terracota mb-2">
                  +{usinas.toLocaleString('pt-BR')}
                </div>
                <div className="text-sm uppercase tracking-widest text-white/70">
                  Usinas Instaladas
                </div>
              </div>

              <div className={`text-center transition-all duration-700 delay-200 ${
                statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                <div className="text-4xl font-bold text-henzai-terracota mb-2">
                  {economia < 1000000000 
                    ? `+R$ ${economia.toLocaleString('pt-BR')}`
                    : '+R$ 1 Bi'}
                </div>
                <div className="text-sm uppercase tracking-widest text-white/70">
                  em Economia
                </div>
              </div>
            </div>

            {/* Quote */}
            <div 
              ref={quoteRef} 
              className={`bg-white/[0.06] backdrop-blur-md rounded-2xl p-8 mb-10 border border-white/10 transition-all duration-700 ${
                quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-lg italic leading-relaxed text-white/90">
                "Combinamos visão estratégica, responsabilidade técnica e presença constante para transformar consumo em vantagem, despesa em capital e futuro em oportunidade."
              </p>
            </div>

            {/* CTA (MANTIDO como você pediu) */}
            <Button 
              variant="secondary"
              size="lg"
              className="font-gantari font-semibold text-lg px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossa História
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
