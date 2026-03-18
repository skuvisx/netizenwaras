'use client';
import { motion } from 'framer-motion';
import { Brain, Zap, Eye, Users, Lock, Globe } from 'lucide-react';
import { mentalHealthImpacts } from '../data/cyberbullyingStats';

const disinhibitionFactors = [
  {
    icon: <Eye size={20} className="text-purple-400" />,
    title: 'Anonimitas',
    desc: 'Pengguna merasa tidak dapat diidentifikasi, sehingga mengurangi rasa takut akan konsekuensi sosial.',
    color: 'border-purple-700/30 bg-purple-900/10',
  },
  {
    icon: <Globe size={20} className="text-cyan-400" />,
    title: 'Invisibilitas',
    desc: 'Ketiadaan bahasa tubuh dan ekspresi wajah membuat pelaku tidak merasakan dampak emosional terhadap korban.',
    color: 'border-cyan-700/30 bg-cyan-900/10',
  },
  {
    icon: <Zap size={20} className="text-yellow-400" />,
    title: 'Asynchronicity',
    desc: 'Komunikasi tidak terjadi secara real-time, membuat pelaku tidak perlu merespons reaksi langsung dari korban.',
    color: 'border-yellow-700/30 bg-yellow-900/10',
  },
  {
    icon: <Users size={20} className="text-pink-400" />,
    title: 'Solipsistic Introjection',
    desc: 'Ruang virtual terasa seperti dunia imajinasi pribadi, sehingga aturan sosial normal terasa tidak berlaku.',
    color: 'border-pink-700/30 bg-pink-900/10',
  },
  {
    icon: <Brain size={20} className="text-green-400" />,
    title: 'Dissociative Imagination',
    desc: 'Pelaku membedakan "diri online" dari "diri nyata", sehingga merasa tidak bertanggung jawab atas tindakan digital.',
    color: 'border-green-700/30 bg-green-900/10',
  },
  {
    icon: <Lock size={20} className="text-orange-400" />,
    title: 'Minimisasi Otoritas',
    desc: 'Tidak ada orang tua, guru, atau figur otoritas yang secara fisik hadir untuk mengawasi perilaku online.',
    color: 'border-orange-700/30 bg-orange-900/10',
  },
];

export default function CyberpsychologySection() {
  return (
    <section id="cyberpsych" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E] to-[#0A061C]" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-900/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-pink-900/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-700/30 bg-purple-900/10 mb-6">
            <Brain size={14} className="text-purple-400" />
            <span className="text-xs font-mono text-purple-300 tracking-widest uppercase">Cyberpsychology</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Mengapa Orang{' '}
            <span style={{ background: 'linear-gradient(135deg, #A78BFA, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Lebih Kejam
            </span>{' '}
            Online?
          </h2>
          <p className="text-purple-200/60 text-base sm:text-lg max-w-2xl mx-auto">
            Psikologi di balik perilaku agresif di internet — mengapa seseorang yang baik di dunia nyata bisa berubah menjadi toksik di dunia digital.
          </p>
        </motion.div>

        {/* Main theory card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-purple-600/20 bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-sm mb-16 relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[60px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-900/40 border border-purple-600/30 mb-4">
                <Brain size={14} className="text-purple-400" />
                <span className="text-xs font-mono text-purple-300 tracking-wider">Teori Utama</span>
              </div>
              <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4">
                Online Disinhibition Effect
              </h3>
              <p className="text-purple-200/80 leading-relaxed mb-4">
                Manusia berperilaku lebih agresif secara online karena mereka merasa anonim dan terputus dari konsekuensi dunia nyata. Fenomena ini pertama kali dijelaskan secara ilmiah oleh psikolog <strong className="text-white">John Suler</strong> pada tahun 2004.
              </p>
              <p className="text-purple-200/60 text-sm leading-relaxed mb-6">
                Ada dua jenis: <strong className="text-purple-300">Benign disinhibition</strong> (efek positif: orang lebih terbuka mengekspresikan diri) dan <strong className="text-pink-300">Toxic disinhibition</strong> (efek negatif: orang mengucapkan hal-hal kasar, mengancam, bahkan berbagi konten berbahaya).
              </p>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-purple-400/70">
                📚 Suler, J. (2004). The Online Disinhibition Effect.
                <br />
                CyberPsychology & Behavior, 7(3), 321-326. DOI: 10.1089/1094931041291295
              </div>
            </div>

            {/* Visual diagram */}
            <div className="flex items-center justify-center">
              <div className="relative w-56 h-56">
                {/* Center circle */}
                <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-600/40 z-10">
                  <Brain size={36} className="text-white" />
                </div>
                {/* Orbit ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-600/20 animate-spin-slow" />
                {/* Outer dots */}
                {['😤', '😡', '👾', '🔥'].map((emoji, i) => {
                  const angle = (i / 4) * 2 * Math.PI - Math.PI / 2;
                  const x = 50 + 42 * Math.cos(angle);
                  const y = 50 + 42 * Math.sin(angle);
                  return (
                    <div
                      key={i}
                      className="absolute w-10 h-10 rounded-full bg-[#1A1035] border border-purple-700/30 flex items-center justify-center text-xl transform -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      {emoji}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 6 factors */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display font-bold text-white text-xl mb-8 text-center"
          >
            6 Faktor Penyebab Online Disinhibition
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {disinhibitionFactors.map((factor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-xl border ${factor.color} transition-all`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    {factor.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm">{factor.title}</h4>
                </div>
                <p className="text-purple-200/60 text-xs leading-relaxed">{factor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mental health impacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-red-700/20 bg-red-900/5"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-700/20 flex items-center justify-center">
              <span className="text-xl">🧠</span>
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-xl">Dampak Psikologis Cyberbullying</h3>
              <p className="text-red-300/60 text-xs">Sumber: American Psychological Association, 2022</p>
            </div>
          </div>

          <div className="space-y-5">
            {mentalHealthImpacts.map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-medium text-sm">{impact.impact}</p>
                  <span className="font-mono text-sm font-bold" style={{ color: impact.color }}>{impact.severity}%</span>
                </div>
                <div className="relative h-2 rounded-full bg-white/5 overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${impact.severity}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 + 0.3 }}
                    className="absolute h-full rounded-full"
                    style={{ background: impact.color }}
                  />
                </div>
                <p className="text-purple-300/50 text-xs leading-relaxed">{impact.description}</p>
                <p className="text-purple-500/40 text-xs font-mono mt-1">📚 {impact.source}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
