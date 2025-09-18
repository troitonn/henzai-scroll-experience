import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Leaf, TrendingUp, Users, ArrowRight } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: 'Consultoria em Eficiência Energética',
      description: 'Auditoria energética completa e implementação de soluções que reduzem até 40% dos custos operacionais com energia elétrica',
      benefits: ['Análise técnica especializada', 'Economia comprovada em 90 dias', 'ROI superior a 300%'],
      image: '/lovable-uploads/energy-consulting.png',
      icon: Zap
    },
    {
      title: 'Representações Regulatórias',
      description: 'Representação técnica junto à ANEEL, ONS e demais órgãos do setor elétrico para aprovação de projetos energéticos',
      benefits: ['Compliance 100% garantido', 'Aprovações em tempo recorde', 'Expertise regulatória'],
      image: '/lovable-uploads/solar-park-regulatory.png',
      icon: Users
    },
    {
      title: 'Soluções Digitais para Energia',
      description: 'Plataformas inteligentes de monitoramento e gestão energética que maximizam a performance dos seus ativos',
      benefits: ['Monitoramento 24/7', 'IA aplicada à energia', 'Redução de 35% no consumo'],
      image: '/lovable-uploads/digital-energy-solution.png',
      icon: TrendingUp
    },
    {
      title: 'Transição Energética Sustentável',
      description: 'Estratégias completas de descarbonização e migração para fontes renováveis alinhadas aos ESG corporativos',
      benefits: ['Certificação ESG', 'Fontes 100% renováveis', 'Créditos de carbono'],
      image: '/lovable-uploads/5f2618e2-094e-4644-a524-958b491698d3.png',
      icon: Leaf
    }
  ];

  return (
    <section id="soluções" className="py-20 bg-gradient-to-b from-henzai-off-white to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-libre-franklin font-bold text-henzai-blue mb-6">
            Soluções completas em<br />
            <span className="text-henzai-terracota">energia e sustentabilidade.</span>
          </h2>
          <p className="text-lg font-gantari text-henzai-black max-w-3xl mx-auto">
            Portfólio integrado de serviços energéticos que conecta eficiência operacional, 
            compliance regulatório e transição sustentável para empresas que lideram o futuro.
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