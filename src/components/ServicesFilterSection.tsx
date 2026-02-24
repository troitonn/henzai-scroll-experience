import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Building2, Thermometer, Car, Fuel, Wind } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Category = "Todos" | "Mobilidade Elétrica" | "Hub Condomínios" | "Climatização";

interface ServiceCard {
  title: string;
  description: string;
  category: Category;
  icon: React.ReactNode;
}

const services: ServiceCard[] = [
  {
    title: "Carregamento em Condomínios",
    description:
      "Soluções compactas, consultoria técnica de infraestrutura e viabilidade financeira para retorno de investimento (Eletroposto).",
    category: "Mobilidade Elétrica",
    icon: <Car className="w-10 h-10" />,
  },
  {
    title: "Eletropostos em Postos de Gasolina",
    description:
      "Infraestrutura de alta performance para carregamento rápido e gestão de frotas.",
    category: "Mobilidade Elétrica",
    icon: <Fuel className="w-10 h-10" />,
  },
  {
    title: "Climatização Estratégica",
    description:
      "Consultoria para sistemas de Ar-condicionado, gestão ativa de equipamentos e manutenção especializada para redução de custos energéticos.",
    category: "Climatização",
    icon: <Thermometer className="w-10 h-10" />,
  },
  {
    title: "Hub de Soluções 360º",
    description:
      "Gestão completa de infraestrutura elétrica e soluções integradas para condomínios.",
    category: "Hub Condomínios",
    icon: <Building2 className="w-10 h-10" />,
  },
];

const categories: Category[] = ["Todos", "Mobilidade Elétrica", "Hub Condomínios", "Climatização"];

const ServicesFilterSection: React.FC = () => {
  const [active, setActive] = useState<Category>("Todos");
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const filtered = active === "Todos" ? services : services.filter((s) => s.category === active);

  return (
    <section id="novos-servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-12">
          <h2
            className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Novos <span className="text-henzai-terracota">Serviços</span>
          </h2>
          <p
            className={`font-gantari text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Explore nossas soluções por categoria
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-gantari font-medium px-6 py-2.5 rounded-full text-sm transition-all duration-300 border ${
                active === cat
                  ? "bg-henzai-blue text-white border-henzai-blue shadow-[var(--shadow-hover)]"
                  : "bg-white text-henzai-blue border-henzai-blue/20 hover:border-henzai-blue/50 hover:shadow-[var(--shadow-card)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filtered.map((service, i) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="p-3 bg-henzai-blue/5 rounded-2xl w-fit mb-3 text-henzai-blue group-hover:text-henzai-terracota transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="font-libre-franklin text-xl text-henzai-blue">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-gantari text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <span className="inline-block font-gantari text-xs font-medium px-3 py-1 rounded-full bg-henzai-terracota/10 text-henzai-terracota">
                  {service.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFilterSection;
