import React, { useEffect, useRef } from 'react';
import { X, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  confirmText?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = 'Confirmar',
}) => {
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

    // Store the currently focused element
    if (isOpen) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-gray-900 border border-gray-700 rounded-2xl shadow-xl overflow-hidden animate-in fade-in-90 zoom-in-95"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-400" />
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-6">
            {children}
          </div>
          
          <div className="flex justify-end gap-3 mt-8">
            <Button
              variant="outline"
              onClick={onClose}
              className="rounded-full"
            >
              Cerrar
            </Button>
            {onConfirm && (
              <Button
                onClick={onConfirm}
                className="rounded-full bg-blue-600 hover:bg-blue-700"
              >
                {confirmText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Gold Package Modal Content
interface GoldPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

export const GoldPackageModal: React.FC<GoldPackageModalProps> = ({ isOpen, onClose, onContact }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Gold"
      onConfirm={onContact}
      confirmText="¡Lo quiero!"
    >
      <div className="space-y-6">
        <p className="text-gray-300">
          Ideal para emprendedores que apenas comienzan.
        </p>
        
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Landing page con portada, servicios, sobre nosotros, testimonios y contacto con WhatsApp.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Diseño 100% personalizado y optimización para celular.</span>
          </li>
        </ul>
        
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="space-y-2">
            <p className="font-medium text-white">Entrega:</p>
            <p className="text-gray-300">5 días hábiles.</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="font-medium text-white">Precio</p>
            <p className="text-2xl font-bold text-blue-400">$2,500</p>
          </div>
        </div>
        
        <p className="text-xs text-gray-400 mt-6">
          Precios aplican únicamente al desarrollo del sitio web. El costo de dominio se cobra aparte y los clientes pueden estar sujetos a cargos adicionales según las especificaciones solicitadas (ver extras opcionales). Aplican restricciones.
        </p>
      </div>
    </Modal>
  );
};
