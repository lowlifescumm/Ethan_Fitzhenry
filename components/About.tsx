import React from 'react';
import { profileImageDataUri } from './imageData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img 
              src={profileImageDataUri} 
              alt="Ethan Fitzhenry" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-square"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">About Me</h2>
            <p className="text-text-secondary mb-4">
              I am a passionate software engineer with a deep focus on artificial intelligence and machine learning. My journey into tech was driven by a fascination with how complex systems can be modeled to solve real-world problems. I thrive on bridging the gap between cutting-edge AI capabilities and practical business applications.
            </p>
            <p className="text-text-secondary mb-6">
              With experience in developing scalable applications and deploying machine learning models, I help businesses innovate and automate. Whether it's building a smart chatbot, creating a custom recommendation engine, or optimizing a workflow with AI, my goal is to deliver robust, efficient, and impactful solutions.
            </p>
            <a href="https://www.linkedin.com/in/ethan-fitzhenry/" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-card">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;