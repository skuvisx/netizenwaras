'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, RotateCcw, Trophy, ChevronRight } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: 'Seseorang membagikan foto temanmu tanpa izin dan banyak orang mengomentarinya dengan negatif. Apa yang kamu lakukan?',
    options: [
      { text: 'Ikut berkomentar negatif karena seru', score: 0, feedback: 'Ikut-ikutan komentar negatif membuatmu menjadi bagian dari cyberbullying. Ini disebut "mob mentality".' },
      { text: 'Membagikan ke teman lain biar makin viral', score: 0, feedback: 'Menyebarkan konten yang memalukan orang lain adalah bentuk cyberbullying dan bisa melanggar UU ITE.' },
      { text: 'Diam saja, bukan urusan aku', score: 1, feedback: 'Diam berarti membiarkan. Sebagai bystander, kamu punya kekuatan untuk menghentikan bullying.' },
      { text: 'Membela temanmu dan melaporkan postingan tersebut', score: 2, feedback: 'Pilihan terbaik! Kamu adalah Bystander Hero yang membantu menghentikan cyberbullying.' },
    ],
    correctIndex: 3,
  },
  {
    id: 2,
    question: 'Kamu melihat konten yang dibuat seseorang dan menurutmu kualitasnya kurang baik. Komentar mana yang paling tepat?',
    options: [
      { text: '"Jelek banget! Mending jangan posting kalau hasilnya gitu"', score: 0, feedback: 'Komentar ini bersifat toxic dan merendahkan. Tidak ada nilai konstruktif sama sekali.' },
      { text: '"Hmm, ada beberapa hal yang bisa ditingkatkan sih"', score: 1, feedback: 'Lebih baik, tapi masih bisa lebih spesifik dan konstruktif.' },
      { text: '"Menurutku lighting-nya bisa diperbaiki biar hasilnya lebih bagus. Keep trying!"', score: 2, feedback: 'Kritik konstruktif yang spesifik dan tetap menyemangati. Ini cara yang benar!' },
      { text: 'Scroll saja, tidak perlu komentar', score: 1, feedback: 'Tidak berkomentar memang aman, tapi komentar positif atau konstruktif bisa sangat membantu.' },
    ],
    correctIndex: 2,
  },
  {
    id: 3,
    question: 'Menurutmu, apa yang membuat orang lebih berani bersikap kasar di internet dibandingkan di dunia nyata?',
    options: [
      { text: 'Orang-orang di internet memang dasarnya jahat', score: 0, feedback: 'Tidak tepat. Ini adalah generalisasi. Fenomena ini dijelaskan secara ilmiah oleh Suler (2004).' },
      { text: 'Karena di internet tidak ada aturan', score: 0, feedback: 'Ada aturan, seperti UU ITE di Indonesia. Masalahnya adalah persepsi anonimitas, bukan ketiadaan aturan.' },
      { text: 'Anonimitas dan tidak ada konsekuensi langsung (Online Disinhibition Effect)', score: 2, feedback: 'Benar! Ini adalah "Online Disinhibition Effect" yang dijelaskan John Suler (2004).' },
      { text: 'Karena layar handphone tidak bisa merasakan emosi', score: 1, feedback: 'Sebagian benar — ketiadaan ekspresi wajah memang salah satu faktor, tapi jawabannya lebih lengkap dari itu.' },
    ],
    correctIndex: 2,
  },
  {
    id: 4,
    question: 'Teman sekelasmu aktif mem-bully seseorang di grup chat. Teman-teman lain ikut tertawa. Apa yang paling tepat dilakukan?',
    options: [
      { text: 'Ikut tertawa supaya tidak dikucilkan dari grup', score: 0, feedback: 'Tekanan kelompok tidak membenarkan partisipasi dalam bullying. Ini adalah "herd mentality".' },
      { text: 'Keluar dari grup tanpa bilang apa-apa', score: 1, feedback: 'Ini menunjukkan ketidaksetujuanmu, tapi tidak membantu korban secara langsung.' },
      { text: 'Menegur secara pribadi teman yang membully', score: 2, feedback: 'Efektif! Bicara personal lebih efektif dari debat publik dan mengurangi risiko konflik kelompok.' },
      { text: 'Screenshot dan laporkan ke guru/orang tua/pihak berwenang', score: 2, feedback: 'Sangat tepat! Melaporkan dengan bukti adalah cara paling efektif menghentikan cyberbullying.' },
    ],
    correctIndex: 3,
  },
];

