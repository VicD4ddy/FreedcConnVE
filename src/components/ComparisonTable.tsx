'use client';

import React from 'react';
import { Check, X, Shield, Sparkles, ShoppingBag } from 'lucide-react';
import { COMPARISON_MODELS, PRODUCTS } from '@/data/products';
import { Product } from '@/types';

interface ComparisonTableProps {
  onAddToCart: (product: Product) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onAddToCart }) => {
  const getProductObj = (id: string) => {
    return PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  };

  return (
    <section id="comparativa" className="py-16 sm:py-24 bg-white border-b border-zinc-200 relative overflow-hidden">
      {/* Subtle brand glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6bb8be]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6bb8be]/15 border border-[#6bb8be]/30 text-xs font-bold text-[#4ea8af] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TABLA COMPARATIVA TÉCNICA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Compara de un Vistazo los Modelos Principales
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Diferencias clave para elegir el intercomunicador exacto según tu tipo de moto, presupuesto y rutas.
          </p>
        </div>

        {/* Mobile Swipe / Scroll Hint */}
        <div className="flex sm:hidden items-center justify-between px-3.5 py-2.5 rounded-2xl bg-[#6bb8be]/10 border border-[#6bb8be]/30 text-xs font-bold text-[#2d7d84] mb-4 shadow-xs">
          <span className="flex items-center gap-2">
            <span className="text-sm">👉</span>
            <span>Desliza para comparar los 5 modelos</span>
          </span>
          <span className="font-mono text-[#4ea8af] bg-white px-2 py-0.5 rounded-md border border-[#6bb8be]/30 text-[11px]">
            5 modelos ↔
          </span>
        </div>

        {/* Responsive Table Container */}
        <div className="w-full overflow-x-auto rounded-3xl border border-zinc-200 bg-white shadow-xl">
          <table className="w-full min-w-[700px] text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/90">
                <th className="p-4 sm:p-5 text-xs font-mono uppercase text-zinc-500 sticky left-0 bg-zinc-50/95 z-10 w-48 border-r border-zinc-200/60 backdrop-blur-sm">
                  Especificación Técnica
                </th>
                {COMPARISON_MODELS.map((model) => {
                  const isTop = model.id === 'fx-pro';
                  return (
                    <th
                      key={model.id}
                      className={`p-4 sm:p-5 text-center min-w-[150px] ${
                        isTop ? 'bg-[#6bb8be]/10 border-x border-[#6bb8be]/40 relative' : ''
                      }`}
                    >
                      {isTop && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#6bb8be] text-[10px] font-black text-white uppercase tracking-wider shadow">
                          RECOMENDADO
                        </div>
                      )}
                      <span className="text-sm font-black text-zinc-900 block">{model.name}</span>
                      <span className={`text-[11px] font-semibold block mt-0.5 ${isTop ? 'text-[#4ea8af] font-bold' : 'text-zinc-500'}`}>
                        {model.highlight}
                      </span>
                      <span className="text-lg font-black text-zinc-900 block mt-1">{model.price} USD</span>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200 text-xs sm:text-sm">
              {/* Row 1: Alcance */}
              <tr className="hover:bg-zinc-50/70 transition-colors">
                <td className="p-4 font-semibold text-zinc-700 sticky left-0 bg-white/95 z-10 border-r border-zinc-200/60 backdrop-blur-sm">
                  Alcance en Carretera
                </td>
                {COMPARISON_MODELS.map((m) => (
                  <td
                    key={m.id}
                    className={`p-4 text-center ${
                      m.id === 'fx-pro' ? 'bg-[#6bb8be]/5 font-bold text-[#2d7d84] border-x border-[#6bb8be]/20' : 'text-zinc-700'
                    }`}
                  >
                    {m.range}
                  </td>
                ))}
              </tr>

              {/* Row 2: Usuarios Conectados */}
              <tr className="hover:bg-zinc-50/70 transition-colors">
                <td className="p-4 font-semibold text-zinc-700 sticky left-0 bg-white/95 z-10 border-r border-zinc-200/60 backdrop-blur-sm">
                  Usuarios Conectados
                </td>
                {COMPARISON_MODELS.map((m) => (
                  <td
                    key={m.id}
                    className={`p-4 text-center ${
                      m.id === 'fx-pro' ? 'bg-[#6bb8be]/5 font-bold text-[#2d7d84] border-x border-[#6bb8be]/20' : 'text-zinc-700'
                    }`}
                  >
                    {m.riders}
                  </td>
                ))}
              </tr>

              {/* Row 3: Bluetooth */}
              <tr className="hover:bg-zinc-50/70 transition-colors">
                <td className="p-4 font-semibold text-zinc-700 sticky left-0 bg-white/95 z-10 border-r border-zinc-200/60 backdrop-blur-sm">
                  Versión Bluetooth
                </td>
                {COMPARISON_MODELS.map((m) => (
                  <td
                    key={m.id}
                    className={`p-4 text-center ${
                      m.id === 'fx-pro' ? 'bg-[#6bb8be]/5 font-bold text-zinc-900 border-x border-[#6bb8be]/20' : 'text-zinc-700'
                    }`}
                  >
                    {m.bluetooth}
                  </td>
                ))}
              </tr>

              {/* Row 4: Cámara Integrada */}
              <tr className="hover:bg-zinc-50/70 transition-colors">
                <td className="p-4 font-semibold text-zinc-700 sticky left-0 bg-white/95 z-10 border-r border-zinc-200/60 backdrop-blur-sm">
                  Cámara Integrada
                </td>
                {COMPARISON_MODELS.map((m) => (
                  <td
                    key={m.id}
                    className={`p-4 text-center ${
                      m.id === 'r3-2k' ? 'bg-[#6bb8be]/15 font-bold text-[#2d7d84]' : 'text-zinc-500'
                    } ${m.id === 'fx-pro' ? 'bg-[#6bb8be]/5 border-x border-[#6bb8be]/20 text-zinc-500' : ''}`}
                  >
                    {m.camera}
                  </td>
                ))}
              </tr>

              {/* Row 5: Compartir Música */}
              <tr className="hover:bg-zinc-50/70 transition-colors">
                <td className="p-4 font-semibold text-zinc-700 sticky left-0 bg-white/95 z-10 border-r border-zinc-200/60 backdrop-blur-sm">
                  Compartir Música
                </td>
                {COMPARISON_MODELS.map((m) => (
                  <td
                    key={m.id}
                    className={`p-4 text-center ${
                      m.id === 'fx-pro' ? 'bg-[#6bb8be]/5 border-x border-[#6bb8be]/20' : ''
                    }`}
                  >
                    {m.musicShare.includes('Sí') ? (
                      <span className="inline-flex items-center gap-1 text-[#2d7d84] font-bold">
                        <Check className="w-4 h-4 text-[#4ea8af]" /> Sí
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-zinc-400">
                        <X className="w-4 h-4" /> No
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Row 6: Rueda Jog Wheel */}
              <tr className="hover:bg-zinc-50/70 transition-colors">
                <td className="p-4 font-semibold text-zinc-700 sticky left-0 bg-white/95 z-10 border-r border-zinc-200/60 backdrop-blur-sm">
                  Control con Guantes (Rueda)
                </td>
                {COMPARISON_MODELS.map((m) => (
                  <td
                    key={m.id}
                    className={`p-4 text-center ${
                      m.id === 'fx-pro' ? 'bg-[#6bb8be]/5 font-semibold text-zinc-900 border-x border-[#6bb8be]/20' : 'text-zinc-700'
                    }`}
                  >
                    {m.jogWheel}
                  </td>
                ))}
              </tr>

              {/* Row 7: Pantalla / Interfaz */}
              <tr className="hover:bg-zinc-50/70 transition-colors">
                <td className="p-4 font-semibold text-zinc-700 sticky left-0 bg-white/95 z-10 border-r border-zinc-200/60 backdrop-blur-sm">
                  Pantalla / Interfaz
                </td>
                {COMPARISON_MODELS.map((m) => (
                  <td
                    key={m.id}
                    className={`p-4 text-center ${
                      m.id === 'fx-pro' ? 'bg-[#6bb8be]/5 font-semibold text-zinc-900 border-x border-[#6bb8be]/20' : 'text-zinc-700'
                    }`}
                  >
                    {m.screen}
                  </td>
                ))}
              </tr>

              {/* Row 8: Resistencia al agua */}
              <tr className="hover:bg-zinc-50/70 transition-colors">
                <td className="p-4 font-semibold text-zinc-700 sticky left-0 bg-white/95 z-10 border-r border-zinc-200/60 backdrop-blur-sm">
                  Nivel de Impermeabilidad
                </td>
                {COMPARISON_MODELS.map((m) => (
                  <td
                    key={m.id}
                    className={`p-4 text-center ${
                      m.id === 'fx-pro'
                        ? 'bg-[#6bb8be]/5 text-[#2d7d84] font-bold border-x border-[#6bb8be]/20'
                        : 'text-zinc-700'
                    }`}
                  >
                    {m.waterproof}
                  </td>
                ))}
              </tr>

              {/* Row 9: Autonomía */}
              <tr className="hover:bg-zinc-50/70 transition-colors">
                <td className="p-4 font-semibold text-zinc-700 sticky left-0 bg-white/95 z-10 border-r border-zinc-200/60 backdrop-blur-sm">
                  Autonomía de Batería
                </td>
                {COMPARISON_MODELS.map((m) => (
                  <td
                    key={m.id}
                    className={`p-4 text-center ${
                      m.id === 'fx-pro'
                        ? 'bg-[#6bb8be]/5 font-black text-[#2d7d84] border-x border-[#6bb8be]/20'
                        : 'text-zinc-700 font-semibold'
                    }`}
                  >
                    {m.battery}
                  </td>
                ))}
              </tr>

              {/* Action row */}
              <tr className="bg-zinc-50/90 border-t border-zinc-200">
                <td className="p-4 sticky left-0 bg-zinc-50/95 z-10 font-black text-zinc-900 border-r border-zinc-200/60 backdrop-blur-sm">
                  Comprar Ahora
                </td>
                {COMPARISON_MODELS.map((m) => {
                  const productObj = getProductObj(m.id);
                  const isTop = m.id === 'fx-pro';
                  return (
                    <td
                      key={m.id}
                      className={`p-4 text-center ${
                        isTop ? 'bg-[#6bb8be]/10 border-x border-[#6bb8be]/40' : ''
                      }`}
                    >
                      <button
                        onClick={() => onAddToCart(productObj)}
                        className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          isTop
                            ? 'fc-btn-teal text-white shadow-md shadow-[#6bb8be]/25'
                            : 'bg-white hover:bg-[#6bb8be] text-zinc-800 hover:text-white border border-zinc-300 hover:border-[#6bb8be] shadow-xs'
                        }`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Agregar ({m.price})</span>
                      </button>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
