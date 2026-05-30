import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'sushant98677@gmail.com',
      link: 'mailto:sushant98677@gmail.com',
      label: 'Send an email'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+977 9869465432',
      link: 'tel:+9779869465432',
      label: 'Call me'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+977 9869465432',
      link: 'https://wa.me/9779869465432',
      label: 'Chat on WhatsApp'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Kathmandu, Nepal',
      link: 'https://maps.app.goo.gl/hapy4M7LQySgM9yaA',
      label: 'View on map'
    },
  ];

  const primaryActions = [
    {
      icon: Mail,
      title: 'Email Me',
      detail: 'sushant98677@gmail.com',
      link: 'mailto:sushant98677@gmail.com',
    },
    {
      icon: Phone,
      title: 'Call Me',
      detail: '+977 9869465432',
      link: 'tel:+9779869465432',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      detail: '+977 9869465432',
      link: 'https://wa.me/9779869465432',
    },
  ];

  return (
    <section 
      id="contact" 
      className="min-h-screen py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden section-shell" 
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div data-aos="fade-down" className="text-center mb-16">
          <span 
            className="font-semibold tracking-wider uppercase text-xs sm:text-sm px-4 py-1.5 rounded-full border mb-6 inline-block"
            style={{ 
              color: 'var(--accent-color)',
              borderColor: 'var(--border-color)',
              background: 'var(--bg-tertiary)'
            }}
          >
            Contact
          </span>
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            Let's <span style={{ color: 'var(--accent-color)' }}>Work Together</span>
          </h2>
          <p 
            className="max-w-xl mx-auto text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have a project in mind? Let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Contact Actions */}
          <div 
            data-aos="fade-right"
            className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border relative overflow-hidden group"
            style={{ 
              background: 'var(--card-bg)', 
              borderColor: 'var(--border-color)',
              boxShadow: '0 10px 40px -10px var(--shadow-color)'
            }}
          >
            <div 
              className="absolute top-0 left-0 w-full h-1 opacity-50"
              style={{ background: 'var(--accent-color)' }}
            ></div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Start a Project</h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Share a brief about your idea, timeline, and goals. I respond fast and keep communication clear from day one.
                </p>
              </div>

              <div className="grid gap-3">
                {primaryActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <a
                      key={action.title}
                      href={action.link}
                      className="contact-card flex items-center justify-between gap-4 px-5 py-4 rounded-xl border transition-all hover:-translate-y-0.5"
                      style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="contact-icon-wrap w-10 h-10 rounded-full flex items-center justify-center">
                          <Icon size={18} style={{ color: 'var(--accent-color)' }} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{action.title}</p>
                          <p className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>{action.detail}</p>
                        </div>
                      </div>
                      <ArrowRight size={16} style={{ color: 'var(--accent-color)' }} />
                    </a>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>Response time:</span>
                <span className="text-xs sm:text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Within 24 hours</span>
                <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>Timezone:</span>
                <span className="text-xs sm:text-sm font-bold" style={{ color: 'var(--text-primary)' }}>GMT +5:45 (Nepal)</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Info & Status */}
          <div data-aos="fade-left" className="space-y-8">
            
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-card group flex items-center gap-3 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      background: 'var(--card-bg)',
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    <div 
                      className="contact-icon-wrap w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <Icon size={20} className="sm:w-6 sm:h-6" style={{ color: 'var(--accent-color)' }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5 sm:mb-1" style={{ color: 'var(--text-tertiary)' }}>{info.title}</p>
                      <p className="font-semibold text-sm sm:text-lg truncate" style={{ color: 'var(--text-primary)' }}>{info.content}</p>
                      <p className="text-[10px] sm:text-xs mt-0.5 sm:mt-1 font-medium flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: 'var(--accent-color)' }}>
                        {info.label} <ArrowRight size={12} />
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Status Card */}
            <div 
              className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl border relative overflow-hidden"
              style={{ 
                background: 'var(--card-bg)', 
                borderColor: 'var(--border-color)' 
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2" style={{ color: 'var(--text-primary)' }}>Current Status</h3>
                  <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>I'm currently available for freelance projects and consulting.</p>
                </div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] flex-shrink-0 mt-1"></div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <span className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>Response time:</span>
                <span className="text-xs sm:text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Within 24 hours</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
