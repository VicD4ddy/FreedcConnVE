'use client';

import React, { useState } from 'react';
import { Play, Heart, Eye, CheckCircle2, MessageCircle, MapPin, ShieldAlert, Star, Sparkles, X } from 'lucide-react';
import { KOUNAHK_REELS, MOTERO_REVIEWS } from '@/data/reels';
import { ReelStory } from '@/types';

export const KounahkSection: React.FC = () => {
  const [activeReel, setActiveReel] = useState<ReelStory | null>(null);

  return (
    <section id="kounahk" className="py-16 sm:py-24 bg-freedconn-black relative border-b border-zinc-800/80 overflow-hidden">
      {/* Decorative Touring Aura */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Creator Endorsement Header */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 p-6 sm:p-10 rounded-3xl border border-orange-500/30 shadow-2xl mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Avatar & Identity */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-orange-600 via-zinc-800 to-amber-500 p-1 shadow-2xl shadow-orange-600/30">
                  <div className="w-full h-full rounded-[22px] bg-zinc-950 flex flex-col items-center justify-center text-white relative overflow-hidden">
                    <span className="text-3xl font-black">K650</span>
                    <span className="text-[9px] text-orange-400 font-mono tracking-widest uppercase">MOTOVIAJERO</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-orange-500 text-white shadow-lg">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-1.5">
                  <h3 className="text-xl sm:text-2xl font-black text-white">@kounahk650</h3>
                </div>
                <p className="text-xs font-semibold text-orange-400">Embajador Oficial FreedConn Venezuela</p>
                <p className="text-xs text-zinc-400">+35.000 km rodados por todo el país</p>
              </div>
            </div>

            {/* Right: Social proof quote */}
            <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-zinc-800 pt-6 lg:pt-0 lg:pl-8 space-y-3">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                PRUEBA SOCIAL Y TEST DE RESISTENCIA EXTREMA
              </span>
              <blockquote className="text-base sm:text-lg text-zinc-200 italic font-medium leading-relaxed">
                &quot;He rodado desde las dunas de Coro y las lluvias torrenciales de la Autopista Regional del Centro,
                hasta los páramos helados de Mérida a 4.100 metros de altura. En carretera no puedes depender de
                marcas chinas genéricas que mueren con el primer aguacero. <strong>FreedConn es el tanque de guerra oficial del motero venezolano.</strong>&quot;
              </blockquote>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-zinc-400">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <ShieldAlert className="w-4 h-4" /> 0% Filtro de Agua Comprobado
                </span>
                <span>•</span>
                <span className="text-zinc-300">Conexión Mesh Estable en Curvas</span>
                <span>•</span>
                <span className="text-orange-400 font-semibold">Sonido Claro a 140 km/h</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Vertical Reel-Style Cards */}
        <div className="mb-14">
          <div className="text-center sm:text-left mb-6">
            <h3 className="text-2xl font-black text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
              <span>Equipos en Acción: Rutas Venezolanas</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                REELS EXCLUSIVOS
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Haz clic en cualquier video para ver el test de rendimiento en tiempo real grabado por Kounahk650.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KOUNAHK_REELS.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setActiveReel(reel)}
                className="group relative h-[420px] rounded-3xl overflow-hidden border border-zinc-800 hover:border-orange-500/60 shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background Gradient Simulator */}
                <div className={`absolute inset-0 bg-gradient-to-t ${reel.gradient} opacity-90 group-hover:scale-105 transition-transform duration-500`} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Top Badge & Duration */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                    {reel.badge}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-orange-600/90 text-white">
                    {reel.duration}
                  </span>
                </div>

                {/* Center Play Button with pulse glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-orange-600/90 group-hover:bg-orange-500 border-2 border-white/40 flex items-center justify-center text-white shadow-xl shadow-orange-600/40 group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/90 to-transparent z-10 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-orange-400 font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{reel.location}</span>
                  </div>

                  <h4 className="text-lg font-black text-white leading-snug group-hover:text-orange-400 transition-colors">
                    {reel.title}
                  </h4>

                  <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                    {reel.description}
                  </p>

                  <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="font-semibold text-white">{reel.modelTested}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-zinc-400" />
                        {reel.repsCount}
                      </span>
                      <span className="flex items-center gap-1 text-red-400">
                        <Heart className="w-3.5 h-3.5 fill-red-400" />
                        {reel.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Moteros Testimonials Grid */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest block mb-1">
              CLIENTES VERIFICADOS EN VENEZUELA
            </span>
            <h3 className="text-2xl font-black text-white">Lo que dicen los Riders en las Calles</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MOTERO_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex text-amber-400 text-xs gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                      Compra Verificada
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 italic leading-relaxed">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white text-xs block">{rev.name}</span>
                      <span className="text-[10px] text-zinc-400">{rev.bike}</span>
                    </div>
                    <span className="text-[10px] text-orange-400 font-mono">{rev.model}</span>
                  </div>
                  <span className="text-[9px] text-zinc-500 mt-0.5 block">{rev.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reel Preview Modal */}
      {activeReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <button
              onClick={() => setActiveReel(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-bold">
                {activeReel.badge}
              </span>
              <span className="text-xs text-zinc-400 font-mono">{activeReel.duration}</span>
            </div>

            <h3 className="text-xl font-black text-white">{activeReel.title}</h3>
            <p className="text-xs text-orange-400 font-semibold">{activeReel.route}</p>

            {/* Video Player Mockup with Sound Wave */}
            <div className="relative h-64 rounded-2xl bg-gradient-to-br from-zinc-800 to-black border border-zinc-700 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 mb-3 animate-pulse">
                <Play className="w-7 h-7 fill-white translate-x-0.5" />
              </div>
              <span className="text-sm font-bold text-white">Video Reel de Instagram</span>
              <span className="text-xs text-zinc-400 mt-1 max-w-xs">
                {activeReel.description}
              </span >
              <div className="mt-4 flex items-center gap-1">
                <span className="w-1 h-4 bg-orange-500 animate-bounce" />
                <span className="w-1 h-7 bg-orange-400 animate-bounce delay-100" />
                <span className="w-1 h-3 bg-orange-500 animate-bounce delay-200" />
                <span className="w-1 h-8 bg-orange-300 animate-bounce delay-75" />
                <span className="w-1 h-5 bg-orange-500 animate-bounce delay-150" />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 space-y-1">
              <div className="flex justify-between font-bold text-white">
                <span>Equipo en prueba:</span>
                <span className="text-orange-400">{activeReel.modelTested}</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Disponible para entrega con número de guía oficial en 24h a toda Venezuela.
              </p>
            </div>

            <div className="flex gap-2">
              <a
                href="#catalogo"
                onClick={() => setActiveReel(null)}
                className="flex-1 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs text-center transition-colors shadow-lg"
              >
                VER MODELO EN CATÁLOGO
              </a>
              <button
                onClick={() => setActiveReel(null)}
                className="px-4 py-3 rounded-xl bg-zinc-800 text-zinc-300 text-xs font-semibold hover:bg-zinc-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
