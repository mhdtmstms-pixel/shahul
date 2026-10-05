import React from 'react';
import { X, MapPin, ShieldCheck, Check, ArrowRight, Sparkles } from 'lucide-react';
import { ResortItem } from './EcoResortsSection';

interface ResortDetailModalProps {
  resort: ResortItem | null;
  onClose: () => void;
  onBookNow: (name: string, price: string) => void;
}

export const ResortDetailModal: React.FC<ResortDetailModalProps> = ({
  resort,
  onClose,
  onBookNow,
}) => {
  if (!resort) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-[#C8E6C9] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-gray-400 hover:text-[#1B4332] p-2 rounded-full hover:bg-[#E8F5E9] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Frame */}
        <div className="relative rounded-2xl overflow-hidden h-64 sm:h-72 mb-6 shadow-md">
          <img
            src={resort.image}
            alt={resort.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2014]/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300">
              Verified Sanctuary
            </span>
            <h3 className="font-display text-2xl font-bold">{resort.name}</h3>
          </div>
        </div>

        {/* Location & Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-[#2D6A4F] font-semibold bg-[#E8F5E9] px-3 py-1 rounded-full border border-[#C8E6C9]">
            <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>{resort.location}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#2D6A4F] font-semibold bg-[#E8F5E9] px-3 py-1 rounded-full border border-[#C8E6C9]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>{resort.ecoBadge}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-[#C8E6C9]">
          <span className="font-display text-3xl font-bold text-[#1B4332]">
            {resort.price}
          </span>
          <span className="text-xs text-[#4A5568]">
            / night (Includes organic farm meals, guided nature trails &amp; zero-plastic amenities)
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#2D3748] leading-relaxed mb-6">
          {resort.description}
        </p>

        {/* Eco Architectural Highlights */}
        <div className="mb-6 space-y-2">
          <div className="text-xs font-bold text-[#1B4332] uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Included Sanctuary Highlights</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {resort.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-[#1B4332] font-medium bg-[#F7FAF7] p-2.5 rounded-xl border border-[#C8E6C9]">
                <Check className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-[#C8E6C9] flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onBookNow(resort.name, resort.price);
            }}
            className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <span>Proceed to Reservation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3.5 px-6 rounded-xl border border-[#C8E6C9] hover:bg-[#F7FAF7] text-[#1B4332] font-semibold text-xs transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
