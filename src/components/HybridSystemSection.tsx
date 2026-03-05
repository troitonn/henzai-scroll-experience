import React from "react";
import { Wind, Zap, Battery } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import henzaiBrandImg from "@/assets/henzai-brand-poster.png";

const HybridSystemSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sistema-hibrido" className="py-20 bg-henzai-terracota">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left – Text */}
          <div>
            <h2 className="font-libre-franklin text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Sua vida não para quando a luz cai.
            </h2>
            <p className="font-gantari text-lg text-white/90 mb-4 leading-relaxed">
              Somos um HUB de soluções de eficiência energética e estratégia empresarial, criado para empresários que buscam reduzir custos, aumentar competitividade e transformar energia em vantagem estratégica para o negócio.
            </p>
            <p className="font-gantari text-lg text-white/90 mb-4 leading-relaxed">
              Conectamos tecnologia, inteligência de mercado e soluções inovadoras em um único ecossistema, permitindo que sua empresa otimize o consumo energético, gere economia real e tome decisões mais estratégicas sobre investimentos e crescimento.
            </p>
            <p className="font-gantari text-lg text-white/90 mb-4 leading-relaxed">
              Nosso compromisso é entregar eficiência, previsibilidade e performance, para que você foque no que realmente importa: expandir seu negócio com mais rentabilidade e segurança.
            </p>
            <p className="font-libre-franklin text-xl font-bold text-white mt-6">
              Transforme energia em estratégia. Reduza custos. Aumente resultados.
            </p>

            <div className="space-y-5 mt-8">
              {[
                { icon: <Zap className="w-5 h-5" />, text: "Transição instantânea entre fontes de energia" },
                { icon: <Wind className="w-5 h-5" />, text: "Geração eólica complementar para máxima eficiência" },
                { icon: <Battery className="w-5 h-5" />, text: "Baterias inteligentes com autonomia estendida" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-white/20 text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-gantari text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <img
                src={henzaiBrandImg}
                alt="Henzai Energia – Energia que acelera e conscientiza negócios"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridSystemSection;
