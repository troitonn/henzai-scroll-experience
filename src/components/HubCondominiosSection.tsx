import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Zap, ShieldCheck, Wrench, Sun, Car } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HubCondominiosSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05);

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Infraestrutura Elétrica",
      description: "Projetos elétricos completos, cabines primárias e modernização da rede condominial."
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Energia Solar Compartilhada",
      description: "Geração fotovoltaica para áreas comuns com rateio inteligente entre unidades."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Mobilidade Elétrica",
      description: "Eletropostos compactos para garagens com gestão individualizada de consumo."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Segurança Energética",
      description: "Sistemas híbridos e nobreaks para áreas críticas do condomínio."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Manutenção Preventiva",
      description: "Monitoramento contínuo e manutenção programada de toda infraestrutura."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Gestão Centralizada",
      description: "Plataforma única para controle e otimização de todos os serviços energéticos."
    }
  ];

  return (
    <section id="hub-condominios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <span className={`inline-block font-gantari text-sm font-semibold tracking-widest uppercase text-henzai-terracota mb-4 transition-all duration-600 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Soluções integradas
          </span>
          <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Hub de Soluções para <span className="text-henzai-terracota">Condomínios</span>
          </h2>
          <p className={`font-gantari text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Todas as soluções energéticas que seu condomínio precisa em um só lugar
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group border-2 border-henzai-terracota/40 bg-card hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: cardsVisible ? `${index * 80}ms` : '0ms' }}
            >
              <CardHeader className="pb-3">
                <div className="w-14 h-14 rounded-2xl bg-henzai-terracota/10 flex items-center justify-center text-henzai-terracota mb-3 group-hover:bg-henzai-terracota group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="font-libre-franklin text-lg text-henzai-blue">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-gantari text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-henzai-terracota hover:bg-henzai-terracota/90 text-white font-gantari font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            Solicitar Consultoria
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HubCondominiosSection;
