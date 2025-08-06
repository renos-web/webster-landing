import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.png';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="bg-gradient-hero py-20 lg:py-32 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Web pages & stuff
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Landing pages profesionales para lanzar tu proyecto online rápido y sin complicaciones
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('#contacto')}
                className="shadow-glow"
              >
                Cotiza tu landing
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
                className="gap-2"
              >
                <Eye className="w-5 h-5" />
                Ver portafolio
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroImage}
                alt="Laptop with rocket illustration representing web development"
                className="w-full max-w-lg h-auto drop-shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-webster-yellow rounded-full animate-pulse opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;