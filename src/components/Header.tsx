import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import HenzaiLogo from './HenzaiLogo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-glass border-b border-white/20' 
          : 'bg-white/10 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-16 md:h-16">
              <HenzaiLogo variant="terracota" />
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`relative font-gantari font-medium transition-all duration-300 group ${
                  isScrolled 
                    ? 'text-henzai-blue/90 hover:text-henzai-terracota' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-henzai-terracota transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Botão Desktop */}
          <div className="hidden md:block">
            <Button 
              className={`font-gantari font-medium px-6 py-3 rounded-full transition-all duration-300 glass-button ${
                isScrolled 
                  ? "bg-henzai-terracota/90 text-white hover:bg-henzai-terracota backdrop-blur-md" 
                  : "bg-white/20 text-white border border-white/30 hover:bg-white/30 backdrop-blur-md"
              }`}
            >
              Falar com Especialista
            </Button>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-henzai-blue bg-white/10 hover:bg-white/20' 
                  : 'text-white bg-white/10 hover:bg-white/20'
              } backdrop-blur-md focus:outline-none`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileOpen && (
          <div className="md:hidden mt-4 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`block font-gantari text-lg transition-colors duration-300 ${
                  isScrolled ? 'text-henzai-blue/90 hover:text-henzai-terracota' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}

            <Button 
              className="w-full font-gantari font-medium px-6 py-3 rounded-full transition-all duration-300 bg-henzai-terracota/90 text-white hover:bg-henzai-terracota backdrop-blur-md"
            >
              Falar com Especialista
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
