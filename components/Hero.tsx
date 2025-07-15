import React from 'react';

const Hero: React.FC = () => {
  const handleCalendlyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/sinfronterasit' });
    }
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 z-10 opacity-70"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/techbg/1920/1080')" }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-transparent to-slate-900"></div>

      <div className="relative z-20 container mx-auto px-6 py-24">
        <span className="text-cyan-400 font-semibold tracking-widest uppercase">AI Solutions Architect</span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mt-4 mb-6 leading-tight">
          AI Solutions to Amplify Your Business
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300 mb-10">
          I build custom AI voice agents and automations that drive efficiency, growth, and innovation for small businesses. All work is performed 100% remotely.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            onClick={handleCalendlyClick}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book a Free Consultation
          </a>
          <a
            href="#services"
            onClick={(e) => handleScrollClick(e, '#services')}
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;