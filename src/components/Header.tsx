'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ChevronDown, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOpenQuiz }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full transition-all duration-300 z-50 sticky top-0 ${isScrolled ? 'shadow-2xl shadow-black/80' : ''}`}>
      {/* Top section matching .top in reference (#1a1a1a) */}
      <div className="bg-[#1a1a1a] border-b border-zinc-800/80 px-4 sm:px-6 lg:px-12 py-2.5">
        <div className="max-w-[1550px] mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Official FreedConn Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#inicio" className="inline-block group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/freedconn-logo.svg"
                alt="FreedConn Venezuela"
                title="FreedConn Venezuela"
                className="h-8 sm:h-9 w-auto brightness-110 drop-shadow group-hover:scale-105 transition-transform"
              />
            </a>
          </div>

          {/* Center: Mega Menu matching reference */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-white">
            <a
              href="#inicio"
              className="hover:text-[#6bb8be] transition-colors uppercase tracking-wide text-[13px]"
            >
              Inicio
            </a>

            {/* Dropdown: Vive La Experiencia */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-[#6bb8be] transition-colors uppercase tracking-wide text-[13px] py-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Vive La Experiencia</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-[#1a1a1a] border border-zinc-800 rounded-b-lg shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1">
                  <a
                    href="#compromisos"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-[#6bb8be]/20 hover:border-l-4 hover:border-[#6bb8be] transition-all"
                  >
                    Mundo FreedConn
                  </a>
                  <a
                    href="#productos"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-[#6bb8be]/20 hover:border-l-4 hover:border-[#6bb8be] transition-all"
                  >
                    Intercomunicadores
                  </a>
                  <a
                    href="#compromisos"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-[#6bb8be]/20 hover:border-l-4 hover:border-[#6bb8be] transition-all"
                  >
                    Nuestros Compromisos
                  </a>
                  <a
                    href="#soporte"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-[#6bb8be]/20 hover:border-l-4 hover:border-[#6bb8be] transition-all"
                  >
                    Garantía
                  </a>
                </div>
              )}
            </div>

            <a
              href="#distribuidores"
              className="hover:text-[#6bb8be] transition-colors uppercase tracking-wide text-[13px]"
            >
              Distribuidores Autorizados
            </a>

            <a
              href="#contacto"
              className="hover:text-[#6bb8be] transition-colors uppercase tracking-wide text-[13px]"
            >
              Contáctanos
            </a>

            {/* Quick Quiz Recommender Button */}
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6bb8be]/20 text-[#6bb8be] hover:bg-[#6bb8be]/30 border border-[#6bb8be]/40 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>¿Cuál elegir?</span>
            </button>
          </nav>

          {/* Right: Reference Social Icons + Shopping Cart */}
          <div className="flex items-center gap-3">
            {/* 4 Social Circles matching reference .top .moduletable_to3 */}
            <div className="hidden sm:flex items-center gap-2">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@freedconn.ve"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok FreedConn Venezuela"
                className="w-[26px] h-[26px] rounded-full border border-white/80 hover:border-[#6bb8be] hover:text-[#6bb8be] text-white flex items-center justify-center text-xs transition-colors hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/freedconn.ve/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook FreedConn Venezuela"
                className="w-[26px] h-[26px] rounded-full border border-white/80 hover:border-[#6bb8be] hover:text-[#6bb8be] text-white flex items-center justify-center text-xs transition-colors hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/freedconn.ve/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram FreedConn Venezuela"
                className="w-[26px] h-[26px] rounded-full border border-white/80 hover:border-[#6bb8be] hover:text-[#6bb8be] text-white flex items-center justify-center text-xs transition-colors hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@freedconn.ve"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube FreedConn Venezuela"
                className="w-[26px] h-[26px] rounded-full border border-white/80 hover:border-[#6bb8be] hover:text-[#6bb8be] text-white flex items-center justify-center text-xs transition-colors hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                </svg>
              </a>
            </div>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="Abrir carrito"
              className="relative p-2 rounded-lg bg-zinc-800/80 hover:bg-[#6bb8be]/20 text-white hover:text-[#6bb8be] transition-colors ml-1"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#6bb8be] text-black font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-zinc-800 text-white hover:text-[#6bb8be]"
              aria-label="Menu Móvil"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-zinc-800 space-y-2 animate-in fade-in slide-in-from-top-2">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold uppercase text-zinc-200 hover:text-[#6bb8be]"
            >
              Inicio
            </a>
            <a
              href="#productos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold uppercase text-zinc-200 hover:text-[#6bb8be]"
            >
              Intercomunicadores (Modelos)
            </a>
            <a
              href="#compromisos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold uppercase text-zinc-200 hover:text-[#6bb8be]"
            >
              Nuestros Compromisos
            </a>
            <a
              href="#distribuidores"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold uppercase text-zinc-200 hover:text-[#6bb8be]"
            >
              Distribuidores Autorizados
            </a>
            <a
              href="#distribuidor-form"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold uppercase text-zinc-200 hover:text-[#6bb8be]"
            >
              Quiero ser Distribuidor
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold uppercase text-zinc-200 hover:text-[#6bb8be]"
            >
              Contáctanos
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold text-[#6bb8be] bg-[#6bb8be]/10 border border-[#6bb8be]/30 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>¿Cuál elegir? Test de 30 segundos</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
