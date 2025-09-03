import React from 'react';

interface HenzaiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white' | 'terracota';
}

const HenzaiLogo: React.FC<HenzaiLogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  const symbolColors = {
    default: 'fill-henzai-terracota',
    white: 'fill-white',
    terracota: 'fill-henzai-terracota'
  };

  const textColors = {
    default: 'fill-henzai-blue',
    white: 'fill-white',
    terracota: 'fill-henzai-blue'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        className={`${sizeClasses[size]} mr-3`} 
        viewBox="0 0 80 80" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Logo Henzai oficial baseado nas imagens fornecidas */}
        <g className={symbolColors[variant]}>
          {/* Forma 1: Retângulo vertical superior esquerdo */}
          <rect x="8" y="8" width="16" height="30" rx="6" />
          
          {/* Forma 2: Paralelogramo superior direito */}
          <path d="M35 5 L65 5 Q70 5 72 8 L70 25 Q68 30 63 30 L33 30 Q28 30 30 25 L32 8 Q34 5 35 5 Z" />
          
          {/* Forma 3: Forma orgânica curva inferior esquerda */}
          <path d="M5 42 Q8 38 18 42 Q28 44 32 50 Q34 56 30 62 Q26 68 18 70 Q10 72 6 68 Q2 64 3 58 Q4 52 5 46 Q6 42 5 42 Z" />
          
          {/* Forma 4: Retângulo vertical inferior direita */}
          <rect x="58" y="35" width="16" height="38" rx="6" />
        </g>
      </svg>
      <div className="flex flex-col">
        <span 
          className={`font-libre-franklin font-bold tracking-tight leading-none ${textColors[variant]}`}
          style={{ fontSize: size === 'sm' ? '1.25rem' : size === 'md' ? '1.75rem' : '2.25rem' }}
        >
          Henzai
        </span>
        <span 
          className={`font-gantari text-xs tracking-widest uppercase ${textColors[variant]} opacity-70 -mt-1`}
        >
          ENERGIA
        </span>
      </div>
    </div>
  );
};

export default HenzaiLogo;