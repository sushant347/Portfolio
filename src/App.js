import React, { useEffect, useLayoutEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useLayoutEffect(() => {
    const canManageScrollRestoration = 'scrollRestoration' in window.history;
    const previousScrollRestoration = canManageScrollRestoration
      ? window.history.scrollRestoration
      : null;

    if (canManageScrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (canManageScrollRestoration && previousScrollRestoration) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 90,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
      debounceDelay: 50,
      throttleDelay: 99,
    });

    const refreshAnimations = () => {
      AOS.refreshHard();
    };

    window.addEventListener('load', refreshAnimations);
    window.addEventListener('resize', refreshAnimations);
    const refreshTimeout = window.setTimeout(refreshAnimations, 200);

    return () => {
      window.removeEventListener('load', refreshAnimations);
      window.removeEventListener('resize', refreshAnimations);
      window.clearTimeout(refreshTimeout);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <Navbar />
        <main className="pt-20">
          <Home />
          <About />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;