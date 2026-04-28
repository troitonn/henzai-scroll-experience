import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const MobilidadeSection: React.FC = () => {
  return (
    <section id="mobilidade" className="py-20 bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* TEXTO ORIGINAL (NÃO ALTERADO) */}
        <div className="text-center mb-16 space-y-6 font-gantari text-henzai-blue text-lg leading-relaxed">

          <p>O Brasil já caminha para a marca de 600 mil veículos eletrificados leves em circulação.</p>

          <p>Esses motoristas não escolhem qualquer lugar. Eles escolhem onde podem carregar.</p>

          <p>Se o seu empreendimento não oferece recarga, ele simplesmente deixa de ser opção. Eletroposto não é tendência. É filtro de escolha.</p>

          <p>
            Investidores já estão buscando pontos estratégicos para instalar infraestrutura.
            A pergunta não é se o mercado vai crescer.
            É se o seu espaço vai participar desse crescimento ou assistir o fluxo ir para o concorrente.
          </p>
        </div>

        {/* CARD 1 */}
        <Card className="mb-8 p-6 bg-white/90 border-0 shadow-lg">
          <CardContent className="space-y-4">

            <p className="font-gantari text-lg text-henzai-blue">
              Gere receita enquanto atualiza seu empreendimento para o novo padrão de mercado.
            </p>

            <p className="font-gantari text-henzai-blue font-semibold">
              Investidores estão buscando:
            </p>

            <ul className="font-gantari text-henzai-blue list-disc pl-6 space-y-1">
              <li>Pontos com fluxo</li>
              <li>Localizações estratégicas</li>
              <li>Espaços com potencial de permanência</li>
            </ul>

          </CardContent>
        </Card>

        {/* CARD 2 */}
        <Card className="mb-8 p-6 bg-white/90 border-0 shadow-lg">
          <CardContent className="space-y-4">

            <p className="font-gantari text-lg font-bold text-henzai-blue uppercase">
              E O MOTORISTA ESCOLHE LOCAIS QUE OFEREÇAM:
            </p>

            <ul className="font-gantari text-henzai-blue space-y-2">
              <li>🌿 Conveniência</li>
              <li>🌿 Segurança</li>
              <li>🌿 Tempo útil de permanência</li>
            </ul>

            <p className="font-gantari text-henzai-blue font-medium">
              Se o seu empreendimento não oferece recarga, ele deixa de ser opção.
            </p>

          </CardContent>
        </Card>

        {/* CARD 3 */}
        <Card className="p-6 bg-white/90 border-0 shadow-lg">
          <CardContent className="space-y-4">

            <p className="font-libre-franklin font-bold text-henzai-blue">
              Henzai
            </p>

            <p className="font-gantari text-lg text-henzai-blue">
              EMPREENDIMENTOS com recarga elétrica tornam-se mais atrativos,
              aumentam o tempo médio de permanência, atraem um público de maior poder aquisitivo
              e ainda geram receita direta ou indireta.
            </p>

          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default MobilidadeSection;
