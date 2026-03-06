import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Target, Cog, BarChart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description, isLast }) => (
  <div className="relative flex flex-col items-center text-center group">
    {!isLast && (
      <div className="hidden lg:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-henzai-terracota to-henzai-blue transform translate-x-1/2 z-0"></div>
    )}
    
    <Card className="relative z-10 w-full max-w-sm hover:shadow-[var(--shadow-hover)] transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-[var(--shadow-card)]">
      <CardContent className="p-8">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-henzai-terracota to-henzai-terracota/80 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {number}
        </div>
        
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
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();

  const steps = [
    {
      number: 1,
      title: "Levantamento de consumo",
      description: "Analisamos suas faturas dos últimos 12 meses, perfil de demanda e enquadramento tarifário para identificar onde está o desperdício.",
      icon: <Search className="w-8 h-8" />
    },
    {
      number: 2,
      title: "Projeto técnico e financeiro",
      description: "Entregamos uma proposta com payback estimado, projeção de economia mês a mês e cronograma de implementação — tudo antes de você assinar.",
      icon: <Target className="w-8 h-8" />
    },
    {
      number: 3,
      title: "Execução Turn Key",
      description: "Cuidamos de licenças, obra civil, instalação e homologação. Você acompanha o progresso sem precisar gerenciar fornecedores.",
      icon: <Cog className="w-8 h-8" />
    },
    {
      number: 4,
      title: "Monitoramento contínuo",
      description: "Após a entrega, acompanhamos a performance em tempo real e fazemos manutenção preventiva para garantir o retorno projetado.",
      icon: <BarChart className="w-8 h-8" />
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-henzai-off-white to-background">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className={`font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Do diagnóstico ao <span className="text-henzai-terracota">retorno financeiro</span>
          </h2>
          <p className={`font-gantari text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Um processo claro, sem surpresas — para que você saiba exatamente o que esperar em cada etapa.
          </p>
        </div>

        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Step 
                number={step.number}
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
