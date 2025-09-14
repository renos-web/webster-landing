import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, MessageCircle, Paintbrush, Gauge, ChevronLeft, ChevronRight, Target } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Zap,
      title: 'Rapidez',
      subtitle: '¡Tu web en días!',
      description: 'Tu página lista en pocos días, con procesos claros y sin rodeos.',
      featured: false
    },
    {
      icon: MessageCircle,
      title: 'Atención personalizada y cercana',
      subtitle: '',
      description: 'Siempre te daremos la cara y estaremos al pendiente de tus necesidades. Para nosotros no eres un número más, eres parte de nuestro proyecto.',
      featured: true
    },
    {
      icon: Paintbrush,
      title: 'Diseño a tu medida',
      subtitle: '100% personalizable',
      description: 'No usamos plantillas. Cada página está hecha desde cero para reflejar la esencia única de tu negocio.',
      featured: false
    },
    {
      icon: Gauge,
      title: 'Optimización profesional',
      subtitle: 'Rendimiento garantizado',
      description: 'Creamos sitios rápidos, seguros y adaptados a todos los dispositivos, listos para generar ventas desde el día uno.',
      featured: true
    },
    {
      icon: MessageCircle,
      title: 'Soporte constante',
      subtitle: 'Estamos contigo',
      description: 'No te dejamos solo después de la entrega. Te acompañamos para que tu página siga funcionando y creciendo contigo.',
      featured: false
    },
    {
      icon: Target,
      title: 'Experiencia enfocada en resultados',
      subtitle: 'Más allá de lo estético',
      description: 'Nuestro objetivo no es solo hacerte una página bonita, sino una herramienta real que atraiga clientes y aumente tus ventas.',
      featured: true
    }
  ];

  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollInterval = useRef<NodeJS.Timeout>();

  // Calculate visible cards based on viewport width
  const getVisibleCardsCount = () => {
    if (typeof window === 'undefined') return 3;
    const width = window.innerWidth;
    if (width < 768) return 1; // mobile
    if (width < 1024) return 2; // tablet
    return 3; // desktop
  };

  // Auto-scroll functionality
  useEffect(() => {
    console.log('Setting up auto-scroll...');
    
    const startAutoScroll = () => {
      console.log('Starting auto-scroll interval');
      
      autoScrollInterval.current = setInterval(() => {
        console.log('Auto-scroll tick, isHovered:', isHovered);
        
        if (!isHovered) {
          console.log('Scrolling to next card...');
          const nextIndex = (currentIndex + 1) % advantages.length;
          console.log('Current index:', currentIndex, 'Next index:', nextIndex);
          
          // Update the index first
          setCurrentIndex(nextIndex);
          
          // Then scroll to the new position
          if (scrollContainer.current) {
            const container = scrollContainer.current;
            const cardWidth = 320; // Width of each card (w-80 = 20rem = 320px)
            const gap = 32; // space-x-8 = 2rem = 32px
            const containerWidth = container.clientWidth;
            const scrollPosition = (nextIndex * (cardWidth + gap)) - (containerWidth / 2) + (cardWidth / 2);
            
            console.log('Scrolling to position:', scrollPosition);
            
            container.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 10000); // Change slide every 10 seconds
    };

    startAutoScroll();
    
    // Clear interval on unmount
    return () => {
      console.log('Cleaning up auto-scroll interval');
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isHovered, currentIndex, advantages.length]);

  const scrollToIndex = useCallback((index: number) => {
    console.log('Scrolling to index:', index);
    if (!scrollContainer.current) return;
    
    const container = scrollContainer.current;
    const cardWidth = 320; // Width of each card (w-80 = 20rem = 320px)
    const gap = 32; // space-x-8 = 2rem = 32px
    const containerWidth = container.clientWidth;
    const scrollPosition = (index * (cardWidth + gap)) - (containerWidth / 2) + (cardWidth / 2);
    
    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    
    setCurrentIndex(index);
    
    // Reset auto-scroll timer
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    console.log('Manual scroll:', direction);
    if (direction === 'right') {
      setCurrentIndex(prev => (prev + 1) % advantages.length);
    } else {
      setCurrentIndex(prev => (prev - 1 + advantages.length) % advantages.length);
    }
    
    // Reset auto-scroll timer
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
  };

  // Calculate the visible cards based on current index
  const getVisibleCards = () => {
    const cards = [];
    const total = advantages.length;
    
    // Always show the current card in the center
    const centerIndex = currentIndex;
    
    // Calculate previous and next indices for the visible cards
    const prev1 = (centerIndex - 1 + total) % total;
    const prev2 = (centerIndex - 2 + total) % total;
    const next1 = (centerIndex + 1) % total;
    const next2 = (centerIndex + 2) % total;
    
    // Return the 5 visible cards (2 before, current, 2 after)
    return [
      { ...advantages[prev2], index: prev2, position: 'left-2' },
      { ...advantages[prev1], index: prev1, position: 'left-1' },
      { ...advantages[centerIndex], index: centerIndex, position: 'center' },
      { ...advantages[next1], index: next1, position: 'right-1' },
      { ...advantages[next2], index: next2, position: 'right-2' }
    ];
  };

  return (
    <section id="ventajas" className="py-16 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/cielo-estrellado.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-1 sm:mb-4">
            ¿Por qué <span className="text-blue-400">Webster</span>?
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[600px] md:h-[550px] py-12">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-webster-blue hover:bg-gray-100 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-webster-blue hover:bg-gray-100 transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Fixed Center Highlight Area */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[28rem] pointer-events-none">
            <div className="absolute inset-0 transition-all duration-500" />
          </div>
          
          {/* Cards Container */}
          <div className="relative h-full w-full">
            {getVisibleCards().map(({ icon: IconComponent, title, description, featured, index, position }) => {
              const isCenter = position === 'center';
              
              return (
                <div 
                  key={`${index}-${title}`}
                  className={`absolute transition-all duration-500 w-80 ${
                    position === 'left-2' ? 'left-[-10%] scale-75 opacity-30' :
                    position === 'left-1' ? 'left-[10%] scale-90 opacity-60' :
                    position === 'center' ? 'left-1/2 -translate-x-1/2 scale-100 opacity-100 z-10' :
                    position === 'right-1' ? 'right-[10%] scale-90 opacity-60' :
                    'right-[-10%] scale-75 opacity-30'
                  }`}
                  style={{
                    top: '50%',
                    transform: position === 'center' 
                      ? 'translate(-50%, -50%)' 
                      : position.includes('left')
                        ? 'translateX(4rem) translateY(-50%)'
                        : 'translateX(-4rem) translateY(-50%)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <Card 
                    className={`h-[24rem] sm:h-[28rem] w-80 text-center border-0 transition-all duration-300 overflow-hidden ${
                      featured 
                        ? 'bg-gradient-primary text-white shadow-glow' 
                        : 'bg-gray-800 shadow-card backdrop-blur-sm bg-opacity-70 border border-blue-500/20'
                    } ${isCenter ? 'shadow-2xl' : ''} relative`}
                    style={{
                      boxShadow: '0 0 15px rgba(0, 87, 219, 0.4)'
                    }}
                  >
                    <CardContent className="p-4 sm:p-6 h-full flex flex-col justify-center items-center text-center">
                      <div className="flex flex-col items-center justify-center h-full w-full py-4">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                          featured 
                            ? 'bg-white/20' 
                            : 'bg-blue-900/30 border border-blue-500/30'
                        }`}>
                          <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 ${
                            featured 
                              ? 'text-white' 
                              : 'text-webster-blue'
                          }`} />
                        </div>
                        
                        <h3 className={`text-xl sm:text-2xl font-bold mb-4 px-2 leading-tight ${
                          featured ? 'text-white' : 'text-white'
                        }`}>
                          {title}
                        </h3>
                        
                        <p className={`text-base sm:text-lg leading-relaxed px-2 ${
                          featured ? 'text-white/90' : 'text-gray-300'
                        }`}>
                          {description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12 space-x-2">
            {advantages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  if (autoScrollInterval.current) {
                    clearInterval(autoScrollInterval.current);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-webster-blue w-6' : 'bg-gray-300 hover:bg-webster-blue/70'
                }`}
                aria-label={`Ir a ventaja ${index + 1}`}
                aria-current={index === currentIndex ? 'step' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
