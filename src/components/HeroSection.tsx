import React, { useState, useEffect } from 'react';
import { Volume2, Pause, ArrowRight, Leaf, MapPin, Sparkles, Maximize2 } from 'lucide-react';
import { speechEngine, SpeechStatus } from '../utils/audioEngine';
import { WaveformVisualizer } from './WaveformVisualizer';

interface HeroSectionProps {
  onExploreJourneys: () => void;
  onDiscoverResorts: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreJourneys,
  onDiscoverResorts,
}) => {
  const [speechStatus, setSpeechStatus] = useState<SpeechStatus>({
    isPlaying: false,
    currentTrackId: null,
    currentWord: '',
    progress: 0,
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const unsub = speechEngine.subscribe(setSpeechStatus);
    return () => unsub();
  }, []);

  const featuredDeck = {
    id: 'hero-western-ghats-deck',
    title: 'Western Ghats Deck & Tea Valley Sanctuary',
    location: 'Munnar High Ranges, Kerala',
    image: '/src/assets/images/panoramic_deck_home_1791203985613.jpg',
    description:
      'Step out onto your private handcrafted teak observation deck as the morning sun illuminates rolling emerald tea plantations. Beside your eco-stone chalet with its living green grass roof, listen to the silent whisper of valley mist and awaken to birdsong. Every stay is 100% single-use plastic free and net-zero carbon.',
    ecoFeature: 'Living Grass Roof · Net-Zero Carbon',
  };

  const isCurrentPlaying =
    speechStatus.isPlaying && speechStatus.currentTrackId === featuredDeck.id;

  const handleToggleAudio = () => {
    if (isCurrentPlaying) {
      speechEngine.stop();
    } else {
      speechEngine.speak(
        featuredDeck.id,
        featuredDeck.description,
        0.88
      );
    }
  };

  return (
    <section className="relative pt-36 sm:pt-40 md:pt-44 pb-20 px-6 md:px-10 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#F7FAF7] via-[#FCFDFC] to-white">
      {/* Subtle organic light accent */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] bg-[#E8F5E9]/50 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* At top of hero: Small rounded pill with leaf icon */}
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-widest text-[#2D6A4F] font-semibold mb-6 px-4 py-1.5 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] shadow-xs">
          <Leaf className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
          <span>MINDFUL ECO-TRAVEL &amp; TRANQUILITY &nbsp;·&nbsp; ZERO-PLASTIC JOURNEYS</span>
        </div>

        {/* Main headline, extremely large, bold modern geometric font, center-aligned, with line breaks */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold tracking-tight text-[#1B4332] max-w-5xl leading-[1.05] text-balance mb-6">
          Explore the World
          <span className="block text-[#2D6A4F]">Sustainably</span>
          <span className="block">&amp; Peacefully</span>
        </h1>

        {/* Description underneath */}
        <p className="font-body text-base sm:text-lg md:text-xl text-[#2D3748]/85 max-w-2xl leading-relaxed text-balance mb-10 font-normal">
          Immerse yourself in gentle journeys that honor the earth. Discover carbon-neutral sanctuaries, support local indigenous stewards, and listen to serene spoken travel stories before you embark.
        </p>

        {/* Below description: Two CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
          <button
            onClick={onExploreJourneys}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#2D6A4F] hover:bg-[#1B4332] rounded-full active:scale-95 transition-all shadow-lg shadow-[#2D6A4F]/25 hover:shadow-xl hover:shadow-[#2D6A4F]/35 flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
          >
            <span>Explore Journeys</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onDiscoverResorts}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-[#1B4332] hover:text-[#081C15] bg-[#E8F5E9] hover:bg-[#D5EBD7] border border-[#C8E6C9] rounded-full active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap shadow-xs"
          >
            <span>Discover Our Resorts</span>
          </button>
        </div>

        {/* Large nature/travel visual: Panoramic observation deck & stone eco-chalet */}
        <div className="w-full max-w-4xl bg-[#E8F5E9]/90 border border-[#C8E6C9] rounded-3xl p-5 md:p-7 shadow-2xl shadow-[#1B4332]/08 relative text-left transition-all hover:border-[#A5D6A7]">
          {/* Panoramic Image Frame */}
          <div
            className="relative w-full aspect-video md:aspect-[21/10] rounded-2xl overflow-hidden shadow-md mb-6 group cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={featuredDeck.image}
              alt="Panoramic wooden observation deck overlooking Western Ghats tea valley and living-roof eco chalet"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

            {/* Badges on image */}
            <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
              <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1B4332] flex items-center gap-1.5 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>{featuredDeck.location}</span>
              </div>
              <div className="bg-[#1B4332]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-100 flex items-center gap-1.5 shadow-sm">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Living Grass Roof Chalet</span>
              </div>
            </div>

            {/* Click to expand hint */}
            <div className="absolute top-4 right-4 bg-white/85 hover:bg-white text-[#1B4332] p-2 rounded-lg backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-sm flex items-center gap-1.5 text-xs font-semibold">
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Expand View</span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="text-xs uppercase tracking-wider text-emerald-300 font-bold mb-1">
                Featured Eco Sanctuary
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold tracking-tight drop-shadow-sm">
                {featuredDeck.title}
              </div>
            </div>
          </div>

          {/* Description & Audio Player Controls */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#C8E6C9] pb-3">
              <p className="text-xs md:text-sm text-[#2D3748] leading-relaxed max-w-2xl">
                {featuredDeck.description}
              </p>
              <div className="shrink-0">
                <span className="text-xs text-[#2D6A4F] font-semibold bg-white px-3 py-1.5 rounded-full border border-[#C8E6C9] flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <span>{featuredDeck.ecoFeature}</span>
                </span>
              </div>
            </div>

            {/* Live speech caption */}
            {isCurrentPlaying && speechStatus.currentWord && (
              <div className="text-xs text-[#1B4332] font-medium italic flex items-center gap-2 bg-white/90 p-2.5 rounded-xl border border-[#C8E6C9]">
                <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-ping" />
                <span>Listening: "...{speechStatus.currentWord}..."</span>
              </div>
            )}

            {/* Waveform visualizer */}
            <div className="bg-white p-3 rounded-xl border border-[#C8E6C9]">
              <div className="flex items-center justify-between text-[11px] text-[#2D6A4F] font-mono mb-2">
                <span>Spoken Audio Narration</span>
                <span>{isCurrentPlaying ? 'Speaking...' : 'Ready to Play'}</span>
              </div>
              <WaveformVisualizer
                isPlaying={isCurrentPlaying}
                progress={isCurrentPlaying ? speechStatus.progress : 0.28}
                height={34}
                barCount={52}
                interactive={false}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
              <button
                onClick={handleToggleAudio}
                className="px-6 py-3 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] active:scale-95 text-white font-semibold text-xs md:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                {isCurrentPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pause Audio Guide</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    <span>Listen to AI Audio Guide</span>
                  </>
                )}
              </button>

              <button
                onClick={onDiscoverResorts}
                className="px-5 py-3 rounded-xl bg-white hover:bg-[#FAFCF8] text-[#1B4332] border border-[#C8E6C9] font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Resort Sanctuaries</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2D6A4F]" />
              </button>
            </div>
          </div>
        </div>

        {/* Quiet unboxed peace badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#2D6A4F]">
          <span>Peaceful Solitude</span>
          <span aria-hidden="true" className="text-[#C8E6C9]">·</span>
          <span>Regenerative Organic Stays</span>
          <span aria-hidden="true" className="text-[#C8E6C9]">·</span>
          <span>100% Plastic-Free Itineraries</span>
          <span aria-hidden="true" className="text-[#C8E6C9]">·</span>
          <span>Fair Wages for Local Stewards</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
        >
          <div className="relative max-w-6xl w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={featuredDeck.image}
              alt="Western Ghats panoramic observation deck"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs sm:text-sm">
              Western Ghats Observation Deck &amp; Tea Valley Sanctuary · Munnar High Ranges
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
