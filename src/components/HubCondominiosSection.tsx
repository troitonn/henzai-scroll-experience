import React from "react";
import { Button } from "@/components/ui/button";
import { Building2, Zap, Settings, Cpu } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import hubImg from "@/assets/hub-condominios.jpg";

const features = [
  { icon: <Zap className="w-5 h-5" />, text: "Infraestrutura elétrica completa" },
  { icon: <Settings className="w-5 h-5" />, text: "Gestão e modernização de sistemas" },
  { icon: <Cpu className="w-5 h-5" />, text: "Integração de tecnologias energéticas" },
  { icon: <Building2 className="w-5 h-5" />, text: "Soluções energéticas centralizadas" },
];

const HubCondominiosSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="hub-condominios" className="py-20 bg-card scroll-mt-28">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-hover)]">
            <img src={hubImg} alt="Hub de Soluções para Condomínios" className="w-full h-auto object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-henzai-blue/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Building2 className="w-12 h-12 text-henzai-terracota" />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="font-libre-franklin text-3xl md:text-4xl font-bold text-henzai-blue mb-6 leading-tight">
              Hub de Soluções para <span className="text-henzai-terracota">Condomínios</span>
            </h2>
            <p className="font-gantari text-lg text-muted-foreground mb-8 leading-relaxed">
              Centralizamos todas as soluções energéticas para condomínios em um único hub. Da infraestrutura elétrica à integração de tecnologias, oferecemos um ecossistema completo para eficiência, economia e modernização.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-henzai-terracota/10 text-henzai-terracota flex-shrink-0">{f.icon}</div>
                  <span className="font-gantari text-foreground">{f.text}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              className="font-gantari bg-henzai-terracota text-white hover:bg-henzai-terracota/90 px-8 py-3 rounded-full"
            >
              Conhecer soluções
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubCondominiosSection;
