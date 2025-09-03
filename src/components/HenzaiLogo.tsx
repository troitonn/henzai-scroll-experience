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
          {/* Forma superior esquerda - retângulo vertical arredondado */}
          <path d="M15 10 C20 10 25 15 25 20 L25 45 C25 50 20 55 15 55 L10 55 C5 55 0 50 0 45 L0 20 C0 15 5 10 10 10 Z" />
          
          {/* Forma superior direita - paralelogramo arredondado */}
          <path d="M40 5 L80 5 C85 5 90 10 90 15 C90 20 85 25 80 25 L50 35 C45 37 40 32 40 27 L40 15 C40 10 40 5 40 5 Z" />
          
          {/* Forma inferior esquerda - forma orgânica */}
          <path d="M5 50 C10 45 20 48 30 55 C35 60 38 70 30 80 C25 85 15 88 8 82 C0 75 0 65 5 55 C5 52 5 50 5 50 Z" />
          
          {/* Forma inferior direita - retângulo vertical */}
          <path d="M75 35 C80 35 85 40 85 45 L85 85 C85 90 80 95 75 95 L70 95 C65 95 60 90 60 85 L60 45 C60 40 65 35 70 35 Z" />
        </g>
      </svg>
    </div>
  );
};

export default HenzaiLogo;