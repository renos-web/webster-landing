import React from 'react';
import { Rocket } from 'lucide-react';
import { Modal } from './modal';

interface PlatinumPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

export const PlatinumPackageModal: React.FC<PlatinumPackageModalProps> = ({ isOpen, onClose, onContact }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Platinum"
      onConfirm={onContact}
      confirmText="Agendar videoconferencia"
    >
      <div className="space-y-6">
        <p className="text-gray-300">
          Para negocios que quieren más presencia.
        </p>
        
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Hasta 5 secciones personalizadas (ej. inicio, nosotros, servicios, portafolio, contacto u otro).</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Integraciones básicas: formulario de contacto, Google Maps, botones de pago.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Diseño personalizado con integración de marca.</span>
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
            <p className="text-gray-300">7 días hábiles.</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="font-medium text-white">Precio</p>
            <p className="text-2xl font-bold text-blue-400">$4,500 MXN</p>
          </div>
        </div>
        
        <p className="text-xs text-gray-400 mt-6">
          Precios aplican únicamente al desarrollo del sitio web. El costo de dominio se cobra aparte y los clientes pueden estar sujetos a cargos adicionales según las especificaciones solicitadas (ver extras opcionales). Aplican restricciones.
        </p>
      </div>
    </Modal>
  );
};
