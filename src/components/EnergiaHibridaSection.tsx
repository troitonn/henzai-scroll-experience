import React from "react";
import { Wind, Zap, Construction } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

const EnergiaHibridaSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="energia-hibrida" className="py-20 bg-henzai-blue text-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge className="mb-6 bg-henzai-terracota/20 text-henzai-terracota border-henzai-terracota/30 font-gantari text-sm px-4 py-1.5">
            <Construction className="w-4 h-4 mr-2" />
            Em progresso
          </Badge>

          <h2 className="font-libre-franklin text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Sistema Híbrido de <span className="text-henzai-terracota">Energia</span>
          </h2>
          <p className="font-gantari text-lg text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Em breve: vídeo demonstrativo do nosso sistema híbrido de energia eólica + energia alternativa. Veja como sua casa ou empresa continua funcionando automaticamente mesmo durante quedas de energia.
          </p>

          {/* Video placeholder */}
          <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="flex gap-6">
                <div className="p-4 rounded-full bg-white/10">
                  <Wind className="w-10 h-10 text-henzai-terracota" />
                </div>
                <div className="p-4 rounded-full bg-white/10">
                  <Zap className="w-10 h-10 text-henzai-terracota" />
                </div>
              </div>
              <p className="font-gantari text-white/60 text-sm">Vídeo demonstrativo em produção</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Wind className="w-6 h-6" />, title: "Energia Eólica", desc: "Geração complementar para máxima eficiência" },
              { icon: <Zap className="w-6 h-6" />, title: "Transição Instantânea", desc: "Sem interrupção no fornecimento" },
              { icon: <Construction className="w-6 h-6" />, title: "Autonomia Total", desc: "Sua operação nunca para" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-xl bg-henzai-terracota/20 text-henzai-terracota w-fit mx-auto mb-4">{item.icon}</div>
                <h3 className="font-libre-franklin font-bold mb-2">{item.title}</h3>
                <p className="font-gantari text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergiaHibridaSection;
