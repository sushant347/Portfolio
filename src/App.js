import React, { Suspense, lazy, useEffect, useLayoutEffect } from 'react';
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
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();
    window.addEventListener('load', scrollToTop, { once: true });
    window.addEventListener('pageshow', scrollToTop);
    window.addEventListener('beforeunload', scrollToTop);

    return () => {
      window.removeEventListener('load', scrollToTop);
      window.removeEventListener('pageshow', scrollToTop);
      window.removeEventListener('beforeunload', scrollToTop);
    };
  }, []);

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
