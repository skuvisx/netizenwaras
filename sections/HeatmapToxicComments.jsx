'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, Info } from 'lucide-react';
import { toxicCommentsDataset } from '../data/toxicCommentsDataset';
import { getCategoryColor, getCategoryLabel, getCategoryEmoji } from '../utils/toxicityAnalyzer';

const categoryGroups = ['positive', 'neutral', 'criticism', 'toxic', 'hate'];

export default function HeatmapToxicComments() {
  const [hoveredComment, setHoveredComment] = useState(null);
  const [filterCat, setFilterCat] = useState('all');

  const filtered = filterCat === 'all'
    ? toxicCommentsDataset
    : toxicCommentsDataset.filter(c => c.category === filterCat);

  return (
    <section id="heatmap" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E] to-[#0A061C]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-700/30 bg-orange-900/10 mb-6">
            <Grid size={14} className="text-orange-400" />
            <span className="text-xs font-mono text-orange-300 tracking-widest uppercase">Heatmap Visualisasi</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Peta Komentar{' '}
            <span style={{ background: 'linear-gradient(135deg, #F97316, #EF4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Toxic
            </span>
          </h2>
          <p className="text-purple-200/60 text-base max-w-xl mx-auto">
            Visualisasi 103 komentar simulatif berdasarkan tingkat toksisitas. Hover pada setiap sel untuk melihat detail komentar.
          </p>
          <p className="text-xs text-purple-500/40 mt-2 font-mono">
            Terinspirasi dari metodologi Google Perspective API Research
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => setFilterCat('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono border transition-all ${filterCat === 'all' ? 'bg-white/15 border-white/20 text-white' : 'border-white/10 text-purple-400/60 hover:text-white hover:border-white/20'}`}
          >
            SEMUA ({toxicCommentsDataset.length})
          </button>
          {categoryGroups.map(cat => {
            const count = toxicCommentsDataset.filter(c => c.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilterCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono border transition-all flex items-center gap-1.5`}
                style={{
                  borderColor: filterCat === cat ? getCategoryColor(cat) + '60' : 'rgba(255,255,255,0.1)',
                  background: filterCat === cat ? getCategoryColor(cat) + '20' : 'transparent',
                  color: filterCat === cat ? getCategoryColor(cat) : 'rgba(167,139,250,0.6)',
                }}
              >
                {getCategoryEmoji(cat)} {getCategoryLabel(cat).toUpperCase()} ({count})
              </button>
            );
          })}
        </div>

        {/* Color scale legend */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-xs text-purple-400/60 font-mono">Positif</span>
          <div className="flex gap-0.5">
            {['#10B981', '#6EE7B7', '#FDE68A', '#F59E0B', '#F97316', '#EF4444', '#DC2626', '#7F1D1D'].map((c, i) => (
              <div key={i} className="w-6 h-4 rounded-sm" style={{ background: c, opacity: 0.9 }} />
            ))}
          </div>
          <span className="text-xs text-purple-400/60 font-mono">Hate Speech</span>
        </div>

        {/* Heatmap grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-8"
        >
          <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(32px, 1fr))' }}>
            {filtered.map((comment) => {
              const color = getCategoryColor(comment.category);
              return (
                <motion.div
                  key={comment.id}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: comment.id * 0.003 }}
                  whileHover={{ scale: 1.3, zIndex: 10 }}
                  onHoverStart={() => setHoveredComment(comment)}
                  onHoverEnd={() => setHoveredComment(null)}
                  className="relative aspect-square rounded-md cursor-pointer transition-all"
                  style={{
                    background: color,
                    opacity: 0.3 + comment.toxicity * 0.7,
                    boxShadow: hoveredComment?.id === comment.id ? `0 0 12px ${color}80` : 'none',
                  }}
                  title={comment.comment}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Hover tooltip */}
        {hoveredComment && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-full px-4"
          >
            <div
              className="p-4 rounded-2xl border bg-[#0F0A1E]/95 backdrop-blur-xl shadow-2xl"
              style={{ borderColor: getCategoryColor(hoveredComment.category) + '40' }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span>{getCategoryEmoji(hoveredComment.category)}</span>
                  <span className="font-semibold text-sm" style={{ color: getCategoryColor(hoveredComment.category) }}>
                    {getCategoryLabel(hoveredComment.category)}
                  </span>
                </div>
                <span className="font-mono text-xs text-purple-400/60">
                  Toksisitas: {Math.round(hoveredComment.toxicity * 100)}%
                </span>
              </div>
              <p className="text-purple-200/80 text-sm leading-relaxed">
                "{hoveredComment.comment}"
              </p>
              <p className="text-xs text-purple-400/40 mt-2">📱 Platform: {hoveredComment.platform}</p>
            </div>
          </motion.div>
        )}

        {/* Stats summary */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {categoryGroups.map(cat => {
            const count = toxicCommentsDataset.filter(c => c.category === cat).length;
            const pct = Math.round((count / toxicCommentsDataset.length) * 100);
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl border bg-white/[0.02] text-center"
                style={{ borderColor: getCategoryColor(cat) + '30' }}
              >
                <div className="text-2xl mb-1">{getCategoryEmoji(cat)}</div>
                <p className="font-display font-bold text-xl" style={{ color: getCategoryColor(cat) }}>{pct}%</p>
                <p className="text-xs text-white/60 mb-0.5">{getCategoryLabel(cat)}</p>
                <p className="text-xs text-purple-400/40 font-mono">{count} komentar</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
