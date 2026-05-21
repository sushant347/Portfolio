import React, { useMemo, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import urbanwaveImg from '../components/images/Urbanwave.png';
import electronestImg from '../components/images/Electronest.png';
import spaceInvaderImg from '../components/images/space Invader.png';
import snakeGameImg from '../components/images/snake game.png';
import cinescopeImg from '../components/images/cinescope.png';
import cinematchImg from '../components/images/Cinematch.png';
import nepaliNewsImg from '../components/images/Nepali News.png';
import kharchiImg from '../components/images/Kharchi.png';

/* ─── Project Data ─── */
const projects = [
  {
    title: 'CineMatch',
    category: 'AI / Recommendation System',
    tab: 'AI & ML',
    description:
      'Full-stack movie recommendation platform using collaborative filtering, TF-IDF content matching, and popularity-based ranking with explainable results.',
    tech: ['React', 'Django', 'PostgreSQL', 'NLP', 'ALS'],
    github: 'https://github.com/sushant347/CineMatch',
    hideLiveDemo: true,
    image: cinematchImg,
    gradient: 'from-violet-500 to-indigo-400',
  },
  {
    title: 'ElectroNest',
    category: 'Full Stack Web App',
    tab: 'Web Apps',
    description:
      'ElectroNest is an electronics e-commerce platform with product listings, cart management, and a streamlined checkout experience.',
    tech: ['React', 'Django', 'Tailwind CSS', 'PostgreSQL', 'ML Forecasting'],
    github: 'https://github.com/sushant347/ElectroNest',
    live: 'https://electro-nest.vercel.app',
    image: electronestImg,
    gradient: 'from-sky-500 to-indigo-400',
  },
  {
    title: 'CineScope Intelligence',
    category: 'AI / NLP Web App',
    tab: 'AI & ML',
    description:
      'CineScope Intelligence analyzes movie reviews and returns sentiment insights with confidence scores, explainability output, and aspect-level analysis.',
    tech: ['React', 'Django', 'PostgreSQL', 'BERT NLP', 'Logistic Regression', 'SVM', 'VADER'],
    github: 'https://github.com/sushant347/CineScope-Intelligence',
    hideLiveDemo: true,
    image: cinescopeImg,
    gradient: 'from-indigo-500 to-blue-400',
  },
  {
    title: 'Nepali News Summarizer',
    category: 'AI / NLP Dashboard',
    tab: 'AI & ML',
    description:
      'AI-powered Nepali news dashboard that aggregates sources, generates concise Nepali summaries, analyzes sentiment, tracks trends, and serves results via API.',
    tech: ['React', 'Django REST', 'PostgreSQL', 'NLP', 'Sentiment Analysis'],
    github: 'https://github.com/sushant347/Nepali-News-Summarizer',
    hideLiveDemo: true,
    image: nepaliNewsImg,
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Kharchi',
    category: 'AI / FinTech Web App',
    tab: 'AI & ML',
    description:
      'AI-powered personal finance application that classifies expenses using NLP, forecasts spending trends, and provides practical savings insights.',
    tech: ['React', 'Django', 'Scikit-learn', 'NLP', 'PostgreSQL'],
    github: 'https://github.com/sushant347/Smart-Expense-Analyzer-with-ML-NLP-Django-React-',
    hideLiveDemo: true,
    image: kharchiImg,
    gradient: 'from-rose-500 to-orange-400',
  },
  {
    title: 'UrbanWave E-commerce',
    category: 'Frontend Web Project',
    tab: 'Web Apps',
    description:
      'E-commerce frontend with product listing, shopping cart flow, and checkout simulation built using vanilla web technologies.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/sushant347/Minor-demo-Project-HTML_CSS_JS-',
    live: 'https://sushant347.github.io/Minor-demo-Project-HTML_CSS_JS-/index.html',
    image: urbanwaveImg,
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Space Invader Game',
    category: 'Game Development',
    tab: 'Games',
    description:
      'Arcade-style space shooter rebuilt with Python and Pygame, featuring wave progression, live score tracking, and fluid movement controls.',
    tech: ['Python', 'Pygame'],
    github: 'https://github.com/sushant347/Space-Invadar-Game',
    hideLiveDemo: true,
    image: spaceInvaderImg,
    gradient: 'from-cyan-500 to-blue-400',
  },
  {
    title: 'Snake Game',
    category: 'Game Development',
    tab: 'Games',
    description:
      'Classic Snake game with responsive keyboard controls, collision logic, progressive difficulty, and persistent high-score tracking.',
    tech: ['Python', 'Pygame'],
    github: 'https://github.com/sushant347/Snake-Game',
    hideLiveDemo: true,
    image: snakeGameImg,
    gradient: 'from-emerald-500 to-green-400',
  },
];

/* ─── Gallery Component ─── */
const Gallery = () => {
  const tabs = ['All', 'AI & ML', 'Web Apps', 'Games'];
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeTab === 'All' || project.tab === activeTab),
    [activeTab]
  );

  return (
    <section
      id="gallery"
      className="relative min-h-screen py-20 sm:py-24 px-4 sm:px-6 overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-12%] right-[-8%] w-[340px] md:w-[520px] h-[340px] md:h-[520px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'var(--accent-color)' }}
        />
        <div
          className="absolute bottom-[-15%] left-[-10%] w-[320px] md:w-[460px] h-[320px] md:h-[460px] rounded-full blur-[100px] opacity-15"
          style={{ background: 'var(--text-primary)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <header className="text-center mb-16 md:mb-20" data-aos="fade-down">
          <span
            className="inline-flex px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5"
            style={{
              background: 'var(--bg-tertiary)',
              color: 'var(--accent-color)',
              border: '1px solid var(--border-color)',
            }}
          >
            Project Gallery
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Featured{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(to right, var(--accent-color), var(--accent-hover))' }}
            >
              Work
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto mt-5 text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            A curated set of projects across web development, AI, and game programming — each with source code and a live destination where available.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab ? 'text-white' : ''
                }`}
                style={{
                  background:
                    activeTab === tab ? 'var(--accent-color)' : 'var(--bg-tertiary)',
                  color: activeTab === tab ? '#ffffff' : 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => {
            return (
              <article
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group relative rounded-2xl border flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: 'var(--card-bg)',
                  borderColor: 'var(--border-color)',
                  boxShadow: '0 12px 40px -16px var(--shadow-color)',
                }}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${project.gradient} z-10`} />
                <div className={`absolute top-0 left-0 w-full h-[10px] bg-gradient-to-r ${project.gradient} opacity-25 blur-[5px] z-10`} />
                {/* Hover glow — pointer-events-none keeps buttons clickable */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 bg-gradient-to-br ${project.gradient} pointer-events-none z-0`} />

                {/* Banner */}
                <div className="relative overflow-hidden h-44 sm:h-48 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  {/* Category badge */}
                  <span
                    className="absolute top-3 left-3 z-10 text-[11px] px-3 py-1 rounded-full font-semibold tracking-wide uppercase backdrop-blur-sm"
                    style={{
                      background: 'var(--card-bg)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((item) => (
                      <span
                        key={`${project.title}-${item}`}
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          background: 'var(--bg-tertiary)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    {!project.hideLiveDemo && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative z-10 flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:brightness-110 bg-gradient-to-r ${project.gradient}`}
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative z-10 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] ${
                        project.hideLiveDemo ? 'w-full' : 'flex-1'
                      }`}
                      style={{
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      <Github size={15} /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
