'use client';

import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, Truck, ShieldCheck, MapPin, CreditCard, ArrowRight } from 'lucide-react';
import { CartItem, CheckoutFormData } from '@/types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    phone: '',
    deliveryType: 'envio',
    courier: 'MRW',
    stateCity: '',
    shippingAddressOrAgency: '',
    paymentMethod: 'Pago Móvil (Bs)',
    notes: '',
  });

  const [formError, setFormError] = useState<string>('');

  const subtotalUSD = items.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);

  // Approximate Venezuelan BCV conversion or reference rate (e.g. standard exchange rate estimation)
  const approxBsRate = 60.5; // Referencial
  const approxTotalBs = (subtotalUSD * approxBsRate).toLocaleString('es-VE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError('');
  };

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) {
      setFormError('Tu carrito está vacío. Agrega un intercomunicador primero.');
      return;
    }

    if (!formData.fullName.trim()) {
      setFormError('Por favor ingresa tu Nombre y Apellido.');
      return;
    }

    if (formData.deliveryType === 'envio' && !formData.stateCity.trim()) {
      setFormError('Por favor indica tu Estado y Ciudad de destino.');
      return;
    }

    // Generate formatted WhatsApp message
    const storeWhatsAppNumber = '584121234567'; // FreedConn VE official number

    let itemsText = '';
    items.forEach((item, index) => {
      itemsText += `  ${index + 1}. *${item.product.name}* x${item.quantity} ($${item.product.priceUSD} c/u)\n`;
      if (item.selectedMicType) {
        itemsText += `     ↳ Micrófono: _${item.selectedMicType}_\n`;
      }
    });

    const deliveryDetail =
      formData.deliveryType === 'envio'
        ? `Envío Nacional vía *${formData.courier}*\n📍 *Destino / Agencia:* ${formData.stateCity} - ${
            formData.shippingAddressOrAgency || 'Agencia principal'
          }`
        : 'Retiro Personal (Caracas - Previa Coordinación)';

    const message =
      `🏍️ *¡HOLA FREEDCONN VENEZUELA! DESEO CONCRETAR ESTE PEDIDO* 🇻🇪\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Cliente:* ${formData.fullName.trim()}\n` +
      `📱 *Teléfono:* ${formData.phone.trim() || 'El de este WhatsApp'}\n` +
      `📦 *Entrega:* ${deliveryDetail}\n` +
      `💳 *Método de Pago:* *${formData.paymentMethod}*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🛒 *EQUIPOS SELECCIONADOS:*\n` +
      itemsText +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `💰 *TOTAL EN USD:* *$${subtotalUSD} USD*\n` +
      `💵 *Total Ref. en Bs:* ~${approxTotalBs} Bs\n` +
      (formData.notes.trim() ? `📝 *Observación:* ${formData.notes.trim()}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Quedo a la espera de los datos de pago para transferir y acordar el despacho. ¡Gracias! 🏍️💨`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${storeWhatsAppNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-lg bg-white border-l border-zinc-200 h-full flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#6bb8be] flex items-center justify-center text-white">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-zinc-900 text-base">Tu Carrito de Pedido</h3>
              <span className="text-[11px] text-zinc-500">
                {items.length} {items.length === 1 ? 'modelo seleccionado' : 'modelos seleccionados'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={onClearCart}
                className="text-xs text-zinc-400 hover:text-red-500 p-1.5 transition-colors cursor-pointer"
                title="Vaciar carrito"
              >
                Vaciar
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content: Items List + Form */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center mx-auto text-zinc-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-zinc-900 text-base">Aún no tienes equipos en el carrito</h4>
              <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                Explora el catálogo oficial o usa nuestro test recomendador para elegir tu FreedConn ideal.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-xl fc-btn-teal text-white font-bold text-xs cursor-pointer"
              >
                Ver Catálogo de Modelos
              </button>
            </div>
          ) : (
            <>
              {/* Product Items List */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block font-semibold">
                  Equipos en el Pedido:
                </span>
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-zinc-900 text-sm truncate">{item.product.name}</h4>
                        <span className="text-[10px] text-zinc-500 font-mono">
                          ${item.product.priceUSD}
                        </span>
                      </div>
                      {item.selectedMicType && (
                        <span className="text-[10px] text-[#4ea8af] block truncate font-semibold">
                          Mic: {item.selectedMicType}
                        </span>
                      )}
                      <span className="text-xs font-black text-zinc-900 mt-0.5 block">
                        ${item.product.priceUSD * item.quantity} USD
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-zinc-300 rounded-lg bg-white overflow-hidden shadow-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1.5 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-zinc-900">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-1.5 text-zinc-400 hover:text-red-500 transition-colors cursor-pointer"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fast Delivery & Payment Data Form */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
                <span className="text-xs font-bold text-zinc-900 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#4ea8af]" />
                  Datos para Despacho en Venezuela:
                </span>

                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-700 block mb-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6bb8be] focus:ring-1 focus:ring-[#6bb8be] shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-zinc-700 block mb-1">
                      Número de WhatsApp / Contacto
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ej. 0412 123 4567"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6bb8be] focus:ring-1 focus:ring-[#6bb8be] shadow-xs"
                    />
                  </div>

                  {/* Delivery Type */}
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-700 block mb-1">
                      Tipo de Entrega
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, deliveryType: 'envio' }))}
                        className={`p-2 rounded-xl text-xs font-semibold border-2 transition-all cursor-pointer ${
                          formData.deliveryType === 'envio'
                            ? 'bg-[#6bb8be]/10 border-[#6bb8be] text-zinc-900 font-bold shadow-xs'
                            : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300'
                        }`}
                      >
                        🚚 Envío Nacional
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, deliveryType: 'retiro' }))}
                        className={`p-2 rounded-xl text-xs font-semibold border-2 transition-all cursor-pointer ${
                          formData.deliveryType === 'retiro'
                            ? 'bg-[#6bb8be]/10 border-[#6bb8be] text-zinc-900 font-bold shadow-xs'
                            : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300'
                        }`}
                      >
                        📍 Retiro en Caracas
                      </button>
                    </div>
                  </div>

                  {/* If Shipping */}
                  {formData.deliveryType === 'envio' && (
                    <div className="space-y-3 pt-1 border-t border-zinc-200 animate-in fade-in">
                      <div>
                        <label className="text-[11px] font-semibold text-zinc-700 block mb-1">
                          Empresa de Encomienda Preferida
                        </label>
                        <select
                          name="courier"
                          value={formData.courier}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-[#6bb8be] focus:ring-1 focus:ring-[#6bb8be] shadow-xs cursor-pointer"
                        >
                          <option value="MRW">MRW (Cobro a Destino)</option>
                          <option value="Zoom">ZOOM (Asegurado)</option>
                          <option value="Tealca">Tealca</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-zinc-700 block mb-1">
                          Estado y Ciudad de Destino *
                        </label>
                        <input
                          type="text"
                          name="stateCity"
                          value={formData.stateCity}
                          onChange={handleInputChange}
                          placeholder="Ej. Carabobo, Valencia / Zulia, Maracaibo"
                          className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6bb8be] focus:ring-1 focus:ring-[#6bb8be] shadow-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-semibold text-zinc-700 block mb-1">
                          Agencia Receptora o Dirección de Entrega
                        </label>
                        <input
                          type="text"
                          name="shippingAddressOrAgency"
                          value={formData.shippingAddressOrAgency}
                          onChange={handleInputChange}
                          placeholder="Ej. Agencia MRW Los Colorados / Zoom Chacao"
                          className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6bb8be] focus:ring-1 focus:ring-[#6bb8be] shadow-xs"
                        />
                      </div>
                    </div>
                  )}

                  {/* Payment Method */}
                  <div className="pt-1 border-t border-zinc-200">
                    <label className="text-[11px] font-semibold text-zinc-700 block mb-1">
                      Método de Pago Preferido:
                    </label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-300 text-xs text-zinc-900 focus:outline-none focus:border-[#6bb8be] focus:ring-1 focus:ring-[#6bb8be] shadow-xs cursor-pointer"
                    >
                      <option value="Pago Móvil (Bs)">Pago Móvil en Bolívares (Tasa Oficial)</option>
                      <option value="Zelle ($)">Zelle en Dólares ($)</option>
                      <option value="Binance Pay (USDT)">Binance Pay (USDT)</option>
                      <option value="Efectivo USD">Efectivo en Dólares (Retiros)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-zinc-700 block mb-1">
                      Notas adicionales (opcional)
                    </label>
                    <input
                      type="text"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Ej. Necesito que llegue antes del viernes"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-zinc-300 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#6bb8be] focus:ring-1 focus:ring-[#6bb8be] shadow-xs"
                    />
                  </div>
                </div>

                {formError && (
                  <p className="text-xs text-red-600 font-medium bg-red-50 border border-red-200 p-2.5 rounded-xl">
                    ⚠️ {formError}
                  </p>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer with Total and WhatsApp Checkout Button */}
        {items.length > 0 && (
          <div className="p-5 border-t border-zinc-200 bg-zinc-50/90 space-y-3">
            <div className="space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-zinc-500 font-semibold">Total a pagar:</span>
                <span className="text-2xl font-black text-zinc-900">${subtotalUSD} USD</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-zinc-500">
                <span>Referencial en Bolívares:</span>
                <span className="font-mono text-[#2d7d84] font-bold">~{approxTotalBs} Bs</span>
              </div>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm tracking-wide shadow-xl shadow-[#25D366]/30 transition-all flex items-center justify-center gap-2 group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span>FINALIZAR PEDIDO POR WHATSAPP</span>
            </button>

            <p className="text-[10px] text-center text-zinc-500 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              Atención oficial inmediata con número de guía oficial
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
