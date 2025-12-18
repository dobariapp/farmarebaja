'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  oldPrice?: number;
  discount?: number;
  badge?: 'nuevo' | 'oferta' | 'agotado';
  stock?: number;
  slug?: string;
};

type ProductCarouselProps = {
  title: string;
  subtitle?: string;
  href?: string;
  products: Product[];
};

export function ProductCarousel({ title, subtitle, href, products }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-8">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
        {href && (
          <Link 
            href={href}
            className="text-brand-light font-semibold hover:underline text-sm md:text-base"
          >
            Ver todo →
          </Link>
        )}
      </div>

      {/* Carrusel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {products.map((product) => (
              <div 
                className="flex-none w-[180px] md:w-[220px] lg:w-[240px]" 
                key={product.id}
              >
                <ProductCard
                  id={product.id}          // ← AGREGAR ESTA LÍNEA
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  oldPrice={product.oldPrice}
                  discount={product.discount}
                  badge={product.badge}
                  stock={product.stock}
                  slug={product.slug}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10 hidden md:flex items-center justify-center"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10 hidden md:flex items-center justify-center"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </section>
  );
}