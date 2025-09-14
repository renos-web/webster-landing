import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Rocket } from 'lucide-react';

const Testimonials = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleTestimonials = () => {
    setIsExpanded(!isExpanded);
  };

  const testimonials = [
    {
      name: 'Kathia R.',
      business: 'Agencia de marketing',
      text: 'Lo recomiendo totalmente. Se nota que disfrutan lo que hacen y buscan que cada cliente quede satisfecho al 100%.',
      avatar: '/images/kathia.jpg',
      initials: 'KR'
    },
    {
      name: 'Axel Ruva',
      business: 'Venta de autos',
      text: 'Me impresionó la seriedad con la que trabajan. Cumplieron con el tiempo de entrega y superaron mis expectativas en diseño.',
      avatar: '/images/ruva.jpg',
      initials: 'AR'
    },
    {
      name: 'Gabo C.',
      business: 'Ingeniería de audio',
      text: 'La atención personalizada hizo toda la diferencia. Siempre tuve comunicación directa y sentí que realmente entendían lo que necesitaba.',
      avatar: '/images/gabo.jpg',
      initials: 'GC'
    },
    {
      name: 'Kika Zagal',
      business: 'Psicóloga y escritora',
      text: 'Con Webster mi página dejó de ser solo una "tarjeta de presentación" y se convirtió en una herramienta real para vender. Puedo recibir mensajes, mostrar mis libros y hasta promover masterclasses.',
      avatar: '/images/kika.jpeg',
      initials: 'KZ'
    },
    {
      name: 'Laura Méndez',
      business: 'Tienda de Mascotas',
      text: 'Me encantó que pensaron en la funcionalidad desde el principio. No es solo que se vea bonita, sino que está hecha para que cualquier persona que entre encuentre lo que busca en segundos.',
      avatar: 'https://images.unsplash.com/photo-1439405326854-014608f789e1?w=400&h=400&fit=crop&crop=face',
      initials: 'LM'
    },
    {
      name: 'Kasona Real Estate',
      business: 'Inmobiliaria',
      text: 'Tener una página web definitivamente le da legitimidad a tu negocio... a nosotros nos ha ayudado muchísimo a generar confianza.',
      avatar: '/images/kasona-logo.png',
      initials: 'DR'
    }
  ];

  return (
    <section id="testimonios" className="py-12 sm:py-20 bg-black relative overflow-hidden">
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-3xl mx-2 sm:mx-4 my-4 sm:my-8 pointer-events-none" 
           style={{
             boxShadow: '0 0 40px 15px rgba(0, 87, 219, 0.4)',
             border: '1px solid rgba(0, 87, 219, 0.6)'
           }}>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 px-2 sm:px-0">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-2 sm:gap-3 whitespace-nowrap overflow-hidden">
              <span className="truncate">Misiones cumplidas...</span>
              <Rocket className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 text-blue-400 animate-bounce" />
            </h2>
            <p className="text-blue-300 text-base sm:text-sm">Lo que dicen nuestros clientes</p>
          </div>
        </div>

        {/* Preview for Mobile */}
        {!isExpanded && isMobile && (
          <div 
            className="relative mb-8 rounded-xl overflow-hidden h-64 w-full cursor-pointer"
            onClick={toggleTestimonials}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleTestimonials()}
            aria-label="Ver testimonios completos"
          >
            <div className="absolute inset-0">
              <div className="grid grid-cols-2 gap-2 p-2 h-full">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <div key={`preview-${index}`} className="relative h-full bg-gray-800/80 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <Star className="w-8 h-8 fill-webster-yellow/30 text-webster-yellow/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <div className="bg-blue-600 text-white font-medium py-3 px-8 rounded-full">
                Ver testimonios
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className={`${!isMobile || isExpanded ? 'block' : 'hidden'} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0`}>
          {isExpanded && isMobile && (
            <div className="sm:hidden col-span-full flex justify-center mb-6">
              <button
                onClick={toggleTestimonials}
                className="flex items-center text-white/80 hover:text-white transition-colors"
                aria-label="Mostrar menos"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Volver
              </button>
            </div>
          )}
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] h-full min-h-[320px] flex flex-col">
              {/* Frosted Glass Overlay */}
              <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md border-2 border-blue-500/60 group-hover:border-blue-400/80 transition-all duration-300 rounded-xl
                         group-hover:shadow-[0_0_30px_-5px_rgba(0,87,219,0.5)]" />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/50 rounded-xl" />
              <CardContent className="p-6 sm:p-8 relative z-10 h-full flex flex-col">
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                  backgroundSize: '200px 200px',
                  borderRadius: '0.75rem'
                }} />
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-webster-yellow text-webster-yellow" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="flex-1 mb-6 overflow-y-auto">
                  <p className="text-gray-200/90 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-4 mt-auto">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-webster-blue-light text-webster-blue font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;