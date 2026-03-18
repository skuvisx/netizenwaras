'use client';
import { motion } from 'framer-motion';
import { Globe, AlertTriangle, BookOpen, MessageCircleWarning } from 'lucide-react';

const cards = [
  {
    icon: <MessageCircleWarning size={28} className="text-purple-400" />,
    title: 'Perilaku Netizen',
    body: 'Anonimitas internet membuat orang lebih berani berkata kasar dibandingkan di dunia nyata. Fenomena ini disebut "Online Disinhibition Effect" — seseorang merasa bebas dari konsekuensi sosial ketika bersembunyi di balik layar.',
    gradient: 'from-purple-900/40 to-violet-900/20',
    border: 'border-purple-700/20',
    glow: 'shadow-purple-900/20',
    source: 'Suler, J. (2004). CyberPsychology & Behavior',
  },
  {
    icon: <Globe size={28} className="text-pink-400" />,
    title: 'Dampak Global',
    body: 'Cyberbullying merupakan masalah global yang mempengaruhi jutaan orang, terutama remaja usia 10-24 tahun. UNICEF melaporkan 1 dari 3 remaja di 30 negara telah mengalami cyberbullying, dengan Indonesia termasuk dalam kelompok dengan prevalensi tinggi.',
    gradient: 'from-pink-900/40 to-rose-900/20',
    border: 'border-pink-700/20',
    glow: 'shadow-pink-900/20',
    source: 'UNICEF Global Survey 2019',
  },
  {
    icon: <BookOpen size={28} className="text-cyan-400" />,
    title: 'Kesadaran Digital',
    body: 'Literasi digital membantu pengguna memahami etika komunikasi di internet. Dengan kemampuan berpikir kritis, berempati, dan bertanggung jawab secara digital, setiap netizen bisa menjadi agen perubahan positif di dunia maya.',
    gradient: 'from-cyan-900/40 to-teal-900/20',
    border: 'border-cyan-700/20',
    glow: 'shadow-cyan-900/20',
    source: 'Kominfo RI, Roadmap Literasi Digital 2023',
  },
];

const types = [
  { label: 'Harassment', emoji: '😡', desc: 'Pesan berulang yang menyerang atau mengancam seseorang' },
  { label: 'Cyberstalking', emoji: '👁️', desc: 'Menguntit, memantau, atau melacak seseorang secara online' },
  { label: 'Doxing', emoji: '📋', desc: 'Menyebarkan informasi pribadi seseorang tanpa izin' },
  { label: 'Exclusion', emoji: '🚫', desc: 'Sengaja mengucilkan atau mengecualikan seseorang dari grup' },
  { label: 'Impersonation', emoji: '🎭', desc: 'Berpura-pura menjadi orang lain untuk merusak reputasinya' },
  { label: 'Hate Speech', emoji: '⛔', desc: 'Ujaran kebencian berbasis identitas, agama, ras, atau gender' },
];

export default function AboutCyberbullying() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A061C] to-[#0F0A1E]" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-700/30 bg-purple-900/10 mb-6">
            <AlertTriangle size={14} className="text-yellow-400" />
            <span className="text-xs font-mono text-purple-300 tracking-widest uppercase">Apa Itu Cyberbullying?</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Memahami{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Cyberbullying
            </span>
          </h2>

          {/* Definition block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl border border-purple-700/20 bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-700/30 flex items-center justify-center">
                <span className="text-lg">📖</span>
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-purple-400 tracking-widest mb-2 uppercase">Definisi</p>
                <p className="text-purple-100/90 text-base sm:text-lg leading-relaxed">
                  <strong className="text-white">Cyberbullying</strong> adalah perilaku menyerang, menghina, mempermalukan, atau mengintimidasi seseorang melalui media digital seperti media sosial, komentar online, pesan digital, atau platform komunikasi lainnya.
                </p>
                <p className="text-xs text-purple-400/50 mt-3">
                  Sumber: Hinduja & Patchin (2014), Cyberbullying Research Center
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-2xl border ${card.border} bg-gradient-to-br ${card.gradient} backdrop-blur-sm shadow-xl ${card.glow}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-3">{card.title}</h3>
              <p className="text-purple-200/70 text-sm leading-relaxed mb-4">{card.body}</p>
              <p className="text-xs text-purple-400/40 font-mono border-t border-white/5 pt-3">
                📚 {card.source}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Types of cyberbullying */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h3 className="font-display font-bold text-white text-2xl mb-2 text-center">Bentuk-Bentuk Cyberbullying</h3>
          <p className="text-center text-purple-300/60 text-sm mb-8">
            Kenali berbagai bentuk cyberbullying agar kamu bisa mengidentifikasi dan menghindarinya.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {types.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className="p-4 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all"
            >
              <div className="text-2xl mb-2">{type.emoji}</div>
              <h4 className="font-semibold text-white text-sm mb-1">{type.label}</h4>
              <p className="text-purple-300/50 text-xs leading-relaxed">{type.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
