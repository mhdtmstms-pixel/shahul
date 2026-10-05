import React from 'react';
import { ArrowRight, Droplets, Trees, Users, ShieldCheck, Sparkles, MapPin, Feather } from 'lucide-react';

interface WesternGhatsSectionProps {
  onExploreGhats: () => void;
}

export const WesternGhatsSection: React.FC<WesternGhatsSectionProps> = ({ onExploreGhats }) => {
  const bioFeatures = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#2D6A4F]" />,
      title: 'Global Biodiversity Hotspot',
      stat: '5,000+ Plant Species',
      desc: 'Older than the Himalayas, the Western Ghats harbors over 325 globally threatened flora, birds, amphibians, and mammals.',
    },
    {
      icon: <Droplets className="w-5 h-5 text-[#2D6A4F]" />,
      title: 'Pristine Waterfalls & Rivers',
      stat: 'Millions Fed by Sacred Streams',
      desc: 'Vital cloud catchment mountains feeding peninsular India, dotted with secluded waterfalls like Meenmutty and Athirappilly.',
    },
    {
      icon: <Trees className="w-5 h-5 text-[#2D6A4F]" />,
      title: 'Ancient Shola & Cloud Forests',
      stat: 'Endemic Cloud Sponges',
      desc: 'High-elevation montane evergreen patches nestled in rolling grasslands that trap passing monsoonal moisture.',
    },
    {
      icon: <Users className="w-5 h-5 text-[#2D6A4F]" />,
      title: 'Indigenous Stewards',
      stat: 'Living in Harmony',
      desc: 'Partnering directly with Kadar, Kurichiya, and Muthuvan communities who have protected these sacred groves for centuries.',
    },
  ];

  return (
    <section id="western-ghats" className="py-24 px-6 md:px-10 bg-gradient-to-b from-white via-[#F7FAF7] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2D6A4F] font-bold mb-3 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#C8E6C9]">
            <Feather className="w-3.5 h-3.5" />
            <span>UNESCO World Heritage Bio-Reserve</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1B4332] mb-5">
            Where the Earth Breathes
          </h2>
          <p className="font-body text-base md:text-lg text-[#2D3748] leading-relaxed text-balance">
            Spanning over 1,600 kilometers along India’s southwestern spine, the Western Ghats is an ancient living cathedral of misty cloud forests, cascading waterfalls, and sacred groves.
          </p>
        </div>

        {/* Feature Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Main Visual: Waterfall & Shola Forest Split */}
          <div className="lg:col-span-7 space-y-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video md:aspect-[16/10] group">
              <img
                src="/src/assets/images/western_ghats_waterfall_1791204330133.jpg"
                alt="Pristine hidden waterfall in Western Ghats rainforest"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2014]/70 via-transparent to-black/10" />

              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-[#1B4332] flex items-center gap-1.5 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Kerala &amp; Tamil Nadu Cloud Escarpments</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider block mb-1">
                  Living Waterways &amp; Ancient Granite
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold">
                  Secret Cascades of the Rainforest Canopy
                </h3>
              </div>
            </div>

            {/* Sub-visual strip */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden h-36 sm:h-44 shadow-md group">
                <img
                  src="/src/assets/images/shola_forest_mist_1791204350090.jpg"
                  alt="Misty Shola Mountain Ridges"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-xs font-bold text-white">
                  Misty Shola Grasslands
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-36 sm:h-44 shadow-md group">
                <img
                  src="/src/assets/images/munnar_eco_trail_1791202139947.jpg"
                  alt="Organic Mountain Tea Terraces"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-xs font-bold text-white">
                  Bio-Dynamic Tea Slopes
                </span>
              </div>
            </div>
          </div>

          {/* Right Highlights & Sustainable Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#E8F5E9]/90 border border-[#C8E6C9] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-[#2D6A4F] font-bold">
                Ecosystem Stewardship
              </div>
              <h3 className="font-display text-2xl font-bold text-[#1B4332]">
                Guarding One of Earth’s Eight Hottest Biological Sanctuaries
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                When you journey into the Western Ghats with Terra Escapes, 100% of your trail excursions are guided by native forest community members, zero single-use plastics are permitted, and strict carry-in carry-out policies protect every stream.
              </p>

              {/* 4 Bio Grid Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {bioFeatures.map((b, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-2xl border border-[#C8E6C9] space-y-1">
                    <div className="flex items-center gap-2">
                      {b.icon}
                      <span className="text-[11px] font-bold text-[#1B4332]">{b.title}</span>
                    </div>
                    <div className="text-[11px] text-[#2D6A4F] font-semibold">{b.stat}</div>
                    <p className="text-[10px] text-[#4A5568] leading-normal">{b.desc}</p>
                  </div>
                ))}
              </div>

              {/* Sustainable Travel Pledge Badge */}
              <div className="p-3.5 rounded-2xl bg-white border border-[#C8E6C9] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1B4332]">
                    100% Plastic-Free &amp; Community-Shared
                  </div>
                  <div className="text-[11px] text-[#4A5568]">
                    Fair trade wages directly benefiting indigenous tribal forest councils.
                  </div>
                </div>
              </div>

              {/* CTA: “Explore the Western Ghats” */}
              <button
                onClick={onExploreGhats}
                className="w-full py-4 px-6 rounded-2xl bg-[#2D6A4F] hover:bg-[#1B4332] active:scale-98 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore the Western Ghats</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