const results = [
  {
    minScore: 0,
    maxScore: 3,
    label: 'Netizen Toxic',
    emoji: '⚠️',
    color: 'from-red-600 to-orange-600',
    borderColor: 'border-red-700/30',
    bgColor: 'bg-red-900/10',
    description: 'Kamu masih perlu banyak belajar tentang empati digital. Respons yang kamu pilih berpotensi menyakiti orang lain atau memperburuk situasi cyberbullying.',
    advice: 'Yuk mulai dengan: (1) Selalu pikir dampak sebelum berkomentar, (2) Ingat ada manusia nyata di balik setiap akun, (3) Pelajari lebih lanjut tentang empati digital.',
  },
  {
    minScore: 4,
    maxScore: 6,
    label: 'Netizen Biasa',
    emoji: '😐',
    color: 'from-yellow-600 to-amber-600',
    borderColor: 'border-yellow-700/30',
    bgColor: 'bg-yellow-900/10',
    description: 'Kamu sudah memiliki kesadaran dasar tentang cyberbullying, tapi masih ada ruang untuk berkembang. Beberapa responmu sudah tepat, tapi belum optimal.',
    advice: 'Next level: (1) Jadilah bystander yang aktif — speak up ketika melihat bullying, (2) Belajar cara memberikan kritik konstruktif, (3) Kenali tanda-tanda toxic behavior.',
  },
  {
    minScore: 7,
    maxScore: 8,
    label: 'Netizen Waras',
    emoji: '🏆',
    color: 'from-purple-600 to-cyan-600',
    borderColor: 'border-purple-700/30',
    bgColor: 'bg-purple-900/10',
    description: 'Selamat! Kamu adalah Netizen Waras yang berempati dan bertanggung jawab di dunia digital. Pemahamanmu tentang cyberbullying sudah sangat baik.',
    advice: 'Pertahankan dan sebarkan! (1) Ajak teman-temanmu untuk lebih sadar digital, (2) Jadilah contoh positif di media sosial, (3) Berani speak up ketika melihat cyberbullying.',
  },
];

