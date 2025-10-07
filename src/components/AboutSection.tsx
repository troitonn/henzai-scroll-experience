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
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation();

  // Usinas: de 0 a 3000
  const usinas = useCountUp(3000, 2000, statsVisible);

  // Economia: de 0 a 1.000.000.000
  const economia = useCountUp(1000000000, 3000, statsVisible);

  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(29, 53, 87, 0.9) 0%, rgba(29, 53, 87, 0.7) 100%), url(${teamMeetingImage})`,
          backgroundAttachment: 'fixed'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-white backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Título, Texto e Imagem lado a lado */}
            <div ref={titleRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Mais que energia. <span className="text-henzai-terracota">Uma decisão estratégica.</span>
                </h2>
                
                <p className={`font-gantari text-xl leading-relaxed text-henzai-off-white transition-all duration-700 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  A Henzai nasceu da convicção de que energia não deve ser tratada apenas como despesa técnica — ela é estratégia de crescimento.
                  Somos uma consultoria especializada que conecta empresas às melhores soluções energéticas com visão de negócio, clareza e compromisso.
                </p>
              </div>
              
              {/* CEO Image */}
              <div className={`transition-all duration-700 ${titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <img 
                  src={ceoPhoto} 
                  alt="CEO da Henzai" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Destaques numéricos animados */}
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className={`text-center transition-all duration-700 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                  <div className="text-3xl font-libre-franklin font-bold text-henzai-terracota mb-2">
                    +{usinas.toLocaleString('pt-BR')}
                  </div>
                  <div className="font-gantari text-sm uppercase tracking-wider">Usinas Instaladas</div>
                </div>
                <div className={`text-center transition-all duration-700 delay-200 ${statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                  <div className="text-3xl font-libre-franklin font-bold text-henzai-terracota mb-2">
                    {/* Mostra +R$ 1 Bi quando terminar */}
                    {economia < 1000000000 
                      ? `+R$ ${economia.toLocaleString('pt-BR')}`
                      : '+R$ 1 Bi'}
                  </div>
                  <div className="font-gantari text-sm uppercase tracking-wider">em Economia</div>
                </div>
              </div>

              <div ref={quoteRef} className={`bg-henzai-blue/20 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/10 transition-all duration-700 ${quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <p className="font-gantari text-lg italic leading-relaxed mb-6">
                  "Combinamos visão estratégica, responsabilidade técnica e presença constante para transformar consumo em vantagem, despesa em capital e futuro em oportunidade."
                </p>
            </div>

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
