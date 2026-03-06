import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { CheckCircle, Users, Shield, Wrench, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DiferenciaisSection: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 30000);
    return () => clearInterval(interval);
  }, [api]);

  const diferenciais = [
    {
      icon: <CheckCircle className="w-8 h-8 text-henzai-terracota" />,
      title: "Projeto sob medida",
      description: "Cada proposta inclui análise financeira com payback, ROI e projeção de economia — não vendemos pacote pronto."
    },
    {
      icon: <Shield className="w-8 h-8 text-henzai-terracota" />,
      title: "Sem conflito de interesse",
      description: "Não somos integradores: selecionamos os melhores parceiros para cada projeto com base em performance, não comissão."
    },
    {
      icon: <Users className="w-8 h-8 text-henzai-terracota" />,
      title: "Pós-venda de verdade",
      description: "Acompanhamento mensal de geração, alertas de performance e canal direto com engenharia — enquanto durar o sistema."
    },
    {
      icon: <Wrench className="w-8 h-8 text-henzai-terracota" />,
      title: "Equipe e ART próprias",
      description: "Engenharia interna com responsabilidade técnica. Homologação, vistoria e comissionamento sem terceirizar."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-henzai-terracota" />,
      title: "Economia vira investimento",
      description: "Mostramos como o dinheiro economizado pode financiar expansões, reformas ou novos pontos comerciais."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0 animate-in' : 'opacity-0 translate-y-10'}`}>
            Por que a Henzai e não <span className="text-henzai-terracota">outro fornecedor?</span>
          </h2>
          <p className={`font-gantari text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${titleVisible ? 'opacity-100 translate-y-0 animate-in' : 'opacity-0 translate-y-10'}`}>
            Cinco razões concretas para confiar sua estratégia energética a quem entende de negócio.
          </p>
        </div>

        <Carousel setApi={setApi} className="max-w-5xl mx-auto">
          <CarouselContent>
            {diferenciais.map((diferencial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card
                  className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] 
                  transition-all duration-300 transform hover:-translate-y-2 bg-card/90 backdrop-blur-sm"
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-henzai-blue/10 rounded-2xl group-hover:bg-henzai-blue/20 transition-colors duration-300">
                        {diferencial.icon}
                      </div>
                    </div>
                    <h3 className="font-libre-franklin text-xl font-semibold text-henzai-blue mb-4">
                      {diferencial.title}
                    </h3>
                    <p className="font-gantari text-muted-foreground leading-relaxed">
                      {diferencial.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="text-henzai-blue" />
          <CarouselNext className="text-henzai-blue" />
        </Carousel>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
