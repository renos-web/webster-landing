import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// Rutas de imágenes (usando rutas absolutas)
const forbesLogo = '/images/forbes-logo.png';
const timeLogo = '/images/time-logo.jpeg';
const newsweekLogo = '/images/newsweek-logo.png';

const articles = [
  {
    id: 1,
    title: 'Descubre la importancia del sitio web para tu negocio',
    description: 'En este artículo de GoDaddy, los expertos explican por qué tener un sitio web es fundamental para cualquier negocio en la era digital actual. Aprende sobre los beneficios clave y cómo puede impulsar tu presencia en línea.',
    url: 'https://www.godaddy.com/resources/latam/digitalizacion/descubre-la-importancia-del-sitio-web',
    logo: '/images/go-logo.png',
    alt: 'GoDaddy'
  },
  {
    id: 2,
    title: 'Riqueza digital en sitios web',
    description: 'Forbes México destaca cómo los sitios web se han convertido en activos valiosos para los negocios. Descubre por qué una presencia digital sólida es crucial para el éxito empresarial en la actualidad.',
    url: 'https://forbes.com.mx/riqueza-digital-en-sitios-web/',
    logo: '/images/forbes-logo.png',
    alt: 'Forbes México'
  },
  {
    id: 3,
    title: 'La importancia de tener una página web con carrito de compras',
    description: 'El Economista analiza cómo los carritos de compra en sitios web pueden incrementar significativamente las ventas de un negocio. Descubre las ventajas competitivas de implementar un e-commerce en tu estrategia digital.',
    url: 'https://www.eleconomista.com.mx/empresas/La-importancia-de-tener-una-pagina-web-con-carrito-de-compras-20221122-0054.html',
    logo: '/images/eco-logo.png',
    alt: 'El Economista'
  },
  {
    id: 4,
    title: 'Why Every Small Business Needs a Website',
    description: 'Forbes discusses the critical importance of having a professional website for small businesses. Learn how a well-designed website can help establish credibility, reach more customers, and drive business growth in the digital age.',
    url: 'https://www.forbes.com/sites/nicoleleinbachreyhle/2014/09/29/websites-for-small-businesses/',
    logo: '/images/forbes-logo.png',
    alt: 'Forbes USA'
  },
  {
    id: 5,
    title: '12 Ways to Improve Your Website',
    description: 'Time Magazine shares expert tips on enhancing your website\'s effectiveness. Discover practical strategies to boost user engagement, improve loading times, and optimize your site for better search engine rankings.',
    url: 'https://time.com/3815584/12-ways-improve-website/',
    logo: '/images/time-logo.jpeg',
    alt: 'Time Magazine'
  },
  {
    id: 6,
    title: '5 Ways to Boost Your Business\'s Online Presence',
    description: 'Newsweek presents five essential strategies for enhancing your digital footprint. Learn how to effectively use social media, optimize for mobile, and create engaging content to attract and retain customers.',
    url: 'https://www.newsweek.com/5-ways-boost-your-businesss-online-presence-1824747',
    logo: '/images/news-logo.png',
    alt: 'Newsweek'
  },
  {
    id: 7,
    title: 'Essential Website Statistics for Business Owners',
    description: 'Forbes Advisor provides crucial statistics about website performance and user behavior. Discover key metrics that demonstrate why a professional online presence is non-negotiable for modern businesses.',
    url: 'https://www.forbes.com/advisor/business/software/website-statistics/',
    logo: '/images/forbes-logo.png',
    alt: 'Forbes Advisor'
  }
];

interface FunFactsProps {
  className?: string;
}

const FunFacts: React.FC<FunFactsProps> = ({ className = '' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Log image paths for debugging
  React.useEffect(() => {
    console.log('Image paths:', {
      goLogo: '/images/go-logo.png',
      forbesLogo,
      timeLogo,
      newsweekLogo,
      elEconomistaLogo: '/images/eco-logo.png'
    });
  }, []);

  // Auto-rotate slides every 10 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === articles.length - 1 ? 0 : prev + 1));
    }, 10000);
    
    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };
  return (
    <section id="datos-interesantes" className={`py-16 relative overflow-hidden ${className}`} style={{
      backgroundImage: "url('/images/fondo-fun.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            No solo lo decimos nosotros...
          </h2>
          <p className="text-blue-300 text-lg mb-8">
            Por qué tu negocio necesita una página web hoy mismo
          </p>
          
          {/* Carousel Navigation */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-white"
              aria-label="Artículo anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-blue-500 w-6' : 'bg-gray-600'}`}
                  aria-label={`Ir al artículo ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-white"
              aria-label="Siguiente artículo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {articles.map((article) => (
              <div 
                key={article.id}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-blue-500/50">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className={`${article.alt.includes('Forbes') ? 'bg-white' : 'bg-blue-500/10'} rounded-lg h-32 w-full p-4 flex items-center justify-center`}>
                          <img 
                            src={article.logo} 
                            alt={article.alt} 
                            className="h-full w-auto object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = '/placeholder.svg';
                            }}
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {article.description}
                        </p>
                        <a 
                          href={article.url}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Leer artículo completo
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/80 max-w-3xl mx-auto">
            En la era digital actual, no tener un sitio web profesional es como tener una tienda cerrada cuando los clientes vienen a visitarte. 
            No dejes que tu negocio sea invisible en línea.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
