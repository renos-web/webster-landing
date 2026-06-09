import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacidad() {
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
      <Header />
      
      {/* Contenido principal */}
      <div className="flex-1 flex items-center justify-center px-6 pt-24 pb-24">
        <div className="w-full max-w-4xl">
          {/* Contenedor principal con efecto Liquid Glass OSCURO */}
          <div className="relative z-10 backdrop-blur-2xl bg-black/40 border border-white/10 rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/10 p-8 md:p-12">
            
            {/* Título principal */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center mb-8 text-white">
              Política de{" "}
              <span className="relative inline-block">
                <span className="relative z-20 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-shimmer">
                  Privacidad
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-bg pointer-events-none z-0"></span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 text-center mb-12 max-w-3xl mx-auto">
              En Webster valoramos tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
            </p>

            {/* Sección: Datos que recopilamos */}
            <div className="relative z-10 backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                Datos que recopilamos
              </h2>

              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                Recopilamos únicamente la siguiente información personal cuando decides contactarnos:
              </p>

              <ul className="space-y-3 text-gray-200 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Nombre completo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Correo electrónico</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Número de teléfono</span>
                </li>
              </ul>
            </div>

            {/* Sección: Uso de la información */}
            <div className="relative z-10 backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                Uso de tu información
              </h2>

              <p className="text-gray-200 text-lg leading-relaxed">
                Utilizamos tus datos únicamente para contactarte sobre nuestros servicios de Webster. No utilizamos tu información para fines comerciales adicionales ni para envío de comunicaciones no solicitadas.
              </p>
            </div>

            {/* Sección: Protección de datos */}
            <div className="relative z-10 backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                Protección de tus datos
              </h2>

              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                Tu información personal:
              </p>

              <ul className="space-y-3 text-gray-200 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>No se vende a terceros</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>No se comparte con terceros sin tu consentimiento explícito</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Se almacena de forma segura con medidas de protección adecuadas</span>
                </li>
              </ul>
            </div>

            {/* Sección: Eliminación de datos */}
            <div className="relative z-10 backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                Derecho a eliminar tus datos
              </h2>

              <p className="text-gray-200 text-lg leading-relaxed">
                Tienes derecho a solicitar la eliminación de tus datos personales en cualquier momento. Para hacerlo, contáctanos a través de los canales oficiales de Webster y procesaremos tu solicitud de manera oportuna.
              </p>
            </div>

            {/* Sección: Cookies */}
            <div className="relative z-10 backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                Uso de cookies
              </h2>

              <p className="text-gray-200 text-lg leading-relaxed">
                Utilizamos cookies básicas de analítica para mejorar la experiencia de navegación y entender cómo interactúas con nuestro sitio. Estas cookies no recopilan información personal identificable.
              </p>
            </div>

            {/* Sección: Actualizaciones */}
            <div className="relative z-10 backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                Actualizaciones de esta política
              </h2>

              <p className="text-gray-200 text-lg leading-relaxed">
                Esta política de privacidad puede actualizarse periódicamente para reflejar cambios en nuestras prácticas. La versión vigente siempre estará disponible en esta página.
              </p>
            </div>

            {/* Fecha de actualización */}
            <div className="text-center mt-12 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm">
                Última actualización: junio 2026
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
