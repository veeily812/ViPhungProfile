import type { PropsWithChildren } from 'react';

interface SectionWrapperProps extends PropsWithChildren {
  id: string;
  title: string;
  className?: string;
  titleClassName?: string;
  subtitle?: string;
}

export function SectionWrapper({ id, title, subtitle, children, className, titleClassName }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className || ''}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-primary ${titleClassName || ''}`}>
            {title}
          </h2>
          {subtitle && <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
