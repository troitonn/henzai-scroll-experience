import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Leaf, BarChart } from 'lucide-react';

const CTAFinalSection: React.FC = () => {
  const benefits = [
    { icon: <DollarSign className="w-6 h-6" />, text: "Economia" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "+ Crescimento" },
    { icon: <BarChart className="w-6 h-6" />, text: "+ Margem" },
    { icon: <Leaf className="w-6 h-6" />, text: "+ Sustentabilidade" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-henzai-blue to-henzai-blue/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/hero-energy-bg.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-libre-franklin text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            Facilitamos o crescimento do seu negócio<br />
            através da <span className="text-henzai-terracota">economia de energia!</span>
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="text-henzai-terracota">
                  {benefit.icon}
                </div>
                <span className="font-gantari text-lg font-medium">
                  {benefit.text}
                </span>
                {index < benefits.length - 1 && (
                  <div className="hidden sm:block w-px h-8 bg-white/30 ml-8"></div>
                )}
              </div>
            ))}
          </div>

          <Button 
            size="lg"
            className="bg-henzai-terracota hover:bg-henzai-terracota/90 text-white font-gantari font-semibold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 glass-button backdrop-blur-md animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Solicitar proposta personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAFinalSection;