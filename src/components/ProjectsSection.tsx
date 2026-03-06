import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import solarAerialImg from "@/assets/solar-panels-aerial.png";

const ProjectsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projetos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="font-libre-franklin text-4xl md:text-5xl font-bold text-foreground mb-6">
              Projetos <span className="text-henzai-terracota">em campo</span>
            </h2>
            <p className="font-gantari text-xl text-muted-foreground max-w-3xl mx-auto">
              Mais de 3.000 usinas entregues. Aqui está uma delas.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-hover)] border border-henzai-terracota/30">
            <img
              src={solarAerialImg}
              alt="Usina solar instalada pela Henzai – vista aérea"
              className="w-full h-[400px] md:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="font-libre-franklin text-white/10 text-6xl md:text-8xl font-bold tracking-widest uppercase rotate-[-25deg]">
                Henzai Energia
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="font-libre-franklin text-2xl md:text-3xl font-bold text-white mb-3">
                Usina Solar — 450 kWp
              </h3>
              <p className="font-gantari text-white/90 text-lg max-w-2xl">
                Projeto completo para indústria no interior de SP: da análise de viabilidade à homologação com a concessionária. Economia mensal de R$ 38 mil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
