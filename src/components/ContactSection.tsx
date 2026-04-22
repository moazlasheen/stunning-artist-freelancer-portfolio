import React, { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, Instagram, Twitter } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const ContactSection: React.FC = () => {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent! (Demo)');
  };

  return (
    <section id="contact" className="relative bg-charcoal py-32 md:py-48 px-6 md:px-12" aria-label="Contact">
      {/* Halftone background */}
      <div className="absolute inset-0 halftone-pattern opacity-[0.02]" aria-hidden="true" />

      <div ref={ref} className="max-w-7xl mx-auto relative">
        <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Header */}
          <div className="mb-20">
            <span className="font-display text-xs tracking-[0.4em] uppercase text-vermillion block mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-cream leading-[0.9]">
              LET'S MAKE
              <br />
              <span className="text-stroke-cream">SOMETHING</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            {/* Contact info */}
            <div className="lg:col-span-4 space-y-10">
              <div>
                <h3 className="font-display text-sm tracking-[0.3em] uppercase text-cream/40 mb-4">Reach Out</h3>
                <a
                  href="mailto:hello@elaravoss.com"
                  className="flex items-center gap-3 font-body text-cream text-xl hover:text-vermillion transition-colors duration-300 group"
                  data-cursor-hover
                >
                  <Mail size={18} className="text-vermillion" />
                  hello@elaravoss.com
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="tel:+15552345678"
                  className="flex items-center gap-3 font-body text-cream/60 text-lg mt-2 hover:text-cream transition-colors duration-300"
                >
                  <Phone size={16} className="text-vermillion/60" />
                  +1 (555) 234-5678
                </a>
              </div>

              <div>
                <h3 className="font-display text-sm tracking-[0.3em] uppercase text-cream/40 mb-4">Studio</h3>
                <p className="flex items-start gap-3 font-body text-cream/60 text-lg">
                  <MapPin size={16} className="text-vermillion/60 mt-1 flex-shrink-0" />
                  247 West 35th Street<br />
                  New York, NY 10001
                </p>
              </div>

              <div>
                <h3 className="font-display text-sm tracking-[0.3em] uppercase text-cream/40 mb-4">Follow</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 border border-cream/20 flex items-center justify-center text-cream/60 hover:bg-vermillion hover:border-vermillion hover:text-cream transition-all duration-300"
                    aria-label="Instagram"
                    data-cursor-hover
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 border border-cream/20 flex items-center justify-center text-cream/60 hover:bg-vermillion hover:border-vermillion hover:text-cream transition-all duration-300"
                    aria-label="Twitter"
                    data-cursor-hover
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-8 lg:pl-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`absolute left-0 transition-all duration-300 font-display text-sm tracking-widest uppercase ${
                        focusedField === 'name' || formData.name
                          ? '-top-6 text-vermillion text-xs'
                          : 'top-4 text-cream/30'
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-cream/10 focus:border-vermillion text-cream font-body text-lg py-4 outline-none transition-colors duration-300"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`absolute left-0 transition-all duration-300 font-display text-sm tracking-widest uppercase ${
                        focusedField === 'email' || formData.email
                          ? '-top-6 text-vermillion text-xs'
                          : 'top-4 text-cream/30'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-cream/10 focus:border-vermillion text-cream font-body text-lg py-4 outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="project"
                    className="block font-display text-xs tracking-widest uppercase text-cream/30 mb-3"
                  >
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-cream/10 focus:border-vermillion text-cream font-body text-lg py-4 outline-none transition-colors duration-300 appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-charcoal">Select a service...</option>
                    <option value="art-direction" className="bg-charcoal">Art Direction</option>
                    <option value="illustration" className="bg-charcoal">Illustration & Murals</option>
                    <option value="consulting" className="bg-charcoal">Creative Consulting</option>
                    <option value="digital" className="bg-charcoal">Digital Experiences</option>
                    <option value="other" className="bg-charcoal">Something Else</option>
                  </select>
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-0 transition-all duration-300 font-display text-sm tracking-widest uppercase ${
                      focusedField === 'message' || formData.message
                        ? '-top-6 text-vermillion text-xs'
                        : 'top-4 text-cream/30'
                    }`}
                  >
                    Tell me about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-cream/10 focus:border-vermillion text-cream font-body text-lg py-4 outline-none transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-4 font-display text-sm tracking-[0.3em] uppercase bg-vermillion text-cream px-12 py-5 hover:bg-vermillion-dark transition-all duration-300 mt-4"
                  data-cursor-hover
                >
                  <span>Send Message</span>
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-cream/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
