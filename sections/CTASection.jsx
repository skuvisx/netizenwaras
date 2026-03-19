'use client';
import { motion } from 'framer-motion';
import { Share2, ExternalLink, Heart, Shield, Mail } from 'lucide-react';

export default function CTASection() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Netizen Waras — Kampanye Anti Cyberbullying',
        text: 'Jempol cepat boleh. Tapi empati jangan sampai telat. Yuk bergabung dalam kampanye #NetizenWaras!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link disalin! Bagikan ke teman-temanmu.');
    }
  };

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A061C] via-[#1A0533] to-[#0D1635]" />

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-600/20 rounded-full blur-[100px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(124,58,237,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-600/30 bg-purple-900/20 mb-8"
        >
          <Shield size={14} className="text-purple-400" />
          <span className="text-xs font-mono text-purple-300 tracking-widest uppercase">Bergabung Sekarang</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight"
        >
          Bangun Internet
          <br />
          <span style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #EC4899 50%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            yang Lebih Sehat
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-purple-200/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Perubahan dimulai dari diri sendiri. Sebarkan pesan kampanye #NetizenWaras ke teman, keluarga, dan komunitasmu.
          Bersama kita bisa menciptakan ekosistem internet yang lebih aman, berempati, dan bermakna.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={handleShare}
            className="group flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-lg shadow-2xl shadow-purple-600/30 hover:shadow-purple-500/50 transition-all hover:scale-105"
          >
            <Share2 size={22} />
            Share Kampanye
            <span className="text-xs opacity-70 group-hover:opacity-100">#NetizenWaras</span>
          </button>
          <a
            href="https://kominfo.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-base transition-all hover:scale-105"
          >
            <ExternalLink size={18} />
            Kominfo RI
          </a>
        </motion.div>

        {/* Social hashtags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {['#NetizenWaras', '#AntiCyberbullying', '#EmpatiDigital', '#StopBullying', '#DigitalEmpathy', '#InternetSehat'].map(tag => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-purple-700/20 bg-purple-900/10 text-purple-300/70 text-sm font-mono hover:border-purple-500/40 hover:text-purple-200 transition-all cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Student info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-md mx-auto p-6 rounded-2xl border border-purple-700/20 bg-purple-900/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <Heart size={18} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Dibuat dengan 💜 oleh</p>
              <p className="text-xs text-purple-400/70 font-mono">UTS Project · Informatika · UBM</p>
            </div>
          </div>
          <div className="text-left space-y-1 mb-4">
            <p className="text-white font-semibold">Putra Dharma Prajna Adhitthana Bun</p>
            <p className="text-purple-300/70 text-sm font-mono">NIM: 32230161</p>
            <p className="text-purple-300/60 text-sm">Program Studi Informatika</p>
            <p className="text-purple-300/60 text-sm">Universitas Bunda Mulia · 2027</p>
          </div>
          <a
            href="mailto:s32230161@student.ubm.ac.id"
            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Mail size={14} />
            s32230161@student.ubm.ac.id
          </a>
        </motion.div>
      </div>
    </section>
  );
}
