'use client';

import React from 'react';
import { FileText, CheckCircle2, MapPin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full relative z-20">
      {/* Reference Section: .bottom (#000 background) */}
      <section className="bottom bg-black text-white py-12 px-4 sm:px-6 lg:px-12 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          
          {/* Reference Pill Button: TYC SIN RODEOS */}
          <div className="mb-10">
            <a
              href="#soporte"
              className="inline-flex items-center gap-2 bg-[#38b6ff] hover:bg-[#1a9be6] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-lg shadow-[#38b6ff]/30 transition-all hover:-translate-y-0.5 tracking-wide uppercase"
            >
              <FileText className="w-4 h-4" />
              <span>TYC SIN RODEOS</span>
            </a>
          </div>

          {/* Reference 4-column Grid: .moduletable_bo1 */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-xs sm:text-sm text-zinc-300">
            
            {/* 1. Términos y condiciones */}
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#6bb8be]" />
              <a href="#soporte" className="hover:text-[#6bb8be] transition-colors">
                Términos y condiciones
              </a>
            </div>

            {/* 2. Location */}
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#6bb8be]" />
              <span>Caracas, Venezuela • Envíos a todo el país</span>
            </div>

            {/* 3. Email */}
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-[#6bb8be]" />
              <a href="mailto:contacto@freedconn.ve" className="hover:text-[#6bb8be] transition-colors">
                contacto@freedconn.ve
              </a>
            </div>

            {/* 4. Social Media Circles matching reference */}
            <div className="flex items-center justify-center gap-3">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@freedconn.ve"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok FreedConn Venezuela"
                className="w-7 h-7 rounded-full border border-white hover:border-[#6bb8be] hover:text-[#6bb8be] text-white flex items-center justify-center text-xs transition-colors hover:scale-110"
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
                className="w-7 h-7 rounded-full border border-white hover:border-[#6bb8be] hover:text-[#6bb8be] text-white flex items-center justify-center text-xs transition-colors hover:scale-110"
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
                className="w-7 h-7 rounded-full border border-white hover:border-[#6bb8be] hover:text-[#6bb8be] text-white flex items-center justify-center text-xs transition-colors hover:scale-110"
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
                className="w-7 h-7 rounded-full border border-white hover:border-[#6bb8be] hover:text-[#6bb8be] text-white flex items-center justify-center text-xs transition-colors hover:scale-110"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 576 512">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Reference Section: .copyright (#000 background) */}
      <div className="copyright bg-black text-center py-6 text-xs text-zinc-400 border-t border-zinc-900">
        <p>
          &copy; 2026{' '}
          <a href="#inicio" className="text-white hover:text-[#6bb8be] font-semibold transition-colors">
            FreedConn Venezuela
          </a>
          . Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
