'use client';

import React, { useState } from 'react';
import { ShoppingBag, Eye, Users, Radio, BatteryCharging, CloudRain, Search, Sparkles, Filter } from 'lucide-react';
import { Product } from '@/types';
import { PRODUCTS } from '@/data/products';
import { ProductVisual } from './ProductVisual';
import { ProductDetailModal } from './ProductDetailModal';

interface ProductCatalogProps {
  onAddToCart: (product: Product, micType?: 'Varilla (Abatible/Jet)' | 'Cable/Velcro (Integral)') => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos los Modelos' },
    { id: 'individual', label: 'Individuales / Pareja' },
    { id: 'grupal', label: 'Grupales (Mesh / Multiconexión)' },
    { id: 'camara', label: 'Con Cámara Integrada' },
    { id: 'accesorio', label: 'Repuestos & Accesorios' },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'todos' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalogo" className="py-16 sm:py-24 bg-white relative border-b border-zinc-200 overflow-hidden">
      {/* Subtle brand glow in background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6bb8be]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6bb8be]/15 border border-[#6bb8be]/30 text-xs font-bold text-[#4ea8af] mb-2 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CATÁLOGO OFICIAL FREEDCONN VENEZUELA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
              Equipos y Accesorios Disponibles
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-1 max-w-xl">
              Modelos 100% originales con garantía oficial directa de 6 meses y despacho inmediato por ZOOM, MRW y Tealca.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar modelo (ej. FX Pro, R3)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6bb8be] focus:ring-1 focus:ring-[#6bb8be] transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-2 p-1 rounded-2xl bg-zinc-100 border border-zinc-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#6bb8be] text-white shadow-md shadow-[#6bb8be]/25'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center rounded-3xl bg-zinc-50 border border-zinc-200">
            <Filter className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
            <h3 className="text-lg font-bold text-zinc-900">No se encontraron modelos</h3>
            <p className="text-xs text-zinc-500 mt-1">Prueba con otro término de búsqueda o selecciona otra categoría.</p>
            <button
              onClick={() => {
                setActiveCategory('todos');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-white border border-zinc-300 text-[#4ea8af] text-xs font-bold hover:bg-zinc-100 transition-colors shadow-xs cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-zinc-50 hover:bg-white rounded-2xl sm:rounded-3xl border border-zinc-200 hover:border-[#6bb8be] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Card Top: Badges & Visual */}
                <div className="p-3 sm:p-5 pb-0">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 min-h-[22px]">
                    {product.badge ? (
                      <span
                        className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border truncate max-w-[100px] sm:max-w-none ${
                          product.badgeColor || 'bg-[#6bb8be]/15 text-[#2d7d84] border-[#6bb8be]/30'
                        }`}
                      >
                        {product.badge}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="text-[9px] sm:text-[10px] text-zinc-500 font-mono flex items-center gap-1">
                      <CloudRain className="w-3 h-3 text-[#4ea8af]" />
                      <span className="hidden xs:inline">{product.specs.waterproof}</span>
                    </span>
                  </div>

                  {/* Interactive Visual Render */}
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className="cursor-pointer group-hover:scale-[1.02] transition-transform flex items-center justify-center"
                  >
                    <ProductVisual productId={product.id} name={product.name} size="md" />
                  </div>
                </div>

                {/* Card Body: Info & Specs */}
                <div className="p-3 sm:p-5 pt-3 sm:pt-4 space-y-2 sm:space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => setSelectedProduct(product)}
                      className="text-sm sm:text-lg font-black text-zinc-900 group-hover:text-[#4ea8af] cursor-pointer transition-colors truncate"
                      title={product.name}
                    >
                      {product.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-zinc-600 line-clamp-1 sm:line-clamp-2 mt-0.5 sm:mt-1 leading-relaxed">
                      {product.tagline}
                    </p>

                    {/* Quick Specs Icons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-zinc-200/80 text-[10px] sm:text-[11px] text-zinc-600">
                      <div className="flex items-center gap-1 sm:gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
                        <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#4ea8af] shrink-0" />
                        <span className="truncate">{product.specs.maxRiders}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
                        <Radio className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#4ea8af] shrink-0" />
                        <span className="truncate">{product.specs.range}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
                        <BatteryCharging className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{product.specs.batteryLife.split('(')[0]}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full bg-[#6bb8be] shrink-0" />
                        <span className="truncate font-semibold text-zinc-800">{product.specs.waterproof} Lluvia</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-2 sm:pt-4 border-t border-zinc-200 space-y-2 sm:space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[9px] sm:text-[10px] text-zinc-400 block uppercase font-bold">Precio VE</span>
                        <div className="flex items-baseline gap-1 sm:gap-2">
                          <span className="text-base sm:text-xl font-black text-zinc-900">${product.priceUSD}</span>
                          <span className="text-[9px] sm:text-[11px] text-zinc-500 font-semibold">USD</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="min-h-[40px] min-w-[40px] p-2 rounded-xl bg-zinc-100 hover:bg-[#6bb8be]/20 text-zinc-600 hover:text-[#2d7d84] flex items-center justify-center transition-colors cursor-pointer"
                        title="Ver Ficha Técnica"
                        aria-label="Ver Ficha Técnica"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="w-full min-h-[44px] py-2 sm:py-2.5 px-2 sm:px-4 rounded-xl fc-btn-teal text-white font-black text-[10px] sm:text-xs tracking-wider transition-all shadow-md shadow-[#6bb8be]/25 flex items-center justify-center gap-1.5 group/btn cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform" />
                      <span>
                        <span className="inline sm:hidden">AGREGAR</span>
                        <span className="hidden sm:inline">AGREGAR AL PEDIDO</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
    </section>
  );
};
