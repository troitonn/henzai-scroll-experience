import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MobilidadeSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05);

  return (
    <section id="mobilidade" className="py-20 bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10">
      <div className="container mx-auto px-4">

        {/* HEADER (mantido, só sem mexer no design) */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Mobilidade Elétrica e <span className="text-henzai-terracota">Oportunidade de Mercado</span>
          </h2>
        </div>

        {/* COPY PRINCIPAL (EXATAMENTE COMO VOCÊ MANDOU) */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6 font-gantari text-lg text-henzai-blue leading-relaxed">

          <p>O Brasil já caminha para a marca de 600 mil veículos eletrificados leves em circulação.</p>

          <p>Esses motoristas não escolhem qualquer lugar. Eles escolhem onde podem carregar.</p>

          <p>Se o seu empreendimento não oferece recarga, ele simplesmente deixa de ser opção. Eletroposto não é tendência. É filtro de escolha.</p>

          <p>
            Investidores já estão buscando pontos estratégicos para instalar infraestrutura.
            A pergunta não é se o mercado vai crescer.
            É se o seu espaço vai participar desse crescimento ou assistir o fluxo ir para o concorrente.
          </p>
        </div>

        {/* CARDS (mantendo seu DESIGN ORIGINAL) */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* CARD 1 */}
          <Card className={`border-0 shadow-lg bg-white/90 transition-all duration-500 ${cardsVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <CardHeader>
              <CardTitle className="text-henzai-blue font-libre-franklin">
                Card 1
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 font-gantari text-henzai-blue">

              <p>
                Gere receita enquanto atualiza seu empreendimento para o novo padrão de mercado.
              </p>

              <p className="font-semibold">Investidores estão buscando:</p>

              <ul className="space-y-2">
                <li>• Pontos com fluxo</li>
                <li>• Localizações estratégicas</li>
                <li>• Espaços com potencial de permanência</li>
              </ul>

            </CardContent>
          </Card>

          {/* CARD 2 */}
          <Card className={`border-0 shadow-lg bg-white/90 transition-all duration-500 ${cardsVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <CardHeader>
              <CardTitle className="text-henzai-blue font-libre-franklin">
                Card 2
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 font-gantari text-henzai-blue">

              <p className="font-bold uppercase">
                E O MOTORISTA ESCOLHE LOCAIS QUE OFEREÇAM:
              </p>

              <ul className="space-y-2">
                <li>🌿 Conveniência</li>
                <li>🌿 Segurança</li>
                <li>🌿 Tempo útil de permanência</li>
              </ul>

              <p>
                Se o seu empreendimento não oferece recarga, ele deixa de ser opção.
              </p>

            </CardContent>
          </Card>

          {/* CARD 3 */}
          <Card className={`border-0 shadow-lg bg-white/90 lg:col-span-2 transition-all duration-500 ${cardsVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <CardHeader>
              <CardTitle className="text-henzai-blue font-libre-franklin">
                Henzai
              </CardTitle>
            </CardHeader>

            <CardContent className="font-gantari text-henzai-blue text-lg">

              EMPREENDIMENTOS com recarga elétrica tornam-se mais atrativos, aumentam o tempo médio de permanência,
              atraem um público de maior poder aquisitivo e ainda geram receita direta ou indireta.

            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  );
};

export default MobilidadeSection;
