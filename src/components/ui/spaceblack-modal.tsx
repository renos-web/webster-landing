import React from 'react';
import { Rocket } from 'lucide-react';
import { Modal } from './modal';

interface SpaceBlackPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

export const SpaceBlackPackageModal: React.FC<SpaceBlackPackageModalProps> = ({ isOpen, onClose, onContact }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Space Black"
      onConfirm={onContact}
      confirmText="¡Lo quiero!"
    >
      <div className="space-y-6">
        <p className="text-gray-300">
          Pensado para negocios que necesitan destacar.
        </p>
        
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Hasta 10 secciones internas.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Funcionalidades avanzadas: reservaciones, formularios interactivos, portafolio, links de pago.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Diseño premium con animaciones y transiciones.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Integración de marca completa.</span>
          </li>
        </ul>

        <p className="text-sm text-gray-400 italic">
          (Esta página es un ejemplo de este paquete. 😉)
        </p>
        
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="space-y-2">
            <p className="font-medium text-white">Entrega:</p>
            <p className="text-gray-300">10 días hábiles.</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="font-medium text-white">Precio</p>
            <p className="text-2xl font-bold text-blue-400">$8,500</p>
          </div>
        </div>
        
        <p className="text-xs text-gray-400 mt-6">
          Precios aplican únicamente al desarrollo del sitio web. El costo de dominio se cobra aparte y los clientes pueden estar sujetos a cargos adicionales según las especificaciones solicitadas (ver extras opcionales). Aplican restricciones.
        </p>
      </div>
    </Modal>
  );
};
