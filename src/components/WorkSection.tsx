import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { PROJECTS } from '../constants/data';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0]; index: number }> = ({ project, index }) => {
  const { ref, isInView } = useInView(0.15);
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`group relative ${isEven ? 'lg:pr-24' : 'lg:pl-24 lg:ml-auto'} ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      } transition-all duration-1000`}
      style={{ maxWidth: '720px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project number */}
      <span
        className={`absolute ${isEven ? '-left-4 md:-left-8' : '-right-4 md:-right-8'} -top-8 font-display text-[120px] md:text-[180px] font-bold leading-none text-charcoal/[0.06] select-none pointer-events-none`}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Image container */}
      <div className="relative overflow-hidden cursor-pointer" data-cursor-hover>
        <div
          className="aspect-[4/3] overflow-hidden"
          style={{
            clipPath: isHovered
              ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
              : 'polygon(2% 3%, 98% 0%, 100% 97%, 0% 100%)',
            transition: 'clip-path 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500" />
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-20 h-20 bg-vermillion rounded-full flex items-center justify-center">
            <ArrowUpRight size={28} className="text-cream" />
          </div>
        </div>
      </div>

      {/* Project info */}
      <div className={`mt-6 flex items-start justify-between ${isEven ? '' : 'flex-row-reverse text-right'}`}>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-display text-xs tracking-[0.3em] uppercase text-warm-gray">{project.category}</span>
            <span className="w-8 h-[1px] bg-warm-gray" aria-hidden="true" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-warm-gray">{project.year}</span>
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
            {project.title}
          </h3>
          <p className="font-body text-warm-gray text-lg mt-2 max-w-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const WorkSection: React.FC = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();

  return (
    <section id="work" className="relative py-32 md:py-48 px-6 md:px-12" aria-label="Selected Work">
      {/* Section header */}
      <div ref={headerRef} className="mb-24 md:mb-32">
        <div className={`transition-all duration-1000 ${headerInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <span className="font-display text-xs tracking-[0.4em] uppercase text-vermillion block mb-4">
            Selected Work
          </span>
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-charcoal leading-[0.9]">
            CREATING
            <br />
            <span className="text-stroke">WORLDS</span>
          </h2>
        </div>
      </div>

      {/* Projects grid */}
      <div className="space-y-24 md:space-y-40 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
