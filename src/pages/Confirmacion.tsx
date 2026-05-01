import React, { useState, useRef } from 'react';
import FloatingAstronaut from '../components/FloatingAstronaut';

export default function Confirmacion() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const handleMouseEnter = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 1000);
  };
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage: "url('/images/fondo-estatico.png')"
      }}
    >
      <div className="max-w-4xl w-full">
        {/* Contenedor principal con efecto Liquid Glass OSCURO */}
        <div className="backdrop-blur-2xl bg-black/40 border border-white/10 rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/10 p-8 md:p-12">
          
          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center mb-8">
            Tu llamada está{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-shimmer">
                confirmada
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-bg"></span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Gracias por agendar.
            Va a ser un espacio corto, pero muy útil para entender cómo llevar tu negocio al siguiente nivel. 🚀
          </p>

          {/* Sección: Qué vas a ver exactamente */}
          <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Qué vas a ver exactamente
            </h2>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>Qué está frenando el crecimiento o la eficiencia de tu negocio</li>
              <li>Qué podrías automatizar para simplificar tu operación</li>
              <li>Cómo se vería todo funcionando de forma más clara con Webster</li>
            </ul>
          </div>

          {/* Sección: Antes de la llamada, mira esto */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Antes de la llamada, mira esto
            </h2>

            <div 
            className="overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm bg-black/30 relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={showControlsTemporarily}
          >
              <video 
                ref={videoRef}
                className="aspect-video w-full object-cover"
                autoPlay
                muted={isMuted}
                loop
                playsInline
              >
                <source src="/images/Confirmación - final.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
              
              {/* Controles de video */}
              <div className={`absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-lg p-2 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                <button
                  onClick={togglePlayPause}
                  className="text-white hover:text-blue-400 transition-colors p-2 rounded"
                  aria-label={isPlaying ? "Pausar" : "Reproducir"}
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
                
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-blue-400 transition-colors p-2 rounded"
                  aria-label={isMuted ? "Activar audio" : "Silenciar"}
                >
                  {isMuted ? (
                    <span className="text-white text-sm font-medium">Sonido</span>
                  ) : (
                    <span className="text-white text-sm font-medium">Sin sonido</span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Sección: Qué puedes esperar de Webster */}
          <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Qué puedes esperar de Webster
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              En Webster no creamos herramientas genéricas.
              Cada sistema se adapta a cómo funciona tu negocio, para que todo sea más claro, más ordenado y más fácil de operar.
            </p>
          </div>

          {/* Cierre */}
          <div className="text-center mt-12">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-shimmer">
                Nos vemos en la llamada
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-bg"></span>
            </span>
          </div>
        </div>
      </div>
      <FloatingAstronaut />
    </div>
  );
}