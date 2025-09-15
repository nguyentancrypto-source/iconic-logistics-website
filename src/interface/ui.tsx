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
    'inline-flex items-center gap-2 rounded-xl font-semibold shadow-logistics transition-all duration-200 focus:outline-none focus:ring-2 hover:scale-105 active:scale-95';
  const sizeClass = size === 'lg' ? 'px-8 py-3 text-lg' : 'px-4 py-2 text-base';
  const variants: Record<string, string> = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-300',
    accent: 'bg-accent-500 text-neutral-900 hover:bg-accent-400 focus:ring-accent-300',
    outline: 'bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white focus:ring-primary-300',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300',
  };
  return (
    <button
      className={`${base} ${sizeClass} ${variants[variant]} ${loading ? 'opacity-60 cursor-wait' : ''} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      {loading ? (
        <span
          aria-label="loading"
          className="animate-spin mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full"
        ></span>
      ) : null}
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

export function Card({
  children,
  className = '',
  shadow = true,
  border = false,
  animate = true,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 ${shadow ? 'shadow-logistics-card' : ''} ${border ? 'border border-neutral-200' : ''} ${animate ? 'hover:shadow-logistics-card-hover transition-shadow duration-300' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
