import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage: (packageName: string, offerDetails: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const packages = [
    {
      id: 'basic-solo',
      title: 'Basic / Solo Explorer',
      badge: 'Standard Price',
      discountTag: null,
      featured: false,
      priceDescription: 'Starting from ₹12,000 / trip',
      valueStatement: 'Access to basic eco-homestays & group nature walks',
      features: [
        'Verified sustainable family homestay stays',
        'Group guided nature & meditation walks',
        'Filtered water refill stations access',
        'Standard digital destination overview maps',
        'Community eco-tourism contribution certificate',
      ],
      ctaText: 'Choose Solo Explorer',
    },
    {
      id: 'pro-family',
      title: 'Pro / Eco Family',
      badge: 'MOST POPULAR - 20% OFF',
      discountTag: 'Best Deal',
      featured: true,
      priceDescription: 'Save 20% on any curated destination',
      valueStatement: 'Includes private eco-resort, custom itinerary, full AI Audio Guides, and zero-plastic travel kit',
      features: [
        'Private sustainable bamboo/timber eco-resort stay',
        'Bespoke unhurried family itinerary tailored to your pace',
        'Full AI Audio Guides with spoken offline local stories',
        'Terra Escapes zero-plastic reusable stainless flask & kit',
        'Dedicated local organic farm-to-table breakfast daily',
        'Priority flexible booking & free date rescheduling',
      ],
      ctaText: 'Claim 20% Off Pro Family',
    },
    {
      id: 'premium-luxury',
      title: 'Premium / Luxury Wilderness',
      badge: '30% OFF - BEST VALUE',
      discountTag: 'Ultimate Experience',
      featured: false,
      priceDescription: 'Save 30% on luxury nature retreats',
      valueStatement: 'All-inclusive 5-star eco-villas, private EV transport, carbon-offset certificate, and 24/7 personal tour guide',
      features: [
        'All-inclusive 5-star solar & timber eco-villas',
        'Private electric vehicle (EV) mountain transfers',
        'Gold-standard certified net-negative carbon certificate',
        '24/7 dedicated personal indigenous naturalist guide',
        'Exclusive private sound bathing & tea tasting ceremonies',
        'Full bespoke audio guides customized with your traveler names',
      ],
      ctaText: 'Book Luxury Wilderness (30% Off)',
    },
  ];

  return (
    <section id="packages" className="py-24 px-6 md:px-10 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-widest text-[#2D6A4F] font-bold mb-3">
          Curated Value & Transparency
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1B4332] text-balance mb-4">
          Packages & Special Offers
        </h2>
        <p className="font-body text-base md:text-lg text-[#2D3748] leading-relaxed text-balance">
          Select the travel tier that fits your journey. Enjoy seasonal early-bird discounts while supporting local preservation.
        </p>
      </div>

      {/* 3 distinct cards highlighting discounts and value */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg) => {
          const isFeatured = pkg.featured;

          return (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 md:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                isFeatured
                  ? 'bg-[#E8F5E9] border-2 border-[#1B4332] shadow-xl hover:shadow-2xl'
                  : 'bg-white border border-[#C8E6C9] hover:border-[#2D6A4F] shadow-md hover:shadow-lg'
              }`}
            >
              {/* Badge */}
              <div className="mb-4">
                <span
                  className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${
                    isFeatured
                      ? 'bg-[#1B4332] text-white shadow-sm'
                      : pkg.discountTag === 'Ultimate Experience'
                      ? 'bg-[#2D6A4F] text-white'
                      : 'bg-[#E8F5E9] text-[#1B4332] border border-[#C8E6C9]'
                  }`}
                >
                  {pkg.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-[#1B4332] mb-2">
                  {pkg.title}
                </h3>

                <div className="text-xs font-bold text-[#2D6A4F] mb-3 uppercase tracking-wider">
                  {pkg.discountTag || 'Standard Tier'}
                </div>

                <div className="pb-4 mb-5 border-b border-[#C8E6C9]">
                  <div className="font-display text-lg font-bold text-[#1B4332]">
                    {pkg.priceDescription}
                  </div>
                  <p className="text-xs text-[#2D3748] mt-1 font-medium leading-relaxed">
                    {pkg.valueStatement}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs uppercase tracking-wider text-[#4A5568] font-bold">
                    Included Benefits:
                  </div>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-[#1B4332]">
                      <div className="w-4 h-4 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectPackage(pkg.title, pkg.badge)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                    isFeatured
                      ? 'bg-[#1B4332] hover:bg-[#081C15] text-white shadow-md'
                      : 'bg-[#2D6A4F] hover:bg-[#1B4332] text-white'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reassurance footnote */}
      <div className="mt-12 text-center text-xs text-[#2D6A4F] font-medium flex flex-wrap items-center justify-center gap-6">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
          <span>100% Refundable Deposit Up to 14 Days Before Arrival</span>
        </span>
        <span aria-hidden="true" className="text-[#C8E6C9]">·</span>
        <span>Transparent Local Living Wage Verification</span>
        <span aria-hidden="true" className="text-[#C8E6C9]">·</span>
        <span>Certified Zero-Single-Use-Plastic Policy</span>
      </div>
    </section>
  );
};
