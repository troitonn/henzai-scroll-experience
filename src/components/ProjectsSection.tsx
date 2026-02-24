import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import solarDroneImg from "@/assets/solar-panels-drone.png";

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
              Projetos em <span className="text-henzai-terracota">Execução</span>
            </h2>
            <p className="font-gantari text-xl text-muted-foreground max-w-3xl mx-auto">
              Autoridade técnica comprovada em campo
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-hover)]">
            <img
              src={solarDroneImg}
              alt="Projeto de usina solar Henzai – vista aérea"
              className="w-full h-[400px] md:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="font-libre-franklin text-2xl md:text-3xl font-bold text-white mb-3">
                Usinas Solares de Alta Capacidade
              </h3>
              <p className="font-gantari text-white/90 text-lg max-w-2xl">
                Instalações fotovoltaicas projetadas e executadas com engenharia de ponta para máxima geração e retorno de investimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
