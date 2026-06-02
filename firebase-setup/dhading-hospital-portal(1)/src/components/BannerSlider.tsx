import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Activity } from 'lucide-react';
import { WebBanner } from '../types';

interface BannerSliderProps {
  banners: WebBanner[];
}

export default function BannerSlider({ banners }: BannerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [banners]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  if (!banners || banners.length === 0) {
    return (
      <div className="relative w-full h-[360px] md:h-[500px] bg-[#006830] flex items-center justify-center text-white">
        <div className="text-center px-4">
          <Activity className="size-16 mx-auto mb-4 animate-spin text-green-300" />
          <h2 className="text-3xl font-bold">Dhading Hospital Services</h2>
          <p className="text-gray-200 mt-2">Compassionate multi-disciplinary digital healthcare</p>
        </div>
      </div>
    );
  }

  const current = banners[currentIndex];

  return (
    <div className="relative w-full h-[380px] md:h-[520px] overflow-hidden bg-slate-900 group">
      {/* Dynamic Slide Background with parallax fade effect */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <img
          src={current.imageUrl || "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80"}
          alt={current.title}
          className="w-full h-full object-cover opacity-100 transform scale-102 transition-transform duration-[6000ms]"
        />
        {/* Soft elegant bottom gradient to make centered text exceptionally crisp and readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
      </div>

      {/* Slide Captions - Centered at the bottom exactly like the reference screenshot */}
      <div className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 text-center z-10">
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white uppercase drop-shadow-[0_3px_6px_rgba(0,0,0,0.95)]">
            {current.title}
          </h2>
          {current.subtitle && (
            <p className="text-[11px] sm:text-sm md:text-base text-gray-150 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
              {current.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Control Buttons */}
      {banners.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#00A64C] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#00A64C] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Indicator dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-[#00A64C]' : 'w-2.5 bg-white/50 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
