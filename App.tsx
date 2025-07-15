
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import AIGenerator from './components/AIGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <AIGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
