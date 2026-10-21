'use client';

import React, { useState } from 'react';

export const WholesaleSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      alert('Por favor completa todos los campos requeridos (*).');
      return;
    }

    const message =
      `🏪 *SOLICITUD DE ASESORÍA / DISTRIBUCIÓN FREEDCONN VENEZUELA*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Nombre:* ${name.trim()}\n` +
      `📧 *E-mail:* ${email.trim()}\n` +
      `📱 *Celular:* ${phone.trim()}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Hola! Dejé mis datos en la web oficial y deseo que un asesor me contacte para catálogo y asesoría.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/584121234567?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* SECTION BLOCK_2: Quiero ser Distribuidor (Matching Reference) */}
      <section id="distribuidor-info" className="block_2 bg-white py-14 sm:py-20 px-4 sm:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-black text-[#6bb8be] tracking-wide">
            Quiero ser Distribuidor
          </h3>

          {/* Paragraph */}
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed max-w-2xl mx-auto">
            Si tienes tienda física o virtual y quieres vender nuestros productos solo déjanos un mensaje o contáctate con alguno de nuestros vendedores que ellos te asesoraran para que tengas los mejores productos en tu tienda.
          </p>

          {/* Button CATÁLOGO */}
          <div>
            <a
              href="#contacto"
              className="fc-btn-teal text-sm sm:text-base font-bold uppercase tracking-wider py-3.5 px-8 inline-block"
            >
              CATÁLOGO
            </a>
          </div>
        </div>
      </section>

      {/* SECTION BLOCK_3: Formulario Asesor (Matching Reference with biker.png) */}
      <section
        id="contacto"
        className="block_3 relative py-20 sm:py-28 px-4 sm:px-6 z-20 min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/biker.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
        }}
      >
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        <div className="max-w-[480px] w-full mx-auto relative z-10">
          {/* Card .box matching the user screenshot */}
          <div className="bg-[#0f141a]/85 backdrop-blur-md rounded-2xl p-7 sm:p-10 border border-white/10 shadow-2xl">
            <h4 className="text-xl sm:text-2xl font-black text-[#5bbac2] text-center mb-7 leading-snug">
              Dejanos tus datos un asesor te contactará
            </h4>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#5bbac2]/15 border border-[#5bbac2]/30 text-center space-y-2">
                <p className="text-base font-bold text-white">¡Gracias por dejarnos tus datos!</p>
                <p className="text-xs text-zinc-300">Un asesor de FreedConn Venezuela te escribirá a la brevedad por WhatsApp.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-[#5bbac2] hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1.5">
                    NOMBRE <span className="text-[#5bbac2]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1f26]/90 border border-zinc-700/70 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#5bbac2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1.5">
                    E-MAIL <span className="text-[#5bbac2]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1f26]/90 border border-zinc-700/70 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#5bbac2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-1.5">
                    CELULAR <span className="text-[#5bbac2]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. +58 412 123 4567"
                    className="w-full px-4 py-3 rounded-lg bg-[#1a1f26]/90 border border-zinc-700/70 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#5bbac2] transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#5bbac2] hover:bg-[#4ea8af] text-white font-extrabold text-sm uppercase tracking-wider py-3.5 rounded-lg text-center cursor-pointer transition-all shadow-lg shadow-[#5bbac2]/30 active:scale-[0.99]"
                  >
                    ENVIAR
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
