import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

// IMPORT KOMPONEN GLOBAL
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground'; 
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
import GamePage from './pages/GamePage'; // Tambahkan halaman game baru

// Wrapper untuk mendeteksi perubahan lokasi URL agar transisi terpancing
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/game" element={<PageTransition><GamePage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    // Judul Tab Mode Terminal
    document.title = "root@ruliDESIGN:~";

    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      {/* 1. LAYER MONITORING & PERTAHANAN */}
      <OfflineMode />
      <SystemStats />

      {/* 2. BOOTING SEQUENCE */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="relative text-white selection:bg-blue-500/30 font-['Space_Grotesk']">
        {/* 3. INTERACTIVE UI */}
        <CustomCursor /> 
        <Navbar />

        {/* 4. VISUAL EFFECTS */}
        <ParticleBackground />
        
        {/* 5. SCROLL PROGRESS */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[60]" style={{ scaleX }} />

        {/* 6. MOUSE GLOW */}
        <div 
          className="pointer-events-none fixed inset-0 z-30 hidden md:block"
          style={{ background: `radial-gradient(800px at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.08), transparent 80%)` }}
        />

        {/* 7. SISTEM NAVIGASI (Termasuk Game Option) */}
        <main className="pt-20 min-h-screen"> 
          <AnimatedRoutes />
        </main>

        {/* 8. INDUSTRIAL FOOTER */}
        <footer className="py-20 border-t border-white/5 bg-[#03050c] text-center">
          <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.4em]">
            © 2026 RULIDESIGN — R_GAME_ENGINE_DEPLOYED — V.4.0.0
          </p>
        </footer>
      </div>
    </Router>
  );
}