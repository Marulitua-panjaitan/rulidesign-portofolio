import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

// IMPORT KOMPONEN GLOBAL
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground'; 
import SkyBackground from './components/SkyBackground'; 
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';
import OfflineMode from './components/OfflineMode';
import SystemStats from './components/SystemStats';

// IMPORT HALAMAN
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portofolio';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import GamePage from './pages/GamePage'; 

function AnimatedRoutes({ isDarkMode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home isDarkMode={isDarkMode} /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services isDarkMode={isDarkMode} /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio isDarkMode={isDarkMode} /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><Experience isDarkMode={isDarkMode} /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact isDarkMode={isDarkMode} /></PageTransition>} />
        <Route path="/game" element={<PageTransition><GamePage isDarkMode={isDarkMode} /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); 
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    document.title = isDarkMode ? "root@ruliDESIGN:~" : "user@ruliDESIGN:sky";
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDarkMode]);

  return (
    <Router>
      <style>
        {`
          ${!isDarkMode ? `
            /* 1. Global Text Color Force */
            nav a, nav span, nav div, .logo-text, h1, h2, h3, p, span, li {
              color: #0f172a !important; 
            }

            /* 2. Border Amplification */
            .border, [class*="border-white"] {
              border-color: rgba(15, 23, 42, 0.2) !important;
              border-width: 1.5px !important;
            }

            /* 3. Form & Input Clarity */
            input, textarea, select, .form-input, [class*="bg-white/5"] {
              background-color: rgba(255, 255, 255, 0.7) !important;
              border: 1.5px solid rgba(15, 23, 42, 0.3) !important;
              color: #0f172a !important;
            }

            /* 4. MARQUEE TECH STACK FIX: Hilangkan bayangan gelap & kotak hitam */
            .tech-marquee-container, [class*="marquee"] {
              background: transparent !important;
            }

            /* Hilangkan gradasi hitam samping, ganti dengan gradasi langit */
            .tech-marquee-container::before, 
            .tech-marquee-container::after,
            [class*="marquee-fade"] {
              background: linear-gradient(to right, #38bdf8, transparent) !important; /* Sky 400 */
            }
            
            .tech-marquee-container::after {
              background: linear-gradient(to left, #38bdf8, transparent) !important;
            }

            /* Warna teks teknologi di dalam marquee agar kontras */
            .tech-item span, .marquee-content span {
              color: #0369a1 !important; /* Sky 700 */
              font-weight: 800 !important;
              opacity: 0.9 !important;
            }

            .tech-separator {
              background-color: rgba(15, 23, 42, 0.2) !important;
            }

            /* 5. Navbar & System Box Enhancement */
            nav, header, [class*="system-stats"] {
              background: rgba(255, 255, 255, 0.4) !important;
              backdrop-filter: blur(12px) !important;
              border-bottom: 2px solid rgba(15, 23, 42, 0.1) !important;
            }

            .nav-glow, .header-shadow {
              display: none !important;
            }
          ` : ''}
        `}
      </style>

      <OfflineMode />
      <SystemStats isDarkMode={isDarkMode} />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className={`relative transition-colors duration-1000 font-['Space_Grotesk'] ${
        isDarkMode ? 'bg-[#03050c] text-white' : 'bg-sky-400 text-slate-900'
      }`}>
        
        <div className="fixed inset-0 z-0 pointer-events-none">
          {isDarkMode ? <ParticleBackground /> : <SkyBackground />}
        </div>

        <button 
          onClick={toggleTheme}
          className={`fixed top-24 right-6 z-[100] px-4 py-2 rounded-full border text-[10px] font-mono transition-all shadow-xl active:scale-90 ${
            isDarkMode 
            ? 'bg-black/40 border-white/10 text-blue-400' 
            : 'bg-white border-sky-600 text-sky-900 font-bold shadow-sky-600/20'
          }`}
        >
          {isDarkMode ? '>_ SHIFT_TO_SKY' : '>_ SHIFT_TO_COSMIC'}
        </button>

        <div className="relative z-10">
          <CustomCursor isDarkMode={isDarkMode} /> 
          <Navbar isDarkMode={isDarkMode} />
          
          <motion.div 
            className={`fixed top-0 left-0 right-0 h-1 z-[60] origin-left ${isDarkMode ? 'bg-blue-500' : 'bg-blue-700'}`} 
            style={{ scaleX }} 
          />

          <main className="pt-20 min-h-screen"> 
            <AnimatedRoutes isDarkMode={isDarkMode} />
          </main>

          <footer className={`py-20 border-t transition-colors duration-1000 ${
            isDarkMode ? 'border-white/5 bg-[#03050c]' : 'border-sky-600/30 bg-white/20'
          } text-center`}>
            <p className={`${isDarkMode ? 'text-gray-500' : 'text-sky-900'} text-[10px] font-mono uppercase tracking-[0.4em]`}>
              © 2026 RULIDESIGN — V.4.5.0
            </p>
          </footer>
        </div>
      </div>
    </Router>
  );
}