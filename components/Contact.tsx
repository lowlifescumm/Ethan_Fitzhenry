import React from 'react';

const Contact: React.FC = () => {
  const handleBookMeeting = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/sinfronterasit',
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Ready to Build the Future?</h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-8">
          Let's discuss how AI can transform your business. Schedule a free, no-obligation consultation to get started.
        </p>
        <button
          onClick={handleBookMeeting}
          className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105 active:scale-95 text-lg shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-background"
        >
          Schedule Your Free Consultation
        </button>
      </div>
    </section>
  );
};

export default Contact;