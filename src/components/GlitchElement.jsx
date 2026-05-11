import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GlitchElement = ({ children, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Variasi pergerakan glitch (acak dan cepat)
  const glitchVariants = {
    hover: {
      x: [0, -2, 2, -1, 1, 0],
      y: [0, 1, -1, 0],
      filter: [
        "hue-rotate(0deg) brightness(1)",
        "hue-rotate(90deg) brightness(1.2)",
        "hue-rotate(-90deg) brightness(0.8)",
        "hue-rotate(0deg) brightness(1)"
      ],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: "mirror"
      }
    }
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover="hover"
    >
      {/* Lapisan Glitch Merah (Hanya muncul saat hover) */}
      {isHovered && (
        <motion.div
          variants={glitchVariants}
          className="absolute inset-0 text-red-500 opacity-50 pointer-events-none mix-blend-screen z-[-1]"
          style={{ x: -2 }}
        >
          {children}
        </motion.div>
      )}

      {/* Lapisan Glitch Biru (Hanya muncul saat hover) */}
      {isHovered && (
        <motion.div
          variants={glitchVariants}
          className="absolute inset-0 text-blue-500 opacity-50 pointer-events-none mix-blend-screen z-[-1]"
          style={{ x: 2 }}
        >
          {children}
        </motion.div>
      )}

      {/* Konten Utama */}
      <motion.div className="relative z-10">
        {children}
      </motion.div>
    </motion.div>
  );
};

export default GlitchElement;