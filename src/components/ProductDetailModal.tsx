'use client';

import React from 'react';
import { X, Check, ShieldCheck, BatteryCharging, Radio, CloudRain, ShoppingBag, PhoneCall, HelpCircle, Box } from 'lucide-react';
import { Product } from '@/types';
import { ProductVisual } from './ProductVisual';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, micType: 'Varilla (Abatible/Jet)' | 'Cable/Velcro (Integral)') => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onAddToCart }) => {
  const [selectedMic, setSelectedMic] = React.useState<'Varilla (Abatible/Jet)' | 'Cable/Velcro (Integral)'>(
    'Varilla (Abatible/Jet)'
  );

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-zinc-200 rounded-3xl shadow-2xl p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Visual Showcase */}
          <div className="md:col-span-5 flex flex-col items-center">
            <ProductVisual productId={product.id} name={product.name} size="lg" className="w-full h-56" />

            {/* Trust highlights under image */}
            <div className="mt-4 w-full p-3 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Garantía Oficial Directa 6 Meses</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-700">
                <Box className="w-4 h-4 text-[#4ea8af] shrink-0" />
                <span>Envíos por MRW, Zoom o Tealca</span>
              </div>
            </div>
          </div>

          {/* Details & Specifications */}
          <div className="md:col-span-7 space-y-4">
            <div>
              {product.badge && (
                <span
                  className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border mb-2 inline-block ${
                    product.badgeColor || 'bg-[#6bb8be]/15 text-[#2d7d84] border-[#6bb8be]/30'
                  }`}
                >
                  {product.badge}
                </span>
              )}
              <h3 className="text-2xl font-black text-zinc-900">{product.name}</h3>
              <p className="text-xs text-[#4ea8af] font-bold mt-0.5">{product.tagline}</p>
              <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">{product.description}</p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#4ea8af] shrink-0" />
                <div>
                  <span className="text-[10px] text-zinc-400 block font-semibold uppercase">Conexión</span>
                  <strong className="text-zinc-900">{product.specs.maxRiders}</strong>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#4ea8af] shrink-0" />
                <div>
                  <span className="text-[10px] text-zinc-400 block font-semibold uppercase">Alcance</span>
                  <strong className="text-zinc-900">{product.specs.range}</strong>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center gap-2">
                <BatteryCharging className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-zinc-400 block font-semibold uppercase">Batería</span>
                  <strong className="text-emerald-700">{product.specs.batteryLife}</strong>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center gap-2">
                <CloudRain className="w-4 h-4 text-[#4ea8af] shrink-0" />
                <div>
                  <span className="text-[10px] text-zinc-400 block font-semibold uppercase">Resistencia</span>
                  <strong className="text-zinc-900">{product.specs.waterproof} Impermeable</strong>
                </div>
              </div>
            </div>

            {/* Mic selection for helmet */}
            {product.category !== 'accesorio' && (
              <div className="space-y-1.5 pt-1">
                <label className="text-xs font-semibold text-zinc-700 flex items-center gap-1.5">
                  <span>¿Qué tipo de casco usas? (Incluye ambos micrófonos en la caja):</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMic('Varilla (Abatible/Jet)')}
                    className={`p-2.5 rounded-xl text-xs font-medium border-2 text-left transition-all cursor-pointer ${
                      selectedMic === 'Varilla (Abatible/Jet)'
                        ? 'bg-[#6bb8be]/10 border-[#6bb8be] text-zinc-900 font-bold shadow-xs'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300'
                    }`}
                  >
                    <span>Abatible / Modular / Jet</span>
                    <span className="block text-[10px] text-zinc-500 font-normal">Micrófono rígido</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMic('Cable/Velcro (Integral)')}
                    className={`p-2.5 rounded-xl text-xs font-medium border-2 text-left transition-all cursor-pointer ${
                      selectedMic === 'Cable/Velcro (Integral)'
                        ? 'bg-[#6bb8be]/10 border-[#6bb8be] text-zinc-900 font-bold shadow-xs'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300'
                    }`}
                  >
                    <span>Integral / Cross</span>
                    <span className="block text-[10px] text-zinc-500 font-normal">Micrófono adhesivo</span>
                  </button>
                </div>
              </div>
            )}

            {/* What is in the box */}
            <div className="space-y-1.5 pt-2 border-t border-zinc-200">
              <span className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                <Box className="w-3.5 h-3.5 text-[#4ea8af]" />
                ¿Qué incluye la caja oficial?
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-zinc-600">
                {product.boxIncludes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-[#4ea8af] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-4 border-t border-zinc-200 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-zinc-400 block font-bold uppercase">Total en USD:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-zinc-900">${product.priceUSD}</span>
                  {product.originalPriceUSD && (
                    <span className="text-xs text-zinc-400 line-through">${product.originalPriceUSD}</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onAddToCart(product, selectedMic);
                    onClose();
                  }}
                  className="px-5 py-3 rounded-xl fc-btn-teal text-white font-black text-xs tracking-wider transition-all shadow-md shadow-[#6bb8be]/25 flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>AGREGAR AL PEDIDO</span>
                </button>

                <a
                  href={`https://wa.me/584121234567?text=Hola%20FreedConn%20Venezuela!%20Quiero%20comprar%20el%20*${encodeURIComponent(
                    product.name
                  )}*%20($${product.priceUSD}%20USD).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white transition-all shadow-md shadow-[#25D366]/30 cursor-pointer"
                  title="Preguntar por WhatsApp"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
