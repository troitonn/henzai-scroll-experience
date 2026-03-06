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
          <div>
            <h2 className="font-libre-franklin text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Sua operação não pode depender da concessionária.
            </h2>
            <p className="font-gantari text-lg text-white/90 mb-4 leading-relaxed">
              Somos um hub de eficiência energética criado para empresários que querem parar de pagar caro por energia e começar a investir o que economizam no próprio negócio.
            </p>
            <p className="font-gantari text-lg text-white/90 mb-4 leading-relaxed">
              Conectamos tecnologia, inteligência de mercado e soluções sob medida em um único ecossistema — para que sua empresa reduza custos com previsibilidade e tome decisões financeiras melhores.
            </p>
            <p className="font-gantari text-lg text-white/90 mb-4 leading-relaxed">
              Nosso compromisso: entregar economia mensurável, com números claros e acompanhamento real. Sem promessas vagas.
            </p>
            <p className="font-libre-franklin text-xl font-bold text-white mt-6">
              Menos conta de luz. Mais capital para crescer.
            </p>

            <div className="space-y-5 mt-8">
              {[
                { icon: <Zap className="w-5 h-5" />, text: "Troca automática entre fontes — zero interrupção" },
                { icon: <Wind className="w-5 h-5" />, text: "Geração eólica complementar para reduzir dependência da rede" },
                { icon: <Battery className="w-5 h-5" />, text: "Baterias com autonomia para manter sua operação em blackouts" },
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

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <img
                src={henzaiBrandImg}
                alt="Henzai Energia – sistema híbrido de energia"
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
