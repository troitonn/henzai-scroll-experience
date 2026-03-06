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
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const benefits = [
    { icon: <DollarSign className="w-6 h-6" />, text: '– Conta de luz' },
    { icon: <TrendingUp className="w-6 h-6" />, text: '+ Margem líquida' },
    { icon: <BarChart className="w-6 h-6" />, text: '+ Capital disponível' },
    { icon: <Leaf className="w-6 h-6" />, text: '+ Crédito ESG' },
  ];

  const testimonials = [
    {
      name: 'Luciana',
      company: 'Franqueada OGGI Sorvetes',
      quote:
        'Recebi um planejamento financeiro claro, com projeção mensal e anual. Hoje economizo 80% na conta de luz e já comprei uma segunda franquia com o dinheiro que sobrou.',
    },
    {
      name: 'Alberto',
      company: 'Posto Shell',
      quote:
        'A equipe mostrou exatamente quanto eu iria economizar e como essa receita voltaria para o posto. Não foi promessa — foi planilha com números reais.',
    },
    {
      name: 'Eraldo',
      company: 'Vó Nena, Fábrica de Cocadas',
      quote:
        'A Mariana acompanhou cada detalhe do projeto ao pós-venda. Hoje a fábrica economiza e tenho previsibilidade financeira para os próximos 5 anos.',
    },
    {
      name: 'Armando Bessa',
      company: 'Studio Bessa',
      quote:
        'Não foi só instalar painel solar — foi ter um plano de retorno desenhado para o meu negócio. Economia real, com acompanhamento mensal.',
    },
    {
      name: 'Flávio',
      company: 'Good Chickens Restaurante',
      quote:
        'O pós-venda fez toda a diferença. Não me venderam e sumiram. Reduzi custos e sei exatamente quando recupero o investimento.',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#20405f]">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/hero-energy-bg.png')] bg-cover bg-center opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div ref={titleRef}>
            <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold mb-8 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0 animate-in' : 'opacity-0 translate-y-10'}`}>
              Sua conta de luz está financiando
              <br />
              <span className="text-henzai-terracota">o crescimento dos outros.</span>
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
            Quero minha proposta personalizada
          </Button>
        </div>

        <div className="mt-20 max-w-6xl mx-auto text-white">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quem já fez as contas com a gente
          </h3>

          <Carousel ref={carouselRef} className="w-full">
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 flex"
                >
                  <div className="bg-[#20405f]/90 p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-full">
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

            <CarouselPrevious className="text-white" />
            <CarouselNext className="text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CTAFinalSection;
