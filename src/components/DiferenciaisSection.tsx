import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Shield, Wrench, TrendingUp } from 'lucide-react';

const DiferenciaisSection: React.FC = () => {
  const diferenciais = [
    {
      icon: <CheckCircle className="w-8 h-8 text-henzai-terracota" />,
      title: "Consultoria personalizada",
      description: "Projeto técnico e financeiro sob medida para cada cliente"
    },
    {
      icon: <Shield className="w-8 h-8 text-henzai-terracota" />,
      title: "Independência técnica",
      description: "Seleção dos melhores integradores, sem conflito de interesse"
    },
    {
      icon: <Users className="w-8 h-8 text-henzai-terracota" />,
      title: "Atendimento pós-venda",
      description: "Acompanhamento contínuo e suporte completo"
    },
    {
      icon: <Wrench className="w-8 h-8 text-henzai-terracota" />,
      title: "Estrutura e equipe própria",
      description: "Execução integral com ART e homologação ágil"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-henzai-terracota" />,
      title: "Planejamento financeiro estratégico",
      description: "Transforma economia em investimento para crescimento sustentável"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-henzai-blue/5 to-henzai-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6">
            Diferenciais de <span className="text-henzai-terracota">Mercado</span>
          </h2>
          <p className="font-gantari text-xl text-muted-foreground max-w-3xl mx-auto">
            O que nos torna únicos na entrega de soluções energéticas estratégicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {diferenciais.map((diferencial, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 transform hover:-translate-y-2 animate-slide-in bg-white/80 backdrop-blur-sm" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-henzai-blue/10 rounded-2xl group-hover:bg-henzai-blue/20 transition-colors duration-300">
                    {diferencial.icon}
                  </div>
                </div>
                <h3 className="font-libre-franklin text-xl font-semibold text-henzai-blue mb-4">
                  {diferencial.title}
                </h3>
                <p className="font-gantari text-muted-foreground leading-relaxed">
                  {diferencial.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;