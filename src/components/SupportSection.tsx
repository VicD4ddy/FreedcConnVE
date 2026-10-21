'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, FileText, Video, PhoneCall, ShieldCheck, Wrench, CheckCircle } from 'lucide-react';
import { FAQS } from '@/data/faq';

export const SupportSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="soporte" className="py-16 sm:py-24 bg-white border-b border-zinc-200 relative overflow-hidden">
      {/* Subtle brand glow in background */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#6bb8be]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6bb8be]/15 border border-[#6bb8be]/30 text-xs font-bold text-[#4ea8af] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CENTRO DE SOPORTE & GARANTÍA OFICIAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
            Todo lo que Necesitas Saber
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Resolvemos las dudas más frecuentes sobre compatibilidad con tu casco, lluvia, envíos nacionales y garantía directa en Venezuela.
          </p>
        </div>

        {/* 3 Quick Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-[#6bb8be] hover:bg-white hover:shadow-xl transition-all space-y-3 group shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#6bb8be]/15 text-[#4ea8af] border border-[#6bb8be]/30 flex items-center justify-center transition-colors group-hover:bg-[#6bb8be] group-hover:text-white">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#4ea8af] transition-colors">Video Tutorial de Instalación</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Aprende a instalar los auriculares y micrófonos en cascos integrales o modulares en solo 5 minutos sin dañar tu casco.
            </p>
            <a
              href="https://wa.me/584121234567?text=Hola%20FreedConn%20Venezuela!%20Deseo%20el%20video%20tutorial%20de%20instalación"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4ea8af] hover:text-[#3d8c92] pt-1"
            >
              <span>Solicitar Guía en Video</span>
              <span>→</span>
            </a>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-[#6bb8be] hover:bg-white hover:shadow-xl transition-all space-y-3 group shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#6bb8be]/15 text-[#4ea8af] border border-[#6bb8be]/30 flex items-center justify-center transition-colors group-hover:bg-[#6bb8be] group-hover:text-white">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#4ea8af] transition-colors">Manuales en Español (PDF)</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Guías rápidas oficiales con combinaciones de botones para emparejar con teléfonos, radios FM y otras marcas (Sena, Cardo).
            </p>
            <a
              href="https://wa.me/584121234567?text=Hola%20FreedConn%20Venezuela!%20Necesito%20el%20manual%20en%20PDF%20de%20mi%20intercom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4ea8af] hover:text-[#3d8c92] pt-1"
            >
              <span>Descargar Manual PDF</span>
              <span>→</span>
            </a>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200 hover:border-[#25D366] hover:bg-white hover:shadow-xl transition-all space-y-3 group shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#20ba59] border border-[#25D366]/30 flex items-center justify-center transition-colors group-hover:bg-[#25D366] group-hover:text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#20ba59] transition-colors">Garantía Directa & Repuestos</h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              6 meses de garantía con reemplazo inmediato ante defectos y disponibilidad garantizada de clips, cables y micrófonos.
            </p>
            <a
              href="https://wa.me/584121234567?text=Hola%20FreedConn%20Venezuela!%20Quiero%20consultar%20sobre%20garantía%20y%20repuestos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#20ba59] hover:text-[#189647] pt-1"
            >
              <span>Soporte Oficial WhatsApp</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl bg-white border transition-all shadow-xs ${
                  isOpen ? 'border-[#6bb8be]/60 shadow-md ring-1 ring-[#6bb8be]/20' : 'border-zinc-200 hover:border-[#6bb8be]/40'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-zinc-900 hover:text-[#4ea8af] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${isOpen ? 'bg-[#6bb8be]' : 'bg-zinc-300'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#4ea8af]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#6bb8be]/10 via-zinc-50 to-[#6bb8be]/10 border border-[#6bb8be]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-black text-zinc-900">¿Aún tienes dudas sobre cuál modelo elegir?</h3>
            <p className="text-xs sm:text-sm text-zinc-600">
              Uno de nuestros asesores moteros te atiende en menos de 5 minutos por WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/584121234567?text=Hola%20FreedConn%20Venezuela!%20Tengo%20unas%20preguntas%20sobre%20los%20intercomunicadores%20para%20mi%20casco."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs tracking-wider transition-all shadow-lg shadow-[#25D366]/30 flex items-center gap-2 whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>HABLAR CON UN ASESOR EN VIVO</span>
          </a>
        </div>
      </div>
    </section>
  );
};
