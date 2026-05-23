import React, { useCallback, useRef } from 'react';
import { FaPython, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiPostgresql, SiPytorch, SiScikitlearn } from 'react-icons/si';
import { Brain, Layout, ServerCog, Workflow, Zap, Handshake, PanelsTopLeft, Database, TerminalSquare } from 'lucide-react';

const Skills = () => {
  const tools = [
    { icon: FaPython, name: 'Python', color: '#ffd43b', note: 261.63 },
    { icon: FaJsSquare, name: 'JavaScript', color: '#facc15', note: 293.66 },
    { icon: FaReact, name: 'React', color: '#22d3ee', note: 329.63 },
    { icon: SiDjango, name: 'Django', color: '#34d399', note: 349.23 },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#38bdf8', note: 392.0 },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#93c5fd', note: 440.0 },
    { icon: FaDatabase, name: 'MS SQL Server', color: '#f59e0b', note: 493.88 },
    { icon: SiScikitlearn, name: 'Scikit-learn', color: '#fb923c', note: 523.25 },
    { icon: SiPytorch, name: 'PyTorch', color: '#f97316', note: 587.33 },
    { icon: Brain, name: 'NLP', color: '#8b5cf6', note: 659.25 },
    { icon: Layout, name: 'Responsive UI', color: '#22c55e', note: 698.46 },
    { icon: ServerCog, name: 'REST APIs', color: '#2dd4bf', note: 739.99 },
    { icon: Workflow, name: 'Agile Workflow', color: '#60a5fa', note: 783.99 },
    { icon: Zap, name: 'Problem Solving', color: '#f43f5e', note: 830.61 },
    { icon: Handshake, name: 'Model Evaluation', color: '#a78bfa', note: 880.0 },
    { icon: FaGitAlt, name: 'Git', color: '#f97316', note: 932.33 },
    { icon: FaGithub, name: 'GitHub', color: '#a1a1aa', note: 987.77 },
  ];

  const skillGroups = [
    {
      title: 'Frontend & Design',
      icon: PanelsTopLeft,
      tone: 'frontend',
      items: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'Responsive UI'],
    },
    {
      title: 'Backend & Database',
      icon: Database,
      tone: 'backend',
      items: ['Django', 'REST APIs', 'PostgreSQL', 'MS SQL Server'],
    },
    {
      title: 'AI & Data Science',
      icon: Brain,
      tone: 'ai',
      items: ['Python', 'PyTorch', 'Scikit-learn', 'NLP', 'Model Evaluation'],
    },
    {
      title: 'Tools & Workflow',
      icon: TerminalSquare,
      tone: 'tools',
      items: ['Git/GitHub', 'Agile Workflow', 'Problem Solving'],
    },
  ];

  const audioCtxRef = useRef(null);
  const lastPlayedRef = useRef(0);

  React.useEffect(() => {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return undefined;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContextClass();
    }

    const unlockAudio = async () => {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === 'running') return;
      try {
        await ctx.resume();
      } catch {
        return;
      }
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, now);
      osc.frequency.setValueAtTime(440, now);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.01);
    };

    const opts = { passive: true, once: true };
    window.addEventListener('pointerdown', unlockAudio, opts);
    window.addEventListener('touchstart', unlockAudio, opts);
    window.addEventListener('keydown', unlockAudio, opts);
    return () => {
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
  }, []);

  const playPianoNote = useCallback(async (frequency) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const nowMs = performance.now();
    if (nowMs - lastPlayedRef.current < 70) return;
    lastPlayedRef.current = nowMs;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContextClass();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      try {
        await ctx.resume();
      } catch {
        return;
      }
    }
    const now = ctx.currentTime + 0.005;
    const osc = ctx.createOscillator();
    const oscHarmonic = ctx.createOscillator();
    const gain = ctx.createGain();
    const tone = ctx.createBiquadFilter();
    const body = ctx.createBiquadFilter();
    osc.type = 'sine';
    oscHarmonic.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, now);
    oscHarmonic.frequency.setValueAtTime(frequency * 2, now);
    tone.type = 'lowpass';
    tone.frequency.setValueAtTime(1800, now);
    tone.Q.setValueAtTime(0.7, now);
    body.type = 'peaking';
    body.frequency.setValueAtTime(620, now);
    body.gain.setValueAtTime(3.2, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.055, now + 0.014);
    gain.gain.exponentialRampToValueAtTime(0.018, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
    osc.connect(tone);
    oscHarmonic.connect(tone);
    tone.connect(body);
    body.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    oscHarmonic.start(now);
    osc.stop(now + 0.45);
    oscHarmonic.stop(now + 0.35);
  }, []);

  return (
    <section id="skills" className="relative min-h-screen py-20 sm:py-24 px-4 sm:px-6 overflow-hidden section-shell" style={{ background: 'var(--bg-primary)' }}>
      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
       
        <div data-aos="fade-up" className="p-2 sm:p-4 md:p-6">
          <h4 className="text-center text-2xl md:text-4xl font-extrabold tracking-tight mb-8" style={{ color: 'var(--text-primary)' }}>
            Tools In My Arsenal
          </h4>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
            {tools.map((tool) => (
              <div key={tool.name} className="tool-item">
                <button
                  type="button"
                  className="tool-orb piano-key"
                  onMouseEnter={() => { void playPianoNote(tool.note); }}
                  onPointerEnter={() => { void playPianoNote(tool.note); }}
                  onPointerDown={() => { void playPianoNote(tool.note); }}
                  onTouchStart={() => { void playPianoNote(tool.note); }}
                  onFocus={() => void playPianoNote(tool.note)}
                  style={{ '--tool-color': tool.color }}
                  title={tool.name}
                  aria-label={tool.name}
                >
                  <tool.icon className="tool-logo" aria-hidden="true" />
                </button>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h5 className="skill-group-title">
                  <span className="skill-title-with-icon">
                    <span className={`skill-title-icon ${group.tone || ''}`}>
                      <group.icon size={15} />
                    </span>
                    {group.title}
                  </span>
                </h5>
                <div className="skill-chip-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
