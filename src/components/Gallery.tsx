import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation, Variants } from 'framer-motion';

const Gallery = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Split images into two rows
  const row1 = [
    { src: '/images/horizontal-1.png', alt: 'Galería 1' },
    { src: '/images/horizontal-2.png', alt: 'Galería 2' },
    { src: '/images/horizontal-3.png', alt: 'Galería 3' },
    { src: '/images/horizontal-4.png', alt: 'Galería 4' },
  ];

  const row2 = [
    { src: '/images/horizontal-5.png', alt: 'Galería 5' },
    { src: '/images/horizontal-6.png', alt: 'Galería 6' },
    { src: '/images/horizontal-7.png', alt: 'Galería 7' },
    { src: '/images/horizontal-8.png', alt: 'Galería 8' },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const getItemVariants = (direction: number) => {
    return {
      hidden: { 
        x: 0, // Start from center
        opacity: 0,
        scale: 0.95
      },
      visible: (i: number) => {
        const baseX = isMobile ? 0 : direction * 30;
        const animation = {
          x: baseX,
          opacity: 1,
          scale: 1,
          transition: {
            x: {
              type: 'spring' as const,
              stiffness: 120,
              damping: 15,
              mass: 0.5,
              onComplete: () => {
                // Start floating animation after initial slide
                controls.start({
                  x: [
                    baseX,
                    isMobile ? 0 : direction * (30 + 15),
                    isMobile ? 0 : direction * (30 - 15),
                    baseX
                  ],
                  transition: {
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    repeatType: 'reverse' as const,
                    ease: 'easeInOut',
                    delay: i * 0.3
                  }
                });
              }
            },
            opacity: { duration: 0.5 },
            scale: { duration: 0.3 }
          }
        };
        return animation;
      }
    };
  };

  const toggleGallery = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section ref={ref} id="galeria" className="py-12 sm:py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Galería</h2>
        </div>

        {/* Large Blurred Preview for Mobile */}
        {!isExpanded && isMobile && (
          <div 
            className="relative mb-8 rounded-xl overflow-hidden h-[60vh] w-full cursor-pointer"
            onClick={toggleGallery}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleGallery()}
            aria-label="Ver galería completa"
          >
            <div className="absolute inset-0 grid grid-cols-2 gap-4 p-2">
              {row1.slice(0, 4).map((image, index) => (
                <div key={`preview-${index}`} className="h-full w-full">
                  <img
                    src={image.src}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-white text-xl font-medium mb-4">Mira nuestra galería completa</p>
                <div className="bg-blue-600 text-white font-medium py-3 px-8 rounded-full inline-block">
                  Ver galería
                </div>
              </div>
            </div>
          </div>
        )}

        <div id="gallery-content" className={`${!isMobile || isExpanded ? 'block' : 'hidden sm:block'}`}>
          {/* Back Button for Mobile */}
          {isExpanded && isMobile && (
            <button
              onClick={toggleGallery}
              className="flex items-center text-white/80 hover:text-white mb-6 transition-colors sm:hidden"
              aria-label="Ocultar galería"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Volver
            </button>
          )}
          {/* Row 1 - Slides out to right */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8"
            variants={container}
            initial="hidden"
            animate={controls}
          >
            {row1.map((image, index) => (
              <motion.div 
                key={`row1-${index}`}
                custom={index}
                variants={getItemVariants(1)}
                className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full w-full aspect-video"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 - Slides out to left */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            variants={container}
            initial="hidden"
            animate={controls}
          >
            {row2.map((image, index) => (
              <motion.div 
                key={`row2-${index}`}
                custom={index}
                variants={getItemVariants(-1)}
                className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full w-full aspect-video"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
