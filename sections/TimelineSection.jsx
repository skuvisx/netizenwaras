'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ExternalLink } from 'lucide-react';
import { timelineData } from '../data/timelineData';

const categoryColors = {
  sejarah: 'from-indigo-600 to-blue-600',
  kasus: 'from-red-600 to-rose-600',
  riset: 'from-purple-600 to-violet-600',
  statistik: 'from-orange-600 to-amber-600',
  indonesia: 'from-green-600 to-emerald-600',
  gerakan: 'from-pink-600 to-fuchsia-600',
  platform: 'from-cyan-600 to-teal-600',
  teknologi: 'from-blue-600 to-cyan-600',
};

const categoryLabels = {
  sejarah: 'Sejarah',
  kasus: 'Kasus Nyata',
  riset: 'Penelitian',
  statistik: 'Statistik',
  indonesia: '🇮🇩 Indonesia',
  gerakan: 'Gerakan',
  platform: 'Platform',
  teknologi: 'Teknologi',
};

export default function TimelineSection() {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <section id="timeline" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A061C] to-[#0F0A1E]" />
      <div className="absolute top-1/2 left-0 w-64 h-96 bg-purple-900/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-700/30 bg-blue-900/10 mb-6">
            <Clock size={14} className="text-blue-400" />
            <span className="text-xs font-mono text-blue-300 tracking-widest uppercase">Timeline Sejarah</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Perjalanan{' '}
            <span style={{ background: 'linear-gradient(135deg, #60A5FA, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Cyberbullying
            </span>
          </h2>
          <p className="text-purple-200/60 text-base max-w-xl mx-auto">
            Dari lahirnya internet publik hingga pengakuan WHO — perjalanan panjang melawan cyberbullying secara global dan di Indonesia.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-pink-600 to-cyan-600 transform sm:-translate-x-1/2" />

          <div className="space-y-8">
            {timelineData.map((event, i) => {
              const isEven = i % 2 === 0;
              const gradClass = categoryColors[event.category] || 'from-purple-600 to-pink-600';

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className={`relative flex items-start gap-4 sm:gap-0 ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} pl-16 sm:pl-0`}
                >
                  {/* Content card */}
                  <div className={`w-full sm:w-5/12 ${isEven ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setActiveEvent(activeEvent?.year === event.year ? null : event)}
                      className="p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] cursor-pointer transition-all"
                    >
                      {/* Category badge */}
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${gradClass} mb-3`}>
                        <span className="text-xs text-white font-mono tracking-wide">{categoryLabels[event.category]}</span>
                      </div>

                      {/* Year */}
                      <p className="font-display font-bold text-3xl text-white mb-1">{event.year}</p>

                      {/* Title */}
                      <h3 className="font-semibold text-white text-base mb-2">{event.title}</h3>

                      {/* Description */}
                      <p className="text-purple-200/70 text-sm leading-relaxed">
                        {activeEvent?.year === event.year ? event.description : event.description.slice(0, 100) + '...'}
                      </p>

                      {/* Source */}
                      <p className="text-xs text-purple-500/40 font-mono mt-3">📚 {event.source}</p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 transform sm:-translate-x-1/2 -translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradClass} flex items-center justify-center text-base shadow-lg`}>
                      {event.icon}
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden sm:block sm:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
