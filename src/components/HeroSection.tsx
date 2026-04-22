import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { MARQUEE_ITEMS } from '../constants/data';

export const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden" aria-label="Hero">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 halftone-pattern opacity-[0.03]" />
      </div>

      {/* Diagonal red accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-vermillion origin-top-right hidden lg:block"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 30% 100%, 100% 0)' }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 px-6 md:px-12 pb-12 md:pb-20">
        {/* Oversized headline */}
        <div className="mb-8">
          <h1 className="font-display font-bold leading-[0.85] tracking-tighter">
            <span
              className={`block text-cream text-[15vw] md:text-[12vw] lg:text-[10vw] transition-all duration-1000 ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              ELARA
            </span>
            <span
              className={`block text-stroke-cream text-[15vw] md:text-[12vw] lg:text-[10vw] transition-all duration-1000 delay-200 ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              VOSS
            </span>
          </h1>
        </div>

        {/* Subtitle row */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-1000 delay-500 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="max-w-md">
            <p className="font-body text-cream/80 text-xl md:text-2xl leading-relaxed italic">
              Visual artist & creative director crafting visceral experiences at the intersection of chaos and beauty.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-display text-cream/50 text-sm tracking-widest uppercase">Scroll to explore</span>
            <div className="w-10 h-10 border border-cream/30 flex items-center justify-center animate-bounce">
              <ArrowDown size={16} className="text-cream" />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 bg-vermillion py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-display text-cream text-sm tracking-[0.3em] uppercase mx-6 inline-block"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
