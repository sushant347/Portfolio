import React from 'react';
import { Github,Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/sushant347', label: 'GitHub' },
    { icon: Instagram, url: 'https://www.instagram.com/sushantgautam258/', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:sushantgautam98677@gmail.com', label: 'Email' },
  ];

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Work', path: '#gallery' },
    { name: 'Contact', path: '#contact' },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
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

  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-bold text-base sm:text-lg" style={{ color: 'var(--text-primary)' }}>Sushant Gautam</h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Full-stack developer creating elegant digital solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="text-xs sm:text-sm transition-colors hover:text-[var(--accent-color)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>Connect</h4>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                      background: 'var(--card-bg)'
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8" style={{ borderTop: '1px solid var(--border-color)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm" style={{ color: 'var(--text-tertiary)' }}>
              © {currentYear} Sushant Gautam. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm flex items-center gap-2" style={{ color: 'var(--text-tertiary)' }}>
              <span>Built with</span>
              <Heart size={14} style={{ color: 'var(--accent-color)' }} fill="currentColor" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
