import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos', href: '#servicios' },
    { name: 'Ventajas', href: '#ventajas' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    // Escuchar evento personalizado para abrir FAQModal
    const handleOpenFAQModal = () => {
      console.log('FAQ button clicked - opening modal');
      const event = new CustomEvent('openFAQModal');
      window.dispatchEvent(event);
    };

    window.addEventListener('openFAQModal', handleOpenFAQModal);
    return () => window.removeEventListener('openFAQModal', handleOpenFAQModal);
  }, []);

  return (
    <header className={`fixed w-full top-4 z-50 px-4 ${scrolled ? 'py-2' : 'py-4'} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className={`bg-black/80 backdrop-blur-md rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
          {/* Logo - Hidden on mobile */}
          <div className="hidden md:block flex-shrink-0">
            <img src="/images/webster-logo.png" alt="Webster" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 mx-auto">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/10"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex flex-shrink-0 items-center gap-3">
            <Button 
              onClick={() => {
                // Abrir FAQModal directamente
                const event = new CustomEvent('open-faq-modal');
                window.dispatchEvent(event);
              }}
              className="bg-white/10 hover:bg-white/20 text-white font-medium rounded-full px-4 py-2 transition-all duration-300 border border-white/20"
            >
              FAQ's
            </Button>
            <Button 
              onClick={() => scrollToSection('#contacto')}
              className="gap-2 bg-[#0053e3] hover:bg-[#0047c0] text-white font-medium rounded-full px-6 py-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#0053e3]/30 hover:scale-105"
            >
              <Rocket className="w-4 h-4" />
              Cotizar
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10 rounded-full"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-black/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2 pb-3 px-1">
                <Button 
                  onClick={() => {
                    // Abrir FAQModal directamente en móvil
                    const event = new CustomEvent('open-faq-modal');
                    window.dispatchEvent(event);
                    setIsMenuOpen(false); // Cerrar menú móvil
                  }}
                  className="w-full mb-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full py-2 transition-all duration-300 border border-white/20"
                >
                  FAQ's
                </Button>
                <Button 
                  onClick={() => scrollToSection('#contacto')}
                  className="w-full gap-2 bg-[#0053e3] hover:bg-[#0047c0] text-white font-medium rounded-full py-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#0053e3]/30"
                >
                  <Rocket className="w-4 h-4" />
                  Cotizar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;