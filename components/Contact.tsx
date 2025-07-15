import React from 'react';

const Contact: React.FC = () => {
  const handleCalendlyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/sinfronterasit' });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Business?</h2>
        <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
          Let's discuss how AI can unlock new levels of growth and efficiency for you. Schedule a complimentary, no-obligation consultation today.
        </p>
        <div className="mt-10">
          <a
            href="#"
            onClick={handleCalendlyClick}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;