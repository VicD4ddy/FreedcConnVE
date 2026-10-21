'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Sparkles,
} from 'lucide-react';

interface OfficialBannersSliderProps {
  onOpenQuiz?: () => void;
}

export const OfficialBannersSlider: React.FC<OfficialBannersSliderProps> = ({ onOpenQuiz }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Slides array: First slide is the official 1080p action video, followed by the 4 official intercom models
  const slides = [
    {
      id: 'mesh-video',
      type: 'video' as const,
      videoSrc: '/videos/hero-freedconn-mesh.mp4',
      poster: '/images/intercom/fxpronueva.jpg',
      title: 'Vive la experiencia en Venezuela',
      subtitle: 'Tecnología FreedConn MESH y Bluetooth de alto desempeño',
      name: 'FreedConn MESH',
      link: '#catalogo',
    },
    {
      id: 'fx-pro',
      type: 'image' as const,
      image: '/images/intercom/fxpronueva.jpg',
      alt: 'FreedConn FX Pro con Tecnología Mesh - Distribuidor Oficial Venezuela',
      name: 'FX PRO',
      tagline: 'Tecnología Mesh 10 Riders',
      link: '#catalogo',
    },
    {
      id: 'hero-51',
      type: 'image' as const,
      image: '/images/intercom/HEROnueva.jpg',
      alt: 'FreedConn HERO 5.1 Bluetooth - Distribuidor Oficial Venezuela',
      name: 'HERO 5.1',
      tagline: 'Bluetooth de Alto Desempeño',
      link: '#catalogo',
    },
    {
      id: 'r3-2k',
      type: 'image' as const,
      image: '/images/intercom/r3pronueva.jpg',
      alt: 'FreedConn R3 Pro Intercomunicador con Cámara 2K QHD - Distribuidor Oficial Venezuela',
      name: 'R3 PRO',
      tagline: 'Intercomunicador con Cámara 2K',
      link: '#catalogo',
    },
    {
      id: 'l1-plus',
      type: 'image' as const,
      image: '/images/intercom/L1plusnueva.jpg',
      alt: 'FreedConn L1 Plus Audífonos Ultra Slim para Casco - Distribuidor Oficial Venezuela',
      name: 'L1 PLUS',
      tagline: 'Audífonos Ultra Slim para Casco',
      link: '#catalogo',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Video playback management when switching slides
  useEffect(() => {
    if (videoRef.current) {
      if (currentSlide === 0) {
        videoRef.current.play().catch(() => {
          // Autoplay policy fallback
        });
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [currentSlide]);

  // Auto-advance timer: ONLY advances automatically when viewing static images (slides > 0),
  // NEVER cuts off the video while watching slide 0.
  useEffect(() => {
    if (currentSlide === 0 || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused, nextSlide]);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="banner relative w-full overflow-hidden bg-black select-none z-10 flex items-center justify-center"
      id="inicio"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      aria-label="Carrusel y Video Oficial FreedConn"
      style={{
        // Full screen height below sticky header (58px), preserving widescreen 16:9 ratio
        height: 'min(56.25vw, calc(100dvh - 58px))',
        minHeight: '260px',
        maxHeight: '1080px',
      }}
    >
      {/* 16:9 Full Screen Frame */}
      <div className="relative w-full h-full mx-auto flex items-center justify-center">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {slide.type === 'video' ? (
              /* --- SLIDE 1: Official 1080p FreedConn Action Video --- */
              <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={slide.videoSrc}
                  poster={slide.poster}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle cinematic gradient for overlay contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                {/* Left Floating Content - elevated position without badge */}
                <div className="absolute bottom-10 sm:bottom-16 md:bottom-24 lg:bottom-28 left-4 sm:left-10 md:left-16 z-20 max-w-xl space-y-3 sm:space-y-4 pointer-events-auto">
                  <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tight drop-shadow-2xl leading-tight">
                    Vive la experiencia <br className="hidden sm:inline" />
                    <span className="text-[#6bb8be]">en Venezuela</span>
                  </h1>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-200 font-medium drop-shadow max-w-md hidden sm:block">
                    {slide.subtitle}
                  </p>

                  <div className="flex items-center gap-2 sm:gap-3 pt-1">
                    <a
                      href="#catalogo"
                      className="fc-btn-teal text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-wider py-2 sm:py-2.5 px-4 sm:px-6 shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      <span>Ver Catálogo</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>

                    {onOpenQuiz && (
                      <button
                        type="button"
                        onClick={onOpenQuiz}
                        className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[10px] bg-black/60 hover:bg-black/80 text-white border border-white/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer shadow-lg"
                      >
                        ¿Cuál elegir? Test
                      </button>
                    )}
                  </div>
                </div>

                {/* Top/Right Floating Video Controls: Mute/Unmute & Play/Pause */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-[#6bb8be] text-white border border-white/30 hover:border-[#6bb8be] backdrop-blur-md transition-all shadow-xl cursor-pointer hover:scale-110 active:scale-95"
                    title={isMuted ? 'Activar sonido' : 'Silenciar'}
                    aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>

                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-[#6bb8be] text-white border border-white/30 hover:border-[#6bb8be] backdrop-blur-md transition-all shadow-xl cursor-pointer hover:scale-110 active:scale-95"
                    title={isPlaying ? 'Pausar video' : 'Reproducir video'}
                    aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                </div>
              </div>
            ) : (
              /* --- SLIDES 2-5: The 4 Official Intercom Model Banners --- */
              <div className="relative w-full h-full flex items-center justify-center bg-black">
                <a
                  href={slide.link}
                  className="block relative w-full h-full cursor-pointer group"
                  title={`${slide.name} - Ver catálogo oficial`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes="100vw"
                    className="object-contain object-center"
                  />

                  {/* Action Button in bottom-left open area */}
                  <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-3 sm:left-6 md:left-8 z-20 flex items-center gap-2 sm:gap-3">
                    <span className="fc-btn-teal text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-wider py-1.5 sm:py-2.5 px-3 sm:px-5 shadow-xl flex items-center gap-1.5 group-hover:scale-105 transition-transform">
                      <span>Conocer {slide.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>

                    {onOpenQuiz && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onOpenQuiz();
                        }}
                        className="hidden sm:inline-flex px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-[10px] bg-black/70 hover:bg-black/90 text-white border border-white/30 text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
                      >
                        ¿Cuál elegir? Test
                      </button>
                    )}
                  </div>
                </a>
              </div>
            )}
          </div>
        ))}

        {/* Slide Indicators / Dots */}
        <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 sm:gap-2 bg-black/75 px-3 py-1 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(idx);
              }}
              className="p-1 sm:p-1.5 flex items-center justify-center cursor-pointer transition-all"
              aria-label={`Ir al slide ${idx + 1}: ${slide.name}`}
            >
              <span
                className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 flex items-center justify-center ${
                  currentSlide === idx
                    ? 'w-7 sm:w-10 bg-[#6bb8be] shadow-md shadow-[#6bb8be]/50'
                    : 'w-2.5 sm:w-3 bg-white/50 hover:bg-white/80'
                }`}
              >
                {slide.type === 'video' && currentSlide === idx && (
                  <span className="text-[8px] text-black font-extrabold leading-none">HD</span>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Previous Arrow (<) on screen edge */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-[#6bb8be] text-white flex items-center justify-center transition-all duration-200 border border-white/30 hover:border-[#6bb8be] shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-90 touch-manipulation"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Next Arrow (>) on screen edge */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-[#6bb8be] text-white flex items-center justify-center transition-all duration-200 border border-white/30 hover:border-[#6bb8be] shadow-2xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-90 touch-manipulation"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </section>
  );
};
