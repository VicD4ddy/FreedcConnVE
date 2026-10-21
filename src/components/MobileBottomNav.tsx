'use client';

import React from 'react';
import { Home, Sparkles, ShoppingBag, PhoneCall, ListOrdered } from 'lucide-react';

interface MobileBottomNavProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuiz: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuiz,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-zinc-200 py-2 px-3 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-4 items-center text-center">
        <a
          href="#catalogo"
          className="flex flex-col items-center gap-1 text-[10px] font-bold text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          <ListOrdered className="w-5 h-5 text-zinc-600" />
          <span>Modelos</span>
        </a>

        <button
          onClick={onOpenQuiz}
          className="flex flex-col items-center gap-1 text-[10px] font-bold text-[#4ea8af] hover:text-[#2d7d84] transition-colors cursor-pointer"
        >
          <Sparkles className="w-5 h-5 text-[#4ea8af] animate-pulse" />
          <span>Test</span>
        </button>

        <button
          onClick={onOpenCart}
          className="flex flex-col items-center gap-1 text-[10px] font-bold text-zinc-600 hover:text-zinc-900 transition-colors relative cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-zinc-600" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#6bb8be] text-white font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
                {cartCount}
              </span>
            )}
          </div>
          <span>Carrito {cartCount > 0 && `(${cartCount})`}</span>
        </button>

        <a
          href="https://wa.me/584121234567?text=Hola%20FreedConn%20Venezuela!%20Vengo%20desde%20Instagram%20y%20quiero%20información%20sobre%20los%20intercomunicadores."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[10px] font-bold text-[#25D366] hover:text-[#20ba59] transition-colors"
        >
          <PhoneCall className="w-5 h-5 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
