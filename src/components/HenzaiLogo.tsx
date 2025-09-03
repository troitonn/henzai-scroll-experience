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
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const fillColor = variant === 'white' ? '#C4704A' : '#C4704A';

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        className={sizeClasses[size]}
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Logo symbol baseado na imagem fornecida */}
        <g fill={fillColor}>
          {/* Forma superior esquerda - retângulo vertical arredondado inclinado */}
          <path d="M8 15 C13 12 20 12 25 15 L32 35 C35 42 32 50 25 50 L15 47 C8 45 5 38 8 32 Z" />
          
          {/* Forma superior direita - paralelogramo largo */}
          <path d="M45 8 L85 15 C90 16 95 20 95 25 C95 30 90 35 85 35 L50 28 C43 26 40 18 45 12 Z" />
          
          {/* Forma inferior esquerda - forma orgânica arredondada */}
          <path d="M5 55 C8 50 15 48 22 52 C35 58 40 68 35 78 C32 85 25 88 18 85 C8 80 2 68 5 58 Z" />
          
          {/* Forma inferior direita - retângulo vertical */}
          <path d="M70 42 C75 40 82 42 85 47 L88 80 C90 87 85 92 78 90 L72 87 C65 84 63 75 65 68 L68 47 C69 42 70 42 70 42 Z" />
        </g>
      </svg>
    </div>
  );
};

export default HenzaiLogo;