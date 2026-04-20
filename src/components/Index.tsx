import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Advantages from './Advantages';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
