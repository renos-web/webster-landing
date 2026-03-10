import React, { useState } from 'react';
import { Modal } from './modal';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

export const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose, onContact }) => {
  console.log('FAQModal rendered with isOpen:', isOpen);
  console.log('FAQModal props:', { isOpen, onClose, onContact });
  
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cómo puedo empezar mi proyecto con Webster?",
      answer: "Es muy sencillo.\n\nSolo tienes que ponerte en contacto con nosotros y contarnos qué tipo de página web o sistema necesitas. Revisaremos tu idea, te haremos algunas preguntas rápidas para entender tu proyecto y después te enviaremos una propuesta clara con el alcance, el tiempo de desarrollo y el costo total.\n\nSi todo te parece bien, comenzamos con el anticipo del 50 % y empezamos a trabajar."
    },
    {
      question: "¿Qué plataforma usan para desarrollar sus páginas web?",
      answer: "No usamos ninguna plataforma. Todas nuestras páginas y sistemas se desarrollan directamente con código.\n\nLas plataformas populares suelen estar limitadas por plantillas o funciones predefinidas. Al desarrollar desde cero, podemos crear prácticamente cualquier cosa que imagines.\n\nSi quieres que un mini astronauta flote alrededor de tu página… lo podemos hacer."
    },
    {
      question: "¿Tengo que pagar todo mi proyecto en una sola exhibición?",
      answer: "No.\n\nPara comenzar a trabajar solo necesitamos un anticipo del 50 % del costo total del proyecto. El 50 % restante se paga cuando el proyecto esté terminado y listo para entregarse."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos prácticamente todos.\n\nTrabajamos con Clip.mx, lo que nos permite ofrecer varias opciones de pago:\n* Tarjetas de crédito\n* Tarjetas de débito\n* Transferencia interbancaria\n* Pago en efectivo en tiendas OXXO\n\nEsto facilita el proceso para nuestros clientes sin importar su forma de pago preferida."
    },
    {
      question: "¿Cuáles son sus horarios de trabajo?",
      answer: "Trabajamos todos los días.\n\nNo agendamos videoconferencias durante el fin de semana (viernes 13:00 – domingo 23:59), pero si necesitas corregir, agregar o mejorar algo de tu proyecto, puedes enviarnos un mensaje en cualquier momento.\n\nLo revisaremos y trabajaremos en ello lo antes posible."
    },
    {
      question: "¿El costo del desarrollo incluye hosting y dominio?",
      answer: "Depende del tipo de proyecto.\n\nPáginas web:\n* El desarrollo sí incluye hosting\n* El dominio se paga por separado, para que cada cliente pueda elegir el que más le guste\n\nSistemas web:\n* El hosting no está incluido en el desarrollo\n* Se paga mensualmente mientras el sistema esté en uso\n* Incluye un dominio básico y sus renovaciones"
    },
    {
      question: "¿Puedo hacer cambios en mi página después de que esté terminada?",
      answer: "Sí.\n\nPodemos realizar mejoras, ajustes o nuevas funciones en cualquier momento después de entregar tu proyecto.\n\nMuchos de nuestros clientes comienzan con una versión inicial y después van agregando nuevas funciones conforme su negocio crece."
    },
    {
      question: "¿Necesito conocimientos técnicos para usar mi página o sistema?",
      answer: "No.\n\nTodos los proyectos se desarrollan pensando en que cualquier persona pueda utilizarlos, incluso sin experiencia técnica.\n\nAdemás, si tu proyecto incluye funciones administrables (como editar contenido, eventos, productos, etc.), te mostramos cómo usarlas paso a paso."
    },
    {
      question: "¿Pueden desarrollar funciones personalizadas para mi negocio?",
      answer: "Sí.\n\nUna de las ventajas de desarrollar desde código es que podemos crear funciones específicas para cada negocio, por ejemplo:\n* sistemas de pedidos para restaurantes\n* sistemas de fidelidad para clientes\n* venta de boletos para eventos\n* automatización de procesos\n* herramientas internas para tu equipo\n\nSi tienes una idea específica, podemos desarrollarla."
    }
  ];

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Preguntas Frecuentes"
      onConfirm={onContact}
      confirmText="Agendar videoconferencia"
    >
      <div className="space-y-4 sm:space-y-6 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto pr-1 sm:pr-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
            <button
              onClick={() => toggleQuestion(index)}
              className={`w-full text-left flex items-center justify-between py-2 sm:py-3 px-2 transition-colors rounded-lg hover:bg-gray-700 ${
                faq.question === "¿Cómo puedo empezar mi proyecto con Webster?" 
                  ? 'bg-gradient-to-r from-blue-600/20 to-blue-600/10 text-white font-semibold' 
                  : 'text-white hover:text-blue-400 transition-colors'
              }`}
            >
              <span className={`flex-1 text-left ${
                faq.question === "¿Cómo puedo empezar mi proyecto con Webster?" 
                  ? 'font-semibold text-sm sm:text-base' 
                  : 'font-medium text-sm sm:text-base'
              }`}>
                {faq.question}
                {faq.question === "¿Cómo puedo empezar mi proyecto con Webster?" && (
                  <span className="ml-2 px-2 py-1 bg-yellow-400 text-blue-900 text-xs rounded-full hidden sm:inline-block">DESTACADO</span>
                )}
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  expandedQuestion === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7 7" />
              </svg>
            </button>
            {expandedQuestion === index && (
              <div className="mt-3 text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};
