import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://hook.us2.make.com/jal15g72m88xjlnqvmby9023n6pa632b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        // Show success message
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        // Reset form
        setFormData({ name: '', phone: '', message: '' });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola! Me interesa crear una landing page para mi negocio. ¿Podrían darme más información?');
    window.open(`https://wa.me/527771101880?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="py-16 bg-gradient-to-b from-gray-900 to-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              ¿Listo para lanzar tu proyecto?
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">WhatsApp</h3>
                  <p className="text-white/80">+52 777 110 1880</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Ubicación</h3>
                  <p className="text-white/80">México</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Horario</h3>
                  <p className="text-white/80">Todo el día, todos los días...😉</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                variant="whatsapp" 
                size="xl"
                onClick={handleWhatsApp}
                className="w-full gap-2 text-lg py-6"
              >
                <MessageCircle className="w-6 h-6" />
                Habla con un asesor
              </Button>
              
              <a 
                href="https://www.instagram.com/webster_landing?igsh=dXo2cDZ2Mm5lZWs1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 transition-opacity gap-2"
              >
                <Instagram className="w-6 h-6" />
                Síguenos en Instagram
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Envíanos un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white font-medium">Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white font-medium">Número de teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="+52 55 1234 5678"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-white font-medium">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-h-[120px]"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="default" 
                  size="xl"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;