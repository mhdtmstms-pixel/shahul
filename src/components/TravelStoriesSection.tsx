import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, Volume2, Pause, Leaf } from 'lucide-react';
import { speechEngine } from '../utils/audioEngine';

interface TravelStory {
  id: string;
  category: string;
  title: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const TravelStoriesSection: React.FC = () => {
  const [activeStory, setActiveStory] = useState<TravelStory | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const stories: TravelStory[] = [
    {
      id: 'story-whistling-thrush',
      category: 'Western Ghats Chronicles',
      title: 'The Morning Song of the Malabar Whistling Thrush',
      readTime: '4 min read',
      image: '/src/assets/images/shola_forest_mist_1791204350090.jpg',
      excerpt:
        'High above the tea plantations of Munnar, as dawn breaks through the mountain mist, a cheerful whistling human-like melody drifts across the shola forest.',
      content: [
        'Before the first rays of sunlight strike the granite crests of Anamudi, the rainforest awakens to an extraordinary sound. It is not the shrill cackle of cicadas or the distant rush of mountain streams, but a carefree, whistling tune that sounds uncannily like an unhurried schoolboy wandering down a country lane.',
        'This is the call of the Malabar Whistling Thrush (Myophonus hoyi), lovingly known in Kerala as the "Whistling Schoolboy." Found only in the moist evergreen forests of the Western Ghats, this deep-blue songbird sings loudest during monsoon mists and dawn chills.',
        'At our Munnar eco-reserve, guests are encouraged to step out onto their private wooden terraces in total silence at 5:45 AM. Breathing in the scent of wet eucalyptus and cardamom, listening to this ancient song is an instant antidote to modern sensory overload.',
      ],
    },
    {
      id: 'story-shola-cloud-sponges',
      category: 'Botany & Conservation',
      title: 'Shola Forests: The Ancient Cloud Sponges of South India',
      readTime: '6 min read',
      image: '/src/assets/images/western_ghats_waterfall_1791204330133.jpg',
      excerpt:
        'Stunted, moss-draped evergreen tree clusters nestled in high mountain folds hold the secret to peninsular India’s perennial river systems.',
      content: [
        'To the uninitiated traveler, the high rolling hills of the Western Ghats appear as boundless golden-green undulating grasslands. Yet, tucked into every fold and depression of the terrain are dark, dense clusters of stunted evergreen trees draped in mosses, lichens, and wild orchids.',
        'These are the Shola forests—millions of years older than the Himalayas. Because they exist at high altitudes where temperatures drop dramatically, the trees rarely grow taller than 15 meters, yet their tangled, sponge-like root networks absorb monsoonal downpours and release water continuously over months.',
        'Without the Sholas, the great rivers of southern India—including the Cauvery and the Periyar—would run dry for half the year. Every Terra Escapes traveler directly sponsors the protection and native sapling replenishment of these fragile cloud sponges.',
      ],
    },
    {
      id: 'story-offgrid-treehouse',
      category: 'Slow Living',
      title: 'Life in an Off-Grid Bamboo Canopy',
      readTime: '5 min read',
      image: '/src/assets/images/wayanad_rainforest_1791203278203.jpg',
      excerpt:
        'What happens when you spend seventy-two hours sixty feet in the air, disconnected from screens and attuned to tree frogs and wild bamboo creaks?',
      content: [
        'There is a profound psychological shift that happens when the ground drops away beneath your feet. In our Wayanad canopy treehouse, access is granted via a gently swaying timber suspension bridge crafted from reclaimed teak and organic coir ropes.',
        'Inside, there are no air conditioning hums or Wi-Fi notifications. The walls are open-weave bamboo slats that permit the gentle mountain breeze to circulate freely. At night, fireflies drift like constellations past your bedside lantern.',
        'Travelers often arrive tired, wound tight from urban commutes. By the second morning, sitting on the wooden veranda drinking freshly brewed estate tea, the rhythm of the forest takes over. Blood pressure drops, breathing deepens, and the mind finds its natural sanctuary.',
      ],
    },
  ];

  const handleToggleStoryAudio = (story: TravelStory) => {
    if (isPlayingAudio) {
      speechEngine.stop();
      setIsPlayingAudio(false);
    } else {
      const fullText = `${story.title}. By Terra Escapes. ${story.content.join(' ')}`;
      speechEngine.speak(story.id, fullText, 0.88);
      setIsPlayingAudio(true);
    }
  };

  const handleCloseModal = () => {
    if (isPlayingAudio) {
      speechEngine.stop();
      setIsPlayingAudio(false);
    }
    setActiveStory(null);
  };

  return (
    <section id="travel-stories" className="py-24 px-6 md:px-10 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2D6A4F] font-bold mb-3 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#C8E6C9]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>The Terra Escapes Gazette</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1B4332] mb-4">
          Stories Before the Journey
        </h2>
        <p className="font-body text-base md:text-lg text-[#2D3748] leading-relaxed text-balance">
          Delve into natural history, botanical lore, and quiet reflections penned by our resident foresters and naturalists.
        </p>
      </div>

      {/* 3 Editorial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story) => (
          <article
            key={story.id}
            className="bg-[#F7FAF7] border border-[#C8E6C9] hover:border-[#2D6A4F] rounded-3xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group"
          >
            <div>
              {/* Image Frame */}
              <div className="relative h-60 w-full overflow-hidden bg-emerald-950">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2014]/60 to-transparent" />

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-[#1B4332] shadow-xs">
                  {story.category}
                </div>

                <div className="absolute bottom-3 right-4 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-300" />
                  <span>{story.readTime}</span>
                </div>
              </div>

              {/* Story Details */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-[#1B4332] mb-3 leading-snug group-hover:text-[#2D6A4F] transition-colors">
                  {story.title}
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed mb-4">
                  {story.excerpt}
                </p>
              </div>
            </div>

            {/* Read Story Link */}
            <div className="p-6 pt-0">
              <button
                onClick={() => setActiveStory(story)}
                className="w-full py-3 rounded-xl bg-white hover:bg-[#2D6A4F] text-[#1B4332] hover:text-white border border-[#C8E6C9] hover:border-transparent font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs group-hover:bg-[#2D6A4F] group-hover:text-white"
              >
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Story Reader Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-[#C8E6C9] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 text-left">
            <button
              onClick={handleCloseModal}
              aria-label="Close Story"
              className="absolute top-5 right-5 text-gray-400 hover:text-[#1B4332] p-2 rounded-full hover:bg-[#E8F5E9] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#2D6A4F] uppercase tracking-wider mb-2">
              <Leaf className="w-3.5 h-3.5" />
              <span>{activeStory.category} · {activeStory.readTime}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1B4332] mb-4">
              {activeStory.title}
            </h3>

            {/* Audio Story button */}
            <div className="mb-6 p-3 rounded-2xl bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => handleToggleStoryAudio(activeStory)}
                  className="px-4 py-2 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
                >
                  {isPlayingAudio ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>Pause Narration</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Listen to Audio Story</span>
                    </>
                  )}
                </button>
                <span className="text-xs text-[#1B4332] font-medium hidden sm:inline">
                  Spoken naturalist voice
                </span>
              </div>
              <span className="text-[11px] text-[#2D6A4F] font-mono">
                {isPlayingAudio ? 'Playing...' : 'Audio Ready'}
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-56 mb-6 shadow-sm">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-[#2D3748] leading-relaxed">
              {activeStory.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#C8E6C9] flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-6 py-2.5 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
