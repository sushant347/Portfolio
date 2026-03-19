import React, { useEffect, useState } from 'react';
import { Code, User, GitBranch } from 'lucide-react';

const Intro = ({ onComplete }) => {
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateOut(true);
    }, 2500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      // 1. Changed fixed bg color to dynamic variable `bg-[var(--bg-primary)]`
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg-primary)] transition-all duration-1000 ease-in-out ${
        animateOut ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Glow Effect 
          - Used `bg-[var(--accent-color)]` so the glow matches your theme color automatically.
          - Adjusted opacity to be subtle on both light and dark backgrounds.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent-color)] rounded-full blur-[120px] opacity-20 animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Floating Icons Container */}
        <div className="flex gap-8 mb-8">
          <div className="animate-float delay-0">
            {/* Changed color to `text-[var(--accent-color)]` */}
            <Code size={32} className="text-[var(--accent-color)] opacity-80" />
          </div>
          <div className="animate-float delay-100">
            {/* Used secondary text color for variation or accent hover */}
            <User size={32} className="text-[var(--text-secondary)] opacity-80" />
          </div>
          <div className="animate-float delay-200">
            <GitBranch size={32} className="text-[var(--accent-color)] opacity-80" />
          </div>
        </div>

        {/* Text Animation */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl text-[var(--text-secondary)] font-bold tracking-wide animate-fade-up">
            Welcome To My
          </h2>
          
          {/* Gradient Text: 
             Changed to flow from `text-primary` to `accent-color`.
             This ensures it is Black->Blue in Light Mode and White->Blue in Dark Mode.
          */}
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--accent-color)] animate-fade-up delay-200">
            Portfolio Website
          </h1>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s ease-out forwards;
        }
        .delay-0 { animation-delay: 0s; }
        .delay-100 { animation-delay: 0.2s; }
        .delay-200 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
};

export default Intro;