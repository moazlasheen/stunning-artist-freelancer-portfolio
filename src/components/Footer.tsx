import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal border-t border-cream/5 px-6 md:px-12 py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <span className="font-display font-bold text-cream text-lg tracking-tight">
            ELARA<span className="text-vermillion">.</span>
          </span>
          <span className="font-body text-cream/30 text-sm">
            © {new Date().getFullYear()} Elara Voss. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="font-display text-xs tracking-widest uppercase text-cream/40 hover:text-vermillion transition-colors duration-300">
            Privacy
          </a>
          <a href="#" className="font-display text-xs tracking-widest uppercase text-cream/40 hover:text-vermillion transition-colors duration-300">
            Terms
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 border border-cream/20 flex items-center justify-center text-cream/40 hover:bg-vermillion hover:border-vermillion hover:text-cream transition-all duration-300"
            aria-label="Back to top"
            data-cursor-hover
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
