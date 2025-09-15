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
        className="bg-white rounded-2xl shadow-logistics-card p-6 min-w-[320px] max-w-lg w-full relative animate-fadein border border-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {onClose && (
          <button
            className="absolute top-3 right-3 text-neutral-400 hover:text-primary-500 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-primary-300 rounded-lg p-1 transition-colors"
            onClick={onClose}
            aria-label="Đóng"
            type="button"
          >
            ×
          </button>
        )}
        {title && (
          <h2 className="text-xl font-semibold mb-4 text-primary-600 tracking-tight">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}
