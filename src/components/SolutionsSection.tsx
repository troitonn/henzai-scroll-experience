import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Leaf, TrendingUp, Users, ArrowRight } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: 'Consultoria Especializada',
      description: 'Análise completa do seu consumo energético e implementação de soluções personalizadas para máxima eficiência',
      benefits: ['Auditoria energética completa', 'ROI transparente', 'Acompanhamento técnico'],
      image: '/lovable-uploads/cb09bdbe-0580-4286-8074-013d36f8af7e.png',
      icon: Zap
    },
    {
      title: 'Representações Técnicas',
      description: 'Representação especializada junto aos órgãos reguladores e implementação de projetos de eficiência energética',
      benefits: ['Compliance garantido', 'Processo simplificado', 'Suporte regulatório'],
      image: '/lovable-uploads/86908086-9650-4d9e-b562-0a8c81473c92.png',
      icon: Users
    },
    {
      title: 'Transformação Digital',
      description: 'Soluções tecnológicas avançadas que conectam economia de energia com crescimento empresarial inteligente',
      benefits: ['Monitoramento em tempo real', 'Relatórios inteligentes', 'Otimização automática'],
      image: '/lovable-uploads/99a39079-4e60-4c8f-b8bc-6829d65c162d.png',
      icon: TrendingUp
    },
    {
      title: 'Sustentabilidade Corporativa',
      description: 'Estratégias sustentáveis que posicionam sua empresa como referência em responsabilidade ambiental',
      benefits: ['Certificações ambientais', 'Redução da pegada de carbono', 'Imagem corporativa'],
      image: '/lovable-uploads/5f2618e2-094e-4644-a524-958b491698d3.png',
      icon: Leaf
    }
  ];

  return (
    <section id="soluções" className="py-20 bg-gradient-to-b from-henzai-off-white to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-libre-franklin font-bold text-henzai-blue mb-6">
            Mais do que economia.<br />
            <span className="text-henzai-terracota">Uma estratégia de crescimento.</span>
          </h2>
          <p className="text-lg font-gantari text-henzai-black max-w-3xl mx-auto">
            Atuamos como consultoria, analisando, comparando e recomendando a solução certa para cada negócio
          </p>
        </div>
        
        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-3xl overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div 
                    className="h-80 lg:h-96 bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${solution.image}')` }}
                  >
                    <div className="absolute inset-0 bg-henzai-blue/20"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="w-16 h-16 bg-henzai-terracota rounded-full flex items-center justify-center">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-libre-franklin font-bold text-henzai-blue mb-4">
                      {solution.title}
                    </h3>
                    
                    <p className="text-henzai-black font-gantari mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-henzai-black font-gantari">
                          <ArrowRight className="w-5 h-5 text-henzai-terracota mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="bg-henzai-terracota hover:bg-[#A34F2E] text-henzai-off-white font-gantari font-semibold px-6 py-3 rounded-3xl self-start transition-all duration-300"
                    >
                      Saber Mais
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-henzai-blue hover:bg-henzai-blue/90 text-henzai-off-white font-gantari font-semibold px-8 py-4 rounded-3xl text-lg transition-all duration-300 hover:scale-105"
          >
            Ver Todas as Soluções
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;