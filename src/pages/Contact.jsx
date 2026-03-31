import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

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
      icon: MapPin,
      title: 'Location',
      content: 'Kathmandu, Nepal',
      link: '#',
      label: 'View on map'
    },
  ];

  return (
    <section 
      id="contact" 
      className="min-h-screen py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden" 
      style={{ background: 'var(--bg-primary)' }}
    >
      
      {/* BACKGROUND AMBIENCE (Static & Consistent) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'var(--accent-color)' }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
          style={{ background: 'var(--text-primary)' }}
        ></div>
      </div>

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
            Let's <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, var(--accent-color), var(--accent-hover))' }}>Work Together</span>
          </h2>
          <p 
            className="max-w-xl mx-auto text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have a project in mind? Let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Contact Form */}
          <div 
            data-aos="fade-right"
            className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border relative overflow-hidden group"
            style={{ 
              background: 'var(--card-bg)', 
              borderColor: 'var(--border-color)',
              boxShadow: '0 10px 40px -10px var(--shadow-color)'
            }}
          >
            {/* Form Glow Effect */}
            <div 
              className="absolute top-0 left-0 w-full h-1 opacity-50"
              style={{ background: 'linear-gradient(to right, var(--accent-color), transparent)' }}
            ></div>

            {submitStatus === 'success' && (
              <div 
                className="mb-6 p-4 rounded-xl flex items-center gap-3 animate-fade-in"
                style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}
              >
                <CheckCircle size={20} className="text-green-500" />
                <p className="font-medium text-green-500">Message sent successfully!</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="name" className="text-xs sm:text-sm font-semibold ml-1" style={{ color: 'var(--text-primary)' }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base transition-all focus:scale-[1.01] outline-none border focus:border-[var(--accent-color)]"
                    style={{
                      background: 'var(--bg-tertiary)',
                      borderColor: 'transparent',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="email" className="text-xs sm:text-sm font-semibold ml-1" style={{ color: 'var(--text-primary)' }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="youremail@example.com"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base transition-all focus:scale-[1.01] outline-none border focus:border-[var(--accent-color)]"
                    style={{
                      background: 'var(--bg-tertiary)',
                      borderColor: 'transparent',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-semibold ml-1" style={{ color: 'var(--text-primary)' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project goals..."
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base resize-none transition-all focus:scale-[1.01] outline-none border focus:border-[var(--accent-color)]"
                  style={{
                    background: 'var(--bg-tertiary)',
                    borderColor: 'transparent',
                    color: 'var(--text-primary)'
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base text-white transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: 'var(--accent-color)' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
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
                    className="group flex items-center gap-3 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      background: 'var(--card-bg)',
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    <div 
                      className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: 'var(--bg-tertiary)' }}
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