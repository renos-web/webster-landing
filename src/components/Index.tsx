import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Advantages from './Advantages';
import Testimonials from './Testimonials';
import SobreNosotros from './SobreNosotros';
import Contact from './Contact';
import Footer from './Footer';
import FloatingAstronaut from './FloatingAstronaut';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <SobreNosotros />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingAstronaut />
    </div>
  );
};

export default Index;
