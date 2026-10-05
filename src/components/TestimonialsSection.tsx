import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Waking up on that Munnar tea observation deck as the morning mist rolled over the valley was the most tranquil experience of my adult life. Truly zero plastic from arrival to departure.',
      author: 'Dr. Priya Ramaswamy',
      role: 'Environmental Biologist, Bengaluru',
      trip: 'Munnar Eco Trail (Kerala)',
      rating: 5,
    },
    {
      quote:
        'The audio stories brought each trail alive before we even stepped outside. Listening to our Kadar tribal guide decode bird calls in the Silent Valley was deeply humbling and authentic.',
      author: 'Siddharth & Ananya Mehta',
      role: 'Architects, Mumbai',
      trip: 'Wayanad Rainforest Retreat',
      rating: 5,
    },
    {
      quote:
        'Terra Escapes sets the benchmark for genuine luxury in harmony with nature. Not a gimmick, not greenwashing—just pristine serenity and deep reverence for the land.',
      author: 'David & Claire Bennett',
      role: 'Conservation Photographers, London',
      trip: 'Western Ghats Bio-Trail',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-gradient-to-b from-white via-[#F7FAF7] to-white border-t border-[#1B4332]/08">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#2D6A4F] font-bold mb-3 px-3 py-1 rounded-full bg-[#E8F5E9] border border-[#C8E6C9]">
            <Quote className="w-3.5 h-3.5" />
            <span>Traveler Reflections</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#1B4332] mb-4">
            Words from Peaceful Journeys
          </h2>
          <p className="font-body text-base md:text-lg text-[#2D3748] leading-relaxed text-balance">
            Real stories from travelers who embraced stillness, carbon-neutral trails, and deep forest tranquility.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#C8E6C9] rounded-3xl p-7 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-emerald-600">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#2D3748] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#C8E6C9]/60">
                <div className="flex items-center gap-2">
                  <div className="font-display text-sm font-bold text-[#1B4332]">
                    {t.author}
                  </div>
                  <CheckCircle className="w-3.5 h-3.5 text-[#2D6A4F]" />
                </div>
                <div className="text-[11px] text-[#4A5568]">{t.role}</div>
                <div className="text-[10px] text-[#2D6A4F] font-semibold mt-1 bg-[#E8F5E9] px-2 py-0.5 rounded-full inline-block">
                  Verified Trip: {t.trip}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
