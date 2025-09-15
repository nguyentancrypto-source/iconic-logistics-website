import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export function Container({ children, size = 'lg', className = '' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };
  
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'accent';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Section({ children, className = '', background = 'white', padding = 'lg' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-white',
    accent: 'bg-accent'
  };
  
  const paddings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };
  
  return (
    <section className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}