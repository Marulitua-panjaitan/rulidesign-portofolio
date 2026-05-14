import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Cpu, ChevronRight, Code } from 'lucide-react';
import TechStack from '../components/TechStack';

const Home = () => {
  // --- KONFIGURASI ANIMASI ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda antar elemen (0.2 detik)
        delayChildren: 0.5,    // Tunggu preloader/transisi selesai sedikit
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. Badge Teratas */}
      <motion.div variants={itemVariants} className="z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] uppercase tracking-[0.2em] mb-10 font-mono">
          <Cpu size={12} className="animate-spin-slow" /> Engineering the Digital Future
        </div>
      </motion.div>
      
      {/* 2. Judul Utama */}
      <motion.h1 
        variants={itemVariants}
        className="text-center text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8 text-white z-10"
      >
        The Industrial <br />
        <span className="bg-gradient-to-r from-blue-400 via-white to-purple-500 bg-clip-text text-transparent italic">
          Developer.
        </span>
      </motion.h1>

      {/* 3. Deskripsi */}
      <motion.p 
        variants={itemVariants}
        className="max-w-2xl mx-auto text-center text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light z-10"
      >
        Membangun sistem digital dengan presisi manufaktur. Berfokus pada skalabilitas, efisiensi, dan desain yang tangguh.
      </motion.p>

      {/* 4. Tombol Aksi */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center z-10">
        <Link to="/services">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all flex items-center gap-3"
          >
            Get Started <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </Link>

        <Link to="/portfolio">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md transition-all flex items-center gap-3"
          >
            View Work <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </motion.div>

      {/* 5. Code Card (Muncul Belakangan) */}
      <motion.div 
        variants={itemVariants}
        className="mt-24 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm max-w-xl w-full font-mono text-left relative group overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] group-hover:bg-blue-500/10 transition-colors" />
        <div className="flex gap-1.5 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-500/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
          <div className="w-3 h-3 rounded-full bg-green-500/20" />
        </div>

        <div className="space-y-2 text-sm md:text-base">
          <p className="text-blue-400">const <span className="text-white">MaruliTua</span> = {"{"}</p>
          <p className="pl-6">experience: <span className="text-yellow-400">'4 Years Industrial Ops'</span>,</p>
          <p className="pl-6">stack: [<span className="text-green-400">'React', 'Tailwind', 'Python'</span>],</p>
          <p className="pl-6 text-purple-400">status: 'Ready for Scalability'</p>
          <p className="text-blue-400">{"}"}</p>
          <div className="mt-8 flex items-center gap-2 text-blue-500/50 text-sm">
            <Code size={18} /> <span className="animate-pulse">_Initialize system.execute()...</span>
          </div>
        </div>
      </motion.div>

      {/* 6. Marquee (Terakhir) */}
      <motion.div variants={itemVariants} className="w-full mt-20">
        <TechStack />
      </motion.div>
    </motion.section>
  );
};

export default Home;