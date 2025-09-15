import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: 'primary' | 'accent' | 'outline' | 'danger';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'md' | 'lg';
};

export function Button({
  children,
  className = '',
  loading = false,
  disabled,
  variant = 'primary',
  leftIcon,
  rightIcon,
  size = 'md',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-xl font-semibold shadow-logistics transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary hover:scale-105 active:scale-95';
  const sizeClass = size === 'lg' ? 'px-8 py-3 text-lg' : 'px-4 py-2 text-base';
  const variants: Record<string, string> = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    accent: 'bg-accent text-white hover:bg-accent-light',
    outline: 'bg-white border border-primary text-primary hover:bg-primary-light hover:text-white',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };
  return (
    <button
      className={`${base} ${sizeClass} ${variants[variant]} ${loading ? 'opacity-60 cursor-wait' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      {loading ? <span className="animate-spin mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span> : null}
      {children}
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
    </button>
  );
}

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  shadow?: boolean;
  border?: boolean;
  animate?: boolean;
};

export function Card({ children, className = '', shadow = true, border = false, animate = true, ...props }: CardProps) {
  return (
    <div
  className={`bg-background rounded-2xl p-6 ${shadow ? 'shadow-logistics' : ''} ${border ? 'border border-logistics-border' : ''} ${animate ? 'animate-fadein' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
