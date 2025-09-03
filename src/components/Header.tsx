import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import HenzaiLogo from './HenzaiLogo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    'Início',
    'Soluções', 
    'Como Funciona',
    'Resultados',
    'Sobre',
    'Contato'
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-henzai-blue/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Ajuste da logo */}
          <div className="flex items-center space-x-3">
            <HenzaiLogo variant="white" size="md" />
            {/* Se quiser nome junto, descomente ↓ */}
            {/* <span className="text-white font-bold text-lg">Henzai</span> */}
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="relative text-white font-gantari hover:text-henzai-terracota transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-henzai-terracota transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Botão */}
          <Button 
            variant="secondary"
            className="font-gantari font-semibold px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 bg-white text-henzai-blue hover:bg-henzai-off-white"
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
