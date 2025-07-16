import React from 'react';

const Hero: React.FC = () => {

  const handleBookMeeting = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/sinfronterasit',
      });
    }
  };

  const handleViewServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop')" }}>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(17, 24, 39, 0.75)' }}></div>
      <div className="relative z-10 p-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-main mb-4 tracking-tight">
          AI Solutions That Drive Growth
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8">
          I'm Ethan Fitzhenry, a freelance developer specializing in building custom AI applications and automation to solve your most complex business problems.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={handleBookMeeting} 
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-background"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            Book a Free Consultation
          </button>
          <a 
            href="#services" 
            onClick={handleViewServices} 
            className="inline-flex items-center justify-center bg-secondary hover:bg-gray-600 text-text-main font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary focus-visible:ring-offset-background"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;