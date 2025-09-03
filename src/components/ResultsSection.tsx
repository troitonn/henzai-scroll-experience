import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import solarPanelsImage from '@/assets/solar-panels.jpg';
import teamMeetingImage from '@/assets/team-meeting.jpg';

const ResultsSection: React.FC = () => {
  const results = [
    {
      number: "85%",
      label: "Redução Média nos Custos de Energia",
      description: "Empresas parceiras alcançaram uma economia significativa em suas contas de energia elétrica"
    },
    {
      number: "150+",
      label: "Projetos Implementados",
      description: "Soluções energéticas entregues com sucesso em diversos segmentos empresariais"
    },
    {
      number: "R$ 50M+",
      label: "Em Capital Liberado",
      description: "Valor total convertido de economia energética em capital de giro para crescimento"
    },
    {
      number: "98%",
      label: "Satisfação dos Clientes",
      description: "Índice de satisfação baseado em resultados entregues e acompanhamento contínuo"
    }
  ];

  const testimonials = [
    {
      quote: "A Henzai transformou nossa visão sobre eficiência energética. Conseguimos reduzir 70% dos custos e ainda liberar capital para expandir nossa operação.",
      author: "Maria Silva",
      position: "CEO, TechFlow Industries",
      image: teamMeetingImage
    },
    {
      quote: "O que mais impressiona é a abordagem integrada. Não é só sobre energia, mas sobre como isso acelera o crescimento do negócio.",
      author: "João Santos",
      position: "Diretor Financeiro, GreenCorp",
      image: solarPanelsImage
    }
  ];

  return (
    <section id="resultados" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6">
            Resultados que Transformam
          </h2>
          <p className="font-gantari text-xl text-muted-foreground max-w-3xl mx-auto">
            Números que comprovam o impacto da nossa abordagem inteligente em 
            eficiência energética e crescimento empresarial
          </p>
        </div>

        {/* Métricas de Resultado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {results.map((result, index) => (
            <Card key={index} className="text-center border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 transform hover:-translate-y-1 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-libre-franklin font-bold text-henzai-terracota mb-4">
                  {result.number}
                </div>
                <h3 className="font-libre-franklin text-lg font-semibold text-henzai-blue mb-3">
                  {result.label}
                </h3>
                <p className="font-gantari text-muted-foreground text-sm leading-relaxed">
                  {result.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div 
                    className="h-48 md:h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  ></div>
                </div>
                <CardContent className="md:w-2/3 p-8 flex flex-col justify-center">
                  <blockquote className="font-gantari text-lg italic text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-libre-franklin font-semibold text-henzai-blue">
                      {testimonial.author}
                    </div>
                    <div className="font-gantari text-sm text-henzai-terracota">
                      {testimonial.position}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;