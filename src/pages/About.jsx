import React from 'react';
import { Brain, Database, Layout, Terminal } from 'lucide-react';
import mePhoto from '../components/images/me.png';

const About = () => {
  const skillCategories = [
    {
      title: 'Frontend & Design',
      icon: <Layout className="w-5 h-5" />,
      skills: ['React.js', 'Tailwind CSS', 'Next.js', 'TypeScript'],
      color: 'from-blue-500 to-cyan-400',
      delay: 100,
    },
    {
      title: 'Backend & Database',
      icon: <Database className="w-5 h-5" />,
      skills: ['Node.js', 'Django', 'MongoDB', 'PostgreSQL'],
      color: 'from-emerald-500 to-teal-400',
      delay: 200,
    },
    {
      title: 'AI & Data Science',
      icon: <Brain className="w-5 h-5" />,
      skills: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn'],
      color: 'from-orange-500 to-red-400',
      delay: 300,
    },
    {
      title: 'Tools & Workflow',
      icon: <Terminal className="w-5 h-5" />,
      skills: ['Git/GitHub', 'Linux', 'REST APIs', 'Problem Solving'],
      color: 'from-indigo-500 to-violet-400',
      delay: 400,
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 sm:py-24 px-4 sm:px-6 overflow-hidden"
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
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Building clean products
              <span
                className="block text-transparent bg-clip-text"
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
                I am Sushant Gautam, a Computer Engineering student and full stack developer focused on creating reliable, user-friendly web products. I enjoy combining frontend polish with strong backend fundamentals to build solutions that are both fast and maintainable.
              </p>
              <p className="text-base md:text-lg leading-relaxed mt-4" style={{ color: 'var(--text-secondary)' }}>
                My workflow is simple: understand the real problem, design a clean architecture, and execute with attention to detail. I bring the same discipline to UI design, APIs, and machine learning projects.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div data-aos="fade-up" className="flex items-center gap-4">
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Technical Arsenal
            </h3>
            <div className="h-[1px] flex-1 opacity-60" style={{ background: 'var(--border-color)' }}></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {skillCategories.map((category) => (
              <article
                key={category.title}
                data-aos="fade-up"
                data-aos-delay={category.delay}
                className="group relative p-6 rounded-2xl border overflow-hidden"
                style={{
                  background: 'var(--card-bg)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
                      style={{
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
