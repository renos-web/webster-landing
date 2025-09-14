import React from 'react';
import './SobreNosotros.css';

interface SobreNosotrosProps {
  className?: string;
}

const SobreNosotros: React.FC<SobreNosotrosProps> = ({ className = '' }) => {
  return (
    <section id="sobre-nosotros" className={`relative h-screen min-h-[600px] w-full ${className}`}>
      <div className="absolute inset-0">
        {/* Mobile Background */}
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/fondo-galaxia.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Desktop Background */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/galaxia.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
      <div className="sobre-nosotros-title">
        <div>Sobre</div>
        <div className="text-[#0054e4]">nosotros...</div>
      </div>
      <div className="sobre-nosotros-description">
        <p className="mb-4">
          Webster es un proyecto en expansión que une creatividad y tecnología para crear herramientas digitales que impulsan el crecimiento de los negocios. Nuestro enfoque está en desarrollar soluciones únicas, hechas a la medida y con un propósito claro: aportar valor real a cada cliente.
        </p>
        <p>
          Para nosotros, la transparencia y la satisfacción de nuestros clientes son lo más importante. Atendemos cada proyecto de manera personal y cercana, con la convicción de que no eres un número más... eres un elemento clave para nuestro propio crecimiento.
        </p>
      </div>
    </section>
  );
};

export default SobreNosotros;
