import React from 'react';

interface MarqueeStripProps {
  items: string[];
  reverse?: boolean;
  className?: string;
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({ items, reverse = false, className = '' }) => {
  return (
    <div className={`overflow-hidden py-6 ${className}`} aria-hidden="true">
      <div className={`whitespace-nowrap flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-[80px] md:text-[120px] lg:text-[160px] font-bold tracking-tighter mx-4 md:mx-8 select-none text-charcoal/[0.04]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
