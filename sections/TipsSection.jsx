'use client';
import { motion } from 'framer-motion';
import { Lightbulb, ThumbsUp, Heart, Shield, MessageCircle, Eye, Flag, Phone } from 'lucide-react';

const tips = [
  {
    icon: <ThumbsUp size={28} className="text-purple-400" />,
    title: 'Think Before You Comment',
    subtitle: 'Pikir sebelum berkomentar',
    body: 'Sebelum menekan send, tanyakan pada dirimu: "Apakah komentar ini akan menyakiti seseorang? Apakah aku mau menerima komentar ini dari orang lain?" Terapkan Tes THINK: Is it True? Helpful? Inspiring? Necessary? Kind?',
    gradient: 'from-purple-900/40 to-violet-900/20',
    border: 'border-purple-700/20',
    tag: '#ThinkBeforeYouComment',
  },
  {
    icon: <Heart size={28} className="text-pink-400" />,
    title: 'Empati Digital',
    subtitle: 'Ada manusia nyata di balik layar',
    body: 'Selalu ingat bahwa ada orang nyata di balik setiap akun. Mereka punya perasaan, insecurities, dan bisa terluka oleh kata-kata digital sama seperti kata-kata di dunia nyata. Perlakukan orang online seperti kamu ingin diperlakukan.',
    gradient: 'from-pink-900/40 to-rose-900/20',
    border: 'border-pink-700/20',
    tag: '#EmpatiDigital',
  },
  {
    icon: <MessageCircle size={28} className="text-cyan-400" />,
    title: 'Stop Hate Train',
    subtitle: 'Jangan ikut-ikutan menghina',
    body: '"Hate train" terjadi ketika banyak orang ikut-ikutan menghina seseorang karena orang lain melakukannya. Jika kamu merasa tergoda untuk ikut, ingat: kamu tidak kenal orang itu secara personal, dan satu komentar jahatmu bisa berdampak besar.',
    gradient: 'from-cyan-900/40 to-teal-900/20',
    border: 'border-cyan-700/20',
    tag: '#StopHateTrain',
  },
  {
    icon: <Eye size={28} className="text-green-400" />,
    title: 'Jadilah Bystander Hero',
    subtitle: 'Speak up, jangan diam',
    body: 'Penelitian menunjukkan 57% kasus bullying berhenti dalam 10 detik ketika bystander turun tangan. Kamu tidak harus konfrontasi langsung — cukup dengan membela korban, mengalihkan perhatian, atau melapor kepada pihak berwenang.',
    gradient: 'from-green-900/40 to-emerald-900/20',
    border: 'border-green-700/20',
    tag: '#BystanderHero',
    source: 'Cyberbullying Research Center 2020',
  },
  {
    icon: <Flag size={28} className="text-orange-400" />,
    title: 'Report & Block',
    subtitle: 'Gunakan fitur platform',
    body: 'Setiap platform memiliki fitur report dan block. Jangan ragu menggunakannya ketika melihat konten berbahaya. Melaporkan bukan berarti "baper" — itu adalah tindakan bertanggung jawab yang melindungi seluruh komunitas.',
    gradient: 'from-orange-900/40 to-amber-900/20',
    border: 'border-orange-700/20',
    tag: '#ReportBlockProtect',
  },
  {
    icon: <Shield size={28} className="text-indigo-400" />,
    title: 'Lindungi Privasi Digital',
    subtitle: 'Jaga keamanan data pribadimu',
    body: 'Tidak perlu membagikan informasi pribadi seperti alamat rumah, nomor telepon, atau jadwal rutin di media sosial. Informasi ini bisa disalahgunakan oleh pelaku cyberstalking atau doxing. Atur setting privasi akun media sosialmu secara rutin.',
    gradient: 'from-indigo-900/40 to-blue-900/20',
    border: 'border-indigo-700/20',
    tag: '#DigitalPrivacy',
  },
  {
    icon: <Phone size={28} className="text-red-400" />,
    title: 'Cari Bantuan Profesional',
    subtitle: 'Tidak ada salahnya minta tolong',
    body: 'Jika kamu atau seseorang yang kamu kenal menjadi korban cyberbullying, jangan ragu mencari bantuan. Di Indonesia, kamu bisa menghubungi Komnas Perempuan (021-390-3963), KPAI (021-319-01556), atau Into The Light Indonesia untuk konseling.',
    gradient: 'from-red-900/40 to-rose-900/20',
    border: 'border-red-700/20',
    tag: '#MintaBantuan',
  },
  {
    icon: <Lightbulb size={28} className="text-yellow-400" />,
    title: 'Literasi Digital',
    subtitle: 'Kenali hoaks dan manipulasi',
    body: 'Cyberbullying sering terjadi bersamaan dengan penyebaran hoaks. Selalu verifikasi informasi sebelum membagikannya. Gunakan situs cek fakta seperti Turnbackhoax.id, Cekfakta.com, atau Hoax Slayer. Informasi yang salah bisa menghancurkan reputasi seseorang.',
    gradient: 'from-yellow-900/40 to-amber-900/20',
    border: 'border-yellow-700/20',
    tag: '#LiterasiDigital',
  },
];

export default function TipsSection() {
  return (
    <section id="tips" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E] to-[#0A061C]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-pink-900/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-700/30 bg-green-900/10 mb-6">
            <Lightbulb size={14} className="text-green-400" />
            <span className="text-xs font-mono text-green-300 tracking-widest uppercase">Tips & Panduan</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Jadi{' '}
            <span style={{ background: 'linear-gradient(135deg, #10B981, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Netizen Waras
            </span>
          </h2>
          <p className="text-purple-200/60 text-base max-w-2xl mx-auto">
            8 tips praktis yang bisa kamu terapkan mulai hari ini untuk menjadi pengguna internet yang lebih bijak, berempati, dan bertanggung jawab.
          </p>
        </motion.div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tips.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-6 rounded-2xl border ${tip.border} bg-gradient-to-br ${tip.gradient} backdrop-blur-sm group cursor-default`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {tip.icon}
              </div>
              <div className="inline-block px-2.5 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
                <span className="text-xs font-mono text-purple-400/70">{tip.tag}</span>
              </div>
              <h3 className="font-display font-bold text-white text-base mb-1">{tip.title}</h3>
              <p className="text-purple-300/60 text-xs mb-3">{tip.subtitle}</p>
              <p className="text-purple-200/60 text-xs leading-relaxed">{tip.body}</p>
              {tip.source && (
                <p className="text-purple-500/40 text-xs font-mono mt-3">📚 {tip.source}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl border border-purple-700/20 bg-gradient-to-br from-purple-900/20 to-pink-900/10 text-center"
        >
          <p className="text-purple-100/90 text-lg font-display font-semibold mb-2">
            💜 "Satu komentar positif bisa mengubah hari seseorang. Satu komentar jahat bisa mengubah hidupnya."
          </p>
          <p className="text-purple-400/60 text-sm">Pilihan ada di tanganmu. Jadilah perubahan yang ingin kamu lihat di internet.</p>
        </motion.div>
      </div>
    </section>
  );
}
