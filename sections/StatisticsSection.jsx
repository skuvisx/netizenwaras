'use client';
import { motion } from 'framer-motion';
import { BarChart2, PieChart, TrendingUp } from 'lucide-react';
import dynamic from 'next/dynamic';
import { indonesiaStats, ageGroupData } from '../data/cyberbullyingStats';

const CyberbullyingBarChart = dynamic(() => import('../charts/CyberbullyingBarChart'), { ssr: false });
const RolePieChart = dynamic(() => import('../charts/RolePieChart'), { ssr: false });

export default function StatisticsSection() {
  return (
    <section id="statistics" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1E] via-[#120D28] to-[#0F0A1E]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-cyan-900/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-700/30 bg-cyan-900/10 mb-6">
            <BarChart2 size={14} className="text-cyan-400" />
            <span className="text-xs font-mono text-cyan-300 tracking-widest uppercase">Statistik Global</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Data &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #06B6D4, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Fakta
            </span>
          </h2>
          <p className="text-purple-200/60 text-base sm:text-lg max-w-2xl mx-auto">
            Data riil dari lembaga global terpercaya tentang prevalensi dan dampak cyberbullying di seluruh dunia.
          </p>
        </motion.div>

        {/* Indonesia stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {indonesiaStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] text-center transition-all"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">{stat.value}</div>
              <p className="text-purple-300/60 text-xs leading-tight mb-2">{stat.label}</p>

              {/* Mini bar */}
              <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1 + 0.3 }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
              <p className="text-xs text-purple-500/40 mt-2 font-mono">📚 {stat.source}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <BarChart2 size={16} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base">Platform dengan Kasus Cyberbullying Tertinggi</h3>
                <p className="text-purple-300/50 text-xs">Sumber: Statista Digital Media Report 2023</p>
              </div>
            </div>
            <CyberbullyingBarChart />
          </motion.div>

          {/* Pie chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                <PieChart size={16} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base">Distribusi Peran dalam Cyberbullying</h3>
                <p className="text-purple-300/50 text-xs">Sumber: UNICEF Cyberbullying Study 2019</p>
              </div>
            </div>
            <RolePieChart />
          </motion.div>
        </div>

        {/* Age group chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
              <TrendingUp size={16} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base">Kelompok Usia Korban Cyberbullying di Indonesia</h3>
              <p className="text-purple-300/50 text-xs">Sumber: KPAI 2022 / Kominfo 2023</p>
            </div>
          </div>

          <div className="space-y-4">
            {ageGroupData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-4"
              >
                <span className="text-purple-300/70 text-sm w-20 flex-shrink-0 font-mono">{item.age}</span>
                <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.victims}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 + 0.2 }}
                    className="h-full rounded-full"
                    style={{
                      background: `hsl(${280 - i * 20}, 70%, ${50 + i * 3}%)`,
                    }}
                  />
                </div>
                <span className="text-white font-semibold text-sm w-10 text-right">{item.victims}%</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-red-900/10 border border-red-700/20">
            <p className="text-sm text-red-300/80">
              ⚠️ <strong>Remaja usia 16-18 tahun</strong> merupakan kelompok paling rentan dengan 63% pernah mengalami cyberbullying — bertepatan dengan masa aktif penggunaan media sosial.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
