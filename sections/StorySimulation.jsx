'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, RotateCcw, Heart, MessageCircle, AlertTriangle } from 'lucide-react';

const story = [
  {
    id: 1,
    scene: 'Unggahan',
    bg: 'from-indigo-900/40 to-purple-900/30',
    avatar: '🎨',
    character: 'Dina, 16 tahun',
    text: 'Dina dengan bangga mengunggah gambar ilustrasi digital pertamanya ke Instagram. Ia mengerjakan karya ini selama dua minggu penuh dan berharap mendapatkan dukungan dari teman-temannya.',
    visual: {
      type: 'post',
      caption: '✨ Akhirnya selesai! Ini karya pertamaku. Masih belajar tapi semoga kalian suka 🙏',
      likes: 0,
      comments: 0,
    },
    emotion: '😊 Penuh harapan',
    emotionColor: 'text-green-400',
    choice: null,
  },
  {
    id: 2,
    scene: 'Respons Positif',
    bg: 'from-green-900/40 to-teal-900/30',
    avatar: '💬',
    character: 'Teman-teman Dina',
    text: 'Beberapa teman Dina memberikan respons positif. Hati Dina mulai berbunga-bunga melihat komentar dukungan dari orang-orang yang ia percaya.',
    visual: {
      type: 'comments',
      items: [
        { user: 'ratna_xyz', text: 'Keren banget Din! Terus berkarya ya 🔥', positive: true },
        { user: 'budi_art', text: 'Wah bagus! Warna-warnanya cantik sekali', positive: true },
        { user: 'sari22', text: 'Aku suka banget! Kapan buat lagi?', positive: true },
      ],
    },
    emotion: '😄 Bahagia & bersemangat',
    emotionColor: 'text-green-400',
    choice: null,
  },
  {
    id: 3,
    scene: 'Komentar Pertama',
    bg: 'from-orange-900/40 to-red-900/20',
    avatar: '😤',
    character: 'Akun anonim',
    text: 'Tiba-tiba, sebuah komentar dari akun anonim yang tidak Dina kenal muncul. Komentar itu menghina kemampuan seni Dina secara langsung.',
    visual: {
      type: 'toxic_comment',
      user: 'user_anon_777',
      text: 'Hahaha ini namanya gambar? Jelek banget! Kayak gambar anak TK. Mending jangan posting kalau hasilnya begini 😂😂',
      toxic: true,
    },
    emotion: '😟 Terluka & bingung',
    emotionColor: 'text-yellow-400',
    choice: {
      question: 'Jika kamu adalah teman Dina dan melihat komentar ini, apa yang akan kamu lakukan?',
      options: [
        { text: 'Ikut menertawakan', outcome: 'bad', icon: '😂' },
        { text: 'Diam saja, bukan urusanku', outcome: 'neutral', icon: '🤐' },
        { text: 'Bela Dina di kolom komentar', outcome: 'good', icon: '🦸' },
        { text: 'Report akun tersebut', outcome: 'best', icon: '🚩' },
      ],
    },
  },
  {
    id: 4,
    scene: 'Efek Domino',
    bg: 'from-red-900/40 to-rose-900/30',
    avatar: '😡',
    character: 'Gerombolan netizen',
    text: 'Tanpa disangka, beberapa orang lain mulai ikut-ikutan menghina karya Dina. Mereka merasa aman di balik layar tanpa menyadari bahwa ada orang nyata di balik postingan tersebut.',
    visual: {
      type: 'comments',
      items: [
        { user: 'troll_account1', text: 'Setuju, gak ada bagus-bagusnya sama sekali 👎', positive: false },
        { user: 'anonymous_hater', text: 'Kenapa diposting sih kalau hasilnya ancur? Kasian yang lihat', positive: false },
        { user: 'fake_acc_99', text: 'HAHAHA iya ih, mending belajar dulu 10 tahun lagi', positive: false },
        { user: 'mean_user_2', text: 'Tag teman-teman yuk biar pada ngetawain ini 😭', positive: false },
      ],
    },
    emotion: '😔 Malu & hancur hati',
    emotionColor: 'text-orange-400',
    choice: null,
  },
  {
    id: 5,
    scene: 'Dampak Nyata',
    bg: 'from-slate-900/60 to-gray-900/40',
    avatar: '💔',
    character: 'Dina',
    text: 'Dina menghapus postingannya. Ia menangis sendiri di kamar dan tidak mau makan malam. Ia memutuskan untuk tidak pernah lagi berbagi karyanya kepada siapapun.',
    visual: {
      type: 'diary',
      text: '"Aku pikir aku sudah cukup berani. Ternyata tidak. Aku malu. Mungkin mereka benar — aku memang tidak berbakat. Aku tidak akan pernah posting lagi."',
      date: 'Catatan Dina, malam itu',
    },
    emotion: '😭 Trauma & kehilangan kepercayaan diri',
    emotionColor: 'text-red-400',
    choice: null,
  },
  {
    id: 6,
    scene: 'Epilog',
    bg: 'from-purple-900/40 to-violet-900/30',
    avatar: '📖',
    character: 'Pesan Kampanye',
    text: 'Tiga bulan kemudian, seorang guru seni menemukan buku sketsa Dina dan terkagum-kagum dengan bakatnya. Tapi Dina sudah terlanjur berhenti. Cyberbullying bukan hanya komentar online — dampaknya bisa sangat nyata dan permanen.',
    visual: {
      type: 'message',
      text: 'Cyberbullying bukan hanya komentar online.\nDampaknya bisa sangat nyata.\n\nSatu komentar jahat bisa menghancurkan kepercayaan diri seseorang selamanya.',
    },
    emotion: '💜 Refleksi',
    emotionColor: 'text-purple-400',
    choice: null,
  },
];

