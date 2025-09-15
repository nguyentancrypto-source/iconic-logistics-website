import React from 'react';

export function Spinner({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <span
      className={`inline-block animate-spin rounded-full border-4 border-primary border-t-transparent ${className}`}
      style={{ width: size, height: size }}
      aria-label="Đang tải..."
    />
  );
}

export function Skeleton({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`bg-neutral-200 rounded animate-pulse ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}
