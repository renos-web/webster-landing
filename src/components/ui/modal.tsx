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

    // NO focus management - just event listeners
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
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
        className="relative w-full max-w-2xl bg-gray-900 border border-gray-700 rounded-2xl shadow-xl overflow-hidden animate-in fade-in-90 zoom-in-95 max-h-[90vh] flex flex-col"
      >
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
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
          
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
            <Button
              variant="outline"
              onClick={onClose}
              className="rounded-full w-full sm:w-auto"
            >
              Cerrar
            </Button>
            {onConfirm && (
              <Button
                onClick={onConfirm}
                className="rounded-full bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
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
      confirmText="Agendar videoconferencia"
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
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Incluye Certificación SSL.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>SEO Básico.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Optimizado para IA.</span>
          </li>
        </ul>
        
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="space-y-2">
            <p className="font-medium text-white">Entrega:</p>
            <p className="text-gray-300">5 días hábiles.</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="font-medium text-white">Precio</p>
            <p className="text-2xl font-bold text-blue-400">$3,500 MXN</p>
          </div>
        </div>
        
        <p className="text-xs text-gray-400 mt-6">
          Precios aplican únicamente al desarrollo del sitio web. El costo de dominio se cobra aparte y los clientes pueden estar sujetos a cargos adicionales según las especificaciones solicitadas (ver extras opcionales). Aplican restricciones.
        </p>
      </div>
    </Modal>
  );
};

// New Product Modal Content
interface NewProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
  productType: string;
}

export const NewProductModal: React.FC<NewProductModalProps> = ({ isOpen, onClose, onContact, productType }) => {
  const getProductContent = () => {
    switch (productType) {
      case 'fidelidad':
        return {
          title: 'Sistema de Fidelidad',
          description: 'Convierte clientes ocasionales en clientes recurrentes con un sistema digital de puntos integrado a Apple Wallet y Google Wallet.',
          features: [
            'Tarjeta digital en Apple Wallet y Google Wallet',
            'Escaneo con QR desde iPad, tablet o celular',
            'Sistema automático de puntos y recompensas',
            'Niveles de membresía personalizables',
            'Panel administrativo intuitivo',
            'Reportes de clientes recurrentes y consumo',
            'Notificaciones automáticas y campañas',
            'Integración con WhatsApp (opcional)'
          ],
          delivery: '7-10 días hábiles',
          price: 'Desde $7,900 MXN'
        };
      case 'boletos':
        return {
          title: 'Venta de Boletos',
          description: 'Vende boletos para cualquier tipo de evento, físico u online, sin depender de terceros.',
          features: [
            'Página tipo cartelera o listado de eventos totalmente administrable.',
            'Panel privado para crear y editar eventos en minutos.',
            'Configuración de fechas, horarios, precios y cupo disponible.',
            'Venta de entradas en línea con pasarela de pago segura.',
            'Generación automática de boletos con código QR único.',
            'Activación y desactivación de eventos cuando lo necesites.',
            'Diseño personalizado con identidad de tu marca.',
            'Dominio propio y certificación SSL.',
            'Sin mensualidades obligatorias.'
          ],
          delivery: '15-20 días hábiles',
          price: 'Desde $14,000 MXN'
        };
      case 'restaurantes':
        return {
          title: 'Pedidos de Restaurante',
          description: 'Sistema digital para tomar pedidos desde tablet o celular y enviarlos directamente a cocina. Ideal para cafeterías, bares y restaurantes que quieren agilizar el servicio en mesas.',
          features: [
            'Registro de pedidos por mesa desde tablet o celular',
            'Menú digital con fotos, categorías y descripciones',
            'Envío automático de pedidos a cocina',
            'Pantalla de cocina o impresión automática de comandas',
            'Acumulación automática de productos por mesa',
            'Cálculo automático de la cuenta del cliente',
            'Gestión de mesas abiertas y cerradas',
            'Acceso desde cualquier dispositivo con internet'
          ],
          delivery: '10 días hábiles',
          price: 'Desde $6,000 MXN'
        };
      case 'personalizado':
        return {
          title: 'Proyecto Personalizado',
          description: 'Desarrollamos la solución perfecta para tu negocio con funcionalidades a medida.',
          features: [
            'Análisis completo de requisitos',
            'Diseño UX/UI personalizado',
            'Desarrollo de funcionalidades específicas',
            'Integración con sistemas existentes',
            'Capacitación y documentación completa',
            'Soporte técnico garantizado',
            'SEO y AIO'
          ],
          delivery: 'A cotizar',
          price: 'A cotizar'
        };
      default:
        return {
          title: 'Producto',
          description: '',
          features: [],
          delivery: '',
          price: ''
        };
    }
  };

  const content = getProductContent();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={content.title}
      onConfirm={onContact}
      confirmText="Agendar videoconferencia"
    >
      <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
        <p className="text-gray-300">
          {content.description}
        </p>
        
        <ul className="space-y-2 text-gray-300">
          {content.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {productType === 'fidelidad' && (
          <div className="bg-blue-900/20 border border-blue-700/30 p-4 rounded-lg">
            <p className="font-semibold text-blue-300 mb-3">Incluye:</p>
            <ul className="space-y-1 text-gray-200 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Configuración completa del sistema</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Personalización con tu marca (white-label)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Capacitación básica para tu equipo</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Activación de tarjeta digital</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Soporte inicial</span>
              </li>
            </ul>
          </div>
        )}
        
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="space-y-2">
            <p className="font-medium text-white">Entrega:</p>
            <p className="text-gray-300">{content.delivery}</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="font-medium text-white">Precio</p>
            <p className="text-2xl font-bold text-blue-400">{content.price}</p>
            {productType === 'boletos' && (
              <p className="text-xs text-gray-400 mt-2">
                (El precio final puede variar si se requiere mapa interactivo de asientos, múltiples tipos de boletos, membresías, transmisiones privadas o sistema de escaneo en acceso.)
              </p>
            )}
          </div>
        </div>
        
        <p className="text-xs text-gray-400 mt-6 text-center">
          {productType === 'boletos' ? (
            <>
              El precio aplica únicamente al desarrollo del sistema base administrable. Las comisiones por pasarela de pago (Stripe, MercadoPago o Clip.mx) son independientes y establecidas por cada plataforma. Hosting y dominio se cotizan aparte si el cliente no cuenta con ellos. Aplican restricciones según el alcance del proyecto.
            </>
          ) : productType === 'restaurantes' ? (
            <>
              Precios aplican únicamente al desarrollo del sistema. Puede requerir tablets, impresora de cocina u otros dispositivos según las necesidades del negocio. El sistema puede instalarse en un servidor propio del cliente o en hosting administrado por Webster.
            </>
          ) : (
            <>
              Precios aplican únicamente al desarrollo del módulo. Requiere tener un sitio web existente o contratar uno de nuestros paquetes. Los clientes pueden estar sujetos a cargos adicionales según las especificaciones solicitadas. Aplican restricciones.
            </>
          )}
        </p>
      </div>
    </Modal>
  );
};
