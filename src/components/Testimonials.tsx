import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      business: 'Café Luna',
      text: 'Webster nos ayudó a lanzar nuestra cafetería online en solo 3 días. Las ventas se dispararon desde el primer mes.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c2b5?w=400&h=400&fit=crop&crop=face',
      initials: 'MG'
    },
    {
      name: 'Carlos Mendoza',
      business: 'Consultoría Digital',
      text: 'El equipo de Webster entiende lo que los emprendedores necesitamos: rapidez, calidad y precios justos. Muy recomendados.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      initials: 'CM'
    },
    {
      name: 'Ana Torres',
      business: 'Boutique Artesanal',
      text: 'Mi tienda online quedó hermosa y funcional. El soporte por WhatsApp es excelente, siempre están disponibles.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      initials: 'AT'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-webster-text mb-4">
            Clientes felices
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-webster-yellow text-webster-yellow" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-webster-text-light mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-webster-blue-light text-webster-blue font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-webster-text">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-webster-text-light">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;