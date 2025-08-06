import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Globe, Settings, Link } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Diseño de landing page',
      description: 'Diseños únicos y profesionales que convierten visitantes en clientes.'
    },
    {
      icon: Globe,
      title: 'Creación y publicación',
      description: 'Desarrollamos y publicamos tu sitio web listo para recibir visitas.'
    },
    {
      icon: Settings,
      title: 'Personalización total',
      description: 'Adaptamos cada detalle a tu marca y necesidades específicas.'
    },
    {
      icon: Link,
      title: 'Gestión de dominio web',
      description: 'Te ayudamos con el registro y configuración de tu dominio.'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-webster-text mb-4">
            Servicios
          </h2>
          <p className="text-xl text-webster-text-light max-w-3xl mx-auto">
            Todo lo que necesitas para tu presencia digital en un solo lugar
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-webster-blue-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-webster-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-webster-text mb-4">
                    {service.title}
                  </h3>
                  <p className="text-webster-text-light leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="cta" 
            size="xl"
            onClick={scrollToContact}
            className="shadow-glow"
          >
            Agenda asesoría gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;