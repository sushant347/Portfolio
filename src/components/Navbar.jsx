import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
// 1. IMPORT YOUR LOGO HERE
import logo from './images/logo.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'gallery', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', path: '#gallery' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const sectionId = path.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isActive = (path) => activeSection === path.substring(1);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-md'
          : ''
      }`}
      style={{
        background: scrolled ? 'var(--bg-primary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO SECTION */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')} 
            className="group flex items-center gap-3 transition-transform hover:scale-105"
          >
            <img 
              src={logo} 
              alt="Sushant Gautam" 
              className="h-10 w-auto object-contain md:h-12" 
            />
            <span 
              className="font-bold text-xl tracking-tight hidden sm:block"
              style={{ color: 'var(--text-primary)' }}
            >
              Sushant 
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color)] to-blue-600 ml-1.5"
              >
                Gautam
              </span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                // ADDED: Classes for the sliding underline effect
                className={`
                  relative px-4 py-2 rounded-md text-sm font-medium transition-all
                  ${isActive(link.path) ? 'font-semibold' : ''}
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-[2px]
                  after:w-0
                  after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500
                  after:transition-all after:duration-300
                  hover:after:w-full
                `}
                style={{
                  color: isActive(link.path) ? 'var(--text-primary)' : 'var(--text-secondary)',
                  // Optional: Keep background on active, or remove if you prefer just the line
                  background: isActive(link.path) ? 'var(--card-bg)' : 'transparent'
                }}
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg transition-all hover:scale-110"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            <button
              className="p-2 rounded-lg transition-colors"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)'
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={20} style={{ color: 'var(--text-primary)' }} />
              ) : (
                <Menu size={20} style={{ color: 'var(--text-primary)' }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: 'var(--bg-primary)',
          borderTop: isMenuOpen ? '1px solid var(--border-color)' : 'none'
        }}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className="block px-4 py-3 rounded-lg text-sm font-medium transition-all"
              style={{
                color: isActive(link.path) ? 'var(--text-primary)' : 'var(--text-secondary)',
                background: isActive(link.path) ? 'var(--card-bg)' : 'transparent'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;