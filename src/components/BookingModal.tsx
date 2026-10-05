import React, { useState } from 'react';
import { X, Check, Leaf, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinationName: string;
  price: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  destinationName,
  price,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [preferredSeason, setPreferredSeason] = useState('Autumn / Winter Serenity');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setConfirmed(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-[#C8E6C9] rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative text-left">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-gray-500 hover:text-[#1B4332] p-2 rounded-full hover:bg-[#E8F5E9] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!confirmed ? (
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#2D6A4F] font-bold mb-1.5">
              <Leaf className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Terra Escapes Reservation</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#1B4332] mb-1">
              Reserve Your Peaceful Journey
            </h3>
            <p className="text-xs md:text-sm text-[#2D3748] leading-relaxed mb-5">
              Hold your dates for <strong className="text-[#1B4332]">{destinationName}</strong> ({price}). Zero booking deposit required today.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-[#2D3748] block mb-1 font-semibold">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Aria Bennett"
                  className="w-full bg-[#FAFCF8] border border-[#C8E6C9] focus:border-[#2D6A4F] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#1B4332] placeholder-gray-400"
                />
              </div>

              <div>
                <label className="text-xs text-[#2D3748] block mb-1 font-semibold">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="aria@peacefultravel.com"
                  className="w-full bg-[#FAFCF8] border border-[#C8E6C9] focus:border-[#2D6A4F] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#1B4332] placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-[#2D3748] block mb-1 font-semibold">Travelers</label>
                  <select
                    value={travelers}
                    onChange={e => setTravelers(Number(e.target.value))}
                    className="w-full bg-[#FAFCF8] border border-[#C8E6C9] rounded-xl px-3 py-2.5 text-xs text-[#1B4332]"
                  >
                    <option value={1}>1 Solo Wanderer</option>
                    <option value={2}>2 Mindful Travelers</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests (Eco Family)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-[#2D3748] block mb-1 font-semibold">Season</label>
                  <select
                    value={preferredSeason}
                    onChange={e => setPreferredSeason(e.target.value)}
                    className="w-full bg-[#FAFCF8] border border-[#C8E6C9] rounded-xl px-3 py-2.5 text-xs text-[#1B4332]"
                  >
                    <option value="Autumn / Winter Serenity">Autumn / Winter Serenity</option>
                    <option value="Spring Awakening">Spring Awakening</option>
                    <option value="Summer Alpine Meadows">Summer Alpine Meadows</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#E8F5E9] p-3.5 rounded-xl border border-[#C8E6C9] space-y-1.5 text-xs text-[#1B4332]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <span>100% Zero-Single-Use-Plastic Kit Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <span>Full Carbon-Neutral Offset Certificate</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Request Itinerary Confirmation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#E8F5E9] text-[#2D6A4F] mx-auto flex items-center justify-center">
              <Leaf className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#1B4332]">
              Itinerary Reserved
            </h3>
            <p className="text-xs md:text-sm text-[#2D3748] max-w-sm mx-auto">
              Our eco concierge has reserved your spot for <strong className="text-[#1B4332]">{destinationName}</strong>. A peaceful custom schedule has been sent to <span className="text-[#2D6A4F] font-bold">{email}</span>.
            </p>
            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Return to Terra Escapes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
