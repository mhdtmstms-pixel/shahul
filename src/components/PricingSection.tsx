import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const tiers = [
    {
      name: 'Free',
      subtitle: 'Starter Explorer',
      description: 'Ideal for independent audio creators, travel bloggers, and students exploring synthetic acoustics.',
      priceMonthly: 0,
      priceAnnual: 0,
      featured: false,
      badge: null,
      cta: 'Get Started Free',
      features: [
        '10,000 synthetic characters / month',
        'Standard 44.1kHz audio export (MP3)',
        'Access to 15 core neural voices',
        '25 core languages supported',
        'Zero-shot voice cloning (1 custom voice)',
        'Non-commercial personal license',
        'Community Discord support',
      ],
      footnote: 'No credit card required',
    },
    {
      name: 'Pro',
      subtitle: 'Studio Creator',
      description: 'Built for documentary filmmakers, travel agencies, podcast studios, and commercial media creators.',
      priceMonthly: 29,
      priceAnnual: 24,
      featured: true,
      badge: 'Most Popular',
      cta: 'Start Pro Trial',
      features: [
        '250,000 synthetic characters / month',
        'Uncompressed 48kHz / 24-bit FLAC & WAV',
        'Full library of 65+ premium voices',
        'All 50+ languages with regional dialects',
        'Unlimited AI Voice Cloning profiles',
        'AI Music & Background Score Generator (Stems)',
        'Full commercial broadcast & streaming rights',
        'Priority neural rendering queue (<35ms)',
      ],
      footnote: '14-day money-back guarantee',
    },
    {
      name: 'Enterprise',
      subtitle: 'Global Agency & Network',
      description: 'For national park systems, international airlines, global travel operators, and broadcast networks.',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      featured: false,
      badge: 'Custom Architecture',
      cta: 'Contact Studio Team',
      features: [
        'Unlimited characters & real-time streaming',
        'Dedicated on-premise or cloud neural cluster',
        'Bespoke voice design & brand timbre curation',
        'Multi-lingual localization pipeline & API SDK',
        'Custom bio-acoustic environmental stem library',
        '99.99% uptime SLA & dedicated audio engineer',
        'Enterprise SSO, SOC2 & GDPR compliance',
        'Custom model fine-tuning with proprietary data',
      ],
      footnote: 'Billed annually or per-minute volume',
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 md:px-10 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="text-xs uppercase tracking-widest text-[#C68B59] font-medium mb-3">
          Transparent Investment
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-balance mb-4">
          Simple, Predictable Studio Pricing
        </h2>
        <p className="font-body text-base md:text-lg text-[#FDFBF7]/80 leading-relaxed text-balance mb-8">
          Choose the acoustic fidelity your stories demand. Every paid tier includes commercial broadcast licensing and zero-watermark exports.
        </p>

        {/* Billing cycle toggle */}
        <div className="inline-flex items-center p-1.5 bg-[#251B18] border border-white/10 rounded-xl">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              billingCycle === 'monthly'
                ? 'bg-[#C68B59] text-white shadow-sm'
                : 'text-[#FDFBF7]/70 hover:text-white'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              billingCycle === 'annual'
                ? 'bg-[#C68B59] text-white shadow-sm'
                : 'text-[#FDFBF7]/70 hover:text-white'
            }`}
          >
            <span>Annual Billing</span>
            <span className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded font-bold">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Required: 3 sleek cards with white borders and clear pricing tiers (Free, Pro, Enterprise) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => {
          const isFeatured = tier.featured;
          const displayPrice =
            typeof tier.priceMonthly === 'number'
              ? billingCycle === 'annual'
                ? `$${tier.priceAnnual}`
                : `$${tier.priceMonthly}`
              : tier.priceMonthly;

          return (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 md:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                isFeatured
                  ? 'bg-[#291D19] border-2 border-[#FFFFFF] shadow-2xl shadow-[#C68B59]/20 glow-bronze'
                  : 'bg-[#221815] border border-white/25 hover:border-white/50 shadow-xl shadow-black/40'
              }`}
            >
              {/* Featured Badge if any */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D48B46] to-[#9E643C] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                {/* Tier Name & Subtitle */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {tier.name}
                    </h3>
                    <span className="text-xs text-[#C68B59] font-medium">
                      {tier.subtitle}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-[#FDFBF7]/70 leading-relaxed min-h-[40px]">
                    {tier.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl md:text-5xl font-bold text-white font-mono-tabular">
                      {displayPrice}
                    </span>
                    {typeof tier.priceMonthly === 'number' && (
                      <span className="text-xs text-[#FDFBF7]/60">
                        / month {billingCycle === 'annual' && '(billed annually)'}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-[#FDFBF7]/50 mt-1 font-light">
                    {tier.footnote}
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs uppercase tracking-wider text-[#FDFBF7]/60 font-semibold mb-2">
                    Included Capabilities:
                  </div>
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#FDFBF7]/85">
                      <div className="w-4 h-4 rounded-full bg-[#C68B59]/20 text-[#C68B59] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tier CTA button */}
              <div>
                <button
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    isFeatured
                      ? 'bg-gradient-to-r from-[#D48B46] to-[#9E643C] text-white hover:brightness-110 active:scale-95 shadow-lg shadow-[#9E643C]/40'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/60'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Guarantee footnote */}
      <div className="mt-12 text-center text-xs text-[#FDFBF7]/50 flex flex-wrap items-center justify-center gap-6">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#C68B59]" />
          <span>SOC2 Type II Certified & Carbon-Neutral Data Centers</span>
        </span>
        <span aria-hidden="true" className="text-white/20">·</span>
        <span>Instant API Key Provisioning</span>
        <span aria-hidden="true" className="text-white/20">·</span>
        <span>Cancel Anytime with 1-Click</span>
      </div>
    </section>
  );
};
