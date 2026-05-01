import React, { useState, useRef } from 'react';
import FloatingAstronaut from '../components/FloatingAstronaut';
import Footer from '../components/Footer';
import { Play, Pause } from 'lucide-react';

export default function Confirmacion() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();
  const mobileTimeoutRef = useRef<NodeJS.Timeout>();

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

  const handleVideoTap = () => {
    // Mostrar controles inmediatamente
    setShowControls(true);
    
    // Limpiar timeout anterior si existe
    if (mobileTimeoutRef.current) {
      clearTimeout(mobileTimeoutRef.current);
    }
    
    // Ocultar controles después de 3 segundos
    mobileTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };
  return (
    <main 
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/images/fondo-estatico.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Contenido principal */}
      <div className="flex-1 flex items-center justify-center px-6 pt-12 pb-24">
          <div className="w-full max-w-4xl">
            {/* Contenedor principal con efecto Liquid Glass OSCURO */}
            <div className="relative z-10 backdrop-blur-2xl bg-black/40 border border-white/10 rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/10 p-8 md:p-12">
              
              {/* Título principal */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center mb-8 text-white">
                Tu llamada está{" "}
                <span className="relative inline-block">
                  <span className="relative z-20 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-shimmer">
                    confirmada
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-bg pointer-events-none z-0"></span>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 text-center mb-12 max-w-3xl mx-auto">
                Gracias por agendar.
                Va a ser un espacio corto, pero muy útil para entender cómo llevar tu negocio al siguiente nivel. 🚀
              </p>

              {/* Sección: Qué vas a ver exactamente */}
              <div className="relative z-10 backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                  Qué vas a ver exactamente
                </h2>

                <ul className="space-y-4 text-gray-200 text-lg">
                  <li>Qué está frenando el crecimiento o la eficiencia de tu negocio</li>
                  <li>Qué podrías automatizar para simplificar tu operación</li>
                  <li>Cómo se vería todo funcionando de forma más clara con Webster</li>
                </ul>
              </div>

              {/* Sección: Antes de la llamada, mira esto */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                  Antes de la llamada, mira esto
                </h2>

                <div 
                className="relative group overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm bg-black/30 z-20"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleVideoTap}
                onTouchStart={handleVideoTap}
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
                
                {/* Contenedor de controles - aparece con hover en desktop y con touch en móvil */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Botón de play/pause - esquina inferior izquierda */}
                  <div className={`absolute bottom-4 left-4 pointer-events-auto transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlayPause();
                      }}
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-black/45 backdrop-blur-md border border-white/30 text-white shadow-lg cursor-pointer transition-all hover:bg-white/20 hover:scale-105 z-30"
                      aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                      
                  {/* Control de sonido - esquina inferior derecha */}
                  <div className={`absolute bottom-4 right-4 pointer-events-auto transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      className="text-white hover:text-blue-400 transition-colors p-2 rounded bg-white/10 border border-white/30 cursor-pointer hover:bg-white/20 z-30"
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
              <div className="relative z-10 backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-8 mt-12">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                  Qué puedes esperar de Webster
                </h2>

                <p className="text-gray-200 text-lg leading-relaxed">
                  En Webster no creamos herramientas genéricas.
                  Cada sistema se adapta a cómo funciona tu negocio, para que todo sea más claro, más ordenado y más fácil de operar.
                </p>
              </div>

              {/* Cierre */}
              <div className="text-center mt-12">
                <span className="relative inline-block">
                  <span className="relative z-20 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-shimmer">
                    Nos vemos en la llamada
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-bg pointer-events-none z-0"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}