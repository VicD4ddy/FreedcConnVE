import React from 'react';

interface ProductVisualProps {
  productId: string;
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  productId,
  name,
  className = '',
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-32',
    md: 'h-48',
    lg: 'h-64',
  }[size];

  // Specific visual styling per model
  const renderHardware = () => {
    switch (productId) {
      case 'fx-pro':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Ambient backlight */}
            <div className="absolute w-36 h-36 bg-orange-600/20 rounded-full blur-2xl animate-pulse" />
            {/* Device Body */}
            <div className="relative w-44 h-24 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-2xl border-2 border-orange-500/50 shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-1 bg-gradient-to-l from-orange-500 to-transparent" />
              {/* Carbon pattern overlay */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ff5500_1px,transparent_1px)] [background-size:8px_8px]" />
              
              {/* Top Row: Brand & Mesh Badge */}
              <div className="flex justify-between items-center z-10">
                <span className="text-[10px] font-black tracking-widest text-orange-400">FREEDCONN</span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  MESH 10
                </span>
              </div>

              {/* Center: Jog Wheel & Status LED */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-950 via-zinc-800 to-zinc-700 border-2 border-orange-500 flex items-center justify-center shadow-lg relative">
                    <div className="w-3 h-3 rounded-full bg-orange-500 animate-ping opacity-75 absolute" />
                    <div className="w-3 h-3 rounded-full bg-orange-500 relative" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black text-white">FX PRO</span>
                    <span className="text-[8px] text-zinc-400 font-mono">BT 5.4 DUAL</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-semibold text-emerald-400 block">IP67</span>
                  <span className="text-[8px] text-zinc-400">1.500m</span>
                </div>
              </div>

              {/* Bottom detail bar */}
              <div className="flex justify-between items-center z-10 border-t border-zinc-800/80 pt-1 text-[8px] text-zinc-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" /> Hi-Fi JBL Tuned
                </span>
                <span className="font-mono text-orange-400">28h BATTERY</span>
              </div>
            </div>
          </div>
        );

      case 'r3-2k':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl" />
            <div className="relative w-44 h-24 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-2xl border-2 border-emerald-500/50 shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden">
              {/* Camera Lens Highlight on the left */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-zinc-950 border-4 border-emerald-500/80 shadow-inner flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-950 via-emerald-950 to-blue-900 border border-emerald-400/60 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-400/80 animate-pulse" />
                </div>
              </div>

              {/* Top details */}
              <div className="flex justify-between items-center pl-10 z-10">
                <span className="text-[10px] font-black tracking-wider text-emerald-400">R3 2K QHD</span>
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  WIFI APP
                </span>
              </div>

              {/* Center */}
              <div className="pl-10 z-10 flex flex-col">
                <span className="text-[12px] font-bold text-white tracking-wide">DASHCAM + INTERCOM</span>
                <span className="text-[8px] text-zinc-400">Lente 140° Gran Angular • 6 Riders</span>
              </div>

              {/* Bottom */}
              <div className="flex justify-between items-center z-10 border-t border-zinc-800 pt-1 text-[8px] pl-10">
                <span className="text-zinc-400">2000 mAh</span>
                <span className="text-emerald-400 font-bold">1440p @ 30FPS</span>
              </div>
            </div>
          </div>
        );

      case 'r1-plus':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-orange-600/15 rounded-full blur-2xl" />
            <div className="relative w-44 h-24 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-2xl border border-zinc-700 shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center z-10">
                <span className="text-[10px] font-black text-orange-400">FREEDCONN</span>
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  FULL HD
                </span>
              </div>
              <div className="flex items-center gap-2 z-10">
                <div className="w-9 h-9 rounded-full bg-zinc-950 border-2 border-orange-500 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-zinc-900 to-orange-950 border border-orange-400" />
                </div>
                <div>
                  <span className="text-[12px] font-bold text-white block">R1 PLUS 1080P</span>
                  <span className="text-[8px] text-zinc-400">6 Pilotos • 1000m • Wi-Fi</span>
                </div>
              </div>
              <div className="flex justify-between items-center z-10 border-t border-zinc-800 pt-1 text-[8px] text-zinc-400">
                <span>Loop Recording</span>
                <span className="text-orange-400 font-bold">1500 mAh</span>
              </div>
            </div>
          </div>
        );

      case 't-max-s-pro':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-blue-500/15 rounded-full blur-2xl" />
            <div className="relative w-44 h-24 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-2xl border border-blue-500/40 shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center z-10">
                <span className="text-[10px] font-black text-blue-400">T-MAX S PRO</span>
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  JOG WHEEL XL
                </span>
              </div>
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  {/* Big Jog wheel */}
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-zinc-950 via-zinc-800 to-zinc-700 border-2 border-blue-400 flex items-center justify-center shadow-lg">
                    <div className="w-5 h-5 rounded-full border border-blue-400/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-white block">RUEDA GIGANTE</span>
                    <span className="text-[8px] text-zinc-400">Control con Guantes</span>
                  </div>
                </div>
                <div className="text-right text-[8px] text-zinc-400">
                  <span className="block text-blue-400 font-bold">6 RIDERS</span>
                  <span>1.200 Metros</span>
                </div>
              </div>
              <div className="flex justify-between items-center z-10 border-t border-zinc-800 pt-1 text-[8px] text-zinc-400">
                <span>Radio FM Digital</span>
                <span className="text-blue-400">IP65 Resistente</span>
              </div>
            </div>
          </div>
        );

      case 'ky-pro':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-purple-500/15 rounded-full blur-2xl" />
            <div className="relative w-44 h-24 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-2xl border border-purple-500/40 shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center z-10">
                <span className="text-[10px] font-black text-purple-400">KY-PRO</span>
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  MUSIC SHARE
                </span>
              </div>
              <div className="z-10 flex flex-col">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-purple-400">🎵</span>
                  <span className="text-[12px] font-bold text-white">Música en Pareja</span>
                </div>
                <span className="text-[8px] text-zinc-400">Comparte tu playlist con tu copiloto</span>
              </div>
              <div className="flex justify-between items-center z-10 border-t border-zinc-800 pt-1 text-[8px] text-zinc-400">
                <span>6 Motos • 1.000m</span>
                <span className="text-purple-400 font-bold">12h Batería</span>
              </div>
            </div>
          </div>
        );

      case 't-com-sc':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-orange-500/15 rounded-full blur-2xl" />
            <div className="relative w-44 h-24 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-2xl border-2 border-orange-500 shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center z-10">
                <span className="text-[10px] font-black text-orange-400">T-COM SC</span>
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-orange-500/30 text-orange-300 border border-orange-500/50">
                  TOP VENTAS VE
                </span>
              </div>
              {/* LCD Display Representation */}
              <div className="z-10 bg-emerald-950/70 border border-emerald-500/60 rounded px-2 py-1 flex items-center justify-between font-mono">
                <div className="flex items-center gap-1 text-[9px] text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>BT ON</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-200">102.5 FM</span>
                <div className="text-[8px] text-emerald-300 border border-emerald-400/50 px-1 rounded">
                  [||||]
                </div>
              </div>
              <div className="flex justify-between items-center z-10 border-t border-zinc-800 pt-1 text-[8px] text-zinc-400">
                <span>Piloto + Copiloto (800m)</span>
                <span className="text-orange-400 font-bold">PANTALLA LCD</span>
              </div>
            </div>
          </div>
        );

      case 't-com-vb':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-44 h-24 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-2xl border border-zinc-700 shadow-xl p-2.5 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center z-10">
                <span className="text-[10px] font-black text-zinc-300">T-COM VB</span>
                <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                  CALIDAD / PRECIO
                </span>
              </div>
              <div className="flex items-center gap-2 z-10">
                <div className="w-8 h-8 rounded-full bg-zinc-950 border border-zinc-600 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-white block">EL GUERRERO</span>
                  <span className="text-[8px] text-zinc-400">800m • 2-3 Riders</span>
                </div>
              </div>
              <div className="flex justify-between items-center z-10 border-t border-zinc-800 pt-1 text-[8px] text-zinc-400">
                <span>Resistente al agua</span>
                <span className="text-zinc-300 font-bold">10h Pila</span>
              </div>
            </div>
          </div>
        );

      case 'kit-audio-repuesto':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-44 h-24 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-2xl border border-cyan-500/40 shadow-xl p-2.5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-cyan-400">REPUESTO OFICIAL</span>
                <span className="text-[8px] text-zinc-400">Universal FreedConn</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-950 border-2 border-cyan-400 flex items-center justify-center text-[10px] font-bold text-cyan-300">
                  40mm
                </div>
                <div className="w-9 h-9 rounded-full bg-zinc-950 border-2 border-cyan-400 flex items-center justify-center text-[10px] font-bold text-cyan-300">
                  40mm
                </div>
                <div className="h-6 w-1 bg-cyan-400 rounded-full" />
              </div>
              <div className="text-[8px] text-center text-zinc-400 border-t border-zinc-800 pt-1">
                Altavoces Hi-Res + 2 Micrófonos (Varilla + Cable)
              </div>
            </div>
          </div>
        );

      case 'clip-metalico-base':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-44 h-24 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black rounded-2xl border border-zinc-600 shadow-xl p-2.5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-zinc-300">CLIP METÁLICO</span>
                <span className="text-[8px] text-emerald-400 font-bold">ALUMINIO CNC</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-16 h-8 bg-zinc-700/80 rounded border-2 border-zinc-400 flex items-center justify-center shadow-inner">
                  <span className="text-[9px] font-black text-zinc-200">FREEDCONN</span>
                </div>
                <div className="w-6 h-6 bg-red-600/70 rounded border border-red-400 flex items-center justify-center text-[8px] font-bold text-white">
                  3M
                </div>
              </div>
              <div className="text-[8px] text-center text-zinc-400 border-t border-zinc-800 pt-1">
                Sujeción de Alta Resistencia anti-vibración
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-40 h-24 bg-zinc-800 rounded-xl border border-zinc-700 flex items-center justify-center text-xs text-zinc-400">
              {name}
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`w-full ${heightClasses} bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 rounded-xl flex items-center justify-center border border-zinc-800/80 relative overflow-hidden group-hover:border-orange-500/40 transition-colors ${className}`}
    >
      {renderHardware()}
    </div>
  );
};
