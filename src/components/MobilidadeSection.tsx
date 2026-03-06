import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Fuel } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import evChargingImg from "@/assets/ev-charging-condominium.jpg";
import eletropostosImg from "@/assets/eletropostos-henzai.png";

const services = [
  {
    title: "Carregadores para Condomínios",
    description:
      "Solução completa para implantação de carregadores em condomínios: consultoria de infraestrutura elétrica, financeira e técnica, projeto, instalação e estrutura para investimento em eletropostos.",
    icon: <Car className="w-10 h-10 text-henzai-terracota" />,
    image: evChargingImg,
    cta: "Saiba mais",
  },
  {
    title: "Eletropostos em Postos de Gasolina",
    description:
      "Implantação de infraestrutura para carregamento de veículos elétricos em postos de combustível, criando novas oportunidades de receita e preparando o negócio para o futuro da mobilidade elétrica.",
    icon: <Fuel className="w-10 h-10 text-henzai-terracota" />,
    image: eletropostosImg,
    cta: "Saiba mais",
  },
];

const MobilidadeSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="mobilidade" className="py-20 bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2
            className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Mobilidade <span className="text-henzai-terracota">Elétrica</span>
          </h2>
          <p
            className={`font-gantari text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Infraestrutura completa para veículos elétricos em condomínios e postos de combustível.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {services.map((s, i) => (
            <Card
              key={i}
              className={`group overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 transform hover:-translate-y-1 h-full bg-card/90 backdrop-blur-sm ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-henzai-blue/80 to-transparent" />
                <div className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">{s.icon}</div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="font-libre-franklin text-xl text-henzai-blue">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-1">
                <CardDescription className="font-gantari text-muted-foreground mb-6 leading-relaxed">{s.description}</CardDescription>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full font-gantari border-henzai-terracota text-henzai-terracota hover:bg-henzai-terracota hover:text-white transition-colors duration-300 mt-auto"
                >
                  {s.cta}
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
