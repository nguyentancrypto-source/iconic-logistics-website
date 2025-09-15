import React from 'react';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({ open, onClose, title, children, className = '', ...props }: ModalProps) {
  if (!open) return null;
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fadein ${className}`}
      {...props}
      onClick={onClose}
    >
      <div
  className="bg-background rounded-2xl shadow-logistics p-6 min-w-[320px] max-w-lg w-full relative animate-fadein"
        onClick={e => e.stopPropagation()}
      >
        {onClose && (
          <button
            className="absolute top-3 right-3 text-neutral-400 hover:text-accent text-xl font-bold focus:outline-none transition-colors"
            onClick={onClose}
            aria-label="Đóng"
            type="button"
          >
            ×
          </button>
        )}
  {title && <h2 className="text-lg font-heading font-bold mb-4 text-primary tracking-tight">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
