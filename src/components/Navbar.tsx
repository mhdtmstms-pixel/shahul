import React, { useState, useEffect, useRef } from 'react';
import { Phone, Globe, ChevronDown, Menu, X, Leaf, Volume2, ShieldCheck, MapPin, User } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAuth: () => void;
  currentUser: { name: string; email: string } | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenAuth,
  currentUser,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [westernGhatsOpen, setWesternGhatsOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement | null>(null);
  const ghatsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (ghatsRef.current && !ghatsRef.current.contains(e.target as Node)) {
        setWesternGhatsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setWesternGhatsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. Thin dark-green announcement bar at the very top (#1B4332) */}
      <div className="bg-[#1B4332] text-white text-xs py-2 px-6 md:px-10 border-b border-white/10 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-[11px] sm:text-xs">
          {/* Left: “Sustainable & Peaceful Travel Experiences” */}
          <div className="flex items-center gap-2 text-emerald-200/95 font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shadow-[0_0_6px_#34D399]" />
            <span>Sustainable &amp; Peaceful Travel Experiences</span>
          </div>

          {/* Right: Phone icon + Call us | Globe + domain | User + Login/Sign Up */}
          <div className="flex items-center gap-3.5 sm:gap-4 ml-auto">
            <a
              href="tel:+918003393235"
              className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Call us: +91 800 339 3235</span>
              <span className="sm:hidden">+91 800 339 3235</span>
            </a>

            <span className="text-white/30 hidden sm:inline" aria-hidden="true">|</span>

            <a
              href="https://www.terraescapes.com"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-1.5 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>www.terraescapes.com</span>
            </a>

            <span className="text-white/30 hidden sm:inline" aria-hidden="true">|</span>

            {/* Clean white outline button on the top dark green bar */}
            {currentUser ? (
              <button
                onClick={onOpenAuth}
                className="border border-white/80 hover:border-white text-white hover:bg-white hover:text-[#1B4332] px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
              >
                <User className="w-3.5 h-3.5" />
                <span>{currentUser.name}</span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="border border-white/80 hover:border-white text-white hover:bg-white hover:text-[#1B4332] px-3.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <User className="w-3.5 h-3.5" />
                <span>Login / Sign Up</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar below announcement bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBFDFB]/95 backdrop-blur-md border-b border-[#1B4332]/10 py-3 shadow-md'
            : 'bg-[#FBFDFB]/90 backdrop-blur-sm border-b border-[#1B4332]/08 py-4 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
          {/* Left: Terra Escapes logo/wordmark + Small “Home” beside logo */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-display text-2xl md:text-[27px] font-bold tracking-tight text-[#1B4332] hover:text-[#2D6A4F] transition-colors whitespace-nowrap"
            >
              Terra Escapes
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-[#2D6A4F] bg-[#E8F5E9] hover:bg-[#D5EBD7] px-2.5 py-1 rounded-full border border-[#C8E6C9] transition-colors cursor-pointer"
            >
              Home
            </button>
          </div>

          {/* Navigation Links: About Us | Services | Resources | Western Ghats | Resorts | Contact Us */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#1B4332]">
            <button
              onClick={() => scrollTo('about-us')}
              className="hover:text-[#2D6A4F] transition-colors cursor-pointer"
            >
              About Us
            </button>

            {/* Services with Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setWesternGhatsOpen(false);
                }}
                className="flex items-center gap-1.5 hover:text-[#2D6A4F] transition-colors cursor-pointer"
              >
                <span>Services</span>
                <span className="inline-flex items-center text-xs">🍃</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2.5 w-64 bg-white border border-[#C8E6C9] rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95">
                  <button
                    onClick={() => scrollTo('resorts')}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#E8F5E9] text-xs font-semibold text-[#1B4332] flex items-center gap-2.5 cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4 text-[#2D6A4F]" />
                    <span>AI Spoken Audio Stories</span>
                  </button>
                  <button
                    onClick={() => scrollTo('sustainability')}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#E8F5E9] text-xs font-semibold text-[#1B4332] flex items-center gap-2.5 cursor-pointer"
                  >
                    <Leaf className="w-4 h-4 text-[#2D6A4F]" />
                    <span>Zero-Plastic Travel Kits</span>
                  </button>
                  <button
                    onClick={() => scrollTo('journeys')}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#E8F5E9] text-xs font-semibold text-[#1B4332] flex items-center gap-2.5 cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                    <span>Carbon-Neutral Expeditions</span>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo('sustainability')}
              className="hover:text-[#2D6A4F] transition-colors cursor-pointer"
            >
              Resources
            </button>

            {/* Western Ghats with Dropdown */}
            <div className="relative" ref={ghatsRef}>
              <button
                onClick={() => {
                  setWesternGhatsOpen(!westernGhatsOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-1 hover:text-[#2D6A4F] transition-colors cursor-pointer"
              >
                <span>Western Ghats</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${westernGhatsOpen ? 'rotate-180' : ''}`} />
              </button>

              {westernGhatsOpen && (
                <div className="absolute top-full left-0 mt-2.5 w-72 bg-white border border-[#C8E6C9] rounded-2xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95">
                  <button
                    onClick={() => scrollTo('western-ghats')}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#E8F5E9] text-xs font-semibold text-[#1B4332] flex items-center gap-2.5 cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-[#2D6A4F]" />
                    <div>
                      <div>Where the Earth Breathes</div>
                      <div className="text-[11px] text-[#4A5568] font-normal">UNESCO Bio-reserve sanctuaries</div>
                    </div>
                  </button>
                  <button
                    onClick={() => scrollTo('resorts')}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#E8F5E9] text-xs font-semibold text-[#1B4332] flex items-center gap-2.5 cursor-pointer"
                  >
                    <Leaf className="w-4 h-4 text-[#2D6A4F]" />
                    <div>
                      <div>Munnar &amp; Wayanad Sanctuaries</div>
                      <div className="text-[11px] text-[#4A5568] font-normal">Treehouses, organic teas &amp; trails</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo('resorts')}
              className="hover:text-[#2D6A4F] transition-colors cursor-pointer"
            >
              Resorts
            </button>

            <button
              onClick={() => scrollTo('newsletter-cta')}
              className="hover:text-[#2D6A4F] transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          {/* Right: Large rounded green button: “Book Stay” */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 text-xs font-bold text-white bg-[#2D6A4F] hover:bg-[#1B4332] rounded-full active:scale-95 transition-all cursor-pointer whitespace-nowrap shadow-md shadow-[#2D6A4F]/20 hover:shadow-lg"
            >
              Book Stay
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="lg:hidden text-[#1B4332] p-2 hover:bg-[#E8F5E9] rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#1B4332]/10 px-6 py-6 space-y-3.5 shadow-2xl animate-in slide-in-from-top-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="block w-full text-left py-1 text-sm font-semibold text-[#1B4332]"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('about-us')}
              className="block w-full text-left py-1 text-sm font-semibold text-[#1B4332]"
            >
              About Us
            </button>
            <button
              onClick={() => scrollTo('journeys')}
              className="block w-full text-left py-1 text-sm font-semibold text-[#1B4332]"
            >
              Services &amp; Journeys
            </button>
            <button
              onClick={() => scrollTo('sustainability')}
              className="block w-full text-left py-1 text-sm font-semibold text-[#1B4332]"
            >
              Resources &amp; Sustainability
            </button>
            <button
              onClick={() => scrollTo('western-ghats')}
              className="block w-full text-left py-1 text-sm font-semibold text-[#1B4332]"
            >
              Western Ghats
            </button>
            <button
              onClick={() => scrollTo('resorts')}
              className="block w-full text-left py-1 text-sm font-semibold text-[#1B4332]"
            >
              Eco Resorts
            </button>
            <button
              onClick={() => scrollTo('travel-stories')}
              className="block w-full text-left py-1 text-sm font-semibold text-[#1B4332]"
            >
              Travel Stories
            </button>
            <button
              onClick={() => scrollTo('newsletter-cta')}
              className="block w-full text-left py-1 text-sm font-semibold text-[#1B4332]"
            >
              Contact Us
            </button>

            <div className="pt-3 border-t border-[#1B4332]/10 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-2.5 text-xs font-semibold text-[#1B4332] bg-[#E8F5E9] border border-[#C8E6C9] rounded-xl text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>{currentUser ? `Profile: ${currentUser.name}` : 'Login / Sign Up'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs font-bold text-white bg-[#2D6A4F] rounded-xl text-center shadow-md cursor-pointer"
              >
                Book Stay
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
