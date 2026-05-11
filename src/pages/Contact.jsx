import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, Phone, CheckCircle, Loader2, Rocket, ExternalLink } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error('FAILED...', error.text);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const contactMethods = [
    {
      icon: <Phone size={22} />,
      label: "WhatsApp",
      value: "+62 895-6036-18616",
      link: "https://wa.me/62895603618616",
      color: "group-hover:text-green-500",
      border: "group-hover:border-green-500/30"
    },
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "hendripanjaitan12@gmail.com",
      link: "mailto:hendripanjaitan12@gmail.com",
      color: "group-hover:text-blue-500",
      border: "group-hover:border-blue-500/30"
    },
    {
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      value: "Maruli Tua Panjaitan",
      link: "https://linkedin.com/in/marulitua-panjaitan",
      color: "group-hover:text-blue-400",
      border: "group-hover:border-blue-400/30"
    },
    {
      icon: <Rocket size={22} />,
      label: "Fastwork",
      value: "Professional Freelancer",
      link: "https://fastwork.id/user/marulituapanjaitan",
      color: "group-hover:text-orange-500",
      border: "group-hover:border-orange-500/30"
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Orbs untuk efek Glassmorphism */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter uppercase text-white">
            Start a <span className="text-blue-500 italic">Project.</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-blue-500/30" />
            
            <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
              // Transmitting data to Batam, ID
            </p>
            <div className="h-[1px] w-12 bg-blue-500/30" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* KIRI: CONTACT METHODS (Grid 2x2 di Desktop) */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => (
              <motion.a 
                key={index} 
                href={method.link} 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between h-48 transition-all duration-500 hover:bg-white/[0.05] ${method.border}`}
              >
                <div className={`p-3 w-fit rounded-xl bg-white/5 text-gray-400 transition-all duration-500 ${method.color} group-hover:scale-110`}>
                  {method.icon}
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">{method.label}</p>
                  <p className="text-sm font-bold text-white leading-tight break-words">{method.value}</p>
                </div>
                <ExternalLink size={14} className="absolute top-6 right-6 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}

            {/* Availability Badge Terintegrasi */}
            <div className="sm:col-span-2 p-6 rounded-[2rem] bg-blue-500/5 border border-blue-500/10 flex items-center gap-4 mt-2">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <p className="text-xs text-blue-400 font-mono uppercase tracking-tighter">
                Available for new freelance projects
              </p>
            </div>
          </div>

          {/* KANAN: FORM (Lebih ramping dan elegan) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative overflow-hidden"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-gray-500 uppercase ml-2 tracking-widest">Sender Name</label>
                  <input name="from_name" type="text" required placeholder="John Doe" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-600" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-gray-500 uppercase ml-2 tracking-widest">Email Identity</label>
                  <input name="reply_to" type="email" required placeholder="john@example.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-600" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono text-gray-500 uppercase ml-2 tracking-widest">Project Category</label>
                <div className="relative">
                  <select name="project_type" className="w-full bg-[#05070a] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 outline-none appearance-none cursor-pointer">
                    <option>Landing Page Design</option>
                    <option>Fullstack E-Commerce</option>
                    <option>Web Application</option>
                    <option>Other Services</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs font-mono">↓</div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono text-gray-500 uppercase ml-2 tracking-widest">Mission Brief</label>
                <textarea name="message" rows="5" required placeholder="Describe your vision..." className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 outline-none resize-none transition-all placeholder:text-gray-600"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className={`w-full py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 active:scale-[0.98] ${
                  status === 'success' ? 'bg-green-600 shadow-[0_0_30px_rgba(22,163,74,0.3)]' : 
                  status === 'error' ? 'bg-red-600' : 'bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)]'
                } text-white uppercase tracking-widest text-xs`}
              >
                {status === 'idle' && <><Send size={16} /> Execute Transmission</>}
                {status === 'sending' && <><Loader2 size={16} className="animate-spin" /> Data Transmitting...</>}
                {status === 'success' && <><CheckCircle size={16} /> Signal Received!</>}
                {status === 'error' && <>System Error!</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;