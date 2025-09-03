import React from 'react';
import { Button } from '@/components/ui/button';
import teamMeetingImage from '@/assets/team-meeting.jpg';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(29, 53, 87, 0.9) 0%, rgba(29, 53, 87, 0.7) 100%), url(${teamMeetingImage})`,
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Grafismos inspirados no símbolo H */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-henzai-terracota">
            <path d="M20 15 Q25 10 35 15 Q40 17 40 25 Q40 35 35 40 Q30 42 25 40 L25 60 Q25 65 30 70 Q35 72 40 70 Q45 68 50 65 L50 85 Q45 90 35 85 Q25 82 20 75 Q15 70 15 60 L15 40 Q15 35 10 30 Q5 28 5 20 Q5 15 10 10 Q15 8 20 15 Z" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-10 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-henzai-terracota">
            <path d="M80 15 Q75 10 65 15 Q60 17 60 25 Q60 35 65 40 Q70 42 75 40 L75 60 Q75 65 70 70 Q65 72 60 70 Q55 68 50 65 L50 85 Q55 90 65 85 Q75 82 80 75 Q85 70 85 60 L85 40 Q85 35 90 30 Q95 28 95 20 Q95 15 90 10 Q85 8 80 15 Z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h2 className="font-libre-franklin text-4xl md:text-5xl font-bold mb-8">
            A ponte entre negócios obstinados 
            e <span className="text-henzai-terracota">crescimento inteligente</span>
          </h2>
          
          <p className="font-gantari text-xl leading-relaxed mb-8 text-henzai-off-white">
            Na Henzai, acreditamos que a inteligência energética é o catalisador do crescimento empresarial. 
            Conectamos eficiência energética com estratégias financeiras para transformar economia em capital, 
            criando um ciclo virtuoso de sustentabilidade e prosperidade.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-libre-franklin font-bold text-henzai-terracota mb-2">15+</div>
              <div className="font-gantari text-sm uppercase tracking-wider">Anos de Experiência</div>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-libre-franklin font-bold text-henzai-terracota mb-2">500+</div>
              <div className="font-gantari text-sm uppercase tracking-wider">Empresas Atendidas</div>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-libre-franklin font-bold text-henzai-terracota mb-2">R$ 100M+</div>
              <div className="font-gantari text-sm uppercase tracking-wider">Capital Liberado</div>
            </div>
          </div>

          <div className="bg-henzai-blue/20 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/10">
            <p className="font-gantari text-lg italic leading-relaxed mb-6">
              "Estamos sempre por perto, garantindo que o sistema funcione, 
              que a economia se confirme e que o cliente se sinta amparado."
            </p>
            <div className="text-sm font-gantari">
              <div className="text-henzai-terracota font-semibold">Consultoria & Representações</div>
              <div className="text-henzai-off-white">em Eficiência Energética</div>
            </div>
          </div>

          <Button 
            variant="secondary"
            size="lg"
            className="font-gantari font-semibold text-lg px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Conheça Nossa História
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;