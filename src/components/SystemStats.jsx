import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Zap, Database } from 'lucide-react';

const SystemStats = () => {
  const [stats, setStats] = useState({
    cpu: 12,
    ram: 45,
    temp: 42,
    time: ""
  });

  useEffect(() => {
    // Simulasi pergerakan data biar kelihatan hidup
    const interval = setInterval(() => {
      setStats(prev => ({
        cpu: Math.floor(Math.random() * (18 - 8 + 1)) + 8,
        ram: Math.floor(Math.random() * (48 - 44 + 1)) + 44,
        temp: Math.floor(Math.random() * (45 - 40 + 1)) + 40,
        time: new Date().toLocaleTimeString('en-GB', { hour12: false })
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-8 right-8 z-[55] hidden lg:block"
    >
      <div className="bg-white/[0.02] border border-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl flex flex-col gap-3 font-mono text-[10px] w-48 overflow-hidden group">
        {/* Glow Dekoratif */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/10 blur-[30px] group-hover:bg-blue-500/20 transition-colors" />

        <div className="flex items-center justify-between text-blue-400 border-b border-white/5 pb-2 mb-1">
          <span className="flex items-center gap-2">
            <Activity size={12} className="animate-pulse" /> SYSTEM_STATUS
          </span>
          <span className="text-green-500/70 uppercase">Online</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-gray-500">
            <span className="flex items-center gap-2"><Zap size={10} /> CPU_LOAD</span>
            <span className="text-white">{stats.cpu}%</span>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: `${stats.cpu}%` }}
              className="h-full bg-blue-500"
            />
          </div>

          <div className="flex justify-between items-center text-gray-500">
            <span className="flex items-center gap-2"><Database size={10} /> MEM_USAGE</span>
            <span className="text-white">{stats.ram}%</span>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: `${stats.ram}%` }}
              className="h-full bg-purple-500"
            />
          </div>

          <div className="flex justify-between items-center text-gray-500 mt-2">
            <span className="flex items-center gap-2"><Clock size={10} /> BATAM_TIME</span>
            <span className="text-blue-400">{stats.time}</span>
          </div>
        </div>

        <div className="mt-2 pt-2 border-t border-white/5 text-[8px] text-gray-600 flex justify-between">
          <span>SECURE_LINK: ACTIVE</span>
          <span>V.2.0.6</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SystemStats;