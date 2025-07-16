
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import AIGenerator from './components/AIGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AnimatedSection>
            <Services />
        </AnimatedSection>
        <AnimatedSection>
            <About />
        </AnimatedSection>
        <AnimatedSection>
            <Process />
        </AnimatedSection>
        <AnimatedSection>
            <AIGenerator />
        </AnimatedSection>
        <AnimatedSection>
            <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;