const outcomeMessages = {
  bad: { text: 'Dengan ikut menertawakan, kamu menjadi bagian dari masalah. Ini disebut "Mob Mentality" — ketika kelompok menguatkan perilaku negatif satu sama lain.', color: 'border-red-700/30 bg-red-900/10 text-red-300' },
  neutral: { text: 'Diam saja berarti kamu memilih untuk tidak membantu. Penelitian menunjukkan bahwa 57% kasus bullying berhenti dalam waktu 10 detik ketika seorang bystander turun tangan.', color: 'border-yellow-700/30 bg-yellow-900/10 text-yellow-300' },
  good: { text: 'Bagus! Membela korban di kolom komentar dapat memengaruhi persepsi publik dan membuat pelaku sadar. Kamu adalah Bystander Hero!', color: 'border-green-700/30 bg-green-900/10 text-green-300' },
  best: { text: 'Pilihan terbaik! Melaporkan komentar toxic membantu platform mengambil tindakan dan mencegah pelaku menyakiti orang lain. Terima kasih sudah menjadi Netizen Waras!', color: 'border-cyan-700/30 bg-cyan-900/10 text-cyan-300' },
};

export default function StorySimulation() {
  const [step, setStep] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [choiceMade, setChoiceMade] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  const current = story[step];

  const handleChoice = (option) => {
    setSelectedChoice(option);
    setChoiceMade(true);
  };

  const next = () => {
    if (step < story.length - 1) {
      setStep(s => s + 1);
      setSelectedChoice(null);
      setChoiceMade(false);
    }
  };

  const prev = () => {
    if (step > 0) {
      setStep(s => s - 1);
      setSelectedChoice(null);
      setChoiceMade(false);
    }
  };

  const reset = () => {
    setStep(0);
    setSelectedChoice(null);
    setChoiceMade(false);
  };

  return (
    <section id="simulation" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A061C] to-[#0F0A1E]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-700/30 bg-orange-900/10 mb-6">
            <Heart size={14} className="text-orange-400" />
            <span className="text-xs font-mono text-orange-300 tracking-widest uppercase">Simulasi Interaktif</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Cerita{' '}
            <span style={{ background: 'linear-gradient(135deg, #F97316, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Dina
            </span>
          </h2>
          <p className="text-purple-200/60 text-base max-w-xl mx-auto">
            Ikuti perjalanan Dina dan rasakan dampak nyata cyberbullying. Buat pilihan di setiap titik penting cerita.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-purple-400/60 mb-2">
            <span>Scene {step + 1} dari {story.length}</span>
            <span className={current.emotionColor}>{current.emotion}</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${((step + 1) / story.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            />
          </div>
          <div className="flex gap-2 mt-3">
            {story.map((s, i) => (
              <button
                key={i}
                onClick={() => { setStep(i); setSelectedChoice(null); setChoiceMade(false); }}
                className={`flex-1 h-1.5 rounded-full transition-all ${i <= step ? 'bg-purple-500' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>

        {/* Story card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className={`rounded-2xl border border-white/10 bg-gradient-to-br ${current.bg} backdrop-blur-sm overflow-hidden mb-6`}
          >
            {/* Scene header */}
            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-4">
              <div className="text-3xl">{current.avatar}</div>
              <div>
                <p className="text-xs font-mono text-purple-400/70 tracking-widest uppercase">Scene {step + 1}: {current.scene}</p>
                <p className="text-white font-semibold text-sm">{current.character}</p>
              </div>
            </div>

            <div className="p-6">
              {/* Narrative */}
              <p className="text-purple-100/90 leading-relaxed mb-6 text-base">{current.text}</p>

              {/* Visual content */}
              {current.visual?.type === 'post' && (
                <div className="p-4 rounded-xl bg-black/30 border border-white/10 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white">D</div>
                    <div>
                      <p className="text-white text-xs font-semibold">dina_art16</p>
                      <p className="text-purple-400/60 text-xs">Baru saja</p>
                    </div>
                  </div>
                  <div className="h-40 rounded-xl bg-gradient-to-br from-purple-700/40 to-pink-700/40 flex items-center justify-center mb-3">
                    <span className="text-5xl">🎨</span>
                  </div>
                  <p className="text-purple-200/80 text-sm">{current.visual.caption}</p>
                  <div className="flex gap-4 mt-3 text-purple-400/50 text-xs">
                    <span>❤️ {current.visual.likes} suka</span>
                    <span>💬 {current.visual.comments} komentar</span>
                  </div>
                </div>
              )}

              {current.visual?.type === 'comments' && (
                <div className="space-y-2 mb-4">
                  {current.visual.items.map((comment, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className={`p-3 rounded-xl text-sm flex gap-3 ${comment.positive ? 'bg-green-900/20 border border-green-700/20' : 'bg-red-900/20 border border-red-700/20'}`}
                    >
                      <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${comment.positive ? 'bg-green-700/30 text-green-300' : 'bg-red-700/30 text-red-300'}`}>
                        {comment.user[0].toUpperCase()}
                      </div>
                      <div>
                        <p className={`font-mono text-xs mb-0.5 ${comment.positive ? 'text-green-400/70' : 'text-red-400/70'}`}>@{comment.user}</p>
                        <p className={comment.positive ? 'text-green-200/80' : 'text-red-200/80'}>{comment.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {current.visual?.type === 'toxic_comment' && (
                <div className="p-4 rounded-xl bg-red-900/30 border border-red-600/30 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-800/40 flex items-center justify-center text-red-300 font-bold text-xs flex-shrink-0">?</div>
                    <div>
                      <p className="font-mono text-xs text-red-400/70 mb-1">@{current.visual.user}</p>
                      <p className="text-red-200/90 text-sm">{current.visual.text}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-red-700/20">
                    <AlertTriangle size={12} className="text-red-400" />
                    <span className="text-xs text-red-400/70">Terdeteksi sebagai komentar toxic</span>
                  </div>
                </div>
              )}

              {current.visual?.type === 'diary' && (
                <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-600/20 italic mb-4">
                  <p className="text-slate-300/80 text-sm leading-relaxed mb-2">{current.visual.text}</p>
                  <p className="text-slate-500/60 text-xs font-mono">— {current.visual.date}</p>
                </div>
              )}

              {current.visual?.type === 'message' && (
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/20 border border-purple-600/20 text-center mb-4">
                  <p className="text-white text-lg font-display font-bold leading-relaxed whitespace-pre-line">
                    {current.visual.text}
                  </p>
                </div>
              )}

              {/* Choice section */}
              {current.choice && !choiceMade && (
                <div className="mt-4 p-5 rounded-xl border border-yellow-700/20 bg-yellow-900/5">
                  <p className="text-yellow-300/90 text-sm font-medium mb-4 flex items-center gap-2">
                    <span>🤔</span> {current.choice.question}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {current.choice.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleChoice(opt)}
                        className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm text-left transition-all flex items-center gap-2"
                      >
                        <span>{opt.icon}</span>
                        <span>{opt.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {choiceMade && selectedChoice && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-xl border text-sm leading-relaxed ${outcomeMessages[selectedChoice.outcome].color}`}
                >
                  <p className="font-semibold mb-1">
                    {selectedChoice.outcome === 'best' && '🏆 Pilihan Terbaik!'}
                    {selectedChoice.outcome === 'good' && '✅ Pilihan Bagus!'}
                    {selectedChoice.outcome === 'neutral' && '⚠️ Pikirkan Lagi...'}
                    {selectedChoice.outcome === 'bad' && '❌ Pilihan Buruk'}
                  </p>
                  {outcomeMessages[selectedChoice.outcome].text}
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prev}
            disabled={step === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={16} />
            Sebelumnya
          </button>

          <button onClick={reset} className="p-2 rounded-xl border border-white/10 text-purple-400/60 hover:text-purple-300 hover:bg-white/5 transition-all">
            <RotateCcw size={16} />
          </button>

          <button
            onClick={next}
            disabled={step === story.length - 1 || (current.choice && !choiceMade)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm disabled:opacity-30 transition-all"
          >
            {step === story.length - 1 ? 'Selesai' : 'Selanjutnya'}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
