import React from 'react';
import {
  CheckCircle, Search, NotebookPen, Code, Rocket,
  ExternalLink, Gamepad2, Film, BookOpen, Globe, Github
} from 'lucide-react';

const Services = () => {
  const projects = [
    {
      icon: Globe,
      title: 'Minor Demo Project',
      description: 'UrbanWave — a feature-rich e-commerce frontend with shopping cart, product categories, and a full checkout simulation built entirely with vanilla web tech.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/sushant347/Minor-demo-Project-HTML_CSS_JS-',
      live: 'https://sushant347.github.io/Minor-demo-Project-HTML_CSS_JS-/index.html',
      color: 'text-blue-500',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0,
    },
    {
      icon: BookOpen,
      title: 'Advanced Python',
      description: 'A comprehensive collection of advanced Python assignments and projects covering diverse programming concepts, algorithms, and data analysis using Jupyter Notebook.',
      tech: ['Python', 'Jupyter Notebook'],
      github: 'https://github.com/sushant347/Advanced-Python',
      live: 'https://github.com/sushant347/Advanced-Python',
      color: 'text-yellow-500',
      gradient: 'from-yellow-500 to-orange-500',
      delay: 100,
    },
    {
      icon: Film,
      title: 'CineScope Intelligence',
      description: 'CineScope Intelligence is a full-stack NLP application that analyzes movie reviews and returns sentiment insights with confidence scores, explainability output, and aspect-level analysis.',
      tech: ['React', 'Node.js', 'MongoDB', 'AI Recommendations'],
      github: 'https://github.com/sushant347/CineScope-Intelligence',
      live: 'https://github.com/sushant347/CineScope-Intelligence',
      color: 'text-indigo-500',
      gradient: 'from-indigo-500 to-blue-500',
      delay: 200,
    },
    {
      icon: Gamepad2,
      title: 'Space Invader Game',
      description: 'Classic Space Invaders arcade game rebuilt with Python and Pygame, featuring escalating enemy waves, a live scoring system, and polished animations.',
      tech: ['Python', 'Pygame'],
      github: 'https://github.com/sushant347/Space-Invadar-Game',
      live: 'https://github.com/sushant347/Space-Invadar-Game',
      color: 'text-emerald-500',
      gradient: 'from-emerald-500 to-teal-500',
      delay: 300,
    },
    {
      icon: Gamepad2,
      title: 'Snake Game',
      description: 'A classic Snake game built with Python and Pygame featuring smooth directional controls, collision detection, growing mechanics, and a high-score tracker.',
      tech: ['Python', 'Pygame'],
      github: 'https://github.com/sushant347/Snake-Game',
      live: 'https://github.com/sushant347/Snake-Game',
      color: 'text-rose-500',
      gradient: 'from-rose-500 to-red-500',
      delay: 400,
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      desc: 'I dive deep into the goals, audience, and constraints to understand the core problem.',
      icon: Search
    },
    {
      number: '02',
      title: 'Strategy',
      desc: 'I design a roadmap, selecting the right tech stack and architecture for scalability.',
      icon: NotebookPen
    },
    {
      number: '03',
      title: 'Development',
      desc: 'I build the solution using clean, efficient code with frequent progress updates.',
      icon: Code
    },
    {
      number: '04',
      title: 'Launch',
      desc: 'Rigorous testing, deployment, and final handoff to ensure a flawless go-live.',
      icon: Rocket
    }
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen py-20 sm:py-24 px-4 sm:px-6 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >

      {/* BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'var(--accent-color)' }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-15"
          style={{ background: 'var(--text-primary)' }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div data-aos="fade-down" className="text-center mb-16 md:mb-24">
          <span
            className="font-semibold tracking-wider uppercase text-xs sm:text-sm px-4 py-1.5 rounded-full border mb-6 inline-block"
            style={{
              color: 'var(--accent-color)',
              borderColor: 'var(--border-color)',
              background: 'var(--bg-tertiary)'
            }}
          >
            My Work
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: 'var(--text-primary)' }}
          >
            My <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, var(--accent-color), var(--accent-hover))' }}>Projects</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            A selection of personal and academic projects that reflect my skills across web development, AI, and systems programming.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-24 sm:mb-32">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={project.delay}
                className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  boxShadow: '0 10px 40px -10px var(--shadow-color)'
                }}
              >
                {/* Top glowing gradient line — always visible */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${project.gradient}`} />
                <div className={`absolute top-0 left-0 w-full h-[10px] bg-gradient-to-r ${project.gradient} opacity-30 blur-[5px]`} />

                {/* Hover glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${project.gradient}`}></div>

                {/* Icon */}
                <div
                  className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500"
                  style={{ background: 'var(--bg-tertiary)' }}
                >
                  <Icon size={24} className={project.color} />
                </div>

                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-tertiary)',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95"
                    style={{
                      background: 'var(--bg-tertiary)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 text-white bg-gradient-to-r ${project.gradient}`}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* HOW I WORK SECTION */}
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>How I Work</h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A transparent, agile process designed to deliver results efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">

            {/* Desktop Connecting Line */}
            <div
              className="hidden md:block absolute top-12 left-0 w-full h-[2px] -z-10"
              style={{
                background: `linear-gradient(to right, var(--bg-tertiary) 0%, var(--accent-color) 50%, var(--bg-tertiary) 100%)`,
                opacity: 0.3
              }}
            ></div>

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-6 relative z-10 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'var(--card-bg)',
                      border: '2px solid var(--border-color)',
                      boxShadow: '0 0 20px var(--shadow-color)'
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ background: 'var(--accent-color)' }}
                    ></div>

                    <Icon size={24} className="sm:w-8 sm:h-8" style={{ color: 'var(--accent-color)' }} />

                    <div
                      className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold"
                      style={{
                        background: 'var(--accent-color)',
                        color: 'white',
                        border: '3px solid var(--bg-primary)'
                      }}
                    >
                      {step.number}
                    </div>
                  </div>


                  <div
                    className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border w-full transition-all duration-300 group-hover:-translate-y-2"
                    style={{
                      background: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                    }}
                  >
                    <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: 'var(--text-primary)' }}>
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
