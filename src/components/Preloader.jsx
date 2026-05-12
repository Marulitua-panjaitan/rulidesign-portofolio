import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Preloader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Kecepatan loading: 2.5 detik sampai 100%
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(finishLoading, 500); // Tunggu sebentar sebelum landing ke Home
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [finishLoading]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#03050c] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND PARTICLES (Star Field Effect) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -10, x: Math.random() * window.innerWidth }}
            animate={{ y: window.innerHeight + 100 }}
            transition={{
              duration: Math.random() * 1 + 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
            className="absolute w-[1px] h-20 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-white/0"
          />
        ))}
      </div>

      {/* ROCKET CONTAINER */}
      <div className="relative">
        {/* Efek Api/Thrust Mesin */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 0.2, repeat: Infinity }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-8 h-20 bg-blue-500 blur-2xl rounded-full"
        />

        {/* Rocket Icon dengan efek getar mesin */}
        <motion.div
          animate={{ 
            y: [0, -2, 0, 2, 0],
            x: [0, 1, 0, -1, 0]
          }}
          transition={{ duration: 0.1, repeat: Infinity }}
          className="text-white relative z-10"
        >
          <Rocket size={80} strokeWidth={1.5} className="fill-blue-500/20" />
        </motion.div>
      </div>

      {/* TEXT AREA */}
      <div className="mt-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white font-mono text-xl tracking-[0.5em] font-bold uppercase"
        >
          MENUJU COSMIC
        </motion.h2>
        
        {/* Progress Text */}
        <div className="mt-2 font-mono text-blue-500 text-sm tracking-widest">
          {progress}% <span className="animate-pulse">_</span>
        </div>
      </div>

      {/* INDUSTRIAL PROGRESS BAR */}
      <div className="mt-8 w-64 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-white"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Overlay Glow saat hampir selesai */}
      {progress > 80 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          className="absolute inset-0 bg-blue-600 blur-[150px] pointer-events-none"
        />
      )}
    </motion.div>
  );
};

export default Preloader;