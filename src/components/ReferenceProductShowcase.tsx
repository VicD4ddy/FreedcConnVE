'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { PRODUCTS } from '@/data/products';
import { ProductDetailModal } from './ProductDetailModal';

interface ReferenceProductShowcaseProps {
  onAddToCart: (product: Product, micType?: 'Varilla (Abatible/Jet)' | 'Cable/Velcro (Integral)') => void;
  onViewAll?: () => void;
}

export const ReferenceProductShowcase: React.FC<ReferenceProductShowcaseProps> = ({
  onAddToCart,
  onViewAll,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Exact 6 products from block_1 in reference website
  const showcaseItems = [
    {
      title: 'HERO 5.1',
      alt: 'FreedConn HERO 5.1',
      image: '/images/ref-hero.png',
      productId: 'hero-51',
    },
    {
      title: 'KY PRO',
      alt: 'FreedConn KY PRO',
      image: '/images/ref-kypro.png',
      productId: 'ky-pro',
    },
    {
      title: 'T-MAX S PRO',
      alt: 'FreedConn T-MAX S PRO',
      image: '/images/ref-t.png',
      productId: 't-max-s-pro',
    },
    {
      title: 'FX PRO',
      alt: 'FreedConn FX PRO',
      image: '/images/ref-fx.png',
      productId: 'fx-pro',
    },
    {
      title: 'R1 PRO',
      alt: 'FreedConn R1 PRO',
      image: '/images/ref-r1.png',
      productId: 'r1-plus',
    },
    {
      title: 'R3 PRO',
      alt: 'FreedConn R3 PRO',
      image: '/images/ref-r3.png',
      productId: 'r3-2k',
    },
  ];

  const handleCardClick = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) {
      setSelectedProduct(found);
    }
  };

  return (
    <section
      id="productos"
      className="block_1 relative py-16 sm:py-20 px-4 sm:px-6 lg:px-12 z-20"
      style={{
        backgroundImage: "url('/images/bg-block1.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* 2-column on mobile, 2-column on tablet, 3-column on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 lg:gap-10 items-start justify-items-center">
          {showcaseItems.map((item, idx) => {
            const productData = PRODUCTS.find((p) => p.id === item.productId);

            return (
              <div
                key={idx}
                onClick={() => handleCardClick(item.productId)}
                className="group relative cursor-pointer flex flex-col items-center justify-center p-2 sm:p-4 transition-all duration-300 hover:scale-105 w-full"
              >
                {/* Product Box Image - Responsive Aspect Square for 2-column mobile */}
                <div className="relative w-full max-w-[155px] sm:max-w-[260px] md:max-w-[300px] aspect-square flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    title={item.title}
                    fill
                    sizes="(max-width: 640px) 48vw, (max-width: 1024px) 33vw, 300px"
                    className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Quick Info & Price Overlay */}
                {productData && (
                  <div className="mt-2 sm:mt-3 text-center space-y-1 w-full px-1">
                    <h3 className="text-white font-extrabold text-xs sm:text-base tracking-wide uppercase group-hover:text-[#6bb8be] transition-colors truncate">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-sm text-[10px] sm:text-xs font-bold text-[#7abbc0] max-w-full">
                      <span className="whitespace-nowrap">${productData.priceUSD} USD</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/90 font-medium text-[9px] sm:text-xs">
                        <span className="inline sm:hidden">Detalles</span>
                        <span className="hidden sm:inline">Ver Detalles & Comprar</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reference Button: Ver todos los productos */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="#catalogo"
            onClick={(e) => {
              if (onViewAll) {
                e.preventDefault();
                onViewAll();
              }
            }}
            className="fc-btn-teal text-sm sm:text-base font-extrabold px-8 sm:px-12 py-3.5 sm:py-4 cursor-pointer inline-block"
          >
            Ver todos los productos
          </a>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </section>
  );
};
