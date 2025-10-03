import React from 'react';
import oggiLogo from '@/assets/clients/oggi.png';
import academiaLogo from '@/assets/clients/academia-gavioes.webp';
import petrobrasLogo from '@/assets/clients/petrobras.png';
import bessaLogo from '@/assets/clients/armando-bessa.png';
import ipirangaLogo from '@/assets/clients/ipiranga.png';
import voNenaLogo from '@/assets/clients/vo-nena.png';
import shellLogo from '@/assets/clients/shell.png';

const ClientsSection: React.FC = () => {
  const clients = [
    { name: 'Oggi Sorvetes', logo: oggiLogo },
    { name: 'Academia Gaviões', logo: academiaLogo },
    { name: 'Petrobras', logo: petrobrasLogo },
    { name: 'Armando Bessa', logo: bessaLogo },
    { name: 'Ipiranga', logo: ipirangaLogo },
    { name: 'Vó Nena', logo: voNenaLogo },
    { name: 'Shell', logo: shellLogo },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-henzai-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-libre-franklin text-3xl md:text-4xl font-bold text-henzai-blue mb-4">
            Conheça algumas das empresas que alavancaram
            <br />
            <span className="text-henzai-terracota">resultados conosco</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={client.logo}
                alt={`Logo ${client.name}`}
                className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
