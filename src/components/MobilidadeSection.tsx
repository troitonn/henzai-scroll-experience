import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Wallet, CheckCircle2, MapPin, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// Importe as imagens conforme seu setup original
import evChargerCondo from "@/assets/ev-charger-condo.jpg";
import evChargerGas from "@/assets/ev-charger-gasstation.jpg";
import evMarketTrend from "@/assets/ev-market-trend.jpg"; // Sugestão de imagem para o 3º card

const MobilidadeSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05);

  const opportunities = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Oportunidade de Mercado",
      description: "O Brasil caminha para 600 mil veículos elétricos. O eletroposto não é mais tendência, é filtro de escolha.",
      image: evMarketTrend,
      benefits: [
        "Geração de receita direta na atualização do padrão",
        "Investidores buscam pontos com alto fluxo",
        "Valorização imediata do ativo imobiliário",
        "Sua localização como ponto estratégico",
        "Saia na frente da concorrência local"
      ]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Perfil do Consumidor",
      description: "Motoristas de EVs escolhem onde podem carregar. Se o seu espaço não oferece recarga, ele deixa de ser opção.",
      image: evChargerGas,
      benefits: [
        "Atração de público de alto poder aquisitivo",
        "Aumento do tempo médio de permanência",
        "Fidelização por conveniência e segurança",
        "Transformação do local em um hub de serviço",
        "Ambiente preparado para o 'tempo útil' do cliente"
      ]
    },
    {
      icon: <Wallet className="w-10 h-10" />,
      title: "Rentabilidade Henzai",
      description: "Empreendimentos com recarga tornam-se mais atrativos e geram receita direta ou indireta.",
      image: evChargerCondo,
      benefits: [
        "Consultoria para retorno do investimento (ROI)",
        "Projetos de infraestrutura inteligente",
        "Instalação profissional e suporte técnico",
        "Gestão e monitoramento remoto de recarga",
        "Payback acelerado com modelos de negócio"
      ]
    }
  ];

  return (
    <section id="mobilidade" className="py-20 bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <div ref={titleRef} className="text-center mb-16">
          <span className={`inline-block font-gantari text-sm font-semibold tracking-widest uppercase text-henzai-terracota mb-4 transition-all duration-600 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Mobilidade Elétrica
          </span>
          <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Seu espaço vai participar deste <span className="text-henzai-terracota">crescimento?</span>
          </h2>
          <p className={`font-gantari text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Não assista ao fluxo ir para o concorrente. Transforme seu empreendimento no novo padrão do mercado.
          </p>
        </div>

        {/* Grid de Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {opportunities.map((item, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-henzai-blue/80 to-transparent" />
                <div className="absolute bottom-4 left-4 p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white">
                  {item.icon}
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="font-libre-franklin text-2xl text-henzai-blue">
                  {item.title}
                </CardTitle>
                <CardDescription className="font-gantari text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="font-gantari text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-henzai-terracota mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full font-gantari font-bold border-henzai-terracota text-henzai-terracota hover:bg-henzai-terracota hover:text-white transition-all duration-300"
                >
                  Capturar Oportunidade
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobilidadeSection;
