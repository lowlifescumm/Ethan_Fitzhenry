import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const HamburgerIcon: React.FC<{onClick: () => void}> = ({ onClick }) => (
    <button onClick={onClick} className="md:hidden p-2 text-text-secondary hover:text-primary rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
    </button>
);

const CloseIcon: React.FC<{onClick: () => void}> = ({ onClick }) => (
    <button onClick={onClick} className="p-2 text-text-secondary hover:text-primary rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Close menu" aria-expanded="true" aria-controls="mobile-menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
);


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu on click
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-card/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-xl font-bold text-text-main hover:text-primary transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            Ethan Fitzhenry
          </a>
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-text-secondary hover:text-primary transition-colors font-medium px-3 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <HamburgerIcon onClick={() => setIsMenuOpen(true)} />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div id="mobile-menu" className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
          <nav className="relative ml-auto h-full w-64 bg-card p-6 shadow-xl flex flex-col">
              <div className="flex justify-end mb-8">
                  <CloseIcon onClick={() => setIsMenuOpen(false)} />
              </div>
              <div className="flex flex-col space-y-6">
                {NAV_LINKS.map((link) => (
                    <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-2xl text-text-secondary hover:text-primary transition-colors font-medium text-right rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    {link.name}
                    </a>
                ))}
              </div>
          </nav>
      </div>
    </>
  );
};

export default Header;