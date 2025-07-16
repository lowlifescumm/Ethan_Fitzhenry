
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-6">
      <div className="container mx-auto px-6 text-center text-text-secondary">
        <p>&copy; {currentYear} Ethan Fitzhenry. All Rights Reserved.</p>
        <p className="text-sm mt-1">
          Also accessible via <span className="text-primary">fitzhenry.nft</span>
          {' '}|{' '}
          <a href="https://www.linkedin.com/in/ethan-fitzhenry/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;