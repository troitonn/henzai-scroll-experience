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
        viewBox="0 0 64 64" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Símbolo H estilizado baseado nas imagens da Henzai */}
        <g className={symbolColors[variant]}>
          {/* Parte superior esquerda */}
          <path d="M10 8 Q14 4 22 8 Q26 10 26 16 Q26 22 22 26 Q18 28 14 26 Q10 24 10 20 Q10 16 14 12 Q18 10 22 12 Q26 14 26 18 Q26 22 22 24 Q18 22 14 20 Q10 18 10 14 Z" />
          {/* Parte superior direita */}
          <path d="M38 4 Q42 0 50 4 Q54 6 54 12 Q54 18 50 22 Q46 24 42 22 Q38 20 38 16 Q38 12 42 8 Q46 6 50 8 Q54 10 54 14 Q54 18 50 20 Q46 18 42 16 Q38 14 38 10 Z" />
          {/* Parte inferior esquerda */}
          <path d="M6 36 Q10 32 18 36 Q22 38 22 44 Q22 50 18 54 Q14 56 10 54 Q6 52 6 48 Q6 44 10 40 Q14 38 18 40 Q22 42 22 46 Q22 50 18 52 Q14 50 10 48 Q6 46 6 42 Z" />
          {/* Parte inferior direita */}
          <path d="M42 32 Q46 28 54 32 Q58 34 58 40 Q58 46 54 50 Q50 52 46 50 Q42 48 42 44 Q42 40 46 36 Q50 34 54 36 Q58 38 58 42 Q58 46 54 48 Q50 46 46 44 Q42 42 42 38 Z" />
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