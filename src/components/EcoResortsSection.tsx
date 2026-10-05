import React, { useState, useEffect } from 'react';
import { MapPin, Volume2, Pause, ArrowRight, Leaf, Eye, ShieldCheck } from 'lucide-react';
import { speechEngine, SpeechStatus } from '../utils/audioEngine';
import { WaveformVisualizer } from './WaveformVisualizer';

export interface ResortItem {
  id: string;
  name: string;
  location: string;
  price: string;
  priceNum: number;
  image: string;
  ecoBadge: string;
  description: string;
  features: string[];
  storyScript: string;
}

interface EcoResortsSectionProps {
  onSelectResort: (resortName: string, price: string) => void;
  onViewResortDetails: (resort: ResortItem) => void;
}

export const EcoResortsSection: React.FC<EcoResortsSectionProps> = ({
  onSelectResort,
  onViewResortDetails,
}) => {
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

  const resorts: ResortItem[] = [
    {
      id: 'resort-munnar',
      name: 'Munnar Eco Trail Sanctuary',
      location: 'Western Ghats, Kerala, India',
      price: '₹12,000',
      priceNum: 12000,
      image: '/src/assets/images/munnar_eco_trail_1791202139947.jpg',
      ecoBadge: '100% Organic Estates · Zero Single-Use Plastic',
      description:
        'Walk through undulating green slopes shrouded in soft morning mist. Sip single-origin teas, wander fragrant spice groves, and enjoy silent meditation walks along hillside trails.',
      features: ['Solar Living Roofs', 'Mountain Spring Water', 'Native Tribe Guided Hikes'],
      storyScript:
        'Welcome to the Munnar Eco Trail in Kerala. As the morning mist gently rises over the rolling green hills, listen to the cheerful call of the Malabar whistling thrush. Our local farming families cultivate these certified organic tea estates without chemical pesticides, preserving natural mountain aquifers. Stroll leisurely through fragrant cardamom and pepper groves, savor traditional warm Kerala cuisine cooked over clay stoves, and experience peaceful nature walks that soothe your mind.',
    },
    {
      id: 'resort-wayanad',
      name: 'Wayanad Rainforest Retreat',
      location: 'Wayanad Bio-Reserve, Kerala',
      price: '₹15,000',
      priceNum: 15000,
      image: '/src/assets/images/wayanad_rainforest_1791203278203.jpg',
      ecoBadge: 'Living Canopy Treehouses · Solar Microgrid',
      description:
        'Sleep high amidst ancient forest canopies in sustainable cedar treehouses. Float along secluded jungle streams on silent bamboo rafts and explore untouched wilderness trails.',
      features: ['Handcrafted Treehouses', 'Bamboo River Rafting', 'Indigenous Wildlife Trackers'],
      storyScript:
        'Welcome to the Wayanad Rainforest Retreat in Kerala. Suspended sixty feet above the forest floor in a handcrafted cedar treehouse, you are eye-level with hornbills and emerald ferns. Listen to the gentle murmur of mountain streams winding through ancient mossy boulders below. Glide smoothly on bamboo rafts along quiet backwaters, breathe the wild forest air, and experience silent valley walks with indigenous tribal trackers.',
    },
    {
      id: 'resort-bali',
      name: 'Bali Rainforest Bamboo Villa',
      location: 'Ubud River Ravine, Bali, Indonesia',
      price: '₹45,000',
      priceNum: 45000,
      image: '/src/assets/images/bali_forest_retreat_1791202154515.jpg',
      ecoBadge: 'Handcrafted Bamboo · Zero-Carbon Permaculture',
      description:
        'Tucked inside Ubud’s tropical rainforest canopy, stay in open-air bamboo architecture, take dips in natural spring pools, and recharge with forest sound bathing.',
      features: ['Permaculture Cuisine', 'Natural River Pools', 'Silent Forest Sound Baths'],
      storyScript:
        'Welcome to the Bali Forest Retreat in Ubud. Tucked within the heart of the tropical rainforest, your handcrafted bamboo villa breathes with the island breeze. Open your eyes to sunlight filtering through giant palm fronds. Listen to the gentle rushing waters of the sacred Ayung River flowing over river stones. Taste farm-to-table organic meals harvested daily from permaculture gardens, and rediscover true tranquility through restorative meditation under ancient jungle canopies.',
    },
    {
      id: 'resort-costa-rica',
      name: 'Costa Rica Cloud Forest Stay',
      location: 'Monteverde Cloud Forest Reserve',
      price: '₹85,000',
      priceNum: 85000,
      image: '/src/assets/images/costa_rica_cloudforest_1791203292555.jpg',
      ecoBadge: '100% Solar & Hydro · Verified Wildlife Buffer',
      description:
        'Traverse mist-veiled suspension canopy bridges suspended among giant mossy trees. Stay in solar-powered forest lodges and support community-led biodiversity research.',
      features: ['Canopy Suspension Bridges', 'Resplendent Quetzal Sanctuary', 'Bio-Acoustic Monitoring'],
      storyScript:
        'Welcome to the Costa Rica Cloud Forest Stay in Monteverde. Step out onto high suspension canopy walkways that hover amidst passing rainclouds and lush mossy branches. Discover the home of iridescent resplendent quetzals and rare orchids. Your eco-lodge operates entirely on rooftop solar and mountain rainwater catchment, directly funding the continuous protection of thousands of acres of primary cloud forest.',
    },
    {
      id: 'resort-kyoto',
      name: 'Kyoto Zen Bamboo Sanctuary',
      location: 'Arashiyama Foothills, Kyoto, Japan',
      price: '₹95,000',
      priceNum: 95000,
      image: '/src/assets/images/kyoto_zen_sanctuary_1791203309015.jpg',
      ecoBadge: 'Heritage Timber Ryokan · Organic Tea Gardens',
      description:
        'Find profound serenity in an authentic wooden temple ryokan. Walk quiet stone paths under towering bamboo groves, participate in private organic tea ceremonies, and practice silent zazen meditation.',
      features: ['Centuries-old Timber Joinery', 'Organic Matcha Ceremony', 'Silent Zazen Trails'],
      storyScript:
        'Welcome to the Kyoto Zen Sanctuary in Arashiyama. When morning breaks, sunlight casts long graceful shadows through towering bamboo culms, rustling with every light breeze. Savor a quiet bowl of stone-ground organic matcha prepared during a traditional Japanese tea ceremony. Walk contemplative moss-covered forest trails, and let the gentle chime of distant temple bells bring deep happiness and quietude to your spirit.',
    },
    {
      id: 'resort-swiss',
      name: 'Swiss Alp Green Chalet',
      location: 'Valais Alpine Reserve, Switzerland',
      price: '₹1,20,000',
      priceNum: 120000,
      image: '/src/assets/images/swiss_alp_green_stay_1791202166307.jpg',
      ecoBadge: 'Zero-Emission Geo-Thermal · Carbon-Neutral',
      description:
        'Breathe untouched mountain air high in the Swiss Alps. Sleep in solar-heated timber eco-chalets, hike along silent wildflower ridges, and drink pure glacial spring water.',
      features: ['Passive Solar Architecture', 'Glacial Spring Wells', 'Alpine Meadow Treks'],
      storyScript:
        'Welcome to the Swiss Alp Green Stay. High in the majestic Valais range, the air is extraordinarily crisp, pure, and quiet. Our solar-powered alpine chalets are constructed from local reclaimed pine and granite, generating zero emissions. Walk along pristine trails blanketed in colorful summer edelweiss and alpine bellflowers, gaze at breathtaking snowcapped peaks, and savor artisanal alpine cheeses produced sustainably by valley herders.',
    },
  ];

  const handleToggleStory = (resort: ResortItem) => {
    if (speechStatus.isPlaying && speechStatus.currentTrackId === resort.id) {
      speechEngine.stop();
    } else {
      speechEngine.speak(resort.id, resort.storyScript, 0.88);
    }
  };

  return (
    <section id="resorts" className="py-24 px-6 md:px-10 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2D6A4F] font-bold mb-3 px-3.5 py-1 rounded-full bg-[#E8F5E9] border border-[#C8E6C9]">
          <Leaf className="w-3.5 h-3.5 text-[#2D6A4F]" />
          <span>Regenerative Lodges &amp; Sanctuaries</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1B4332] mb-4">
          Stay Close to Nature
        </h2>
        <p className="font-body text-base md:text-lg text-[#2D3748] leading-relaxed text-balance">
          Handcrafted retreats rooted in local timber, living architecture, and zero-impact luxury. Listen to spoken audio stories before selecting your sanctuary.
        </p>
      </div>

      {/* 6-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resorts.map((r) => {
          const isThisPlaying =
            speechStatus.isPlaying && speechStatus.currentTrackId === r.id;

          return (
            <div
              key={r.id}
              className="bg-[#F7FAF7] border border-[#C8E6C9] hover:border-[#2D6A4F] rounded-3xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Large visual */}
                <div className="relative h-60 w-full overflow-hidden bg-emerald-950">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2014]/70 via-transparent to-black/20" />

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-[#1B4332] flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>{r.location.split(',')[0]}</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-[#1B4332]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white">
                    Starting {r.price}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Eco certification / sustainability badge */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#2D6A4F] bg-[#E8F5E9] px-2.5 py-1 rounded-full border border-[#C8E6C9] mb-3">
                    <ShieldCheck className="w-3 h-3 text-[#2D6A4F] shrink-0" />
                    <span className="truncate">{r.ecoBadge}</span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-[#1B4332] mb-1.5">
                    {r.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-display text-2xl font-bold text-[#1B4332]">
                      {r.price}
                    </span>
                    <span className="text-xs text-[#4A5568]">/ night · all-inclusive eco stay</span>
                  </div>

                  <p className="text-xs text-[#4A5568] leading-relaxed mb-4 min-h-[44px]">
                    {r.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-5">
                    {r.features.map((f, i) => (
                      <div key={i} className="text-xs text-[#1B4332] font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Spoken AI Audio Story Button & Waveform */}
                  <div className="bg-white p-3 rounded-2xl border border-[#C8E6C9] mb-4">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <button
                        onClick={() => handleToggleStory(r)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                          isThisPlaying
                            ? 'bg-[#1B4332] text-white shadow-sm'
                            : 'bg-[#2D6A4F] hover:bg-[#1B4332] text-white'
                        }`}
                      >
                        {isThisPlaying ? (
                          <>
                            <Pause className="w-3 h-3 fill-current" />
                            <span>Pause Story</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3 h-3" />
                            <span>Listen Voice Story</span>
                          </>
                        )}
                      </button>

                      <span className="text-[10px] text-[#2D6A4F] font-mono font-medium">
                        {isThisPlaying ? 'Speaking...' : 'Spoken Voice'}
                      </span>
                    </div>

                    <WaveformVisualizer
                      isPlaying={isThisPlaying}
                      progress={isThisPlaying ? speechStatus.progress : 0.25}
                      height={28}
                      barCount={38}
                      interactive={false}
                    />

                    {isThisPlaying && speechStatus.currentWord && (
                      <div className="mt-1 text-[11px] text-[#1B4332] font-medium truncate italic">
                        "{speechStatus.currentWord}"
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons: “View Resort” & “Book Stay” */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => onViewResortDetails(r)}
                  className="flex-1 py-3 px-3 rounded-xl border border-[#C8E6C9] hover:border-[#2D6A4F] hover:bg-white text-[#1B4332] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <span>View Resort</span>
                </button>

                <button
                  onClick={() => onSelectResort(r.name, r.price)}
                  className="flex-1 py-3 px-3 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] active:scale-98 text-white font-semibold text-xs transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Stay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
