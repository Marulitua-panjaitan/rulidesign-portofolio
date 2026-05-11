import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Konten Halaman */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>

      {/* Efek Garis Scanner Kilat (Hanya muncul saat transisi) */}
      <motion.div
        className="fixed inset-0 z-[100] pointer-events-none border-y-[0px] border-blue-500/30"
        initial={{ top: "-100%" }}
        animate={{ top: "100%" }}
        exit={{ top: "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="w-full h-24 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent flex items-center justify-center">
          <div className="w-full h-[1px] bg-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
        </div>
      </motion.div>
    </div>
  );
};

export default PageTransition;