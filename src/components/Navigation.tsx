import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled ? 'bg-stone/90 backdrop-blur-sm' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <a
            href="#"
            className="font-display font-bold text-xl tracking-tight text-charcoal relative group"
            aria-label="Elara Voss - Home"
          >
            ELARA
            <span className="text-vermillion">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-vermillion transition-all duration-300 group-hover:w-full" />
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-display text-sm tracking-widest uppercase text-charcoal relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-vermillion transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 font-display text-sm tracking-widest uppercase bg-charcoal text-cream px-6 py-3 hover:bg-vermillion transition-colors duration-300"
          >
            Let's Talk <ArrowUpRight size={14} />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[110] w-10 h-10 flex items-center justify-center"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} className="text-cream" /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-[105] bg-charcoal transition-all duration-700 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col justify-center items-start h-full px-10">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-display text-5xl md:text-7xl font-bold text-cream hover:text-vermillion transition-all duration-500 py-3 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: isOpen ? `${i * 80}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <div
            className={`mt-12 transition-all duration-500 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? '500ms' : '0ms' }}
          >
            <p className="font-body text-warm-gray-light text-lg">hello@elaravoss.com</p>
            <p className="font-body text-warm-gray-light text-lg mt-1">+1 (555) 234-5678</p>
          </div>
        </div>
      </div>
    </>
  );
};
