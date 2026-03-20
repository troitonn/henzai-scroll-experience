import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import projectResidential from "@/assets/project-residential.jpg";
import projectGround from "@/assets/project-ground.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";

const ProjectsSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05);

  const projects = [
    {
      image: projectResidential,
      title: "Residencial de Alto Padrão",
      description: "Sistema fotovoltaico integrado com monitoramento inteligente",
      location: "Condomínio Residencial"
    },
    {
      image: projectGround,
      title: "Usina Solar de Solo",
      description: "Parque solar com geração distribuída para múltiplas unidades consumidoras",
      location: "Área Rural"
    },
    {
      image: projectCommercial,
      title: "Cobertura Comercial",
      description: "Sistema fotovoltaico de grande porte para redução de custos operacionais",
      location: "Galpão Industrial"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <span className={`inline-block font-gantari text-sm font-semibold tracking-widest uppercase text-henzai-terracota mb-4 transition-all duration-600 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Portfólio
          </span>
          <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Conheça Nossos <span className="text-henzai-terracota">Projetos Realizados</span>
          </h2>
          <p className={`font-gantari text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Resultados reais que comprovam nossa expertise em soluções energéticas
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: gridVisible ? `${index * 120}ms` : '0ms' }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-henzai-blue/90 via-henzai-blue/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-gantari text-xs font-semibold tracking-wider uppercase text-henzai-terracota">
                  {project.location}
                </span>
                <h3 className="font-libre-franklin text-lg font-bold text-white mt-1">
                  {project.title}
                </h3>
                <p className="font-gantari text-sm text-white/80 mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
