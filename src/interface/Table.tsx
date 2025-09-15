import React from 'react';

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  className?: string;
}

export function Table({ children, className = '', ...props }: TableProps) {
  return (
    <div className="overflow-x-auto w-full">
      <table
        className={`min-w-full bg-white rounded-xl shadow-logistics-card border border-neutral-200 text-sm ${className}`}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

export function TableHead({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={`bg-primary-500 text-white font-semibold ${className}`} {...props}>
      {children}
    </thead>
  );
}

export function TableRow({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className={`border-b border-neutral-200 hover:bg-accent-50 transition-colors ${className}`} {...props}>
      {children}
    </tr>
  );
}

export function TableCell({
  children,
  className = '',
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={`p-3 text-neutral-700 ${className}`} {...props}>
      {children}
    </td>
  );
}
