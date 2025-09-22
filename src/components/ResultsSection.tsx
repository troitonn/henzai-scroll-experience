import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import solarPanelsImage from '@/assets/solar-panels-modern.jpg';
import teamMeetingImage from '@/assets/corporate-meeting.jpg';

const ResultsSection: React.FC = () => {
  const cases = [
    {
      title: "Gráfica em São Paulo",
      result: "40%",
      description: "Redução na conta de energia e aumento de R$ 12 mil/ano na margem"
    },
    {
      title: "Indústria Têxtil",
      result: "100%",
      description: "Sistema híbrido eliminou paradas durante quedas de energia"
    },
    {
      title: "Rede de Supermercados",
      result: "35%",
      description: "Economia média com entrada no Mercado Livre de Energia"
    }
  ];

  const testimonials = [
    {
      quote: "O diferencial foi o atendimento consultivo da Diretora Mariana e sua equipe, foi um dos diferenciais para escolher a Henzai Energia ! Recebi um planejamento financeiro claro, com projeção mensal e anual, e hoje economizo cerca 80% na conta de luz! Ja expandi meu negócio, comprei mais uma Franquia com a previsibilidade financeira anual que a placas solares está me proporcionando ! Melhor escolha! Mais liberdade para meus negócios!",
      author: "Luciana",
      position: "Franqueada OGGI Sorvetes",
      image: solarPanelsImage,
      rating: 5
    },
    {
      quote: "O atendimento foi próximo e transparente. A equipe me mostrou exatamente quanto eu iria economizar e como essa receita voltaria para o posto. Resultado? Economia real todos os meses.",
      author: "Alberto",
      position: "Posto Shell",
      image: teamMeetingImage,
      rating: 5
    },
    {
      quote: "A Mariana acompanhou cada detalhe, do projeto ao pós-venda. Me senti seguro com a consultoria dela em tempo real. Hoje a fábrica economiza e já tenho previsibilidade para os próximos anos.",
      author: "Eraldo",
      position: "Vó Nena, Fábrica de Cocadas",
      image: solarPanelsImage,
      rating: 5
    },
    {
      quote: "Não foi só instalar energia solar, foi ter um plano de retorno financeiro desenhado para o meu negócio. A Henzai Energia trouxe economia, confiança e sustentabilidade para o Studio Bessa.",
      author: "Armado Bessa",
      position: "Studio Bessa",
      image: teamMeetingImage,
      rating: 5
    },
    {
      quote: "O atendimento diferenciado da Mariana e Engenharia fez toda a diferença. Ela cuidou do pós-venda e garantiu que tudo fosse entregue como combinado. Hoje reduzi custos e tenho tranquilidade com a previsibilidade do meu investimento.",
      author: "Flávio",
      position: "Good Chickens Restaurante",
      image: solarPanelsImage,
      rating: 5
    }
  ];

  return (
    <section id="resultados" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6">
            Cases de <span className="text-henzai-terracota">Sucesso</span>
          </h2>
          <p className="font-gantari text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de clientes que transformaram energia em estratégia de crescimento
          </p>
        </div>

        {/* Cases de Sucesso */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <Card key={index} className="text-center border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 transform hover:-translate-y-1 animate-slide-in bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-libre-franklin font-bold text-henzai-terracota mb-4">
                  {caseItem.result}
                </div>
                <h3 className="font-libre-franklin text-lg font-semibold text-henzai-blue mb-3">
                  {caseItem.title}
                </h3>
                <p className="font-gantari text-muted-foreground text-sm leading-relaxed">
                  {caseItem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="text-center mb-12">
          <h3 className="font-libre-franklin text-3xl font-bold text-henzai-blue mb-4">
            Depoimentos & Google Business
          </h3>
          <p className="font-gantari text-lg text-muted-foreground">
            "Avalie a Henzai no Google e conheça histórias reais de economia e crescimento."
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 animate-fade-in bg-gradient-to-br from-white to-henzai-blue/5" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <blockquote className="font-gantari text-base text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div 
                    className="w-12 h-12 bg-cover bg-center rounded-full mr-4"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  ></div>
                  <div>
                    <div className="font-libre-franklin font-semibold text-henzai-blue">
                      {testimonial.author}
                    </div>
                    <div className="font-gantari text-sm text-henzai-terracota">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;