export default function QuizSection() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [finished, setFinished] = useState(false);

  const totalScore = answers.reduce((sum, a) => sum + a.score, 0);
  const result = results.find(r => totalScore >= r.minScore && totalScore <= r.maxScore);

  const handleSelect = (opt, idx) => {
    if (showFeedback) return;
    setSelected({ opt, idx });
    setShowFeedback(true);
  };

  const handleNext = () => {
    setAnswers(prev => [...prev, selected.opt]);
    if (currentQ + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentQ(q => q + 1);
      setSelected(null);
      setShowFeedback(false);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setShowFeedback(false);
    setFinished(false);
  };

  const q = questions[currentQ];

  return (
    <section id="quiz" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E] to-[#0A061C]" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-900/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-700/30 bg-purple-900/10 mb-6">
            <HelpCircle size={14} className="text-purple-400" />
            <span className="text-xs font-mono text-purple-300 tracking-widest uppercase">Quiz Interaktif</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Kamu Tipe{' '}
            <span style={{ background: 'linear-gradient(135deg, #A78BFA, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Netizen
            </span>{' '}
            Mana?
          </h2>
          <p className="text-purple-200/60 text-base max-w-xl mx-auto">
            Jawab 4 pertanyaan untuk mengetahui seberapa "waras" kamu sebagai netizen Indonesia.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              {/* Progress */}
              <div className="flex items-center gap-3 mb-6">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-1.5 rounded-full transition-all duration-500 ${i < currentQ ? 'bg-purple-500' : i === currentQ ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-white/10'}`}
                  />
                ))}
              </div>
              <p className="text-xs text-purple-400/60 font-mono mb-8 text-center">
                Pertanyaan {currentQ + 1} dari {questions.length}
              </p>

              {/* Question */}
              <div className="p-6 rounded-2xl border border-purple-700/20 bg-purple-900/10 mb-6">
                <p className="text-white font-semibold text-lg leading-relaxed">{q.question}</p>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {q.options.map((opt, idx) => {
                  const isSelected = selected?.idx === idx;
                  const isCorrect = idx === q.correctIndex;
                  let style = 'border-white/10 bg-white/[0.03] text-purple-200/80 hover:bg-white/[0.07] hover:border-white/20';
                  if (showFeedback) {
                    if (isCorrect) style = 'border-green-500/40 bg-green-900/20 text-green-200';
                    else if (isSelected && !isCorrect) style = 'border-red-500/40 bg-red-900/20 text-red-200';
                    else style = 'border-white/5 bg-white/[0.01] text-purple-300/40 opacity-60';
                  } else if (isSelected) {
                    style = 'border-purple-500/50 bg-purple-900/30 text-white';
                  }

                  return (
                    <motion.button
                      key={idx}
                      whileHover={!showFeedback ? { scale: 1.01 } : {}}
                      onClick={() => handleSelect(opt, idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all text-sm leading-relaxed ${style}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full border text-xs flex items-center justify-center font-mono ${isSelected || (showFeedback && isCorrect) ? 'border-current bg-current/10' : 'border-white/20'}`}>
                          {showFeedback ? (isCorrect ? '✓' : isSelected ? '✗' : String.fromCharCode(65 + idx)) : String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt.text}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {showFeedback && selected && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl border mb-6 text-sm leading-relaxed ${selected.idx === q.correctIndex ? 'border-green-700/30 bg-green-900/10 text-green-200' : 'border-orange-700/30 bg-orange-900/10 text-orange-200'}`}
                  >
                    <p className="font-semibold mb-1">
                      {selected.idx === q.correctIndex ? '✅ Benar!' : '📚 Pelajaran:'}
                    </p>
                    {selected.opt.feedback}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next button */}
              {showFeedback && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <button
                    onClick={handleNext}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold transition-all"
                  >
                    {currentQ + 1 >= questions.length ? 'Lihat Hasilku' : 'Pertanyaan Berikutnya'}
                    <ChevronRight size={18} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className={`p-8 rounded-2xl border ${result.borderColor} ${result.bgColor} mb-8`}>
                <div className="text-6xl mb-4">{result.emoji}</div>
                <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${result.color} mb-4`}>
                  <span className="text-white font-display font-bold text-xl">{result.label}</span>
                </div>

                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-4xl font-display font-bold text-white">{totalScore}</span>
                  <span className="text-purple-400/60">/ 8 poin</span>
                </div>

                <p className="text-purple-100/90 leading-relaxed mb-4 max-w-md mx-auto">{result.description}</p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left">
                  <p className="text-xs font-mono text-purple-400/70 mb-2">💡 LANGKAH SELANJUTNYA:</p>
                  <p className="text-purple-200/80 text-sm">{result.advice}</p>
                </div>
              </div>

              {/* Score breakdown */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                {answers.map((ans, i) => (
                  <div key={i} className={`p-3 rounded-xl border text-center ${ans.score === 2 ? 'border-green-700/30 bg-green-900/10' : ans.score === 1 ? 'border-yellow-700/30 bg-yellow-900/10' : 'border-red-700/30 bg-red-900/10'}`}>
                    <p className="text-xs text-purple-400/60 mb-1 font-mono">Q{i + 1}</p>
                    <p className={`font-display font-bold text-lg ${ans.score === 2 ? 'text-green-400' : ans.score === 1 ? 'text-yellow-400' : 'text-red-400'}`}>
                      +{ans.score}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-2 mx-auto px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all"
              >
                <RotateCcw size={16} />
                Ulangi Quiz
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
