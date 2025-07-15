import React from 'react';
import { profileImageData } from './imageData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl group">
              <img
                src={profileImageData}
                alt="Ethan Fitzhenry"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="w-20 h-1 bg-cyan-400 my-6"></div>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              I'm an AI Solutions Architect with a passion for making the power of artificial intelligence accessible to small and medium-sized businesses.
            </p>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
             My experience ranges from developing proprietary design systems to architecting and deploying AI-powered applications that tangibly improve user engagement and operational efficiency. I thrive on translating complex business needs into effective, data-driven results.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              All my services are delivered <strong className="text-cyan-400">100% remotely</strong>, allowing for flexible collaboration and focused execution, no matter where your business is located. Let's connect and explore how AI can transform your operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
