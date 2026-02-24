import React from "react";
import { Wind, Zap, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HybridSystemSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sistema-hibrido" className="py-20 bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left – Text */}
          <div>
            <h2 className="font-libre-franklin text-3xl md:text-4xl font-bold text-henzai-blue mb-6 leading-tight">
              Energia Ininterrupta:{" "}
              <span className="text-henzai-terracota">Sistema Híbrido & Eólico</span>
            </h2>
            <p className="font-gantari text-lg text-muted-foreground mb-8 leading-relaxed">
              A segurança de nunca ficar no escuro. Sistema de backup inteligente que assume a carga
              instantaneamente após queda de energia.
            </p>

            <div className="space-y-5">
              {[
                { icon: <Zap className="w-5 h-5" />, text: "Transição instantânea entre fontes de energia" },
                { icon: <Wind className="w-5 h-5" />, text: "Geração eólica complementar para máxima eficiência" },
                { icon: <Shield className="w-5 h-5" />, text: "Proteção total contra apagões e instabilidades" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-henzai-terracota/10 text-henzai-terracota flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-gantari text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Video */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-hover)] border border-border bg-card">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Sistema Híbrido & Eólico"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-henzai-terracota/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridSystemSection;
