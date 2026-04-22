import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { TESTIMONIALS } from '../constants/data';

export const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isInView } = useInView();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const goPrev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="relative bg-stone-dark py-32 md:py-48 px-6 md:px-12 overflow-hidden"
      aria-label="Testimonials"
    >
      {/* Large decorative quote */}
      <div className="absolute top-12 left-6 md:left-12 opacity-[0.05]" aria-hidden="true">
        <Quote size={300} strokeWidth={1} />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto relative">
        <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="font-display text-xs tracking-[0.4em] uppercase text-vermillion block mb-16 text-center">
            Kind Words
          </span>

          {/* Testimonial carousel */}
          <div className="relative min-h-[300px] md:min-h-[250px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
                aria-hidden={index !== current}
              >
                <blockquote className="text-center">
                  <p className="font-body text-2xl md:text-4xl text-charcoal leading-relaxed italic max-w-4xl mx-auto">
                    "{testimonial.quote}"
                  </p>
                  <footer className="mt-10">
                    <span className="font-display text-sm tracking-[0.3em] uppercase text-charcoal font-bold block">
                      {testimonial.author}
                    </span>
                    <span className="font-display text-xs tracking-[0.2em] uppercase text-warm-gray mt-1 block">
                      {testimonial.role}
                    </span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-16">
            <button
              onClick={goPrev}
              className="w-12 h-12 border-2 border-charcoal flex items-center justify-center hover:bg-charcoal hover:text-cream transition-all duration-300"
              aria-label="Previous testimonial"
              data-cursor-hover
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-3">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-[3px] transition-all duration-500 ${
                    index === current ? 'w-12 bg-vermillion' : 'w-6 bg-charcoal/20 hover:bg-charcoal/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === current}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-12 h-12 border-2 border-charcoal flex items-center justify-center hover:bg-charcoal hover:text-cream transition-all duration-300"
              aria-label="Next testimonial"
              data-cursor-hover
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
