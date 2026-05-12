import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Rocket, Code, Mail, Home, Menu, X, Gamepad2 } from 'lucide-react'; 

const Navbar = ({ isDarkMode }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home size={16} />, path: '/' },
    { name: 'Services', icon: <Cpu size={16} />, path: '/services' },
    { name: 'Portfolio', icon: <Rocket size={16} />, path: '/portfolio' },
    { name: 'Experience', icon: <Code size={16} />, path: '/experience' },
    { name: 'Game', icon: <Gamepad2 size={16} />, path: '/game' }, 
    { name: 'Contact', icon: <Mail size={16} />, path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-colors duration-500 border-b ${
      isDarkMode 
      ? 'border-white/5 bg-[#03050c]/80' 
      : 'border-sky-600/10 bg-white/40'
    } backdrop-blur-xl`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-600/20">
            <span className="text-white text-xs font-black italic">R</span>
          </div>
          <span className={`transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            ruli<span className="text-blue-600">DESIGN</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/5">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${
                location.pathname === item.path 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-white/5' 
                  : 'text-slate-600 hover:text-blue-600 hover:bg-blue-600/5'
              }`}
            >
              <span className={location.pathname === item.path ? 'text-white' : 'text-blue-600'}>
                {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">
              Hire Me
            </button>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-3 rounded-xl transition-colors ${
            isDarkMode ? 'bg-white/5 text-white' : 'bg-blue-600/10 text-blue-600'
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY - ANTI KEDIP FIX */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`lg:hidden absolute top-full left-0 w-full border-b backdrop-blur-2xl shadow-2xl will-change-transform ${
              isDarkMode 
              ? 'bg-[#03050c]/95 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' 
              : 'bg-white/95 border-sky-600/20 shadow-xl shadow-sky-900/10'
            }`}
          >
            <div className="p-6 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-colors duration-200 ${
                    location.pathname === item.path 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : isDarkMode 
                      ? 'text-gray-300 hover:bg-white/5' 
                      : 'text-slate-700 hover:bg-blue-600/5'
                  }`}
                >
                  <span className={location.pathname === item.path ? 'text-white' : 'text-blue-600'}>
                    {item.icon}
                  </span>
                  <span className="font-bold text-base uppercase tracking-wider">{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-white/5 mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all uppercase tracking-widest active:scale-95">
                    Hire Me
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;