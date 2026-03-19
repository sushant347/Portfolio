import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Intro from './pages/intro';
import './App.css';

// 1. IMPORT YOUR LOGO
import logo from './components/images/logo.png'; 

import AOS from 'aos';
import 'aos/dist/aos.css';

const Preloader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`preloader ${fadeOut ? 'fade-out' : ''}`}
      // Ensure background matches your theme variables
      style={{ background: 'var(--bg-primary)' }} 
    >
      <div className="relative flex flex-col items-center justify-center">
        
        {/* LOGO CONTAINER */}
        <div className="relative mb-8">
          
          
          {/* The Logo Image */}
          <img 
            src={logo} 
            alt="Loading..." 
            className="relative z-20 w-50 h-40 object-contain animate-bounce-subtle" 
          />
        </div>

        {/* LOADING BAR */}
        <div className="loading-bar">
          <div className="loading-bar-inner"></div>
        </div>

        {/* Loading Text */}
        <p 
          className="preloader-text mt-4 text-sm font-bold tracking-[0.3em] uppercase animate-pulse"
          style={{ color: 'var(--text-secondary)' }}
        >
          Loading
        </p>
      </div>

      {/* Custom Keyframe for subtle bounce if not in global css */}
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        
        {showPreloader && (
          <Preloader onComplete={() => {
            setShowPreloader(false);
            setShowIntro(true);
          }} />
        )}

        {showIntro && (
          <Intro onComplete={() => {
            setShowIntro(false);
            setShowMain(true);
          }} />
        )}

        {showMain && (
          <>
            <Navbar />
            <main className="pt-20">
              <Home />
              <About />
              <Gallery />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;