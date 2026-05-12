import React from 'react';
import { motion } from 'framer-motion';

const TechStack = ({ isDarkMode }) => {
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

  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className="py-10 relative overflow-hidden bg-transparent">
      {/* Container Marquee */}
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-16 items-center"
          animate={{ x: [0, -1200] }}
          transition={{ 
            repeat: Infinity, 
            duration: 25, 
            ease: "linear" 
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <div key={index} className="flex items-center gap-6 group">
              {/* Garis Pemisah yang Berpendar */}
              <div className={`h-[2px] w-12 transition-all duration-500 ${
                isDarkMode ? 'bg-white/10' : 'bg-slate-900/10'
              } group-hover:w-16 group-hover:bg-blue-500`} />
              
              {/* Teks Teknologi Berwarna */}
              <span className={`text-3xl md:text-5xl font-black tracking-tighter uppercase transition-all duration-500 cursor-default ${tech.color} ${
                isDarkMode 
                ? 'opacity-40 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                : 'opacity-60 group-hover:opacity-100'
              } group-hover:scale-110`}>
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