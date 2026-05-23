import React from 'react';
import { Github, Instagram, Mail, Phone, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/sushant347', label: 'GitHub' },
    { icon: Instagram, url: 'https://www.instagram.com/sushantgautam258/', label: 'Instagram' },
    { icon: Mail, url: 'mailto:sushantgautam98677@gmail.com', label: 'Email' },
    { icon: Phone, url: 'tel:+9779869465432', label: 'Phone' },
    { icon: MessageCircle, url: 'https://wa.me/9779869465432', label: 'WhatsApp' },
  ];

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
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
        <div className="grid gap-8 sm:gap-10 md:grid-cols-[1.2fr_1fr] md:gap-12 mb-8 sm:mb-10 md:mb-12">
          
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-bold text-base sm:text-lg" style={{ color: 'var(--text-primary)' }}>Sushant Gautam</h3>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Full-stack developer creating elegant digital solutions with modern technologies.
            </p>
          </div>



          {/* Social Links */}
          <div className="space-y-3 sm:space-y-4 md:justify-self-center text-center">
            <h4 className="font-semibold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>Connect</h4>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className="social-icon-btn w-10 h-10 rounded-lg flex items-center justify-center hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-6 sm:pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-xs sm:text-sm" style={{ color: 'var(--text-tertiary)' }}>
              © {currentYear} Sushant Gautam. All rights reserved.
            </p>
            <p className="text-[11px] sm:text-xs flex items-center gap-2" style={{ color: 'var(--text-tertiary)' }}>
              <span>Built with</span>
              <Heart size={12} style={{ color: 'var(--accent-color)' }} fill="currentColor" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
