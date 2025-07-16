
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">My Services</h2>
          <p className="text-text-secondary mt-2 max-w-2xl mx-auto">
            From intelligent chatbots to complex process automation, I offer a range of services to bring the power of AI to your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-card p-8 rounded-lg shadow-xl hover:shadow-primary/20 transition-shadow duration-300 flex flex-col items-start">
              <div className="bg-background p-3 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-2">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
