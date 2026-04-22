import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SERVICES } from '../constants/data';

const ServiceItem: React.FC<{ service: typeof SERVICES[0]; index: number }> = ({ service, index }) => {
  const { ref, isInView } = useInView(0.2);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className={`border-b border-charcoal/10 transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-8 md:py-12 flex items-center justify-between group text-left"
        aria-expanded={isExpanded}
        data-cursor-hover
      >
        <div className="flex items-center gap-6 md:gap-12">
          <span className="font-display text-sm text-warm-gray tracking-widest">{service.number}</span>
          <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-charcoal group-hover:text-vermillion transition-colors duration-300">
            {service.title}
          </h3>
        </div>
        <div
          className={`w-12 h-12 border-2 border-charcoal flex items-center justify-center transition-all duration-500 group-hover:bg-vermillion group-hover:border-vermillion ${
            isExpanded ? 'rotate-45 bg-vermillion border-vermillion' : ''
          }`}
        >
          <ArrowUpRight size={20} className={`transition-colors duration-300 ${isExpanded ? 'text-cream' : 'text-charcoal group-hover:text-cream'}`} />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-60 opacity-100 pb-8' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pl-12 md:pl-24 max-w-2xl">
          <p className="font-body text-warm-gray text-lg leading-relaxed mb-4">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="font-display text-xs tracking-[0.2em] uppercase px-4 py-2 border border-charcoal/20 text-charcoal/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();

  return (
    <section id="services" className="relative py-32 md:py-48 px-6 md:px-12 diagonal-line-reverse" aria-label="Services">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-16 md:mb-24 text-right">
          <div className={`transition-all duration-1000 ${headerInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="font-display text-xs tracking-[0.4em] uppercase text-vermillion block mb-4">
              What I Do
            </span>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-charcoal leading-[0.9]">
              <span className="text-stroke">MY</span>
              <br />
              CRAFT
            </h2>
          </div>
        </div>

        {/* Services list */}
        <div className="border-t border-charcoal/10">
          {SERVICES.map((service, index) => (
            <ServiceItem key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
