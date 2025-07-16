
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">My Work Process</h2>
          <p className="text-text-secondary mt-2 max-w-2xl mx-auto">
            A transparent and collaborative approach to ensure your success.
          </p>
        </div>
        <div className="relative">
          {/* Vertical timeline bar: positioned left on mobile, center on desktop */}
          <div className="absolute left-4 top-2 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-secondary" aria-hidden="true"></div>
          
          <div className="space-y-12">
            {PROCESS_STEPS.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Timeline circle */}
                <div className="absolute left-4 top-1 md:left-1/2 -translate-x-1/2 bg-background p-1 rounded-full ring-4 ring-background">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`
                  pl-12 md:pl-0 
                  md:w-1/2 
                  ${ index % 2 === 0 
                      ? 'md:pr-12 md:text-right' 
                      : 'md:pl-12 md:ml-auto'
                  }
                `}>
                  <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;