import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CheckCircle, Users, Shield, Wrench, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DiferenciaisSection: React.FC = () => {
  const carouselRef = useRef<any>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollNext();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const diferenciais = [
    {
      icon: <CheckCircle className="w-8 h-8 text-henzai-terracota" />,
      title: "Consultoria personalizada",
      description: "Projeto técnico e financeiro sob medida para cada cliente"
    },
    {
      icon: <Shield className="w-8 h-8 text-henzai-terracota" />,
      title: "Independência técnica",
      description: "Seleção dos melhores integradores, sem conflito de interesse"
    },
    {
      icon: <Users className="w-8 h-8 text-henzai-terracota" />,
      title: "Atendimento pós-venda",
      description: "Acompanhamento contínuo e suporte completo"
    },
    {
      icon: <Wrench className="w-8 h-8 text-henzai-terracota" />,
      title: "Estrutura e equipe própria",
      description: "Execução integral com ART e homologação ágil"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-henzai-terracota" />,
      title: "Planejamento financeiro estratégico",
      description: "Transforma economia em investimento para crescimento sustentável"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0 animate-in' : 'opacity-0 translate-y-10'}`}>
            Diferenciais de <span className="text-henzai-terracota">Mercado</span>
          </h2>
          <p className={`font-gantari text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${titleVisible ? 'opacity-100 translate-y-0 animate-in' : 'opacity-0 translate-y-10'}`}>
            O que nos torna únicos na entrega de soluções energéticas estratégicas
          </p>
        </div>

        {/* Carrossel */}
        <Carousel ref={carouselRef} className="max-w-5xl mx-auto">
          <CarouselContent>
            {diferenciais.map((diferencial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card
                  className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] 
                  transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm"
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

          {/* Botões de navegação */}
          <CarouselPrevious className="text-henzai-blue" />
          <CarouselNext className="text-henzai-blue" />
        </Carousel>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
