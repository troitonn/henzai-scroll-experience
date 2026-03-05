import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Battery, Wrench, Building2 } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SolutionsSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const solutions = [
    {
      title: "Cabines Primárias",
      description: "Estrutura moderna e segura para distribuição de energia empresarial, garantindo confiabilidade elétrica e eficiência operacional.",
      icon: <Battery className="w-10 h-10 text-henzai-terracota" />,
      image: "/lovable-uploads/cabine-primaria-1.jpg",
      cta: "Saiba mais",
    },
    {
      title: "Manutenção e Monitoramento",
      description: "Monitoramento contínuo e manutenção especializada para garantir máxima performance, segurança e disponibilidade dos ativos energéticos.",
      icon: <Wrench className="w-10 h-10 text-henzai-terracota" />,
      image: "/lovable-uploads/cb09bdbe-0580-4286-8074-013d36f8af7e.png",
      cta: "Saiba mais",
    },
    {
      title: "Hub de Infraestrutura Energética 360°",
      description: "Soluções integradas que conectam mobilidade elétrica, infraestrutura energética e gestão estratégica para empresas que buscam eficiência, economia e crescimento sustentável.",
      icon: <Building2 className="w-10 h-10 text-henzai-terracota" />,
      image: "/lovable-uploads/digital-energy-solution.png",
      cta: "Conhecer soluções",
    },
  ];

  return (
    <section id="soluções" className="py-20 bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2
            className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Benefícios dos Produtos e <span className="text-henzai-terracota">Serviços</span>
          </h2>
          <p
            className={`font-gantari text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Soluções estratégicas que reduzem custos, aumentam eficiência e fortalecem o crescimento da sua empresa.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 transform hover:-translate-y-1 h-full bg-white/90 backdrop-blur-sm ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-henzai-blue/80 to-transparent" />
                <div className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  {solution.icon}
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="font-libre-franklin text-xl text-henzai-blue">
                  {solution.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0 flex flex-col flex-1">
                <CardDescription className="font-gantari text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </CardDescription>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full font-gantari border-henzai-terracota text-henzai-terracota hover:bg-henzai-terracota hover:text-white transition-colors duration-300 mt-auto"
                >
                  {solution.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
