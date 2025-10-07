import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PartnershipSection: React.FC = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-henzai-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/hero-energy-bg.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div ref={leftRef} className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="font-libre-franklin text-3xl md:text-4xl font-bold mb-6">
                Na Henzai, cada projeto é conduzido com
                <span className="text-henzai-terracota"> visão de negócio, clareza e compromisso.</span>
              </h2>
              <p className="font-gantari text-lg mb-8 text-white/90">
                Atuamos como parceiros estratégicos para gerar impacto real em cada decisão.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="font-libre-franklin text-2xl font-bold mb-4">
                  Fale com a Henzai e descubra como transformar energia em
                  <span className="text-henzai-terracota"> vantagem competitiva</span>
                </h3>
                <p className="font-gantari text-xl font-semibold text-henzai-terracota mb-6">
                  Compromisso em acelerar negócios
                </p>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div ref={rightRef} className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-all duration-700 delay-200 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h3 className="font-libre-franklin text-2xl font-bold mb-8 text-center">
                Entre em contato e saiba mais
              </h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:henzaienergia@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="bg-henzai-terracota p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-gantari text-sm text-white/70">Email</p>
                    <p className="font-gantari font-semibold">henzaienergia@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+5511981666019"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="bg-henzai-terracota p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-gantari text-sm text-white/70">Telefone</p>
                    <p className="font-gantari font-semibold">(11) 98166-6019</p>
                  </div>
                </a>

                <a
                  href="https://henzaienergia.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="bg-henzai-terracota p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-gantari text-sm text-white/70">Website</p>
                    <p className="font-gantari font-semibold">henzaienergia.com.br</p>
                  </div>
                </a>
              </div>
                <Button
                  size="lg"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full mt-8 bg-henzai-terracota hover:bg-henzai-terracota/90 
                             text-white font-gantari font-semibold 
                             py-5 px-6 rounded-full 
                             text-lg md:text-xl 
                             transition-all duration-300 hover:scale-105 
                             whitespace-normal leading-snug text-center 
                             tracking-wide shadow-lg"
                >
                  Reduza custos e ganhe margem!
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
