import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-12 md:py-16 border-b border-slate-200 last:border-0 ${className}`}>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="md:w-1/4 shrink-0">
          <h2 className="text-2xl font-bold text-slate-800 sticky top-8 tracking-tight uppercase text-sm md:text-base md:normal-case">
            <span className="hidden md:inline">{title}</span>
            <span className="md:hidden text-blue-700">{title}</span>
          </h2>
        </div>
        <div className="md:w-3/4 grow">
          {children}
        </div>
      </div>
    </section>
  );
};