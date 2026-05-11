import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, Terminal, RefreshCw } from 'lucide-react';

const OfflineMode = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const goOnline = () => setIsOffline(false);
    const goOffline = () => setIsOffline(true);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-[#03050c] flex items-center justify-center p-6 font-mono"
        >
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
          
          <div className="max-w-2xl w-full relative z-10">
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(239,68,68,0.1)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-red-500/20 rounded-xl text-red-500 animate-pulse">
                  <WifiOff size={24} />
                </div>
                <div>
                  <h2 className="text-red-500 font-bold tracking-tighter uppercase text-xl">Critical Error: Link Lost</h2>
                  <p className="text-gray-500 text-xs">SIGNAL_STRENGTH: 0% // LOCATION: BATAM_ID</p>
                </div>
              </div>

              <div className="space-y-4 text-sm md:text-base mb-10">
                <p className="text-gray-400">
                  <span className="text-red-500/50 mr-2">[ERR]</span> 
                  Unable to establish handshake with RULIDESIGN_OS.
                </p>
                <p className="text-gray-400">
                  <span className="text-red-500/50 mr-2">[SYS]</span> 
                  Switching to emergency offline terminal...
                </p>
                <div className="flex items-center gap-3 text-blue-400 italic">
                  <Terminal size={16} />
                  <span>Waiting for network restoration...</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.reload()}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all group"
                >
                  <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-700" />
                  RETRY_CONNECTION
                </button>
                <div className="px-6 py-4 rounded-xl border border-red-500/10 text-red-500/40 text-xs flex items-center justify-center">
                  SECURE_OFFLINE_ENCLAVE_ACTIVE
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-[10px] text-gray-600 tracking-[0.4em] uppercase">
              // Protocol: Maintenance_Mode_Active
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfflineMode;