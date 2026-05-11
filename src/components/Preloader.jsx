import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ finishLoading }) => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const logs = [
    "> INITIALIZING SYSTEM...",
    "> ACCESSING SECURE_SERVER_BATAM_ID",
    "> LOADING INDUSTRIAL_LOGIC.EXE",
    "> AUTHENTICATING: MARULI_TUA_PANJAITAN",
    "> STATUS: ENCRYPTED ACCESS GRANTED",
    "> STARTING RULIDESIGN_OS...",
    "> [ SYSTEM BOOT COMPLETED ]"
  ];

  useEffect(() => {
    let currentLog = 0;
    let currentChar = 0;
    
    // PERCEPATAN: Kecepatan ketik ditingkatkan (15ms)
    const interval = setInterval(() => {
      if (currentLog < logs.length) {
        if (currentChar < logs[currentLog].length) {
          setText(prev => prev + logs[currentLog][currentChar]);
          currentChar++;
        } else {
          setText(prev => prev + '\n');
          currentLog++;
          currentChar = 0;
        }
      } else {
        clearInterval(interval);
        // PERCEPATAN: Delay penutupan dikurangi menjadi 800ms
        setTimeout(finishLoading, 800); 
      }
    }, 15); 

    return () => clearInterval(interval);
  }, [finishLoading]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(c => !c), 400);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div 
      // PERCEPATAN: Durasi exit dipercepat menjadi 0.6s
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
      className="fixed inset-0 z-[9999] bg-[#03050c] flex items-center justify-center p-6 font-mono"
    >
      <div className="max-w-xl w-full">
        {/* Kontainer Terminal */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/40 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          </div>
          
          <div className="text-blue-500 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
            {text}
            {showCursor && <span className="inline-block w-2 h-5 bg-blue-500 ml-1 translate-y-1" />}
          </div>

          {/* Animasi teks SUCCESSFUL */}
          {text.includes("COMPLETED") && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-400 font-bold tracking-[0.3em] text-xs animate-pulse"
            >
              CONNECTION ESTABLISHED: SUCCESSFUL
            </motion.div>
          )}
        </div>
        
        {/* Progress Bar */}
        <div className="mt-6 w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            // PERCEPATAN: Progress bar disinkronkan menjadi 2 detik
            transition={{ duration: 2, ease: "linear" }}
            className="h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;