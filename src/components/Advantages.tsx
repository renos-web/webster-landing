import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, MessageCircle, Paintbrush } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Zap,
      title: 'Rapidez',
      subtitle: '¡Tu web en días!',
      description: 'No esperes semanas. Lanzamos tu landing page en tiempo récord para que empieces a vender ya.',
      featured: false
    },
    {
      icon: MessageCircle,
      title: 'Soporte real',
      subtitle: 'Atención por WhatsApp',
      description: 'Comunicación directa y rápida. Resolvemos tus dudas al instante con atención personalizada.',
      featured: true
    },
    {
      icon: Paintbrush,
      title: 'Diseño a tu medida',
      subtitle: '100% personalizable',
      description: 'Cada landing es única. Diseñamos pensando en tu marca y en lo que tus clientes necesitan ver.',
      featured: false
    }
  ];

  return (
    <section id="ventajas" className="py-20 bg-webster-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-webster-text mb-4">
            ¿Por qué Webster?
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card 
                key={index} 
                className={`text-center border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  advantage.featured 
                    ? 'bg-gradient-primary text-white shadow-glow' 
                    : 'bg-white shadow-card'
                }`}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    advantage.featured 
                      ? 'bg-white/20' 
                      : 'bg-webster-blue-light'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      advantage.featured 
                        ? 'text-white' 
                        : 'text-webster-blue'
                    }`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${
                    advantage.featured ? 'text-white' : 'text-webster-text'
                  }`}>
                    {advantage.title}
                  </h3>
                  
                  <p className={`text-lg font-semibold mb-4 ${
                    advantage.featured ? 'text-white/90' : 'text-webster-blue'
                  }`}>
                    {advantage.subtitle}
                  </p>
                  
                  <p className={`leading-relaxed ${
                    advantage.featured ? 'text-white/80' : 'text-webster-text-light'
                  }`}>
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;