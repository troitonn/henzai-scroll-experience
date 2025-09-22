import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { CheckCircle, Users, Shield, Wrench, TrendingUp } from 'lucide-react';

const DiferenciaisSection: React.FC = () => {
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6">
            Diferenciais de <span className="text-henzai-terracota">Mercado</span>
          </h2>
          <p className="font-gantari text-xl text-muted-foreground max-w-3xl mx-auto">
            O que nos torna únicos na entrega de soluções energéticas estratégicas
          </p>
        </div>

        {/* Carrossel */}
        <Carousel className="max-w-5xl mx-auto">
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
