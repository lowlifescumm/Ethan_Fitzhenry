import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      // Use scrollIntoView for smooth scrolling
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update the URL hash without a page jump
      history.pushState(null, '', href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // This makes the section active when it's in the middle of the viewport
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial active section from URL hash if present on page load
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
      setActiveSection(hash);
    }


    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-xl font-bold text-white tracking-wider cursor-pointer"
          >
            Ethan Fitzhenry<span className="text-cyan-400">.</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors duration-300 cursor-pointer ${
                  activeSection === link.href.substring(1)
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* Mobile menu could be added here if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;