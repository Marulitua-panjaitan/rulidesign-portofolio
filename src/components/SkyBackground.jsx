import React from 'react';
import { motion } from 'framer-motion';

const SkyBackground = () => {
  return (
    <div className="fixed inset-0 z-[-5] overflow-hidden pointer-events-none">
      {/* Dasar Gradasi Langit Cerah */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-white" />
      
      {/* Simpul Awan Dinamis (Procedural Clouds) */}
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          initial={{ x: -300, opacity: 0 }}
          animate={{ 
            x: '120vw', 
            opacity: [0, 0.5, 0.5, 0] 
          }}
          transition={{ 
            duration: 25 + (i * 12), 
            repeat: Infinity, 
            ease: "linear",
            delay: i * 4 
          }}
          className="absolute bg-white/50 blur-[80px] rounded-full"
          style={{
            width: `${250 + (i * 120)}px`,
            height: `${120 + (i * 60)}px`,
            top: `${(i * 18) % 80}%`, // Menjaga awan tetap di area atas-tengah
          }}
        />
      ))}

      {/* Efek Cahaya Matahari Halus */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-100/20 blur-[120px] rounded-full" />
    </div>
  );
};

export default SkyBackground;