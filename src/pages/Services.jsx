import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Monitor, Globe, Smartphone, Code2, Zap, CheckCircle2 } from 'lucide-react';

const Services = ({ isDarkMode }) => {
  const services = [
    {
      title: "Landing Page High-Conversion",
      price: "Mulai dari Rp 500rb",
      desc: "Pembuatan landing page yang fokus pada konversi penjualan. Cocok untuk UMKM, Produk Digital, atau Personal Branding.",
      features: ["Desain Responsif (HP/Tablet/PC)", "Integrasi WhatsApp & Form", "Optimasi SEO Dasar", "Kecepatan Loading Maksimal"],
      icon: <Zap className="text-yellow-400" size={32} />,
      gradient: "from-yellow-500/20 to-transparent" 
    },
    {
      title: "Custom Web Application",
      price: "Mulai dari Rp 1.5jt",
      desc: "Pengembangan sistem berbasis web kustom sesuai kebutuhan bisnis kamu. Menggunakan teknologi terbaru React & Vite.",
      features: ["Dashboard Admin Interaktif", "Sistem Database Aman", "Manajemen User & Data", "Integrasi API Pihak Ketiga"],
      icon: <Code2 className="text-blue-500" size={32} />,
      gradient: "from-blue-500/20 to-red"
    },
    {
      title: "Company Profile Premium",
      price: "Mulai dari Rp 800rb",
      desc: "Tingkatkan kredibilitas perusahaan dengan website profil yang terlihat modern, elegan, dan profesional.",
      features: ["Animasi Smooth & Modern", "Email Domain Profesional", "Link ke Media Sosial", "Mudah Diupdate Sendiri"],
      icon: <Globe className="text-purple-500" size={32} />,
      gradient: "from-purple-500/20 to-transparent"
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono mb-6 uppercase tracking-widest ${
            isDarkMode ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-600/20 border-blue-600/30 text-blue-700'
          }`}>
            Fastwork Certified Seller
          </div>
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            PRO <span className="text-blue-500">SERVICES.</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-slate-700'}`}>
            Menyediakan jasa pembuatan website dengan standar industri. Cepat, Tepat, dan Berkelas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-[2.5rem] border transition-all duration-500 overflow-hidden flex flex-col ${
                isDarkMode ? 'bg-white/[0.03] border-white/5 hover:border-blue-500/30' : 'bg-white/60 border-sky-600/20 hover:border-blue-600 shadow-xl shadow-sky-900/5'
              }`}
            >
              {/* Background Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className={`mb-6 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500 ${
                  isDarkMode ? 'bg-white/5' : 'bg-blue-600/10'
                }`}>
                  {service.icon}
                </div>

                <h3 className={`text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {service.title}
                </h3>
                <p className="text-blue-500 font-mono text-sm mb-6 font-bold">{service.price}</p>
                
                <p className={`text-sm leading-relaxed mb-8 ${isDarkMode ? 'text-gray-400' : 'text-slate-700'}`}>
                  {service.desc}
                </p>

                <div className="space-y-4 mb-10 flex-grow">
                  {service.features.map((feature, i) => (
                    <div key={i} className={`flex items-center gap-3 text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-slate-800'}`}>
                      <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => window.open('https://wa.me/62895603618616?text=Halo%20Maruli,%20saya%20tertarik%20dengan%20jasa%20Landing%20Page%20di%20RuliDesign', '_blank')}
                  className={`w-full py-4 font-bold rounded-2xl transition-all duration-300 ${
                    isDarkMode ? 'bg-white/5 hover:bg-blue-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30'
                  }`}
                >
                  Pesan Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By / Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`mt-20 p-10 rounded-[3rem] border text-center transition-colors duration-500 ${
            isDarkMode ? 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-white/5' : 'bg-white/80 border-sky-600/20 shadow-2xl shadow-sky-900/10'
          }`}
        >
          <p className={`font-mono text-sm mb-4 italic ${isDarkMode ? 'text-gray-400' : 'text-blue-700'}`}>
            "Kualitas industri, harga kompetitif."
          </p>
          <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Butuh konsultasi gratis? Hubungi saya di Fastwork atau WhatsApp.
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;