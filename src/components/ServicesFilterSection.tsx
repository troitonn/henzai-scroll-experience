import React, { useState } from "react";
import { Car, Fuel, Thermometer, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import eletropostosImg from "@/assets/eletropostos-henzai.png";

type Category = "Todos" | "Mobilidade Elétrica" | "Hub Condomínios" | "Climatização";

const categories: Category[] = ["Todos", "Mobilidade Elétrica", "Hub Condomínios", "Climatização"];

const ServicesFilterSection: React.FC = () => {
  const [active, setActive] = useState<Category>("Todos");
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const showMobilidade = active === "Todos" || active === "Mobilidade Elétrica";
  const showClimatizacao = active === "Todos" || active === "Climatização";
  const showHub = active === "Todos" || active === "Hub Condomínios";

  return (
    <section id="novos-servicos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12">
          <h2
            className={`font-libre-franklin text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${
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
                  ? "bg-henzai-terracota text-white border-henzai-terracota shadow-[var(--shadow-hover)]"
                  : "bg-card text-foreground border-border hover:border-henzai-terracota/50 hover:shadow-[var(--shadow-card)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobilidade Elétrica — 2 columns */}
        {showMobilidade && (
          <div className="mb-12 animate-fade-in">
            <h3 className="font-libre-franklin text-2xl font-bold text-foreground mb-6">
              Mobilidade <span className="text-henzai-terracota">Elétrica</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Condomínios */}
              <div className="group rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-1">
                <div className="p-8">
                  <div className="p-3 bg-henzai-terracota/10 rounded-2xl w-fit mb-4">
                    <Car className="w-8 h-8 text-henzai-terracota" />
                  </div>
                  <h4 className="font-libre-franklin text-xl font-bold text-foreground mb-3">
                    Eletromobilidade em Condomínios
                  </h4>
                  <p className="font-gantari text-muted-foreground leading-relaxed">
                    Consultoria completa desde a infraestrutura elétrica até a gestão financeira (ROI) do eletroposto. Carregadores compactos e inteligentes.
                  </p>
                </div>
              </div>

              {/* Postos de Gasolina */}
              <div className="group rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-1">
                <img
                  src={eletropostosImg}
                  alt="Eletropostos Henzai de alta performance"
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <div className="p-8">
                  <div className="p-3 bg-henzai-terracota/10 rounded-2xl w-fit mb-4">
                    <Fuel className="w-8 h-8 text-henzai-terracota" />
                  </div>
                  <h4 className="font-libre-franklin text-xl font-bold text-foreground mb-3">
                    Eletropostos de Alta Performance
                  </h4>
                  <p className="font-gantari text-muted-foreground leading-relaxed">
                    Implementação de hubs de carregamento rápido em postos de gasolina, com infraestrutura de alta performance e gestão de frotas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Climatização */}
        {showClimatizacao && (
          <div className="mb-12 animate-fade-in">
            <h3 className="font-libre-franklin text-2xl font-bold text-foreground mb-6">
              Climatização <span className="text-henzai-terracota">Estratégica</span>
            </h3>
            <div className="max-w-3xl">
              <div className="group rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-1 p-8">
                <div className="p-3 bg-henzai-terracota/10 rounded-2xl w-fit mb-4">
                  <Thermometer className="w-8 h-8 text-henzai-terracota" />
                </div>
                <h4 className="font-libre-franklin text-xl font-bold text-foreground mb-3">
                  Gestão de Ativos & Climatização Estratégica
                </h4>
                <p className="font-gantari text-muted-foreground leading-relaxed">
                  Consultoria para instalação e manutenção preventiva Hitachi, focada em redução de custos operacionais e eficiência energética.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Hub Condomínios — Full width */}
        {showHub && (
          <div className="animate-fade-in">
            <div className="group rounded-2xl overflow-hidden bg-gradient-to-r from-henzai-terracota/5 to-henzai-terracota/10 border-2 border-henzai-terracota/40 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-1 p-10">
              <div className="p-3 bg-henzai-terracota/10 rounded-2xl w-fit mb-4">
                <Building2 className="w-8 h-8 text-henzai-terracota" />
              </div>
              <h4 className="font-libre-franklin text-2xl font-bold text-foreground mb-3">
                Hub Henzai: Infraestrutura Elétrica 360º
              </h4>
              <p className="font-gantari text-lg text-muted-foreground leading-relaxed max-w-3xl">
                O único ponto de contato para todas as necessidades elétricas do condomínio. Gestão completa de infraestrutura elétrica e soluções integradas.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesFilterSection;
