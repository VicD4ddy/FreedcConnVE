'use client';

import React, { useState } from 'react';
import { Sparkles, User, Users, Camera, Volume2, DollarSign, ArrowRight, RotateCcw, Check, ShoppingBag, PhoneCall } from 'lucide-react';
import { Product } from '@/types';
import { PRODUCTS } from '@/data/products';
import { ProductVisual } from './ProductVisual';

interface QuizRecommenderProps {
  onAddToCart: (product: Product) => void;
}

export const QuizRecommender: React.FC<QuizRecommenderProps> = ({ onAddToCart }) => {
  const [step, setStep] = useState<number>(1);
  const [ridingStyle, setRidingStyle] = useState<'solo' | 'pillion' | 'group' | null>(null);
  const [needsCamera, setNeedsCamera] = useState<boolean | null>(null);
  const [budget, setBudget] = useState<'budget' | 'mid' | 'premium' | null>(null);

  // Compute recommendation
  const getRecommendation = (): Product => {
    // If they want camera:
    if (needsCamera) {
      if (budget === 'premium') {
        return PRODUCTS.find((p) => p.id === 'r3-2k') || PRODUCTS[1];
      }
      return PRODUCTS.find((p) => p.id === 'r1-plus') || PRODUCTS[2];
    }

    // No camera:
    if (ridingStyle === 'group') {
      if (budget === 'premium') {
        return PRODUCTS.find((p) => p.id === 'fx-pro') || PRODUCTS[0];
      }
      return PRODUCTS.find((p) => p.id === 't-max-s-pro') || PRODUCTS[3];
    }

    if (ridingStyle === 'pillion') {
      if (budget === 'mid' || budget === 'premium') {
        return PRODUCTS.find((p) => p.id === 'ky-pro') || PRODUCTS[4];
      }
      return PRODUCTS.find((p) => p.id === 't-com-sc') || PRODUCTS[5];
    }

    // Solo:
    if (budget === 'premium') {
      return PRODUCTS.find((p) => p.id === 'fx-pro') || PRODUCTS[0];
    }
    if (budget === 'mid') {
      return PRODUCTS.find((p) => p.id === 'ky-pro') || PRODUCTS[4];
    }
    return PRODUCTS.find((p) => p.id === 't-com-sc') || PRODUCTS[5];
  };

  const handleSelectRidingStyle = (style: 'solo' | 'pillion' | 'group') => {
    setRidingStyle(style);
    setStep(2);
  };

  const handleSelectCamera = (hasCam: boolean) => {
    setNeedsCamera(hasCam);
    setStep(3);
  };

  const handleSelectBudget = (b: 'budget' | 'mid' | 'premium') => {
    setBudget(b);
    setStep(4);
  };

  const handleReset = () => {
    setStep(1);
    setRidingStyle(null);
    setNeedsCamera(null);
    setBudget(null);
  };

  const recommendedProduct = step === 4 ? getRecommendation() : null;

  return (
    <section id="quiz" className="py-16 sm:py-24 bg-white border-b border-zinc-200 relative overflow-hidden">
      {/* Subtle brand glow in background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#6bb8be]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6bb8be]/15 border border-[#6bb8be]/30 text-xs font-bold text-[#4ea8af] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TEST INTERACTIVO EN 30 SEGUNDOS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">
            ¿No sabes cuál FreedConn es el ideal para ti?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto">
            Responde 3 preguntas rápidas y nuestro recomendador inteligente te indicará el modelo exacto para tu estilo de ruta y presupuesto en Venezuela.
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-bold text-zinc-500 mb-2">
            <span className={step >= 1 ? 'text-[#4ea8af]' : ''}>Paso 1: Estilo de Rodada</span>
            <span className={step >= 2 ? 'text-[#4ea8af]' : ''}>Paso 2: Cámara</span>
            <span className={step >= 3 ? 'text-[#4ea8af]' : ''}>Paso 3: Presupuesto</span>
            <span className={step === 4 ? 'text-[#4ea8af]' : ''}>Resultado</span>
          </div>
          <div className="w-full h-2.5 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200">
            <div
              className="h-full bg-gradient-to-r from-[#6bb8be] to-[#5bbac2] transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Wizard Container - Clean Light Card */}
        <div className="bg-zinc-50/80 rounded-3xl border border-zinc-200/90 p-6 sm:p-10 shadow-xl backdrop-blur-md">
          {/* STEP 1: Riding Style */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center sm:text-left">
                <span className="text-xs font-mono text-[#4ea8af] font-bold uppercase tracking-wider block mb-1">Paso 1 de 3</span>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-900">¿Cómo sueles rodar la mayor parte del tiempo?</h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">Elige tu modalidad principal en moto.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => handleSelectRidingStyle('solo')}
                  className="p-5 rounded-2xl bg-white border-2 border-zinc-200 hover:border-[#6bb8be] hover:bg-[#6bb8be]/5 text-left transition-all group flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-[#6bb8be]/10 cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 group-hover:bg-[#6bb8be]/15 group-hover:text-[#4ea8af] text-zinc-700 flex items-center justify-center mb-3 transition-colors">
                      <User className="w-6 h-6" />
                    </div>
                    <h4 className="font-extrabold text-zinc-900 text-base group-hover:text-[#4ea8af] transition-colors">
                      Solo / Solitario
                    </h4>
                    <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                      Ruedo solo. Necesito escuchar Waze / Google Maps, escuchar música en carretera y atender llamadas con manos libres.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#4ea8af] group-hover:translate-x-1 transition-transform">
                    <span>Seleccionar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                <button
                  onClick={() => handleSelectRidingStyle('pillion')}
                  className="p-5 rounded-2xl bg-white border-2 border-zinc-200 hover:border-[#6bb8be] hover:bg-[#6bb8be]/5 text-left transition-all group flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-[#6bb8be]/10 cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 group-hover:bg-[#6bb8be]/15 group-hover:text-[#4ea8af] text-zinc-700 flex items-center justify-center mb-3 transition-colors">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="font-extrabold text-zinc-900 text-base group-hover:text-[#4ea8af] transition-colors">
                      Con Parrillero / Pareja
                    </h4>
                    <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                      Suelo viajar con mi pareja o acompañante. Queremos conversar fluido sin gritar y compartir música.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#4ea8af] group-hover:translate-x-1 transition-transform">
                    <span>Seleccionar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                <button
                  onClick={() => handleSelectRidingStyle('group')}
                  className="p-5 rounded-2xl bg-white border-2 border-zinc-200 hover:border-[#6bb8be] hover:bg-[#6bb8be]/5 text-left transition-all group flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-[#6bb8be]/10 cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 group-hover:bg-[#6bb8be]/15 group-hover:text-[#4ea8af] text-zinc-700 flex items-center justify-center mb-3 transition-colors">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="font-extrabold text-zinc-900 text-base group-hover:text-[#4ea8af] transition-colors">
                      En Grupo / Motoclub
                    </h4>
                    <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                      Salgo en caravana o grupo de 4 a 10+ motos. Requiero gran alcance (más de 1 km) y reconexión automática en ruta.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#4ea8af] group-hover:translate-x-1 transition-transform">
                    <span>Seleccionar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Camera Needs */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center sm:text-left">
                <span className="text-xs font-mono text-[#4ea8af] font-bold uppercase tracking-wider block mb-1">Paso 2 de 3</span>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-900">¿Buscas cámara integrada para grabar tus rutas?</h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Grabar en ruta sirve tanto para vlogs como para seguridad vial ante cualquier eventualidad.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => handleSelectCamera(true)}
                  className="p-6 rounded-2xl bg-white border-2 border-zinc-200 hover:border-[#6bb8be] hover:bg-[#6bb8be]/5 text-left transition-all group flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-[#6bb8be]/10 cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 flex items-center justify-center mb-3">
                      <Camera className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-zinc-900 text-lg group-hover:text-[#4ea8af] transition-colors">
                        Sí, quiero cámara (HD o 2K QHD)
                      </h4>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 font-bold">2 en 1</span>
                    </div>
                    <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                      Deseo registrar paisajes, crear contenido para Instagram/TikTok o tener una dashcam de seguridad vial en mi casco sin cables adicionales.
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-xs font-bold text-[#4ea8af] group-hover:translate-x-1 transition-transform">
                    <span>Continuar con Cámara</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                <button
                  onClick={() => handleSelectCamera(false)}
                  className="p-6 rounded-2xl bg-white border-2 border-zinc-200 hover:border-[#6bb8be] hover:bg-[#6bb8be]/5 text-left transition-all group flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-[#6bb8be]/10 cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#6bb8be]/15 text-[#4ea8af] border border-[#6bb8be]/30 flex items-center justify-center mb-3">
                      <Volume2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-extrabold text-zinc-900 text-lg group-hover:text-[#4ea8af] transition-colors">
                      No, solo audio y comunicación
                    </h4>
                    <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                      Priorizo peso ultra liviano, máxima duración de batería (hasta 28h) y el mejor audio posible para llamadas, música y GPS.
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-xs font-bold text-[#4ea8af] group-hover:translate-x-1 transition-transform">
                    <span>Continuar solo Audio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>

              <div className="flex justify-start">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors font-semibold cursor-pointer"
                >
                  ← Volver al paso anterior
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Budget Range */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="text-center sm:text-left">
                <span className="text-xs font-mono text-[#4ea8af] font-bold uppercase tracking-wider block mb-1">Paso 3 de 3</span>
                <h3 className="text-xl sm:text-2xl font-black text-zinc-900">¿Qué rango de presupuesto buscas?</h3>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">Precios oficiales en USD con entrega en Venezuela.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => handleSelectBudget('budget')}
                  className="p-5 rounded-2xl bg-white border-2 border-zinc-200 hover:border-[#6bb8be] hover:bg-[#6bb8be]/5 text-left transition-all group flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-[#6bb8be]/10 cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-700 flex items-center justify-center mb-3">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-zinc-500 block">$28 - $50 USD</span>
                    <h4 className="font-extrabold text-zinc-900 text-base group-hover:text-[#4ea8af] transition-colors mt-0.5">
                      Económico y Guerrero
                    </h4>
                    <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                      Excelente rendimiento al menor precio. Ideal para empezar o uso urbano diario de trabajo.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#4ea8af] group-hover:translate-x-1 transition-transform">
                    <span>Elegir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                <button
                  onClick={() => handleSelectBudget('mid')}
                  className="p-5 rounded-2xl bg-white border-2 border-zinc-200 hover:border-[#6bb8be] hover:bg-[#6bb8be]/5 text-left transition-all group flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-[#6bb8be]/10 cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#6bb8be]/15 text-[#4ea8af] border border-[#6bb8be]/30 flex items-center justify-center mb-3">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#4ea8af] block">$65 - $95 USD</span>
                    <h4 className="font-extrabold text-zinc-900 text-base group-hover:text-[#4ea8af] transition-colors mt-0.5">
                      Gama Media Equilibrada
                    </h4>
                    <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                      El balance perfecto entre mayor alcance, ergonomía para guantes y compartir música.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#4ea8af] group-hover:translate-x-1 transition-transform">
                    <span>Elegir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                <button
                  onClick={() => handleSelectBudget('premium')}
                  className="p-5 rounded-2xl bg-white border-2 border-zinc-200 hover:border-[#6bb8be] hover:bg-[#6bb8be]/5 text-left transition-all group flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-[#6bb8be]/10 cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-600 border border-amber-500/30 flex items-center justify-center mb-3">
                      <span className="text-xl">👑</span>
                    </div>
                    <span className="text-xs font-bold text-amber-700 block">$115 - $160 USD</span>
                    <h4 className="font-extrabold text-zinc-900 text-base group-hover:text-[#4ea8af] transition-colors mt-0.5">
                      Tope de Gama / Pro
                    </h4>
                    <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                      Lo mejor de lo mejor: Conexión Mesh 10 motos, cámaras 2K, impermeabilidad IP67 y sonido Hi-Fi afinado.
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#4ea8af] group-hover:translate-x-1 transition-transform">
                    <span>Elegir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>

              <div className="flex justify-start">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors font-semibold cursor-pointer"
                >
                  ← Volver al paso anterior
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: RESULT CARD */}
          {step === 4 && recommendedProduct && (
            <div className="space-y-6 animate-in zoom-in-95 duration-400">
              <div className="p-4 rounded-2xl bg-[#6bb8be]/15 border border-[#6bb8be]/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="font-black text-zinc-900 text-base sm:text-lg">
                      ¡Tu Match Perfecto para las Rutas de Venezuela!
                    </h3>
                    <p className="text-xs text-zinc-600">
                      Calculado en base a tu modo de rodar ({ridingStyle}), requerimiento de cámara ({needsCamera ? 'Con Cámara' : 'Solo Audio'}) y presupuesto ({budget}).
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-zinc-600 hover:text-zinc-900 px-3.5 py-2 rounded-xl bg-white border border-zinc-300 hover:border-zinc-400 transition-colors shadow-xs cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir</span>
                </button>
              </div>

              {/* Recommended Product Card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white rounded-2xl p-5 sm:p-7 border-2 border-[#6bb8be]/40 shadow-xl">
                <div className="md:col-span-5 flex flex-col justify-center items-center bg-zinc-50 rounded-xl p-4 border border-zinc-200">
                  <ProductVisual productId={recommendedProduct.id} name={recommendedProduct.name} size="lg" />
                  <span className="mt-3 text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Disponible para despacho inmediato
                  </span>
                </div>

                <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#6bb8be]/20 text-[#4ea8af] border border-[#6bb8be]/40 uppercase tracking-wider">
                        {recommendedProduct.badge || 'Recomendado'}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">
                        {recommendedProduct.specs.waterproof} Impermeable
                      </span>
                    </div>

                    <h4 className="text-2xl font-black text-zinc-900">{recommendedProduct.name}</h4>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                      {recommendedProduct.description}
                    </p>

                    {/* Key specs highlight */}
                    <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                      <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200">
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold">Riders Simultáneos</span>
                        <strong className="text-zinc-900 font-black">{recommendedProduct.specs.maxRiders}</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200">
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold">Alcance en Ruta</span>
                        <strong className="text-zinc-900 font-black">{recommendedProduct.specs.range}</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200">
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold">Autonomía</span>
                        <strong className="text-emerald-600 font-black">{recommendedProduct.specs.batteryLife}</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200">
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold">Tecnología</span>
                        <strong className="text-[#4ea8af] font-black">{recommendedProduct.specs.bluetooth}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Price & Direct Actions */}
                  <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-zinc-500 block font-semibold">Precio Oficial Venezuela:</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-[#4ea8af]">${recommendedProduct.priceUSD} USD</span>
                        {recommendedProduct.originalPriceUSD && (
                          <span className="text-xs text-zinc-400 line-through">
                            ${recommendedProduct.originalPriceUSD}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => onAddToCart(recommendedProduct)}
                        className="fc-btn-teal flex-1 sm:flex-none py-3 px-6 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>AGREGAR AL PEDIDO</span>
                      </button>

                      <a
                        href={`https://wa.me/584121234567?text=Hola%20FreedConn%20Venezuela!%20Hice%20el%20test%20y%20mi%20resultado%20fue%20el%20*${encodeURIComponent(
                          recommendedProduct.name
                        )}*%20por%20$${recommendedProduct.priceUSD}%20USD.%20%C2%BFTienen%20disponibilidad%20para%20env%C3%ADo%20inmediato?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white transition-all shadow-md cursor-pointer hover:scale-105"
                        title="Pedir por WhatsApp"
                      >
                        <PhoneCall className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:hidden">
                <button
                  onClick={handleReset}
                  className="text-xs text-zinc-600 hover:text-zinc-900 flex items-center gap-1.5 transition-colors font-bold cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir el test con otras respuestas</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
