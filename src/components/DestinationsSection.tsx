import React, { useState, useEffect } from 'react';
import { MapPin, Volume2, Pause, Check, ArrowRight, Leaf } from 'lucide-react';
import { speechEngine, SpeechStatus } from '../utils/audioEngine';
import { WaveformVisualizer } from './WaveformVisualizer';

interface DestinationItem {
  id: string;
  name: string;
  location: string;
  price: string;
  highlights: string[];
  image: string;
  duration: string;
  ecoBadge: string;
  storyScript: string;
  overview: string;
}

interface DestinationsSectionProps {
  onSelectDestination: (destName: string, price: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onSelectDestination }) => {
  const [speechStatus, setSpeechStatus] = useState<SpeechStatus>({
    isPlaying: false,
    currentTrackId: null,
    currentWord: '',
    progress: 0,
  });

  useEffect(() => {
    const unsub = speechEngine.subscribe(setSpeechStatus);
    return () => unsub();
  }, []);

  const destinations: DestinationItem[] = [
    {
      id: 'dest-munnar',
      name: 'Munnar Eco Trail (Kerala)',
      location: 'Western Ghats, Kerala, India',
      price: '₹12,000',
      highlights: ['Organic Tea Estates & Peaceful Nature Walks'],
      image: '/src/assets/images/munnar_eco_trail_1791202139947.jpg',
      duration: '4 Days / 3 Nights',
      ecoBadge: '100% Organic Estates',
      overview:
        'Walk through undulating green slopes shrouded in soft morning mist. Sip single-origin organic teas, wander fragrant spice groves, and enjoy silent meditation walks along hillside trails.',
      storyScript:
        'Welcome to the Munnar Eco Trail in Kerala. As the morning mist gently rises over the rolling green hills, listen to the cheerful call of the Malabar whistling thrush. Our local farming families cultivate these certified organic tea estates without chemical pesticides, preserving natural mountain aquifers. Stroll leisurely through fragrant cardamom and pepper groves, savor traditional warm Kerala cuisine cooked over clay stoves, and experience peaceful nature walks that soothe your mind.',
    },
    {
      id: 'dest-bali',
      name: 'Bali Forest Retreat (Indonesia)',
      location: 'Ubud River Ravine, Bali, Indonesia',
      price: '₹45,000',
      highlights: ['Sustainable Rainforest Stay & Eco Villas'],
      image: '/src/assets/images/bali_forest_retreat_1791202154515.jpg',
      duration: '6 Days / 5 Nights',
      ecoBadge: 'Handcrafted Bamboo Eco-Villa',
      overview:
        'Tucked inside Ubud’s tropical rainforest canopy, stay in open-air bamboo architecture, take dips in natural spring pools, and recharge with forest sound bathing and yoga.',
      storyScript:
        'Welcome to the Bali Forest Retreat in Ubud. Tucked within the heart of the tropical rainforest, your handcrafted bamboo villa breathes with the island breeze. Open your eyes to sunlight filtering through giant palm fronds. Listen to the gentle rushing waters of the sacred Ayung River flowing over river stones. Taste farm-to-table organic meals harvested daily from permaculture gardens, and rediscover true tranquility through restorative meditation under ancient jungle canopies.',
    },
    {
      id: 'dest-swiss',
      name: 'Swiss Alp Green Stay (Switzerland)',
      location: 'Valais Alpine Sanctuary, Switzerland',
      price: '₹1,20,000',
      highlights: ['Carbon-Neutral Mountain Trekking & Solar Lodges'],
      image: '/src/assets/images/swiss_alp_green_stay_1791202166307.jpg',
      duration: '7 Days / 6 Nights',
      ecoBadge: 'Solar & Hydro Powered',
      overview:
        'Breathe untouched mountain air high in the Swiss Alps. Sleep in solar-heated timber eco-chalets, hike along silent wildflower ridges, and drink pure glacial spring water.',
      storyScript:
        'Welcome to the Swiss Alp Green Stay. High in the majestic Valais range, the air is extraordinarily crisp, pure, and quiet. Our solar-powered alpine chalets are constructed from local reclaimed pine and granite, generating zero emissions. Walk along pristine trails blanketed in colorful summer edelweiss and alpine bellflowers, gaze at breathtaking snowcapped peaks, and savor artisanal alpine cheeses produced sustainably by valley herders.',
    },
    {
      id: 'dest-wayanad',
      name: 'Wayanad Rainforest Retreat (Kerala)',
      location: 'Western Ghats Bio-Reserve, Kerala',
      price: '₹15,000',
      highlights: ['Treehouse Stay, Bamboo Rafting & Silent Valley Walks'],
      image: '/src/assets/images/wayanad_rainforest_1791203278203.jpg',
      duration: '4 Days / 3 Nights',
      ecoBadge: 'Living Canopy Treehouse',
      overview:
        'Sleep high amidst ancient forest canopies in sustainable cedar treehouses. Float along secluded jungle streams on silent bamboo rafts and explore untouched wilderness trails.',
      storyScript:
        'Welcome to the Wayanad Rainforest Retreat in Kerala. Suspended sixty feet above the forest floor in a handcrafted cedar treehouse, you are eye-level with hornbills and emerald ferns. Listen to the gentle murmur of mountain streams winding through ancient mossy boulders below. Glide smoothly on bamboo rafts along quiet backwaters, breathe the wild forest air, and experience silent valley walks with indigenous tribal trackers.',
    },
    {
      id: 'dest-costa-rica',
      name: 'Costa Rica Cloud Forest Stay',
      location: 'Monteverde Cloud Forest Reserve',
      price: '₹85,000',
      highlights: ['Canopy Walk, Wildlife Conservation & Solar-Powered Stay'],
      image: '/src/assets/images/costa_rica_cloudforest_1791203292555.jpg',
      duration: '6 Days / 5 Nights',
      ecoBadge: 'Zero-Emission Cloud Sanctuary',
      overview:
        'Traverse mist-veiled suspension canopy bridges suspended among giant mossy trees. Stay in solar-powered forest lodges and support community-led biodiversity research.',
      storyScript:
        'Welcome to the Costa Rica Cloud Forest Stay in Monteverde. Step out onto high suspension canopy walkways that hover amidst passing rainclouds and lush mossy branches. Discover the home of iridescent resplendent quetzals and rare orchids. Your eco-lodge operates entirely on rooftop solar and mountain rainwater catchment, directly funding the continuous protection of thousands of acres of primary cloud forest.',
    },
    {
      id: 'dest-kyoto',
      name: 'Kyoto Zen Sanctuary (Japan)',
      location: 'Arashiyama Bamboo Foothills, Kyoto',
      price: '₹95,000',
      highlights: ['Organic Tea Ceremony, Bamboo Forest & Meditation Trails'],
      image: '/src/assets/images/kyoto_zen_sanctuary_1791203309015.jpg',
      duration: '5 Days / 4 Nights',
      ecoBadge: 'Heritage Timber Ryokan',
      overview:
        'Find profound serenity in an authentic wooden temple ryokan. Walk quiet stone paths under towering bamboo groves, participate in private organic tea ceremonies, and practice silent zazen meditation.',
      storyScript:
        'Welcome to the Kyoto Zen Sanctuary in Arashiyama. When morning breaks, sunlight casts long graceful shadows through towering bamboo culms, rustling with every light breeze. Savor a quiet bowl of stone-ground organic matcha prepared during a traditional Japanese tea ceremony. Walk contemplative moss-covered forest trails, and let the gentle chime of distant temple bells bring deep happiness and quietude to your spirit.',
    },
  ];

  const handleToggleStory = (dest: DestinationItem) => {
    if (speechStatus.isPlaying && speechStatus.currentTrackId === dest.id) {
      speechEngine.stop();
    } else {
      speechEngine.speak(dest.id, dest.storyScript, 0.88);
    }
  };

  return (
    <section id="destinations" className="py-24 px-6 md:px-10 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-widest text-[#2D6A4F] font-bold mb-3">
          Mindfully Curated Escapes
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1B4332] text-balance mb-4">
          Destinations & AI Voice Stories
        </h2>
        <p className="font-body text-base md:text-lg text-[#2D3748] leading-relaxed text-balance">
          Explore six peaceful nature destinations designed to restore your wellbeing. Click to listen to spoken AI voice stories before you choose your sanctuary.
        </p>
      </div>

      {/* 6-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {destinations.map((dest) => {
          const isThisPlaying =
            speechStatus.isPlaying && speechStatus.currentTrackId === dest.id;

          return (
            <div
              key={dest.id}
              className="bg-[#E8F5E9] border border-[#C8E6C9] hover:border-[#2D6A4F] rounded-3xl overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Visual Cover Photo */}
                <div className="relative h-60 w-full overflow-hidden bg-emerald-950">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 via-transparent to-black/20" />

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-[#1B4332] flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>{dest.location}</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-[#1B4332]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white">
                    {dest.duration}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 md:p-7">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-[#1B4332]">
                      {dest.name}
                    </h3>
                  </div>

                  {/* Pricing Details */}
                  <div className="mb-4 pb-4 border-b border-[#C8E6C9] flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl md:text-3xl font-bold text-[#1B4332] font-mono-tabular">
                        {dest.price}
                      </span>
                      <span className="text-xs font-medium text-[#4A5568]">
                        / All-Inclusive Stay
                      </span>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-[#2D3748] leading-relaxed mb-5 min-h-[44px]">
                    {dest.overview}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6 space-y-2">
                    <div className="text-xs uppercase tracking-wider text-[#2D6A4F] font-bold">
                      Highlights:
                    </div>
                    {dest.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#1B4332] font-medium">
                        <div className="w-4 h-4 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive 'Listen AI Voice Story' Button */}
                  <div className="bg-white p-3.5 rounded-2xl border border-[#C8E6C9] mb-6 shadow-sm">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <button
                        onClick={() => handleToggleStory(dest)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                          isThisPlaying
                            ? 'bg-[#1B4332] text-white shadow-md'
                            : 'bg-[#2D6A4F] hover:bg-[#1B4332] text-white'
                        }`}
                      >
                        {isThisPlaying ? (
                          <>
                            <Pause className="w-3.5 h-3.5 fill-current" />
                            <span>Pause Story</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-white" />
                            <span>Listen AI Voice Story</span>
                          </>
                        )}
                      </button>

                      <span className="text-[11px] text-[#2D6A4F] font-mono-tabular font-medium">
                        {isThisPlaying ? 'Speaking...' : 'Spoken Voice'}
                      </span>
                    </div>

                    <WaveformVisualizer
                      isPlaying={isThisPlaying}
                      progress={isThisPlaying ? speechStatus.progress : 0.25}
                      height={32}
                      barCount={40}
                      interactive={false}
                    />

                    {isThisPlaying && speechStatus.currentWord && (
                      <div className="mt-1.5 text-[11px] text-[#1B4332] font-medium truncate">
                        Listening: "{speechStatus.currentWord}"
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 md:p-7 pt-0">
                <button
                  onClick={() => onSelectDestination(dest.name, dest.price)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] active:scale-98 text-white font-semibold text-xs md:text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <span>Reserve {dest.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
