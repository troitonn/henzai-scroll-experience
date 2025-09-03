import React from 'react';
import henzaiLogoLight from '@/assets/henzai-logo-light.png';
import henzaiLogoDark from '@/assets/henzai-logo-dark.png';

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

  const logoSrc = variant === 'white' ? henzaiLogoDark : henzaiLogoLight;

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc}
        alt="Henzai Energia"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};

export default HenzaiLogo;