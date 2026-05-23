import React, { Suspense, lazy, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = window.matchMedia('(max-width: 767px)').matches;

    AOS.init({
      duration: prefersReducedMotion ? 0 : isSmallScreen ? 520 : 760,
      offset: 90,
      once: true,
      mirror: false,
      easing: 'ease-out-cubic',
      disable: false,
      debounceDelay: 100,
      throttleDelay: 120,
    });

    const refreshAnimations = () => AOS.refresh();

    window.addEventListener('load', refreshAnimations, { once: true });
    window.addEventListener('resize', refreshAnimations, { passive: true });
    const refreshTimeout = window.setTimeout(refreshAnimations, 200);

    return () => {
      window.removeEventListener('load', refreshAnimations);
      window.removeEventListener('resize', refreshAnimations);
      window.clearTimeout(refreshTimeout);
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      AOS.refresh();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <Navbar />
        <main className="pt-20">
          <Home />
          <Suspense fallback={<section className="section-shell" aria-hidden="true" />}>
            <About />
          </Suspense>
          <Suspense fallback={<section className="section-shell" aria-hidden="true" />}>
            <Gallery />
          </Suspense>
          <Suspense fallback={<section className="section-shell" aria-hidden="true" />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
