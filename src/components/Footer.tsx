import React from 'react';
import { MessageCircle, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Paquetes', href: '#servicios' },
    { name: 'Ventajas', href: '#ventajas' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/webster_landing?igsh=dXo2cDZ2Mm5lZWs1' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/1HQLKM7H6N/?mibextid=wwXIfr' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Webster</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Desarrolladores web especializados en landing pages para emprendedores y pequeños negocios. 
              Presencia online a tu medida en días, no semanas. 🚀
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <span>+52 777 110 1880</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <p className="text-white/80 mb-6">
              ¡De verdad!<br />
              ¡Todo el día, todos los días!
            </p>
            
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Webster. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Aviso de privacidad
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;