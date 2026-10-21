'use client';

import React from 'react';

export const CommitmentsSection: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'Conectividad Estable',
      text: 'Tecnología Bluetooth y Mesh de última generación para mantener la comunicación fluida y sin interrupciones en carretera.',
    },
    {
      num: '02',
      title: 'Audio Alta Fidelidad',
      text: 'Cancelación activa de ruido ambiental y de viento para conversaciones totalmente nítidas incluso a altas velocidades.',
    },
    {
      num: '03',
      title: 'Resistencia Biker',
      text: 'Protección contra lluvia y condiciones climáticas extremas, diseñados para soportar las exigencias de cualquier ruta.',
    },
    {
      num: '04',
      title: 'Garantía Oficial',
      text: 'Respaldo directo de marca y servicio técnico autorizado en el país para asegurar la máxima protección de tu inversión.',
    },
    {
      num: '05',
      title: 'Cobertura Nacional',
      text: 'Amplia red de cobertura a nivel nacional para conseguir fácilmente tu intercomunicador, repuestos y accesorios en tu ciudad.',
    },
  ];

  return (
    <section id="compromisos" className="block_4 relative z-20">
      <div className="fc-tech-wrapper">
        <div className="fc-tech-container">
          
          {/* Badge matching reference */}
          <div className="fc-tech-badge">
            Tecnología &amp; Innovación Biker
          </div>

          {/* Heading matching reference */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111] mb-4">
            NUESTROS{' '}
            <span className="text-[#7abbc0] drop-shadow-[0_0_12px_rgba(122,187,192,0.25)]">
              COMPROMISOS
            </span>
          </h2>

          {/* Subtitle matching reference */}
          <p className="text-zinc-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Los pilares que respaldan cada viaje y conectan a los motociclistas en todo el país.
          </p>

          {/* 5 Polygon Cards Grid matching reference */}
          <div className="fc-tech-grid">
            {cards.map((card, idx) => (
              <div key={idx} className="fc-tech-card">
                <span className="fc-tech-num">{card.num}</span>
                <h3 className="fc-tech-title">{card.title}</h3>
                <p className="fc-tech-text">{card.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
