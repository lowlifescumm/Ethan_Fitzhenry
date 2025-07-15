
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400">&copy; {currentYear} Ethan Fitzhenry. All Rights Reserved.</p>
            <p className="text-sm text-slate-500">ethan.fitzhenry.nft</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ethan-fitzhenry/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.92v16h4.92v-8.399c0-2.199 1.561-4.113 3.668-4.113 2.105 0 3.332 1.913 3.332 4.113v8.399h4.919v-9.56c0-4.199-2.228-7.44-5.698-7.44-2.738 0-4.597 1.564-5.342 3.091z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
