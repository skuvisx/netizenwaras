'use client';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Play, Shield, Zap } from 'lucide-react';
import { Suspense } from 'react';

const FloatingBubble = ({ delay, x, y, size, color, icon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.1, 1],
      y: [0, -20, 0],
      x: [0, 5, 0],
    }}
    transition={{
      duration: 6 + delay,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
    className="absolute rounded-2xl flex items-center justify-center text-white font-bold select-none pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      background: color,
      fontSize: size * 0.4,
      boxShadow: `0 0 ${size}px ${color}50`,
    }}
  >
    {icon}
  </motion.div>
);

const floatingItems = [
  { delay: 0, x: 8, y: 20, size: 56, color: 'rgba(124,58,237,0.7)', icon: '💬' },
  { delay: 1, x: 85, y: 15, size: 48, color: 'rgba(236,72,153,0.7)', icon: '❤️' },
  { delay: 2, x: 15, y: 70, size: 44, color: 'rgba(6,182,212,0.7)', icon: '⚠️' },
  { delay: 0.5, x: 80, y: 65, size: 52, color: 'rgba(139,92,246,0.7)', icon: '💭' },
  { delay: 1.5, x: 50, y: 8, size: 40, color: 'rgba(236,72,153,0.6)', icon: '🔔' },
  { delay: 3, x: 92, y: 40, size: 36, color: 'rgba(124,58,237,0.5)', icon: '📱' },
  { delay: 2.5, x: 5, y: 45, size: 38, color: 'rgba(6,182,212,0.5)', icon: '🤝' },
  { delay: 4, x: 70, y: 85, size: 46, color: 'rgba(16,185,129,0.6)', icon: '✨' },
  { delay: 1.2, x: 30, y: 85, size: 42, color: 'rgba(245,158,11,0.6)', icon: '👁️' },
];

export default function HeroSection() {
  const scrollToLearn = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0A061C 0%, #150B2E 30%, #0D1635 60%, #0A061C 100%)',
      }}
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-700/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-700/15 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingItems.map((item, i) => (
          <FloatingBubble key={i} {...item} />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Campaign badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-600/30 bg-purple-900/20 backdrop-blur-sm mb-8"
        >
          <Shield size={14} className="text-purple-400" />
          <span className="text-xs font-mono text-purple-300 tracking-widest uppercase">
            Kampanye Anti Cyberbullying
          </span>
          <Zap size={14} className="text-pink-400" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="font-display font-bold text-white leading-none mb-2">
            <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] tracking-tighter">
              NETIZEN
            </span>
            <span
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] tracking-tighter"
              style={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #EC4899 50%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              WARAS
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 mb-8"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 leading-relaxed">
            Jempol cepat boleh.
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #EC4899, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Tapi empati jangan sampai telat.
            </span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="max-w-2xl mx-auto text-purple-200/60 text-base sm:text-lg leading-relaxed mb-10"
        >
          Internet memberikan kebebasan bagi setiap orang untuk menyampaikan pendapat. Namun tanpa empati, kebebasan tersebut dapat berubah menjadi cyberbullying.{' '}
          <span className="text-purple-300/80">
            Kampanye Netizen Waras bertujuan meningkatkan kesadaran masyarakat agar lebih bijak, berempati, dan bertanggung jawab dalam berkomentar di dunia digital.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToLearn}
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold text-base transition-all duration-300 shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-100"
          >
            Mulai Belajar
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToQuiz}
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-purple-600/30 hover:border-purple-500/60 bg-white/5 hover:bg-white/10 text-white font-semibold text-base transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-100"
          >
            <Play size={18} className="text-pink-400" />
            Ikuti Quiz
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          {[
            { value: '215 Juta', label: 'Pengguna Internet Indonesia', color: 'text-purple-400' },
            { value: '45%', label: 'Pernah Alami Cyberbullying', color: 'text-pink-400' },
            { value: '1 dari 3', label: 'Remaja Global Jadi Korban', color: 'text-cyan-400' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className={`text-3xl font-display font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-xs text-purple-300/50 text-center max-w-[140px]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToLearn}
      >
        <span className="text-xs font-mono text-purple-400/60 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-purple-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
