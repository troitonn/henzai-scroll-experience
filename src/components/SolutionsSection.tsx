import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, Sun, Battery, BarChart3, Wrench } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: "Sistema Híbrido de Energia",
      description: "Integra energia solar, baterias e rede/gerador, sempre priorizando a fonte mais econômica.",
      benefits: [
        "Operação contínua, mesmo em apagões",
        "Redução de picos e custos",
        "Payback acelerado e maior segurança energética"
      ],
      icon: <Battery className="w-12 h-12 text-henzai-terracota" />,
      image: "/lovable-uploads/digital-energy-solution.png"
    },
    {
      title: "Energia Fotovoltaica",
      description: "Energia limpa e renovável para redução significativa dos custos energéticos.",
      benefits: [
        "Economia de até 90% na conta de energia",
        "Retorno do investimento em 1 a 3 anos",
        "Valorização do imóvel e sustentabilidade de longo prazo"
      ],
      icon: <Sun className="w-12 h-12 text-henzai-terracota" />,
      image: "/lovable-uploads/solar-park-regulatory.png"
    },
    {
      title: "Mercado Livre de Energia",
      description: "Consultoria completa para análise regulatória, negociação e gestão de contratos.",
      benefits: [
        "Redução média de 40% nos custos",
        "Consultoria completa para análise regulatória",
        "Negociação e gestão de contratos"
      ],
      icon: <BarChart3 className="w-12 h-12 text-henzai-terracota" />,
      image: "/lovable-uploads/energy-consulting.png"
    },
    {
      title: "Cabines Primárias, Entradas Exclusivas e Projetos Elétricos",
      description: "Infraestrutura elétrica segura e atualizada, com alto desempenho, normas atendidas e confiabilidade em alta tensão.",
      benefits: [
        "Infraestrutura elétrica segura e atualizada",
        "Alto desempenho com normas atendidas",
        "Confiabilidade em alta tensão"
      ],
      icon: <Battery className="w-12 h-12 text-henzai-terracota" />,
      image: "/lovable-uploads/regulatory-energy.png"
    },
    {
      title: "Manutenção & Monitoramento",
      description: "Suporte contínuo, manutenção preventiva e monitoramento remoto para máxima eficiência.",
      benefits: [
        "Suporte contínuo 24/7",
        "Manutenção preventiva especializada",
        "Monitoramento remoto para máxima eficiência"
      ],
      icon: <Wrench className="w-12 h-12 text-henzai-terracota" />,
      image: "/lovable-uploads/cb09bdbe-0580-4286-8074-013d36f8af7e.png"
    }
  ];

  // autoplay simples
  const carouselRef = useRef<any>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollNext(); // vai para o próximo card
      }
    }, 5000); // muda a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="soluções" className="py-20 bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Benefícios dos Produtos e <span className="text-henzai-terracota">Serviços</span>
          </h2>
          <p className={`font-gantari text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Soluções energéticas estratégicas que transformam consumo em vantagem competitiva
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <Carousel ref={carouselRef} className="w-full">
            <CarouselContent className="-ml-4">
              {solutions.map((solution, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="group overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 transform hover:-translate-y-1 h-full bg-white/90 backdrop-blur-sm">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-henzai-blue/80 to-transparent"></div>
                      <div className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                        {solution.icon}
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="font-libre-franklin text-xl text-henzai-blue">
                        {solution.title}
                      </CardTitle>
                      <CardDescription className="font-gantari text-muted-foreground">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-6">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="font-gantari text-sm text-muted-foreground flex items-center">
                            <TrendingUp className="w-4 h-4 text-henzai-terracota mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="outline"
                        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full font-gantari border-henzai-terracota text-henzai-terracota hover:bg-henzai-terracota hover:text-white transition-colors duration-300"
                      >
                        Saber Mais
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-henzai-blue text-henzai-blue hover:bg-henzai-blue hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 border-henzai-blue text-henzai-blue hover:bg-henzai-blue hover:text-white" />
          </Carousel>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-henzai-blue/90 hover:bg-henzai-blue text-white font-gantari font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 glass-button backdrop-blur-md"
          >
            Ver Todas as Soluções
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
