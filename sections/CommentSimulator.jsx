'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, RefreshCw, Lightbulb, AlertCircle, CheckCircle, Info } from 'lucide-react';
import {
  analyzeComment,
  getCategoryColor,
  getCategoryEmoji,
  getCategoryLabel,
  getToxicityGradient,
  suggestPoliteRewrite,
} from '../utils/toxicityAnalyzer';

const exampleComments = [
  'Karyanya bagus banget, semangat terus ya!',
  'Cara ngomongnya lambat banget, bikin bosen',
  'Muka kamu itu loh bikin mual tiap kali lihat',
  'Percuma posting kalau kontennya gak ada value-nya',
  'Ini informasi yang sangat bermanfaat, makasih!',
  'Otak lu di mana sih, hal simple aja gak ngerti',
];

export default function CommentSimulator() {
  const [comment, setComment] = useState('');
  const [result, setResult] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [history, setHistory] = useState([]);
  const textareaRef = useRef(null);

  const handleAnalyze = async () => {
    if (!comment.trim()) return;
    setAnalyzing(true);
    // Simulate processing delay for realism
    await new Promise(r => setTimeout(r, 800));
    const analysis = analyzeComment(comment);
    const rewrite = ['toxic', 'hate', 'criticism'].includes(analysis.category)
      ? suggestPoliteRewrite(comment, analysis.category)
      : null;
    const newResult = { ...analysis, rewrite, originalComment: comment };
    setResult(newResult);
    setHistory(prev => [{ comment, ...analysis }, ...prev.slice(0, 4)]);
    setAnalyzing(false);
  };

  const handleExample = (ex) => {
    setComment(ex);
    setResult(null);
  };

  const handleReset = () => {
    setComment('');
    setResult(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) handleAnalyze();
  };

  const meterPercent = result ? Math.round(result.score * 100) : 0;

  return (
    <section id="simulator" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A061C] to-[#0F0A1E]" />
      <div className="absolute top-1/2 left-1/2 w-96 h-64 bg-purple-900/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-700/30 bg-red-900/10 mb-6">
            <AlertCircle size={14} className="text-red-400" />
            <span className="text-xs font-mono text-red-300 tracking-widest uppercase">Comment Analyzer</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Cek{' '}
            <span style={{ background: 'linear-gradient(135deg, #EF4444, #F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Toksisitas
            </span>{' '}
            Komentarmu
          </h2>
          <p className="text-purple-200/60 text-base max-w-xl mx-auto">
            Ketik komentar yang ingin kamu analisis. Sistem akan mendeteksi apakah komentar tersebut positif, netral, kritik, toxic, atau hate speech.
          </p>
          <p className="text-xs text-purple-400/40 mt-2 font-mono">
            Terinspirasi dari Google Perspective API | Untuk tujuan edukasi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Textarea */}
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={comment}
                onChange={e => setComment(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tulis komentarmu di sini... (Ctrl+Enter untuk analisis)"
                rows={5}
                maxLength={280}
                className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] focus:bg-white/[0.05] text-white placeholder-purple-400/40 text-sm resize-none outline-none focus:border-purple-500/50 transition-all font-body"
              />
              <div className="absolute bottom-3 right-4 text-xs text-purple-400/40 font-mono">
                {comment.length}/280
              </div>
            </div>

            {/* Example comments */}
            <div>
              <p className="text-xs text-purple-400/60 mb-2 font-mono tracking-wide">CONTOH KOMENTAR:</p>
              <div className="flex flex-wrap gap-2">
                {exampleComments.map((ex, i) => (
                  <button
                    key={i}
                    onClick={() => handleExample(ex)}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-purple-300/70 hover:text-white transition-all truncate max-w-[180px]"
                    title={ex}
                  >
                    {ex.length > 28 ? ex.slice(0, 25) + '...' : ex}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleAnalyze}
                disabled={!comment.trim() || analyzing}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-sm disabled:opacity-40 transition-all"
              >
                {analyzing ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    Menganalisis...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Analisis Sekarang
                  </>
                )}
              </button>
              {comment && (
                <button
                  onClick={handleReset}
                  className="px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-purple-300 transition-all"
                >
                  <RefreshCw size={16} />
                </button>
              )}
            </div>

            {/* History */}
            {history.length > 0 && (
              <div>
                <p className="text-xs text-purple-400/60 mb-2 font-mono tracking-wide">RIWAYAT ANALISIS:</p>
                <div className="space-y-2">
                  {history.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 cursor-pointer hover:bg-white/[0.04] transition-all"
                      onClick={() => { setComment(h.comment); setResult(null); }}
                    >
                      <span>{getCategoryEmoji(h.category)}</span>
                      <p className="text-xs text-purple-200/70 truncate flex-1">{h.comment}</p>
                      <span
                        className="text-xs font-mono font-bold flex-shrink-0"
                        style={{ color: getCategoryColor(h.category) }}
                      >
                        {Math.round(h.score * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Result panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {!result && !analyzing ? (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] min-h-[400px] text-center"
                >
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="text-white font-semibold mb-2">Hasil Analisis</p>
                  <p className="text-purple-300/50 text-sm">Ketik komentar dan klik tombol analisis untuk melihat hasilnya di sini.</p>
                </motion.div>
              ) : analyzing ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center p-8 rounded-2xl border border-purple-700/20 bg-purple-900/5 min-h-[400px] text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full border-4 border-purple-600/30 border-t-purple-500 animate-spin" />
                  </div>
                  <p className="text-white font-semibold mb-2">Menganalisis komentar...</p>
                  <p className="text-purple-300/50 text-sm">Memeriksa kata kunci dan pola bahasa</p>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 rounded-2xl border bg-white/[0.02] space-y-5"
                  style={{ borderColor: getCategoryColor(result.category) + '40' }}
                >
                  {/* Category badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                        style={{ background: getCategoryColor(result.category) + '20' }}
                      >
                        {getCategoryEmoji(result.category)}
                      </div>
                      <div>
                        <p className="text-xs text-purple-400/60 font-mono">Kategori Terdeteksi</p>
                        <p className="font-display font-bold text-xl" style={{ color: getCategoryColor(result.category) }}>
                          {getCategoryLabel(result.category)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-purple-400/60 font-mono">Skor Toksisitas</p>
                      <p className="font-display font-bold text-3xl" style={{ color: getCategoryColor(result.category) }}>
                        {meterPercent}%
                      </p>
                    </div>
                  </div>

                  {/* Toxicity meter */}
                  <div>
                    <div className="flex justify-between text-xs text-purple-400/50 mb-1.5">
                      <span>Positif</span>
                      <span>Hate Speech</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/5 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${meterPercent}%` }}
                        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                        className={`h-full rounded-full bg-gradient-to-r ${getToxicityGradient(result.score)}`}
                      />
                    </div>
                    {/* Scale labels */}
                    <div className="flex justify-between mt-1">
                      {['Positif', 'Netral', 'Kritik', 'Toxic', 'Hate'].map((label, i) => (
                        <span key={i} className="text-[10px] text-purple-400/30">{label}</span>
                      ))}
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-start gap-2">
                      <Info size={14} className="text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-purple-200/80 text-sm leading-relaxed">{result.explanation}</p>
                    </div>
                  </div>

                  {/* Suggestions */}
                  {result.suggestions?.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-mono text-purple-400/60 tracking-wide flex items-center gap-1">
                        <Lightbulb size={12} />
                        SARAN:
                      </p>
                      {result.suggestions.map((sug, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-purple-200/70">
                          <CheckCircle size={14} className="text-purple-500 flex-shrink-0 mt-0.5" />
                          <span>{sug}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Polite rewrite */}
                  {result.rewrite && (
                    <div className="p-4 rounded-xl border border-green-700/20 bg-green-900/10">
                      <p className="text-xs font-mono text-green-400/70 mb-2 tracking-wide">✍️ VERSI LEBIH SOPAN:</p>
                      <p className="text-green-200/80 text-sm italic">"{result.rewrite}"</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-5 rounded-2xl border border-white/5 bg-white/[0.02]"
        >
          <p className="text-xs font-mono text-purple-400/60 mb-4 tracking-wide">SKALA TOKSISITAS</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { cat: 'positive', range: '0-15%', desc: 'Membangun & mendukung' },
              { cat: 'neutral', range: '15-30%', desc: 'Tidak positif/negatif' },
              { cat: 'criticism', range: '30-55%', desc: 'Kritik, bisa membangun' },
              { cat: 'toxic', range: '55-80%', desc: 'Menyerang & melukai' },
              { cat: 'hate', range: '80-100%', desc: 'Ujaran kebencian' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className="h-2 rounded-full mb-2"
                  style={{ background: getCategoryColor(item.cat) }}
                />
                <p className="text-xs font-mono font-bold mb-0.5" style={{ color: getCategoryColor(item.cat) }}>
                  {item.range}
                </p>
                <p className="text-xs text-purple-300/50">{getCategoryLabel(item.cat)}</p>
                <p className="text-xs text-purple-400/30 leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
