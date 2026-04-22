import React from 'react';
import { useInView } from '../hooks/useInView';
import { STATS } from '../constants/data';

export const AboutSection: React.FC = () => {
  const { ref: imgRef, isInView: imgInView } = useInView();
  const { ref: textRef, isInView: textInView } = useInView();
  const { ref: statsRef, isInView: statsInView } = useInView();

  return (
    <section id="about" className="relative" aria-label="About">
      {/* Diagonal divider */}
      <div className="diagonal-line bg-charcoal py-32 md:py-48 px-6 md:px-12 pb-48 md:pb-64">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Image column */}
            <div
              ref={imgRef}
              className={`lg:col-span-5 relative transition-all duration-1000 ${
                imgInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="relative">
                <div className="torn-edge overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Elara Voss in her studio"
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Floating accent */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-vermillion flex items-center justify-center">
                  <span className="font-display text-cream text-xs tracking-[0.3em] uppercase text-center leading-relaxed">
                    Based in<br />New York
                  </span>
                </div>
              </div>
            </div>

            {/* Text column */}
            <div
              ref={textRef}
              className={`lg:col-span-7 lg:pl-12 transition-all duration-1000 delay-200 ${
                textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <span className="font-display text-xs tracking-[0.4em] uppercase text-vermillion block mb-6">
                The Artist
              </span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-cream leading-[0.9] mb-8">
                ART IS NOT
                <br />
                <span className="text-stroke-cream">DECORATION</span>
              </h2>
              <div className="space-y-6 max-w-xl">
                <p className="font-body text-cream/70 text-xl leading-relaxed">
                  I'm Elara Voss — a visual artist and creative director who believes art should make you feel something uncomfortable, something true. For over a decade, I've been dismantling the boundary between fine art and commercial work.
                </p>
                <p className="font-body text-cream/70 text-xl leading-relaxed">
                  My practice spans mixed media, large-scale installations, digital experiences, and art direction for brands brave enough to be different. Every project begins with a question I can't answer and ends somewhere I didn't expect.
                </p>
                <p className="font-body text-cream/50 text-lg italic leading-relaxed">
                  "I don't make pretty things. I make things that won't leave you alone."
                </p>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-cream/10 transition-all duration-1000 ${
              statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`transition-all duration-700`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <span className="font-display text-5xl md:text-6xl font-bold text-vermillion block">
                  {stat.value}
                </span>
                <span className="font-display text-xs tracking-[0.3em] uppercase text-cream/50 mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
