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
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
      isDarkMode 
      ? 'border-white/5 bg-[#03050c]/80' 
      : 'border-sky-600/10 bg-white/40'
    } backdrop-blur-xl`}>
      {/* Container Utama dengan Tinggi Terkunci h-20 */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        
        {/* AREA KIRI: LOGO (Dikasih min-width agar tidak tertekan) */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
              <span className="text-white text-sm font-black uppercase">R</span>
            </div>
            <span className={`text-xl font-bold tracking-tighter font-mono hidden sm:block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              ruli<span className="text-blue-500 uppercase">design</span>
            </span>
          </Link>
        </div>

        {/* AREA TENGAH: DESKTOP MENU (Dibuat mengambang dengan rapi) */}
        <div className="hidden lg:flex items-center justify-center">
          <div className={`flex items-center gap-1 p-1 rounded-2xl border transition-all duration-500 ${
            isDarkMode ? 'bg-black/40 border-white/5' : 'bg-white/50 border-sky-600/10'
          }`}>
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                  location.pathname === item.path 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                  : isDarkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-white/5' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-white/60'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* AREA KANAN: TOMBOL HIRE ME (Desktop) & TOGGLE (Mobile) */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link to="/contact" className="hidden lg:block">
            <button className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all uppercase tracking-widest active:scale-95">
              Hire Me
            </button>
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all active:scale-90 ${
              isDarkMode ? 'bg-white/5 text-white' : 'bg-blue-600/10 text-blue-600'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden absolute top-full left-0 w-full overflow-hidden border-b backdrop-blur-3xl shadow-2xl ${
              isDarkMode 
              ? 'bg-[#03050c]/98 border-white/10' 
              : 'bg-white/95 border-sky-600/20'
            }`}
          >
            <div className="p-6 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    location.pathname === item.path 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : isDarkMode 
                      ? 'text-gray-400 hover:bg-white/5' 
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
                  <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all uppercase tracking-widest">
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