import React from "react";
import { Button } from "@/components/ui/button";
import { Thermometer, Shield, Wrench, BarChart3, Settings } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import climatizacaoImg from "@/assets/climatizacao-empresarial.jpg";

const services = [
  { icon: <BarChart3 className="w-5 h-5" />, text: "Consultoria estratégica para implantação" },
  { icon: <Settings className="w-5 h-5" />, text: "Dimensionamento técnico personalizado" },
  { icon: <Thermometer className="w-5 h-5" />, text: "Instalação e gestão de equipamentos" },
  { icon: <Wrench className="w-5 h-5" />, text: "Manutenção preventiva e corretiva" },
  { icon: <Shield className="w-5 h-5" />, text: "Confiabilidade e eficiência operacional" },
];

const ClimatizacaoSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="climatizacao" className="py-20 bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Text */}
          <div>
            <h2 className="font-libre-franklin text-3xl md:text-4xl font-bold text-henzai-blue mb-6 leading-tight">
              Climatização <span className="text-henzai-terracota">Empresarial</span>
            </h2>
            <p className="font-gantari text-lg text-muted-foreground mb-4 leading-relaxed">
              Performance climática inteligente para o seu negócio. Oferecemos soluções completas de climatização com foco em eficiência energética, confiabilidade e gestão inteligente — da consultoria estratégica à manutenção contínua.
            </p>
            <p className="font-gantari text-lg text-muted-foreground mb-8 leading-relaxed">
              Garantimos o ambiente ideal para sua operação com equipamentos de alta performance, dimensionamento técnico preciso e acompanhamento dedicado para máxima economia e conforto.
            </p>

            <div className="space-y-4 mb-8">
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-henzai-terracota/10 text-henzai-terracota flex-shrink-0">{s.icon}</div>
                  <span className="font-gantari text-foreground">{s.text}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              className="font-gantari bg-henzai-terracota text-white hover:bg-henzai-terracota/90 px-8 py-3 rounded-full"
            >
              Solicitar consultoria
            </Button>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-hover)]">
            <img src={climatizacaoImg} alt="Climatização Empresarial" className="w-full h-auto object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-henzai-blue/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Thermometer className="w-12 h-12 text-henzai-terracota" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClimatizacaoSection;
