import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Leaf, BarChart, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CTAFinalSection: React.FC = () => {
  const carouselRef = useRef<any>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollNext();
      }
    }, 30000); // muda a cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  const benefits = [
    { icon: <DollarSign className="w-6 h-6" />, text: 'Economia' },
    { icon: <TrendingUp className="w-6 h-6" />, text: '+ Crescimento' },
    { icon: <BarChart className="w-6 h-6" />, text: '+ Margem' },
    { icon: <Leaf className="w-6 h-6" />, text: '+ Sustentabilidade' },
  ];

  const testimonials = [
    {
      name: 'Luciana',
      company: 'Franqueada OGGI Sorvetes',
      quote:
        'O diferencial foi o atendimento consultivo da Diretora Mariana e sua equipe, foi um dos diferenciais para escolher a Henzai Energia! Recebi um planejamento financeiro claro, com projeção mensal e anual, e hoje economizo cerca 80% na conta de luz! Já expandi meu negócio, comprei mais uma Franquia com a previsibilidade financeira anual que a placas solares está me proporcionando! Melhor escolha! Mais liberdade para meus negócios!',
    },
    {
      name: 'Alberto',
      company: 'Posto Shell',
      quote:
        'O atendimento foi próximo e transparente. A equipe me mostrou exatamente quanto eu iria economizar e como essa receita voltaria para o posto. Resultado? Economia real todos os meses.',
    },
    {
      name: 'Eraldo',
      company: 'Vó Nena, Fábrica de Cocadas',
      quote:
        'A Mariana acompanhou cada detalhe, do projeto ao pós-venda. Me senti seguro com a consultoria dela em tempo real. Hoje a fábrica economiza e já tenho previsibilidade para os próximos anos.',
    },
    {
      name: 'Armado Bessa',
      company: 'Studio Bessa',
      quote:
        'Não foi só instalar energia solar, foi ter um plano de retorno financeiro desenhado para o meu negócio. A Henzai Energia trouxe economia, confiança e sustentabilidade para o Studio Bessa.',
    },
    {
      name: 'Flávio',
      company: 'Good Chickens Restaurante',
      quote:
        'O atendimento diferenciado da Mariana e Engenharia fez toda a diferença. Ela cuidou do pós-venda e garantiu que tudo fosse entregue como combinado. Hoje reduzi custos e tenho tranquilidade com a previsibilidade do meu investimento.',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#20405f]">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/hero-energy-bg.png')] bg-cover bg-center opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Principal */}
        <div className="max-w-4xl mx-auto text-center text-white">
          <div ref={titleRef}>
            <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold mb-8 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0 animate-in' : 'opacity-0 translate-y-10'}`}>
              Facilitamos o crescimento do seu negócio
              <br />
              através da{' '}
              <span className="text-henzai-terracota">economia de energia!</span>
            </h2>
          </div>

          <div
            ref={benefitsRef}
            className={`flex flex-wrap justify-center items-center gap-8 mb-12 transition-all duration-700 delay-200 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="text-henzai-terracota">{benefit.icon}</div>
                <span className="font-gantari text-lg font-medium">
                  {benefit.text}
                </span>
                {index < benefits.length - 1 && (
                  <div className="hidden sm:block w-px h-8 bg-white/30 ml-8"></div>
                )}
              </div>
            ))}
          </div>

          <Button
            size="lg"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className={`bg-henzai-terracota hover:bg-henzai-terracota/90 text-white font-gantari font-semibold px-12 py-6 rounded-full text-xl transition-all duration-700 hover:scale-105 glass-button backdrop-blur-md ${benefitsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Solicitar proposta personalizada
          </Button>
        </div>

        {/* Depoimentos */}
        <div className="mt-20 max-w-6xl mx-auto text-white">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            O que nossos clientes dizem
          </h3>

          <Carousel ref={carouselRef} className="w-full">
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 flex"
                >
                  <div className="bg-[#20405f]/90 p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-full">
                    {/* 5 estrelas */}
                    <div className="flex gap-1 text-yellow-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="mb-4 text-lg flex-grow">{t.quote}</p>
                    <p className="font-semibold">
                      {t.name} –{' '}
                      <span className="text-henzai-terracota">
                        {t.company}
                      </span>
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Botões de navegação */}
            <CarouselPrevious className="text-white" />
            <CarouselNext className="text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CTAFinalSection;
