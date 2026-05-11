import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Cpu, Code2, Factory, Car } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: "2025 - Present",
      title: "Self-Taught Web Developer",
      company: "Freelance / RuliDesign",
      desc: "Mentransformasi disiplin industri menjadi baris kode. Fokus pada pengembangan aplikasi web modern (React, Python) dengan efisiensi tinggi layaknya standar manufaktur global.",
      icon: <Code2 className="text-blue-500" />,
      skills: ["React", "Python", "Tailwind CSS", "Framer Motion"]
    },
    {
      year: "2021 - 2026",
      title: "Production Operator",
      company: "PT. Schneider Electric Manufacturing Batam",
      desc: "Mengoperasikan mesin industri presisi tinggi (Detzo coil winding) di lingkungan manufaktur kelas dunia. Konsisten mencapai target produksi dengan akurasi tinggi dan mematuhi standar kualitas internasional.",
      icon: <Factory className="text-purple-500" />,
      skills: ["Industrial Automation", "Quality Excellence", "Standard Operating Procedure", "Lean Manufacturing"]
    },
    {
      year: "2014 - 2017",
      title: "Vocational High School",
      company: "SMK HKBP - Automotive Engineering",
      desc: "Mendalami teknik otomotif, logika mesin, dan pemeliharaan sistem mekanik. Fondasi awal dalam memahami bagaimana setiap komponen kecil bekerja dalam sebuah sistem besar yang kompleks.",
      icon: <Car className="text-cyan-500" />,
      skills: ["Mechanical Logic", "System Diagnostics", "Engine Management"]
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono mb-6 uppercase tracking-widest">
            The Transformation Journey
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter uppercase text-white">
            MY <span className="text-blue-500">STORY.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed italic">
            "Dari presisi manufaktur Schneider Electric menuju inovasi digital."
          </p>
        </motion.div>

        {/* Timeline Line */}
        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`relative mb-20 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}
            >
              {/* Dot on Line */}
              <div className="absolute top-0 w-8 h-8 rounded-full bg-[#03050c] border-2 border-blue-500 flex items-center justify-center -left-[17px] md:left-auto md:right-auto md:translate-x-1/2 z-20 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                {exp.icon}
              </div>

              {/* Content Card */}
              <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="text-blue-500 font-mono text-sm mb-2 block">{exp.year}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-gray-400 font-bold mb-4 uppercase tracking-tight text-xs">{exp.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {exp.desc}
                </p>

                {/* Tags */}
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-gray-500 text-[10px] font-mono hover:text-blue-400 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Stat */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/5 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <Cpu size={40} className="mx-auto mb-6 text-blue-500 opacity-50" />
            <h3 className="text-2xl font-bold text-white mb-4 italic">Automotive Logic. Industrial Precision. Digital Innovation.</h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              Perjalanan dari memahami mesin otomotif hingga mengoperasikan teknologi Schneider Electric telah membentuk mentalitas "Zero Error" yang saya bawa ke setiap baris kode React dan Python saya.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;