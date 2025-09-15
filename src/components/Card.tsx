import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ children, className = '', hover = true, padding = 'md' }: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`
      bg-white rounded-2xl shadow-logistics border border-logistics-border
      ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''}
      ${paddingClasses[padding]}
      ${className}
    `}
    >
      {children}
    </div>
  );
}

interface IconCardProps extends CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function IconCard({
  icon,
  title,
  description,
  action,
  className = '',
  ...props
}: IconCardProps) {
  return (
    <Card className={`text-center ${className}`} {...props}>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary text-2xl">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-neutral">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        {action && <div className="mt-4">{action}</div>}
      </div>
    </Card>
  );
}
