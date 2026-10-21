'use client';

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, BatteryCharging, Radio, Volume2, CloudRain, CheckCircle2 } from 'lucide-react';
import { ProductVisual } from './ProductVisual';

interface HeroProps {
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20 carbon-pattern border-b border-zinc-800/80">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Verification badge banner */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-orange-500/40 text-xs font-semibold shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span className="text-orange-400">DISTRIBUIDOR OFICIAL VENEZUELA</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-300 flex items-center gap-1">
              Probado en ruta por <strong className="text-white font-bold">@kounahk650</strong> 🏍️
            </span>
          </div>
        </div>

        {/* Main Grid: Copywriting & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Domina cada ruta en Venezuela{' '}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                sin perder la conexión
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Intercomunicadores Bluetooth para cascos testeados contra las lluvias torrenciales más extremas de Venezuela (<strong className="text-orange-400 font-semibold">IP65 / IP67</strong>), batería de hasta <strong className="text-white font-semibold">28 horas continuas</strong>, audio Hi-Fi con cancelación de viento y música o GPS compartido en carretera.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0 text-xs text-zinc-300">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <CloudRain className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Resistente a Lluvia</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <BatteryCharging className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hasta 28h de Batería</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 col-span-2 sm:col-span-1">
                <Volume2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Cancelación de Viento CVC</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#catalogo"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-black text-sm tracking-wide shadow-xl shadow-orange-600/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group text-glow"
              >
                <span>VER CATÁLOGO Y PRECIOS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800/90 text-orange-400 hover:text-orange-300 border border-orange-500/40 hover:border-orange-500 font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-orange-400 group-hover:rotate-12 transition-transform" />
                <span>¿No sabes cuál elegir? Haz el test</span>
              </button>
            </div>

            {/* Trust badge with Kounahk endorsement */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-zinc-400 border-t border-zinc-800/70">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-800 to-orange-500/40 p-0.5 border border-orange-500/60 flex items-center justify-center font-bold text-white text-xs shrink-0">
                K650
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white">Recomendado por Kounahk650</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                </div>
                <p className="text-[11px] text-zinc-400">
                  &quot;Son los que uso en mis travesías por toda Venezuela. Cero fallas.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Product Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 p-5 rounded-3xl border border-zinc-800 shadow-2xl backdrop-blur-xl">
              {/* Product Visual Header */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-black tracking-widest text-zinc-300 uppercase">
                    FREEDCONN FX PRO
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  TECNOLOGÍA MESH
                </span>
              </div>

              {/* Main Product Render */}
              <div className="my-2">
                <ProductVisual productId="fx-pro" name="FreedConn FX Pro" size="lg" />
              </div>

              {/* Quick Specs Badges Grid */}
              <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                <div className="bg-zinc-950/80 p-2.5 rounded-xl border border-zinc-800 flex items-center gap-2">
                  <Radio className="w-4 h-4 text-orange-400" />
                  <div>
                    <span className="text-[10px] text-zinc-400 block">Alcance Real</span>
                    <span className="font-bold text-white">1.500 Metros</span>
                  </div>
                </div>

                <div className="bg-zinc-950/80 p-2.5 rounded-xl border border-zinc-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="text-[10px] text-zinc-400 block">Impermeabilidad</span>
                    <span className="font-bold text-emerald-400">IP67 Sumergible</span>
                  </div>
                </div>
              </div>

              {/* Action Banner inside Hero Card */}
              <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-orange-950/40 via-zinc-900 to-zinc-950 border border-orange-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-400 block">Precio Oficial VE:</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-white">$125 USD</span>
                    <span className="text-xs text-zinc-500 line-through">$145</span>
                  </div>
                </div>
                <a
                  href="#catalogo"
                  className="px-3.5 py-2 rounded-lg bg-orange-500 hover:bg-orange-400 text-white font-bold text-xs tracking-wider transition-colors shadow-md"
                >
                  VER DETALLE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-black text-white block">+5.000</span>
            <span className="text-xs text-zinc-400 font-medium">Motociclistas Conectados en Venezuela</span>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-black text-orange-400 block">100% Lluvia</span>
            <span className="text-xs text-zinc-400 font-medium">Certificación IP65/IP67 Anti-Tormenta</span>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">24 - 48h</span>
            <span className="text-xs text-zinc-400 font-medium">Envíos Asegurados ZOOM, MRW y Tealca</span>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-black text-white block">6 Meses</span>
            <span className="text-xs text-zinc-400 font-medium">Garantía Directa y Repuestos Originales</span>
          </div>
        </div>
      </div>
    </section>
  );
};
