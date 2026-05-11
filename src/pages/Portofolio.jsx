import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ShoppingBag, Map, Image as ImageIcon, Code2, Target } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Mora E-Commerce",
      category: "Fullstack Development",
      desc: "Platform e-commerce modern dengan fitur manajemen produk, keranjang belanja, dan sistem pembayaran yang terintegrasi.",
      tech: ["React", "Node.js", "Tailwind", "Express"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop", // Placeholder e-com
      icon: <ShoppingBag size={20} />,
      link: "#",
      github: "#"
    },
    {
      title: "Pinterest Clone",
      category: "Web Application",
      desc: "Aplikasi berbagi gambar dengan sistem grid masonry, fitur pencarian, dan tampilan yang sangat responsif layaknya Pinterest.",
      tech: ["React", "Masonry Layout", "Firebase"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop", // Placeholder pinterest
      icon: <ImageIcon size={20} />,
      link: "https://ajistone-gallery.netlify.app/",
      github: "https://github.com/Marulitua-panjaitan/ajistone-images"
    },
    {
      title: "Travel Landing Page",
      category: "UI/UX & Web Design",
      desc: "Landing page bertema traveling dengan animasi smooth, navigasi interaktif, dan fokus pada kenyamanan visual pengguna.",
      tech: ["React", "Framer Motion", "Tailwind"],
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop", // Placeholder travel
      icon: <Map size={20} />,
      link: "https://tobatrip.vercel.app/",
      github: "https://github.com/Marulitua-panjaitan/tobatrip"
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            SELECTED <span className="text-blue-500">WORKS.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Dari logika e-commerce yang kompleks hingga keindahan landing page travel. Presisi industri di setiap baris kode.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-500"
            >
              {/* Image Preview dengan Overlay Icon */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <div className="absolute top-4 left-4 z-20 p-2 rounded-xl bg-black/50 backdrop-blur-md text-blue-400 border border-white/10">
                  {project.icon}
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-blue-500 font-mono text-[10px] uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                      <Github size={18} />
                    </a>
                    <a href={project.link} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 h-20">
                  {project.desc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-blue-500/5 border border-blue-500/10 text-blue-400/70 text-[10px] font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Tambahan */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-10 rounded-[3rem] border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent text-center"
        >
          <Code2 size={40} className="mx-auto mb-6 text-blue-500 opacity-50" />
          <h3 className="text-xl font-bold mb-2">Semua proyek dibangun dengan standar industri.</h3>
          <p className="text-gray-500 text-sm">Responsif, Cepat, dan SEO Friendly.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;