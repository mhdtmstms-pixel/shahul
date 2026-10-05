import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Leaf, Mail } from 'lucide-react';

export const NewsletterCtaSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section id="newsletter-cta" className="py-24 px-6 md:px-10 bg-[#1B4332] text-white relative overflow-hidden">
      {/* Decorative ambient leaf glows */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#2D6A4F]/40 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#52B788]/20 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-300 font-bold mb-4 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
          <Leaf className="w-3.5 h-3.5 text-emerald-400" />
          <span>The Terra Escapes Dispatch</span>
        </div>

        {/* Heading: “Travel gently. Leave a lighter footprint.” */}
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 leading-tight text-balance">
          Travel gently.
          <span className="block text-emerald-300">Leave a lighter footprint.</span>
        </h2>

        {/* Description: “Get thoughtful travel stories, hidden destinations and sustainable journey ideas.” */}
        <p className="font-body text-base md:text-lg text-emerald-100/90 max-w-xl mx-auto leading-relaxed mb-10 text-balance font-normal">
          Get thoughtful travel stories, hidden destinations and sustainable journey ideas delivered quietly to your inbox once a fortnight.
        </p>

        {submitted ? (
          <div className="bg-white/10 border border-white/25 rounded-2xl p-6 max-w-md mx-auto backdrop-blur-md animate-in fade-in zoom-in-95">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
            <h3 className="font-display text-xl font-bold mb-1">Welcome to the Journey</h3>
            <p className="text-xs text-emerald-200">
              Your eco-starter field guide and audio story link has been dispatched to <span className="font-semibold text-white">{email}</span>.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <Mail className="w-4 h-4 text-emerald-300 absolute left-4 top-4" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-white/15 border border-white/25 focus:border-emerald-400 focus:bg-white/20 focus:outline-none rounded-full pl-11 pr-5 py-3.5 text-sm text-white placeholder-emerald-200/70 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-emerald-50 text-[#1B4332] font-bold text-xs sm:text-sm transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Join the Journey</span>
              <ArrowRight className="w-4 h-4 text-[#1B4332]" />
            </button>
          </form>
        )}

        <div className="mt-6 text-xs text-emerald-200/60 font-medium">
          Zero spam. Never shared. Unsubscribe with one click.
        </div>
      </div>
    </section>
  );
};
