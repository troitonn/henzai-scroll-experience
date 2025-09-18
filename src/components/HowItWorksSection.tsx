import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Calculator, Rocket, CheckCircle } from 'lucide-react';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description, isLast }) => (
  <div className="relative flex flex-col items-center text-center group">
    {/* Linha conectora */}
    {!isLast && (
      <div className="hidden lg:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-henzai-terracota to-henzai-blue transform translate-x-1/2 z-0"></div>
    )}
    
    <Card className="relative z-10 w-full max-w-sm hover:shadow-[var(--shadow-hover)] transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-[var(--shadow-card)]">
      <CardContent className="p-8">
        {/* Número do passo */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-henzai-terracota to-henzai-terracota/80 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {number}
        </div>
        
        {/* Ícone */}
        <div className="w-16 h-16 mx-auto mb-6 mt-4 rounded-full bg-gradient-to-br from-henzai-blue to-henzai-blue/80 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="font-libre-franklin text-xl font-bold text-henzai-blue mb-4">
          {title}
        </h3>
        
        <p className="font-gantari text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  </div>
);

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Auditoria Energética",
      description: "Diagnóstico técnico completo das suas instalações elétricas, perfil de carga e contratos de energia, identificando potencial de redução de custos."
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Modelagem Financeira",
      description: "Desenvolvimento de estratégias de migração para o mercado livre, negociação de contratos e estruturação de investimentos em eficiência."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Execução Técnica",
      description: "Implementação de projetos de eficiência energética, representações junto aos órgãos reguladores e gestão de ativos energéticos."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Performance Energética",
      description: "Monitoramento contínuo dos indicadores de consumo, medição e verificação dos resultados com relatórios de desempenho energético."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-henzai-off-white to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6">
            Nossa Metodologia Energética
          </h2>
          <p className="font-gantari text-xl text-muted-foreground max-w-3xl mx-auto">
            Processo estruturado que combina expertise técnica, conhecimento regulatório 
            e inovação digital para maximizar a eficiência energética dos seus ativos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {steps.map((step, index) => (
            <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <Step 
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;