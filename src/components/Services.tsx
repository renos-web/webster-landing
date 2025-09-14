import React, { useState, useRef } from 'react';
import { GoldPackageModal } from '@/components/ui/modal';
import { PlatinumPackageModal } from '@/components/ui/platinum-modal';
import { SpaceBlackPackageModal } from '@/components/ui/spaceblack-modal';
import { ExtrasModal } from '@/components/ui/extras-modal';

const Services = () => {
  const [isGoldModalOpen, setIsGoldModalOpen] = useState(false);
  const [isPlatinumModalOpen, setIsPlatinumModalOpen] = useState(false);
  const [isSpaceBlackModalOpen, setIsSpaceBlackModalOpen] = useState(false);
  const [isExtrasModalOpen, setIsExtrasModalOpen] = useState(false);
  const extrasButtonRef = useRef<HTMLButtonElement>(null);

  const openGoldModal = () => setIsGoldModalOpen(true);
  const closeGoldModal = () => setIsGoldModalOpen(false);
  
  const openPlatinumModal = () => setIsPlatinumModalOpen(true);
  const closePlatinumModal = () => setIsPlatinumModalOpen(false);
  
  const openSpaceBlackModal = () => setIsSpaceBlackModalOpen(true);
  const closeSpaceBlackModal = () => setIsSpaceBlackModalOpen(false);
  
  const openExtrasModal = () => setIsExtrasModalOpen(true);
  const closeExtrasModal = () => {
    setIsExtrasModalOpen(false);
    extrasButtonRef.current?.focus();
  };
  
  const handleContact = () => {
    // Close all modals
    closeGoldModal();
    closePlatinumModal();
    closeSpaceBlackModal();
    closeExtrasModal();
    
    // Use setTimeout to ensure the modal is closed before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        // Focus on the contact section for better accessibility
        contactSection.setAttribute('tabindex', '-1');
        contactSection.focus();
      }
    }, 100); // Small delay to ensure the modal is fully closed
  };
  return (
    <section id="servicios" className="py-16 bg-gradient-to-b from-gray-900 to-black overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4">
            Elige la manera de despegar tu negocio...
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left Column - Stacked Images */}
          <div className="flex flex-col gap-12 h-full">
            <div className="w-full flex justify-center">
              <button 
                onClick={openGoldModal}
                className="w-full max-w-[400px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-3xl transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,85,227,0.6)] hover:scale-[1.02] hover:brightness-110"
                aria-label="Ver detalles del Paquete Gold"
              >
                <div className="w-full aspect-square max-w-[400px]">
                  <img 
                    src="/images/paquete-gold.png" 
                    alt="Paquete Gold" 
                    className="w-full h-full object-contain rounded-3xl pointer-events-none"
                  />
                </div>
              </button>
            </div>
            <div className="w-full flex justify-center">
              <button 
                onClick={openPlatinumModal}
                className="w-full max-w-[400px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-3xl transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,85,227,0.6)] hover:scale-[1.02] hover:brightness-110"
                aria-label="Ver detalles del Paquete Platinum"
              >
                <div className="w-full aspect-square max-w-[400px]">
                  <img 
                    src="/images/paquete-platinum.png" 
                    alt="Paquete Platinum" 
                    className="w-full h-full object-contain rounded-3xl pointer-events-none"
                  />
                </div>
              </button>
            </div>
          </div>
          
          {/* Right Column - Extra Large Centered Image */}
          <div className="flex items-start justify-center w-full h-full">
            <button 
              id="plan-space-black-card"
              onClick={openSpaceBlackModal}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent rounded-3xl transition-all duration-300 hover:shadow-[0_0_30px_8px_rgba(0,85,227,0.7)] hover:scale-[1.01] hover:brightness-110"
              aria-label="Ver detalles del Paquete Space Black"
            >
              <div className="w-full aspect-square max-w-[400px] md:max-w-none md:max-h-[90vh]">
                <img 
                  src="/images/paquete-space-black.png" 
                  alt="Paquete Space Black" 
                  className="w-full h-full object-contain rounded-3xl pointer-events-none"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <GoldPackageModal 
        isOpen={isGoldModalOpen}
        onClose={closeGoldModal}
        onContact={handleContact}
      />
      <PlatinumPackageModal
        isOpen={isPlatinumModalOpen}
        onClose={closePlatinumModal}
        onContact={handleContact}
      />
      <SpaceBlackPackageModal
        isOpen={isSpaceBlackModalOpen}
        onClose={closeSpaceBlackModal}
        onContact={handleContact}
      />
      <ExtrasModal
        isOpen={isExtrasModalOpen}
        onClose={closeExtrasModal}
        onContact={handleContact}
      />
      
      {/* Extras opcionales button */}
      <div className="w-full flex justify-center mt-12">
        <button 
          id="extras-opcionales-btn"
          ref={extrasButtonRef}
          className="flex items-center gap-2 bg-[#0055e3] hover:bg-[#0047b7] text-white font-medium py-3 px-6 rounded-full transition-colors duration-300"
          onClick={openExtrasModal}
          aria-haspopup="dialog"
          aria-expanded={isExtrasModalOpen}
          aria-controls="extras-modal"
        >
          <span>Extras opcionales</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h.01a1 1 0 100-2H10V9z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Services;