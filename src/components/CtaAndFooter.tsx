import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Instagram, Twitter, Youtube, Mail, Leaf, Tag } from 'lucide-react';

export const CtaAndFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [destinationChoice, setDestinationChoice] = useState('All Destinations (20% - 30% Off)');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <footer id="signup" className="relative pt-20 pb-12 px-6 md:px-10 border-t border-[#1B4332]/10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Clean signup form container for early-bird travel discounts */}
        <div className="bg-[#E8F5E9] border border-[#C8E6C9] rounded-3xl p-8 md:p-14 mb-20 shadow-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2D6A4F] font-bold px-3 py-1 rounded-full bg-white border border-[#C8E6C9]">
                <Tag className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Early-Bird Eco Travel Discounts</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1B4332] leading-tight">
                Unlock Up to 30% Off Sustainable Journeys
              </h2>
              <p className="text-sm md:text-base text-[#2D3748] leading-relaxed">
                Be the first to access unreleased seasonal packages for Munnar, Bali, and the Swiss Alps. Receive private discount codes, offline AI voice guides, and zero-plastic travel itineraries.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#2D6A4F] font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
                  Early-Bird Access
                </span>
                <span>·</span>
                <span>Zero Spam</span>
                <span>·</span>
                <span>Instant Voucher Code</span>
              </div>
            </div>

            {/* Right Column: Clean signup form */}
            <div className="lg:col-span-6">
              {submitted ? (
                <div className="bg-white border border-[#C8E6C9] rounded-2xl p-8 text-center space-y-3 shadow-sm animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-[#E8F5E9] text-[#2D6A4F] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1B4332]">
                    Discount Code Unlocked!
                  </h3>
                  <p className="text-xs md:text-sm text-[#2D3748] max-w-sm mx-auto">
                    Welcome, <strong className="text-[#1B4332]">{name || 'fellow traveler'}</strong>! Your exclusive <strong>TERRA-EARLYBIRD</strong> voucher has been emailed to <span className="text-[#2D6A4F] font-bold">{email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setEmail('');
                      setName('');
                    }}
                    className="text-xs text-[#2D6A4F] underline hover:text-[#1B4332] pt-2 cursor-pointer font-medium"
                  >
                    Register another traveler
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-[#C8E6C9] hover:border-[#2D6A4F] focus-within:border-[#2D6A4F] rounded-2xl p-6 md:p-8 space-y-4 shadow-sm transition-colors"
                >
                  <div className="text-xs uppercase tracking-wider text-[#1B4332] font-bold mb-1">
                    Claim Your Early-Bird Discount
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-[#2D3748] block mb-1 font-semibold">Your Full Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Elena Rostova"
                        className="w-full bg-[#FAFCF8] border border-[#C8E6C9] focus:border-[#2D6A4F] focus:outline-none rounded-xl px-4 py-3 text-xs md:text-sm text-[#1B4332] placeholder-gray-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-[#2D3748] block mb-1 font-semibold">
                        Email Address <span className="text-[#2D6A4F]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="wanderer@nature.org"
                        className="w-full bg-[#FAFCF8] border border-[#C8E6C9] focus:border-[#2D6A4F] focus:outline-none rounded-xl px-4 py-3 text-xs md:text-sm text-[#1B4332] placeholder-gray-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-[#2D3748] block mb-1 font-semibold">Destination Preference</label>
                      <select
                        value={destinationChoice}
                        onChange={e => setDestinationChoice(e.target.value)}
                        className="w-full bg-[#FAFCF8] border border-[#C8E6C9] focus:border-[#2D6A4F] focus:outline-none rounded-xl px-4 py-3 text-xs md:text-sm text-[#1B4332] cursor-pointer"
                      >
                        <option value="All Destinations (20% - 30% Off)">All Destinations (Up to 30% Off)</option>
                        <option value="Munnar Eco Trail (Kerala)">Munnar Eco Trail (Kerala) — ₹12,000</option>
                        <option value="Bali Forest Retreat (Indonesia)">Bali Forest Retreat (Indonesia) — ₹45,000</option>
                        <option value="Swiss Alp Green Stay (Switzerland)">Swiss Alp Green Stay (Switzerland) — ₹1,20,000</option>
                        <option value="Wayanad Rainforest Retreat (Kerala)">Wayanad Rainforest Retreat (Kerala) — ₹15,000</option>
                        <option value="Costa Rica Cloud Forest Stay">Costa Rica Cloud Forest Stay — ₹85,000</option>
                        <option value="Kyoto Zen Sanctuary (Japan)">Kyoto Zen Sanctuary (Japan) — ₹95,000</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 px-6 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-bold text-xs md:text-sm transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Get Early-Bird Discount & Guides</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-[#4A5568] text-center font-normal pt-1">
                    We respect your privacy. No spam ever. Unsubscribe with one click.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation & Social Media Links */}
        <div className="pt-10 border-t border-[#1B4332]/10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-2 text-center md:text-left">
            <a
              href="#"
              className="font-display text-xl font-bold tracking-tight text-[#1B4332] flex items-center justify-center md:justify-start gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D6A4F] inline-block shadow-[0_0_8px_#52B788]" />
              <span>Terra Escapes</span>
            </a>
            <p className="text-xs text-[#4A5568] max-w-sm">
              Sustainable eco travel agency curating peaceful, carbon-neutral journeys, zero-plastic tours, and spoken AI audio travel stories.
            </p>
          </div>

          {/* Official 3D-Style Social Media Links Row */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex items-center gap-6">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Terra Escapes on Instagram"
                className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-1 active:translate-y-0.5 cursor-pointer"
              >
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-b from-[#F4FAF5] via-[#E8F5E9] to-[#D5EBD7] border border-[#B7DCB9] flex items-center justify-center text-[#1B4332] group-hover:text-[#2D6A4F] shadow-[0_8px_16px_-2px_rgba(27,67,50,0.18),0_3px_6px_rgba(0,0,0,0.05),inset_0_2px_1px_rgba(255,255,255,0.95),inset_0_-2.5px_3px_rgba(27,67,50,0.14)] group-hover:shadow-[0_12px_22px_-2px_rgba(27,67,50,0.26),0_4px_8px_rgba(0,0,0,0.08),inset_0_2px_1px_rgba(255,255,255,1),inset_0_-2.5px_3px_rgba(27,67,50,0.2)] transition-all">
                  <svg className="w-6 h-6 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#1B4332] uppercase group-hover:text-[#2D6A4F] transition-colors">
                  INSTAGRAM
                </span>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Terra Escapes on Facebook"
                className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-1 active:translate-y-0.5 cursor-pointer"
              >
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-b from-[#F4FAF5] via-[#E8F5E9] to-[#D5EBD7] border border-[#B7DCB9] flex items-center justify-center text-[#1B4332] group-hover:text-[#2D6A4F] shadow-[0_8px_16px_-2px_rgba(27,67,50,0.18),0_3px_6px_rgba(0,0,0,0.05),inset_0_2px_1px_rgba(255,255,255,0.95),inset_0_-2.5px_3px_rgba(27,67,50,0.14)] group-hover:shadow-[0_12px_22px_-2px_rgba(27,67,50,0.26),0_4px_8px_rgba(0,0,0,0.08),inset_0_2px_1px_rgba(255,255,255,1),inset_0_-2.5px_3px_rgba(27,67,50,0.2)] transition-all">
                  <svg className="w-6 h-6 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#1B4332] uppercase group-hover:text-[#2D6A4F] transition-colors">
                  FACEBOOK
                </span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Terra Escapes on YouTube"
                className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:-translate-y-1 active:translate-y-0.5 cursor-pointer"
              >
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-b from-[#F4FAF5] via-[#E8F5E9] to-[#D5EBD7] border border-[#B7DCB9] flex items-center justify-center text-[#1B4332] group-hover:text-[#2D6A4F] shadow-[0_8px_16px_-2px_rgba(27,67,50,0.18),0_3px_6px_rgba(0,0,0,0.05),inset_0_2px_1px_rgba(255,255,255,0.95),inset_0_-2.5px_3px_rgba(27,67,50,0.14)] group-hover:shadow-[0_12px_22px_-2px_rgba(27,67,50,0.26),0_4px_8px_rgba(0,0,0,0.08),inset_0_2px_1px_rgba(255,255,255,1),inset_0_-2.5px_3px_rgba(27,67,50,0.2)] transition-all">
                  <svg className="w-6 h-6 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#1B4332] uppercase group-hover:text-[#2D6A4F] transition-colors">
                  YOUTUBE
                </span>
              </a>
            </div>

            <div className="flex items-center gap-6 text-xs text-[#4A5568]">
              <a href="#destinations" className="hover:text-[#1B4332] transition-colors">Destinations</a>
              <span>·</span>
              <a href="#packages" className="hover:text-[#1B4332] transition-colors">Special Offers</a>
              <span>·</span>
              <a href="#eco-commitment" className="hover:text-[#1B4332] transition-colors">Zero-Plastic Pledge</a>
            </div>
          </div>
        </div>

        {/* Quiet Copyright */}
        <div className="mt-8 pt-6 border-t border-[#1B4332]/05 text-center text-xs text-[#4A5568]">
          © {new Date().getFullYear()} Terra Escapes. All rights reserved. Zero-Single-Use-Plastic Eco Tourism Certified.
        </div>
      </div>
    </footer>
  );
};
