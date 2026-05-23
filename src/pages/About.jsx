import React from 'react';
import mePhoto from '../components/images/MePhotoo.png';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 sm:py-24 px-4 sm:px-6 overflow-hidden section-shell"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-12%] right-[-8%] w-[340px] md:w-[520px] h-[340px] md:h-[520px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'var(--accent-color)' }}
        ></div>
        <div
          className="absolute bottom-[-15%] left-[-10%] w-[320px] md:w-[450px] h-[320px] md:h-[450px] rounded-full blur-[100px] opacity-15"
          style={{ background: 'var(--text-primary)' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div data-aos="fade-right" className="relative">
            <div
              className="absolute -inset-4 rounded-3xl blur-3xl opacity-25"
              style={{ background: 'var(--accent-color)' }}
            ></div>
            <div
              className="relative rounded-3xl overflow-hidden border"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <img
                src={mePhoto}
                alt="Sushant Gautam"
                loading="lazy"
                decoding="async"
                width={760}
                height={960}
                className="w-full h-[340px] sm:h-[460px] object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent 55%)' }}
              ></div>
              <div className="absolute left-5 bottom-5">
                <span
                  className="inline-flex px-4 py-2 rounded-full text-xs tracking-wider uppercase font-semibold"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  Sushant Gautam
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'var(--bg-tertiary)',
                color: 'var(--accent-color)',
                border: '1px solid var(--border-color)',
              }}
            >
              About Me
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold leading-[1.3] pb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              Building clean products
              <span
                className="inline-block text-transparent bg-clip-text pb-2"
                style={{
                  backgroundImage: 'linear-gradient(to right, var(--accent-color), var(--accent-hover))',
                }}
              >
                with practical engineering
              </span>
            </h2>

            <div
              className="p-6 sm:p-8 rounded-2xl border"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--border-color)',
                boxShadow: '0 10px 30px -15px var(--shadow-color)',
              }}
            >
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I am Sushant Gautam, a Computer Engineering student and full stack developer who builds reliable, user-focused software. My work combines clean frontend experiences, scalable backend architecture, and practical machine learning where it creates clear product value.
              </p>
              <p className="text-base md:text-lg leading-relaxed mt-4" style={{ color: 'var(--text-secondary)' }}>
                I focus on end-to-end delivery: understanding business requirements, translating them into maintainable systems, and shipping polished results. I am especially interested in AI-powered web applications, recommendation systems, and NLP-driven products.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
