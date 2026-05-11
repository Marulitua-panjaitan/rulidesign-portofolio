import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Rocket, Code, Mail, Home, Menu, X, Gamepad2 } from 'lucide-react'; 

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // KONFIGURASI MENU - Urutan diatur agar alur visualnya enak dibaca
  const navItems = [
    { name: 'Home', icon: <Home size={16} />, path: '/' },
    { name: 'Services', icon: <Cpu size={16} />, path: '/services' },
    { name: 'Portfolio', icon: <Rocket size={16} />, path: '/portfolio' },
    { name: 'Experience', icon: <Code size={16} />, path: '/experience' },
    { name: 'Game', icon: <Gamepad2 size={16} />, path: '/game' }, 
    { name: 'Contact', icon: <Mail size={16} />, path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#03050c]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white shrink-0">
          RULI<span className="text-blue-500">DESIGN.</span>
        </Link>
        
        {/* DESKTOP NAV - Rapi & Simetris */}
        <div className="hidden lg:flex items-center bg-white/5 px-4 py-2 rounded-2xl border border-white/5 gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name} 
                to={item.path}
                className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl ${
                  isActive ? 'text-blue-400 bg-blue-500/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
                {isActive && (
                  <motion.div 
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-blue-500/5 rounded-xl border border-blue-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)] active:scale-95">
              Hire Me
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2.5 bg-white/5 rounded-xl text-gray-400 border border-white/10"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN - Industrial Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#03050c]/95 border-b border-white/10 p-6 backdrop-blur-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    location.pathname === item.path 
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                    : 'text-gray-400 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span className={location.pathname === item.path ? 'text-blue-400' : 'text-gray-500'}>
                    {item.icon}
                  </span>
                  <span className="font-semibold tracking-wide">{item.name}</span>
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="pt-4">
                <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg">
                  Hire Me
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;