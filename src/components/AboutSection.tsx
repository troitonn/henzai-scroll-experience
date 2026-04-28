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
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background Principal */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(29, 53, 87, 0.98) 0%, rgba(29, 53, 87, 0.90) 100%), url(${teamMeetingImage})`,
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Seção Principal: Título + Texto à esquerda, Imagem à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            
            <div ref={titleRef} className={`transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="font-libre-franklin text-4xl md:text-6xl font-bold leading-tight mb-8">
                Mais que energia.<br />
                <span className="text-henzai-terracota">Uma decisão estratégica.</span>
              </h2>
              
              <p className="font-gantari text-xl leading-relaxed text-henzai-off-white max-w-xl">
                A Henzai nasceu da convicção de que energia não deve ser tratada apenas como despesa técnica
                ela é estratégia de crescimento. Conectamos empresas às melhores soluções energéticas com 
                visão de negócio, clareza e compromisso.
              </p>
            </div>

            {/* Imagem menor e sem card de fundo */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative max-w-[280px] md:max-w-[350px]">
                <img 
                  src={ceoPhoto} 
                  alt="CEO da Henzai" 
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
                {/* Apenas um glow sutil atrás da foto, sem bordas ou cards cortando */}
                <div className="absolute -inset-4 bg-henzai-terracota/10 blur-3xl -z-10 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Métricas e Quote integrados no fluxo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Bloco de Métricas */}
            <div ref={statsRef} className="grid grid-cols-2 gap-8 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className={`text-left transition-all duration-700 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="text-4xl font-bold text-henzai-terracota mb-1">
                  +{usinas.toLocaleString('pt-BR')}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/60">Usinas Instaladas</div>
              </div>

              <div className={`text-left transition-all duration-700 delay-200 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="text-4xl font-bold text-henzai-terracota mb-1">
                  {economia < 1000000000 ? `+R$ ${economia.toLocaleString('pt-BR')}` : '+R$ 1 Bi'}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/60">em Economia</div>
              </div>
            </div>

            {/* Quote e CTA */}
            <div ref={quoteRef} className={`transition-all duration-1000 ${quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="border-l-4 border-henzai-terracota pl-6 mb-8">
                <p className="text-lg italic leading-relaxed text-white/80">
                  "Combinamos visão estratégica, responsabilidade técnica e presença constante para transformar 
                  consumo em vantagem, despesa em capital e futuro em oportunidade."
                </p>
              </div>
              
              <Button 
                variant="secondary"
                size="lg"
                className="font-gantari font-semibold text-lg px-10 py-6 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
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
