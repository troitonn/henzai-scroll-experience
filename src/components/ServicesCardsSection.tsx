import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Building2, Thermometer } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import evChargingImg from "@/assets/ev-charging-condominium.jpg";
import hubImg from "@/assets/hub-condominios.jpg";
import climatizacaoImg from "@/assets/climatizacao-empresarial.jpg";

const services = [
  {
    title: "Mobilidade Elétrica",
    description:
      "Eletropostos para condomínios e postos de combustível — do projeto elétrico à gestão financeira do investimento. Seu espaço pronto para a frota do futuro.",
    icon: <Car className="w-10 h-10 text-henzai-terracota" />,
    image: evChargingImg,
    cta: "Ver detalhes",
    anchor: "mobilidade",
  },
  {
    title: "Hub para Condomínios",
    description:
      "Infraestrutura elétrica, modernização de sistemas e integração de tecnologias energéticas em um único parceiro. Menos fornecedores, mais controle.",
    icon: <Building2 className="w-10 h-10 text-henzai-terracota" />,
    image: hubImg,
    cta: "Ver detalhes",
    anchor: "hub-condominios",
  },
  {
    title: "Climatização Empresarial",
    description:
      "Dimensionamento, instalação e manutenção de sistemas de climatização com foco em redução real do consumo. Performance térmica sem desperdício.",
    icon: <Thermometer className="w-10 h-10 text-henzai-terracota" />,
    image: climatizacaoImg,
    cta: "Ver detalhes",
    anchor: "climatizacao",
  },
];

const ServicesCardsSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="py-20 bg-card scroll-mt-28">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2
            className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Nossos <span className="text-henzai-terracota">Serviços</span>
          </h2>
          <p
            className={`font-gantari text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Três frentes de atuação para empresas que tratam energia como decisão estratégica — não como conta a pagar.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((s, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 transform hover:-translate-y-1 h-full bg-card/90 backdrop-blur-sm ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-henzai-blue/80 to-transparent" />
                <div className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  {s.icon}
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="font-libre-franklin text-xl text-henzai-blue">
                  {s.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0 flex flex-col flex-1">
                <CardDescription className="font-gantari text-muted-foreground mb-6 leading-relaxed">
                  {s.description}
                </CardDescription>
                <Button
                  variant="outline"
                  onClick={() =>
                    document.getElementById(s.anchor)?.scrollIntoView({ behavior: "smooth" })
                  }
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

export default ServicesCardsSection;
