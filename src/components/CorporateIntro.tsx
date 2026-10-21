'use client';

import React from 'react';

export const CorporateIntro: React.FC = () => {
  return (
    <section className="content bg-white py-12 sm:py-16 px-6 sm:px-10 border-b border-gray-100 relative z-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm sm:text-base md:text-lg text-[#333333] leading-relaxed font-normal">
          <strong className="text-[#6bb8be] font-extrabold text-base sm:text-lg md:text-xl">
            FREEDCONN Venezuela
          </strong>
          , con sede principal en Caracas, tiene como objetivo ser un líder en el suministro de ingeniería de diseño y fabricación de productos en dispositivos de intercomunicación Bluetooth deportivos desde 2006.
          <br className="hidden sm:inline" />
          <span className="block mt-2 text-zinc-600">
            Gracias a nuestro hábil y capacitado personal, modernas instalaciones y excelente control de calidad, podemos suministrar productos de primera calidad que satisfarán plenamente sus demandas en cualquier carretera del país.
          </span>
        </p>
      </div>
    </section>
  );
};
