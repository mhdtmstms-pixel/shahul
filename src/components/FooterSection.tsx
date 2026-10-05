import React from 'react';
import { Leaf } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B2014] text-white/90 pt-20 pb-12 px-6 md:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-emerald-300 transition-colors inline-block"
            >
              Terra Escapes
            </a>
            <p className="text-emerald-300/90 text-sm font-medium tracking-wide">
              Sustainable &amp; Peaceful Travel Experiences
            </p>
            <p className="text-xs text-white/60 max-w-sm leading-relaxed">
              Curating low-impact, regenerative travel across the Western Ghats and global nature sanctuaries. 100% single-use plastic free, indigenous community-led, and carbon-neutral certified.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-300/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_#34D399]" />
              <span>Certified B-Corp Pending · Zero-Waste Tourism Alliance</span>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <button
                  onClick={() => scrollTo('western-ghats')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Western Ghats
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('resorts')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Resorts
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('journeys')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Journeys
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('travel-stories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Travel Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <button
                  onClick={() => scrollTo('about-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('sustainability')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sustainability
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('newsletter-cta')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <a
                  href="mailto:careers@terraescapes.com"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('For reservations and customer support, reach our concierge at +91 800 339 3235 or concierge@terraescapes.com.');
                  }}
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('resorts')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Booking
                </button>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Terra Escapes adheres to strict zero-spam and full GDPR data privacy principles.');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('All bookings include 100% carbon-offset verification and flexible rescheduling.');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 3D-Style Official Social Media Icons & Copyright Row */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <div className="text-xs text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} Terra Escapes. All rights reserved. Zero-Single-Use-Plastic Eco Tourism Certified.
          </div>

          {/* Clean and official 3D-style social media icons with labels */}
          <div className="flex items-center gap-6">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Terra Escapes on Instagram"
              className="group flex flex-col items-center gap-1.5 transition-transform duration-200 hover:-translate-y-1 active:translate-y-0.5 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#F4FAF5] via-[#E8F5E9] to-[#D5EBD7] border border-[#B7DCB9] flex items-center justify-center text-[#1B4332] group-hover:text-[#2D6A4F] shadow-[0_8px_16px_-2px_rgba(27,67,50,0.25),0_3px_6px_rgba(0,0,0,0.1),inset_0_2px_1px_rgba(255,255,255,0.95),inset_0_-2.5px_3px_rgba(27,67,50,0.18)] group-hover:shadow-[0_12px_22px_-2px_rgba(27,67,50,0.35),0_4px_8px_rgba(0,0,0,0.12),inset_0_2px_1px_rgba(255,255,255,1),inset_0_-2.5px_3px_rgba(27,67,50,0.22)] transition-all">
                <svg className="w-5 h-5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold tracking-widest text-emerald-300 uppercase group-hover:text-white transition-colors">
                INSTAGRAM
              </span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Terra Escapes on Facebook"
              className="group flex flex-col items-center gap-1.5 transition-transform duration-200 hover:-translate-y-1 active:translate-y-0.5 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#F4FAF5] via-[#E8F5E9] to-[#D5EBD7] border border-[#B7DCB9] flex items-center justify-center text-[#1B4332] group-hover:text-[#2D6A4F] shadow-[0_8px_16px_-2px_rgba(27,67,50,0.25),0_3px_6px_rgba(0,0,0,0.1),inset_0_2px_1px_rgba(255,255,255,0.95),inset_0_-2.5px_3px_rgba(27,67,50,0.18)] group-hover:shadow-[0_12px_22px_-2px_rgba(27,67,50,0.35),0_4px_8px_rgba(0,0,0,0.12),inset_0_2px_1px_rgba(255,255,255,1),inset_0_-2.5px_3px_rgba(27,67,50,0.22)] transition-all">
                <svg className="w-5 h-5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold tracking-widest text-emerald-300 uppercase group-hover:text-white transition-colors">
                FACEBOOK
              </span>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Terra Escapes on YouTube"
              className="group flex flex-col items-center gap-1.5 transition-transform duration-200 hover:-translate-y-1 active:translate-y-0.5 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-[#F4FAF5] via-[#E8F5E9] to-[#D5EBD7] border border-[#B7DCB9] flex items-center justify-center text-[#1B4332] group-hover:text-[#2D6A4F] shadow-[0_8px_16px_-2px_rgba(27,67,50,0.25),0_3px_6px_rgba(0,0,0,0.1),inset_0_2px_1px_rgba(255,255,255,0.95),inset_0_-2.5px_3px_rgba(27,67,50,0.18)] group-hover:shadow-[0_12px_22px_-2px_rgba(27,67,50,0.35),0_4px_8px_rgba(0,0,0,0.12),inset_0_2px_1px_rgba(255,255,255,1),inset_0_-2.5px_3px_rgba(27,67,50,0.22)] transition-all">
                <svg className="w-5 h-5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <span className="text-[9px] font-bold tracking-widest text-emerald-300 uppercase group-hover:text-white transition-colors">
                YOUTUBE
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
