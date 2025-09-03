import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, TrendingUp, Shield, Lightbulb } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description }) => (
  <Card className="h-full group hover:shadow-[var(--shadow-hover)] transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-[var(--shadow-card)]">
    <CardContent className="p-6 text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-henzai-terracota to-henzai-terracota/80 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-libre-franklin text-xl font-bold text-henzai-blue mb-3">
        {title}
      </h3>
      <p className="font-gantari text-muted-foreground leading-relaxed">
        {description}
      </p>
    </CardContent>
  </Card>
);

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Eficiência Energética",
      description: "Análise completa do consumo energético e implementação de soluções para redução de custos e aumento da eficiência operacional."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Consultoria Financeira",
      description: "Transformamos economia de energia em capital de giro, oferecendo estratégias financeiras para acelerar o crescimento do seu negócio."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Representações",
      description: "Representação técnica especializada em energia, garantindo compliance e otimização de processos regulatórios e técnicos."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação Sustentável",
      description: "Soluções inovadoras em energia renovável e sustentabilidade para empresas que buscam impacto positivo e crescimento inteligente."
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6">
            Nossas Soluções
          </h2>
          <p className="font-gantari text-xl text-muted-foreground max-w-3xl mx-auto">
            Conectamos inteligência energética com estratégias financeiras para transformar 
            sua empresa em um negócio mais eficiente e sustentável
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <SolutionCard {...solution} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;