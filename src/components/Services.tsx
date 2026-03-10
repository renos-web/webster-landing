import React, { useState, useRef, useEffect } from 'react';
import { GoldPackageModal } from '@/components/ui/modal';
import { PlatinumPackageModal } from '@/components/ui/platinum-modal';
import { SpaceBlackPackageModal } from '@/components/ui/spaceblack-modal';
import { ExtrasModal } from '@/components/ui/extras-modal';
import { NewProductModal } from '@/components/ui/modal';
import { FAQModal } from '@/components/ui/faq-modal';

const Services = () => {
  const [isGoldModalOpen, setIsGoldModalOpen] = useState(false);
  const [isPlatinumModalOpen, setIsPlatinumModalOpen] = useState(false);
  const [isSpaceBlackModalOpen, setIsSpaceBlackModalOpen] = useState(false);
  const [isExtrasModalOpen, setIsExtrasModalOpen] = useState(false);
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
  const [selectedProductType, setSelectedProductType] = useState('');
  const [isFAQModalOpen, setIsFAQModalOpen] = useState(false);
  const extrasButtonRef = useRef<HTMLButtonElement>(null);

  // Escuchar evento personalizado para abrir FAQModal
  useEffect(() => {
    const handleOpenFAQModal = () => {
      setIsFAQModalOpen(true);
    };

    window.addEventListener('open-faq-modal', handleOpenFAQModal);
    return () => window.removeEventListener('open-faq-modal', handleOpenFAQModal);
  }, []);

  const openGoldModal = () => setIsGoldModalOpen(true);
  const closeGoldModal = () => setIsGoldModalOpen(false);
  
  const openPlatinumModal = () => setIsPlatinumModalOpen(true);
  const closePlatinumModal = () => setIsPlatinumModalOpen(false);
  
  const openSpaceBlackModal = () => setIsSpaceBlackModalOpen(true);
  const closeSpaceBlackModal = () => setIsSpaceBlackModalOpen(false);
  
  const openFAQModal = () => {
    setIsFAQModalOpen(true);
  };
  
  const closeFAQModal = () => {
    setIsFAQModalOpen(false);
  };
  
  const openExtrasModal = () => setIsExtrasModalOpen(true);
  const closeExtrasModal = () => {
    setIsExtrasModalOpen(false);
    extrasButtonRef.current?.focus();
  };

  const openNewProductModal = (productType: string) => {
    setSelectedProductType(productType);
    setIsNewProductModalOpen(true);
  };
  
  const closeNewProductModal = () => {
    setIsNewProductModalOpen(false);
    setSelectedProductType('');
  };
  
  const handleContact = () => {
    // Close all modals
    closeGoldModal();
    closePlatinumModal();
    closeSpaceBlackModal();
    closeExtrasModal();
    closeNewProductModal();
    closeFAQModal();
    closeFAQModal();
    
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
    <>
      {/* Hidden FAQ Section for scroll target */}
      <div id="faqs" className="hidden"></div>
      
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
                className="w-full max-w-[400px] focus:outline-none rounded-3xl transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,85,227,0.6)] hover:scale-[1.02] hover:brightness-110"
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
                className="w-full max-w-[400px] focus:outline-none rounded-3xl transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,85,227,0.6)] hover:scale-[1.02] hover:brightness-110"
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
              className="focus:outline-none rounded-3xl transition-all duration-300 hover:shadow-[0_0_30px_8px_rgba(0,85,227,0.7)] hover:scale-[1.01] hover:brightness-110"
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
      <NewProductModal
        isOpen={isNewProductModalOpen}
        onClose={closeNewProductModal}
        onContact={handleContact}
        productType={selectedProductType}
      />
      <FAQModal
        isOpen={isFAQModalOpen}
        onClose={closeFAQModal}
        onContact={handleContact}
        data-testid="faq-modal"
      />
      
      {/* New Service Banners Title */}
      <div className="w-full max-w-6xl mx-auto mt-12 px-6 text-center mb-8">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white">
          ¡Explora nuestros{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-shimmer">
              NUEVOS PRODUCTOS
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-bg"></span>
          </span>
          !
        </h3>
      </div>
      
      {/* New Service Banners */}
      <div className="w-full max-w-6xl mx-auto px-6 space-y-4">
        {/* Botón 1: Sistema de fidelidad */}
        <button 
          className="w-full group bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-5 min-h-[72px] flex items-center justify-between transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-800/90 hover:via-slate-700/70 hover:to-slate-800/80 hover:border-slate-600/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0053e3]/60 cursor-pointer relative overflow-hidden"
          onClick={() => openNewProductModal('fidelidad')}
        >
          {/* Textura sutil */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent"></div>
          </div>
          
          {/* Highlight interno */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-600/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent"></div>
          
          <span className="font-montserrat text-white font-semibold text-[18px] tracking-wide relative z-10">Sistema de fidelidad</span>
          
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700/50 to-slate-800/70 backdrop-blur-md border border-slate-600/40 rounded-full flex items-center justify-center group-hover:from-slate-600/60 group-hover:to-slate-700/80 group-hover:border-slate-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
          </div>
        </button>

        {/* Botón 2: Venta de boletos */}
        <button 
          className="w-full group bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-5 min-h-[72px] flex items-center justify-between transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-800/90 hover:via-slate-700/70 hover:to-slate-800/80 hover:border-slate-600/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0053e3]/60 cursor-pointer relative overflow-hidden"
          onClick={() => openNewProductModal('boletos')}
        >
          {/* Textura sutil */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent"></div>
          </div>
          
          {/* Highlight interno */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-600/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent"></div>
          
          <span className="font-montserrat text-white font-semibold text-[18px] tracking-wide relative z-10">Venta de boletos</span>
          
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700/50 to-slate-800/70 backdrop-blur-md border border-slate-600/40 rounded-full flex items-center justify-center group-hover:from-slate-600/60 group-hover:to-slate-700/80 group-hover:border-slate-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>
        </button>

        {/* Botón 3: Pedidos de restaurante */}
        <button 
          className="w-full group bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-5 min-h-[72px] flex items-center justify-between transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-800/90 hover:via-slate-700/70 hover:to-slate-800/80 hover:border-slate-600/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0053e3]/60 cursor-pointer relative overflow-hidden"
          onClick={() => openNewProductModal('restaurantes')}
        >
          {/* Textura sutil */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent"></div>
          </div>
          
          {/* Highlight interno */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-600/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent"></div>
          
          <span className="font-montserrat text-white font-semibold text-[18px] tracking-wide relative z-10">Pedidos de restaurante</span>
          
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700/50 to-slate-800/70 backdrop-blur-md border border-slate-600/40 rounded-full flex items-center justify-center group-hover:from-slate-600/60 group-hover:to-slate-700/80 group-hover:border-slate-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </button>

        {/* Botón 4: Proyecto personalizado */}
        <button 
          className="w-full group bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-5 min-h-[72px] flex items-center justify-between transition-all duration-300 hover:bg-gradient-to-br hover:from-slate-800/90 hover:via-slate-700/70 hover:to-slate-800/80 hover:border-slate-600/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0053e3]/60 cursor-pointer relative overflow-hidden"
          onClick={() => openNewProductModal('personalizado')}
        >
          {/* Textura sutil */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent"></div>
          </div>
          
          {/* Highlight interno */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-600/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent"></div>
          
          <span className="font-montserrat text-white font-semibold text-[18px] tracking-wide relative z-10">Proyecto personalizado</span>
          
          <div className="w-12 h-12 bg-gradient-to-br from-slate-700/50 to-slate-800/70 backdrop-blur-md border border-slate-600/40 rounded-full flex items-center justify-center group-hover:from-slate-600/60 group-hover:to-slate-700/80 group-hover:border-slate-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg relative z-10">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
        </button>
      </div>
      
      {/* Extras opcionales button */}
      <div className="w-full flex justify-center mt-8">
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
    </>
  );
};

export default Services;