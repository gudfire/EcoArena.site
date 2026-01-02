
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Differentials from './components/Differentials';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Plans from './components/Plans';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Differentials />
        <Services />
        <Testimonials />
        <InstagramFeed />
        <Plans />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
