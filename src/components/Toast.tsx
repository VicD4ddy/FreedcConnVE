'use client';

import React from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onOpenCart?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onOpenCart }) => {
  if (!message) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-[#6bb8be]/60 shadow-2xl backdrop-blur-md text-zinc-900 text-xs">
        <div className="w-8 h-8 rounded-xl bg-[#6bb8be] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[#6bb8be]/30">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div>
          <span className="font-bold block text-zinc-900">{message}</span>
          <span className="text-[10px] text-zinc-500">Listo en tu lista de pedido</span>
        </div>
        {onOpenCart && (
          <button
            onClick={onOpenCart}
            className="ml-2 px-3 py-1.5 rounded-lg fc-btn-teal text-white font-bold text-[11px] whitespace-nowrap cursor-pointer shadow-xs"
          >
            Ver Carrito
          </button>
        )}
      </div>
    </div>
  );
};
