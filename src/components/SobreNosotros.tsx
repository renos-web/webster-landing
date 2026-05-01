import React from 'react';
import './SobreNosotros.css';

interface SobreNosotrosProps {
  className?: string;
}

const SobreNosotros: React.FC<SobreNosotrosProps> = ({ className = '' }) => {
  return (
    <section id="sobre-nosotros" className={`relative h-screen min-h-[600px] w-full flex ${className}`}>
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
      
      {/* Mobile Text Content */}
      <div className="md:hidden sobre-nosotros-mobile-text">
        <p className="mb-4">
          Webster es un equipo especializado en el desarrollo de herramientas digitales y sistemas personalizados para negocios en México. Ayudamos a empresas y emprendedores a mejorar su operación mediante la automatización de procesos, la organización de su información y la creación de soluciones digitales hechas a la medida.
        </p>
        
        <p className="mb-4">
          Nuestro enfoque no es ofrecer herramientas genéricas, sino construir sistemas adaptados a la forma en la que funciona cada negocio. Esto permite reducir errores, ahorrar tiempo y tener mayor control sobre áreas clave como ventas, atención al cliente y gestión interna.
        </p>
        
        <p className="mb-4">
          Trabajamos con negocios que buscan crecer de forma más ordenada, optimizar su tiempo y simplificar su operación diaria. Desde sistemas de gestión hasta automatización de flujos de trabajo, diseñamos soluciones que realmente se utilizan y generan impacto.
        </p>
        
        <p>
          En Webster creemos que la tecnología debe ser una ventaja, no una complicación. Por eso acompañamos cada proyecto de forma cercana, entendiendo las necesidades reales de cada cliente y desarrollando herramientas que aporten valor desde el primer día.
        </p>
      </div>
      
      {/* Contenedor principal con layout flex - Desktop Only */}
      <div className="hidden md:flex relative z-10 flex h-full w-full">
        {/* Columna izquierda - Espacio para imagen/decoración */}
        <div className="flex-1 flex items-center justify-center">
          {/* Espacio reservado para elementos visuales izquierdos */}
        </div>
        
        {/* Columna derecha - Contenido centrado */}
        <div className="flex-1 flex items-center justify-center px-8 lg:px-12">
          <div className="w-full max-w-2xl">
            {/* Título */}
            <div className="sobre-nosotros-title">
              <div>Sobre</div>
              <div className="text-[#0054e4]">nosotros...</div>
            </div>
            
            {/* Descripción */}
            <div className="sobre-nosotros-description">
              <p className="mb-4">
                Webster es un equipo especializado en el desarrollo de herramientas digitales y sistemas personalizados para negocios en México. Ayudamos a empresas y emprendedores a mejorar su operación mediante la automatización de procesos, la organización de su información y la creación de soluciones digitales hechas a la medida.
              </p>
              <p className="mb-4">
                Nuestro enfoque no es ofrecer herramientas genéricas, sino construir sistemas adaptados a la forma en la que funciona cada negocio. Esto permite reducir errores, ahorrar tiempo y tener mayor control sobre áreas clave como ventas, atención al cliente y gestión interna.
              </p>
              <p className="mb-4">
                Trabajamos con negocios que buscan crecer de forma más ordenada, optimizar su tiempo y simplificar su operación diaria. Desde sistemas de gestión hasta automatización de flujos de trabajo, diseñamos soluciones que realmente se utilizan y generan impacto.
              </p>
              <p>
                En Webster creemos que la tecnología debe ser una ventaja, no una complicación. Por eso acompañamos cada proyecto de forma cercana, entendiendo las necesidades reales de cada cliente y desarrollando herramientas que aporten valor desde el primer día.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
