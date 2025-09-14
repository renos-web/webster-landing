import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Advantages from '@/components/Advantages';
import SobreNosotros from '@/components/SobreNosotros';
import FunFacts from '@/components/FunFacts';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingAstronaut from '@/components/FloatingAstronaut';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingAstronaut />
      <Header />
      <section id="inicio">
        <Hero />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <Gallery />
      <section id="ventajas" className="border-0">
        <Advantages />
      </section>
      <SobreNosotros className="border-0" />
      <FunFacts className="border-0" />
      <section id="testimonios">
        <Testimonials />
      </section>
      <section id="contacto">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
