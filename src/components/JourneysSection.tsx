import React from 'react';
import { ArrowRight, MapPin, Compass, Leaf, Mountain, Trees } from 'lucide-react';

interface JourneyItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  duration: string;
  description: string;
  highlights: string[];
}

interface JourneysSectionProps {
  onSelectJourney: (journeyTitle: string) => void;
}

export const JourneysSection: React.FC<JourneysSectionProps> = ({ onSelectJourney }) => {
  const journeys: JourneyItem[] = [
    {
      id: 'journey-western-ghats',
      title: 'Western Ghats Bio-Trail',
      category: 'Western Ghats',
      location: 'Munnar & Silent Valley, Kerala',
      image: '/src/assets/images/shola_forest_mist_1791204350090.jpg',
      duration: '5 Days / 4 Nights',
      description:
        'Wander mist-draped shola montane grasslands and organic mountain tea estates. Led by local indigenous trackers, encounter endemic birds and virgin cloud forests.',
      highlights: ['Organic Tea Picking', 'Shola Forest Treks', 'Malabar Whistling Thrush Walks'],
    },
    {
      id: 'journey-forest-retreats',
      title: 'Deep Canopy Forest Sanctuary',
      category: 'Forest Retreats',
      location: 'Wayanad Evergreen Biosphere, Kerala',
      image: '/src/assets/images/wayanad_rainforest_1791203278203.jpg',
      duration: '4 Days / 3 Nights',
      description:
        'Sleep sixty feet up in handcrafted cedar treehouses nestled in virgin rainforest canopy. Wake to mountain mist, wild hornbill calls, and clear babbling streams.',
      highlights: ['Living Treehouse Stays', 'Bamboo Rafting', 'Canopy Dawn Birding'],
    },
    {
      id: 'journey-indigenous-trails',
      title: 'Indigenous Stewards & Herbal Heritage',
      category: 'Indigenous Trails',
      location: 'Anamalai Foothills, Tamil Nadu & Kerala',
      image: '/src/assets/images/western_ghats_waterfall_1791204330133.jpg',
      duration: '6 Days / 5 Nights',
      description:
        'Connect deeply with Kadar and Muthuvan tribal elders. Learn ancestral plant medicine, wild honey harvesting lore, and ancient sustainable conservation.',
      highlights: ['Sacred Grove Visits', 'Herbal Foraging Walks', 'Traditional Clay Oven Feasts'],
    },
    {
      id: 'journey-slow-travel',
      title: 'The Slow Valley Contemplation',
      category: 'Slow Travel',
      location: 'Meppadi & Nilgiri Foothills, South India',
      image: '/src/assets/images/munnar_eco_trail_1791202139947.jpg',
      duration: '7 Days / 6 Nights',
      description:
        'An unhurried journey honoring silence, digital disconnection, and nature immersion. Enjoy sunrise yoga over river terraces, forest bathing, and zero rush.',
      highlights: ['Forest Sound Bathing', 'River Terrace Meditation', 'Solar Lodge Living'],
    },
  ];

  return (
    <section id="journeys" className="py-24 px-6 md:px-10 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2D6A4F] font-bold mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Curated Eco Expeditions</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1B4332] mb-4">
          Travel with Purpose
        </h2>
        <p className="font-body text-base md:text-lg text-[#2D3748] leading-relaxed text-balance">
          Low-impact, restorative journeys shaped around living ecosystems, tribal heritage, and undisturbed quietude.
        </p>
      </div>

      {/* 4 Premium Travel Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {journeys.map((item) => (
          <div
            key={item.id}
            className="bg-[#F7FAF7] border border-[#C8E6C9] hover:border-[#2D6A4F] rounded-3xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div>
              {/* Large Image with hover zoom */}
              <div className="relative h-64 w-full overflow-hidden bg-emerald-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/70 via-transparent to-black/20" />

                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-semibold text-[#1B4332] flex items-center gap-1 shadow-xs">
                  <MapPin className="w-3 h-3 text-[#2D6A4F]" />
                  <span>{item.location.split(',')[0]}</span>
                </div>

                <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6">
                <div className="text-[11px] font-semibold text-[#2D6A4F] mb-2 flex items-center justify-between">
                  <span>{item.duration}</span>
                  <span className="text-[10px] bg-[#E8F5E9] px-2 py-0.5 rounded-full border border-[#C8E6C9]">
                    100% Carbon-Offset
                  </span>
                </div>

                <p className="text-xs text-[#4A5568] leading-relaxed mb-4 min-h-[48px]">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-3 border-t border-[#C8E6C9]/60 mb-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="text-[11px] text-[#1B4332] font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Explore Link */}
            <div className="p-5 sm:p-6 pt-0">
              <button
                onClick={() => onSelectJourney(item.title)}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#2D6A4F] text-[#1B4332] hover:text-white border border-[#C8E6C9] hover:border-transparent font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs group-hover:bg-[#2D6A4F] group-hover:text-white"
              >
                <span>Explore Journey</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
