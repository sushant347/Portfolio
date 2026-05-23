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
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
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
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Work', path: '#gallery' },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-[auto_1fr_auto] items-center h-16 md:h-[76px] gap-2 md:gap-4">
          
          {/* LOGO SECTION */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')} 
            className="group justify-self-start flex items-center gap-2 md:gap-2.5 transition-transform hover:scale-[1.02]"
          >
            <img 
              src={logo} 
              alt="Sushant Gautam" 
              className="h-9 w-auto object-contain md:h-10" 
            />
            <span 
              className="font-bold text-lg lg:text-[1.15rem] tracking-tight hidden sm:block"
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
          <div className="hidden md:flex items-center justify-center gap-9 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                // ADDED: Classes for the sliding underline effect
                className={`
                  relative py-1.5 text-[1.02rem] font-semibold transition-all
                  ${isActive(link.path) ? 'font-semibold after:w-full' : 'after:w-0'}
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-[2px]
                  after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500
                  after:transition-all after:duration-300
                  hover:after:w-full
                `}
                style={{
                  color: isActive(link.path) ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: 'transparent'
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-end">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all hover:scale-105"
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
          <div className="md:hidden flex items-center gap-1.5 justify-end">
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
