import React from 'react';
import { Ban, Sun, Users, Bird, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  const principles = [
    {
      icon: <Ban className="w-8 h-8 text-[#2D6A4F] stroke-[1.5]" />,
      title: 'Zero Plastic',
      metric: '100% Single-Use Plastic Ban',
      description:
        'All single-use plastics are eliminated across our itineraries. Guests receive copper and insulated stainless steel flask kits, organic cotton toiletries, and locally bottled spring waters.',
      bulletPoints: [
        'Zero plastic water bottles on all trails',
        'Biodegradable plant-fiber amenity kits',
        'Bulk organic pantry sourcing',
      ],
    },
    {
      icon: <Sun className="w-8 h-8 text-[#2D6A4F] stroke-[1.5]" />,
      title: 'Carbon Conscious',
      metric: 'Net-Zero Emissions by 2026',
      description:
        'Our partner lodges harness solar microgrids, passive cross-ventilation, and biomass cooling. Every kilometer traveled is measured and offset through certified native rainforest restoration.',
      bulletPoints: [
        'Passive geothermal and solar chalets',
        'Certified Western Ghats reforestation',
        'Electric and human-powered river rafts',
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-[#2D6A4F] stroke-[1.5]" />,
      title: 'Local Communities',
      metric: '85%+ Indigenous Staffing',
      description:
        'Tourism must empower indigenous guardians. We partner directly with tribal councils, guaranteeing fair living wages, healthcare, and educational micro-grants for local youth.',
      bulletPoints: [
        'Native Kadar & Muthuvan trail guides',
        'Direct revenue sharing with forest villages',
        'Support for tribal heirloom handicrafts',
      ],
    },
    {
      icon: <Bird className="w-8 h-8 text-[#2D6A4F] stroke-[1.5]" />,
      title: 'Wildlife Protection',
      metric: 'Strict Non-Intrusive Buffers',
      description:
        'We enforce strict ethical boundaries: no baiting, no spotlighting, and verified dark-sky lighting fixtures that protect nocturnal migratory animals, fireflies, and nesting birds.',
      bulletPoints: [
        'Dark-sky certified warm amber lighting',
        'Silent electric observation boats',
        'Active funding for anti-poaching patrols',
      ],
    },
  ];

  return (
    <section id="sustainability" className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div id="about-us" className="text-center max-w-3xl mx-auto mb-16 scroll-mt-28">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2D6A4F] font-bold mb-3 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#C8E6C9]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Regenerative Tourism Charter</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#1B4332] mb-4">
            Our Sustainability Principles
          </h2>
          <p className="font-body text-base md:text-lg text-[#2D3748] leading-relaxed text-balance">
            We believe travel should restore the earth, not deplete it. Every Terra Escapes journey is governed by four core ecological pillars.
          </p>
        </div>

        {/* 4 Elegant Principle Cards with simple line icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#F7FAF7] border border-[#C8E6C9] hover:border-[#2D6A4F] rounded-3xl p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Line Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#C8E6C9] flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                  {p.icon}
                </div>

                <h3 className="font-display text-xl font-bold text-[#1B4332] mb-1">
                  {p.title}
                </h3>

                <div className="text-xs font-semibold text-[#2D6A4F] mb-3">
                  {p.metric}
                </div>

                <p className="text-xs text-[#4A5568] leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="pt-4 border-t border-[#C8E6C9]/80 space-y-2">
                {p.bulletPoints.map((bp, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-[#1B4332] font-medium leading-tight">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
