import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Fuel, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import evChargerCondo from "@/assets/ev-charger-condo.jpg";
import evChargerGas from "@/assets/ev-charger-gasstation.jpg";

const MobilidadeSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05);

  const services = [
    {
      icon: <Car className="w-10 h-10" />,
      title: "Carregadores para Condomínios",
      description: "Soluções compactas e inteligentes de recarga para veículos elétricos, do projeto à operação.",
      image: evChargerCondo,
      benefits: [
        "Equipamentos compactos e modernos",
        "Consultoria completa de infraestrutura",
        "Consultoria financeira para retorno do investimento",
        "Consultoria técnica e instalação profissional",
        "Investimento em eletroposto com payback acelerado"
      ]
    },
    {
      icon: <Fuel className="w-10 h-10" />,
      title: "Eletroposto em Postos de Gasolina",
      description: "Transforme seu posto em um hub de mobilidade elétrica e conquiste o mercado do futuro.",
      image: evChargerGas,
      benefits: [
        "Nova fonte de receita sustentável",
        "Infraestrutura de recarga rápida e semi-rápida",
        "Projeto completo de adequação elétrica",
        "Posicionamento estratégico no mercado EV",
        "Gestão e monitoramento remoto"
      ]
    }
  ];

  return (
    <section id="mobilidade" className="py-20 bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <span className={`inline-block font-gantari text-sm font-semibold tracking-widest uppercase text-henzai-terracota mb-4 transition-all duration-600 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Mobilidade Elétrica
          </span>
          <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Infraestrutura para <span className="text-henzai-terracota">Veículos Elétricos</span>
          </h2>
          <p className={`font-gantari text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Da consultoria à instalação, preparamos seu espaço para a mobilidade do futuro
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-card ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-henzai-blue/70 to-transparent" />
                <div className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-henzai-terracota">
                  {service.icon}
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="font-libre-franklin text-xl text-henzai-blue">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-gantari text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="font-gantari text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-henzai-terracota mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full font-gantari border-henzai-terracota text-henzai-terracota hover:bg-henzai-terracota hover:text-white transition-colors duration-300"
                >
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobilidadeSection;
