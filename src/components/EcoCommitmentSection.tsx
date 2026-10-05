import React from 'react';
import { Leaf, Users, ShieldCheck, Check } from 'lucide-react';

export const EcoCommitmentSection: React.FC = () => {
  const commitments = [
    {
      id: 'zero-plastic',
      title: 'Zero-Plastic Tours',
      icon: Leaf,
      lead: 'Complete elimination of single-use plastics across every trail, lodge, and transport.',
      details: [
        'Complimentary stainless-steel insulated thermal flasks on arrival',
        'Certified UV mountain-filtered water refill stations at every rest point',
        'Biodegradable plant-fiber lunch bento packs crafted by local kitchens',
        'Leave-no-trace trail cleanups guided by certified eco-rangers',
      ],
      tag: '100% Single-Use Plastic Free',
    },
    {
      id: 'community-support',
      title: 'Support Local Communities',
      icon: Users,
      lead: 'Tourism designed to directly empower indigenous stewards, artisans, and family farmers.',
      details: [
        'Over 85% of trip expenditure directly retained by local families',
        'Certified native indigenous storytellers paid double industry wages',
        'Direct partnerships with organic tea growers & permaculture cooperatives',
        'Funding village clean energy grids and local environmental schools',
      ],
      tag: 'Fair-Trade Community Wealth',
    },
    {
      id: 'carbon-neutral',
      title: 'Carbon-Neutral Trips',
      icon: ShieldCheck,
      lead: 'Gold-standard verified carbon offsets covering every kilometer of travel.',
      details: [
        'Comprehensive carbon calculation from doorstep to wilderness return',
        'Investment in high-integrity native rainforest reforestation projects',
        'Preference for electric shuttle transfers and mountain rail transit',
        'Solar and micro-hydro-powered eco-chalets and bamboo pavilions',
      ],
      tag: 'Net-Negative Carbon Footprint',
    },
  ];

  return (
    <section id="eco-commitment" className="py-24 px-6 md:px-10 max-w-7xl mx-auto w-full bg-[#FAFCF8]">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-widest text-[#2D6A4F] font-bold mb-3">
          Our Planetary Pledge
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1B4332] text-balance mb-4">
          Eco Commitment
        </h2>
        <p className="font-body text-base md:text-lg text-[#2D3748] leading-relaxed text-balance">
          Travel should be an act of reverence and quiet connection. Every journey with Terra Escapes protects biodiversity, supports local dignity, and ensures pristine wilderness for future generations.
        </p>
      </div>

      {/* 3-card feature grid highlighting sustainability: Zero-Plastic Tours, Support Local Communities, and Carbon-Neutral Trips */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {commitments.map((c) => {
          const IconComponent = c.icon;
          return (
            <div
              key={c.id}
              className="bg-[#E8F5E9] border border-[#C8E6C9] hover:border-[#2D6A4F] rounded-3xl p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#C8E6C9] flex items-center justify-center text-[#2D6A4F] mb-6 group-hover:scale-105 transition-transform shadow-sm">
                  <IconComponent className="w-7 h-7" />
                </div>

                <div className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider mb-1">
                  {c.tag}
                </div>

                {/* Card Title */}
                <h3 className="font-display text-2xl font-bold text-[#1B4332] mb-3">
                  {c.title}
                </h3>

                <p className="text-xs md:text-sm text-[#2D3748] leading-relaxed mb-6">
                  {c.lead}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 pt-4 border-t border-[#C8E6C9]">
                  {c.details.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#1B4332] font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom trust footer */}
              <div className="mt-8 pt-4 border-t border-[#C8E6C9] flex items-center justify-between text-xs text-[#2D6A4F] font-semibold">
                <span>Verified Independent Audit</span>
                <span className="bg-white px-2 py-0.5 rounded text-[11px] border border-[#C8E6C9]">Certified Green</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
