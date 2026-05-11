import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const techs = [
    { name: "React", color: "text-blue-400" },
    { name: "Python", color: "text-yellow-400" },
    { name: "Tailwind", color: "text-cyan-400" },
    { name: "JavaScript", color: "text-yellow-300" },
    { name: "Node.js", color: "text-green-500" },
    { name: "Framer Motion", color: "text-purple-400" },
    { name: "Firebase", color: "text-orange-400" },
    { name: "Git", color: "text-red-500" },
  ];

  // Kita duplikasi array-nya supaya jalannya tidak putus (infinite loop)
  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className="py-20 relative overflow-hidden bg-[#03050c]/20">
      {/* Overlay Blur Kiri & Kanan */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#03050c] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#03050c] to-transparent z-10" />

      <div className="flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-12 items-center"
          animate={{ x: [0, -1000] }} // Menyesuaikan jarak geser
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "linear" 
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="h-[1px] w-8 bg-white/10 group-hover:bg-blue-500/50 transition-colors" />
              <span className={`text-2xl md:text-4xl font-bold font-mono tracking-tighter opacity-30 group-hover:opacity-100 transition-all cursor-default ${tech.color}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;