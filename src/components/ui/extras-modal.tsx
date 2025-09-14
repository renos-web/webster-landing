import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExtrasModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

export const ExtrasModal: React.FC<ExtrasModalProps> = ({ isOpen, onClose, onContact }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Handle Escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      // Store the currently focused element
      lastFocusedElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
      lastFocusedElement.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      id="extras-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      aria-modal="true"
    >
      <div 
        ref={modalRef}
        id="extras-modal"
        role="dialog"
        aria-labelledby="extras-title"
        aria-describedby="extras-desc"
        className="relative w-full max-w-lg bg-gray-900 border border-gray-700 rounded-2xl shadow-xl overflow-hidden animate-in fade-in-90 zoom-in-95"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 id="extras-title" className="text-2xl font-bold text-white">
              Extras opcionales
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Body */}
          <div id="extras-desc" className="space-y-6">
            <div className="flex justify-center">
              <img 
                id="extras-image"
                src="/images/Extras-opcionales.png" 
                alt="Extras opcionales" 
                className="max-w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
            
            <p className="text-xs text-gray-400 mt-6">
              Precios aplican únicamente al desarrollo del sitio web. El costo de dominio se cobra aparte. Aplican restricciones.
            </p>
          </div>
          
          {/* Footer */}
          <div className="flex justify-end gap-3 mt-8">
            <Button
              variant="outline"
              onClick={onClose}
              className="rounded-full"
            >
              Cerrar
            </Button>
            <Button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="rounded-full bg-blue-600 hover:bg-blue-700"
            >
              Cotizar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
