import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
            Available for New Projects
          </span>
          <h1 className="mt-8 text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 tracking-tighter leading-tight">
            Digital Engineering <br /> <span className="text-blue-500 italic">RuliDesign.</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Membangun infrastruktur digital dengan presisi industri dan estetika futuristik. 
            Solusi Web3 untuk bisnis masa depan.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            Mulai Project
          </button>
          <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-bold transition-all">
            Lihat Portofolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;