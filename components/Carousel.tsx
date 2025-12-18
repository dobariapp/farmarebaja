'use client';

import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  { src: '/banners/banner-1.png', alt: 'Oferta 1' },
  { src: '/banners/banner-2.png', alt: 'Oferta 2' },
  { src: '/banners/banner-3.png', alt: 'Oferta 3' },
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const autoScroll = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(autoScroll, 4000);
    return () => clearInterval(interval);
  }, [emblaApi, autoScroll]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg shadow-lg" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner, index) => (
            <div className="flex-grow-0 flex-shrink-0 w-full" key={index}>
              <Image
                src={banner.src}
                alt={banner.alt}
                width={1200}
                height={400}
                className="w-full object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Botones de navegación */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}