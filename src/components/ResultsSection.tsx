import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import solarPanelsImage from '@/assets/solar-panels-modern.jpg';
import teamMeetingImage from '@/assets/corporate-meeting.jpg';

const ResultsSection: React.FC = () => {
  const results = [
    {
      number: "40%",
      label: "Redução Média de Custos com Energia",
      description: "Economia comprovada através de migração para o mercado livre de energia e projetos de eficiência energética"
    },
    {
      number: "500+",
      label: "MW de Energia Gerenciados",
      description: "Portfolio de contratos de energia no mercado livre representando grandes consumidores industriais"
    },
    {
      number: "R$ 120M+",
      label: "Em Economia Energética Gerada",
      description: "Valor total economizado pelos clientes através de nossas soluções integradas de energia"
    },
    {
      number: "15+",
      label: "Anos de Experiência no Setor",
      description: "Expertise consolidada em regulação energética, ANEEL, ONS e transformações do mercado brasileiro"
    }
  ];

  const testimonials = [
    {
      quote: "A migração para o mercado livre com a Henzai resultou em 35% de economia na nossa conta de energia. O suporte técnico e regulatório foi fundamental para o sucesso.",
      author: "Carlos Mendes",
      position: "Diretor de Operações, Metalúrgica Brasil",
      image: teamMeetingImage
    },
    {
      quote: "Além da economia imediata, as soluções de eficiência energética implementadas pela Henzai nos permitiram reinvestir em modernização da nossa planta industrial.",
      author: "Ana Paula Costa",
      position: "Gerente de Sustentabilidade, QuímicaCorp",
      image: solarPanelsImage
    }
  ];

  return (
    <section id="resultados" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6">
            Performance Comprovada no Mercado
          </h2>
          <p className="font-gantari text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados concretos que demonstram nossa capacidade de gerar valor 
            através de soluções inteligentes no setor energético brasileiro
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