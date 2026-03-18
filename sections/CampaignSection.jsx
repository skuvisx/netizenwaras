'use client';
import { motion } from 'framer-motion';
import { Instagram, Share2, ExternalLink } from 'lucide-react';
import { campaignConfig } from '../data/campaignConfig';

// ── Convert public post URL → embed URL ─────────────────────────
function getEmbedUrl(platform, url) {
  if (!url || url.trim() === '') return null;
  const clean = url.trim().split('?')[0].replace(/\/$/, '');

  if (platform === 'tiktok') {
    const match = clean.match(/video\/(\d+)/);
    if (match) return `https://www.tiktok.com/embed/v2/${match[1]}`;
  }
  if (platform === 'instagram') {
    const match = clean.match(/\/(p|reel|tv)\/([A-Za-z0-9_-]+)/);
    if (match) return `https://www.instagram.com/${match[1]}/${match[2]}/embed/`;
  }
  return null;
}

// ── Instagram poster ─────────────────────────────────────────────
function InstagramPoster({ url }) {
  const embedUrl = (() => {
    if (!url || url.trim() === '') return null;
    const clean = url.trim().split('?')[0].replace(/\/$/, '');
    const match = clean.match(/\/(p|reel|tv)\/([A-Za-z0-9_-]+)/);
    if (match) return `https://www.instagram.com/${match[1]}/${match[2]}/embed/`;
    return null;
  })();

  if (!embedUrl) {
    return (
      <div className="w-full aspect-square rounded-2xl border border-dashed border-purple-700/30 bg-purple-900/5 flex flex-col items-center justify-center gap-3 text-center p-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-600/20 to-purple-600/20 flex items-center justify-center">
          <Instagram size={28} className="text-pink-400/50" />
        </div>
        <p className="text-purple-300/50 text-sm font-medium">Poster belum diisi</p>
        <p className="text-purple-400/30 text-xs max-w-[180px] leading-relaxed">
          Isi <span className="font-mono text-purple-400/50">poster.instagramUrl</span> di{' '}
          <span className="font-mono text-purple-400/50">data/campaignConfig.js</span>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-purple-900/20">
      <iframe
        src={embedUrl}
        className="w-full"
        style={{ minHeight: '500px', border: 'none' }}
        scrolling="no"
        allowTransparency
        title="Instagram Poster Kampanye"
      />
    </div>
  );
}

// ── Video card ───────────────────────────────────────────────────
function VideoCard({ video, index }) {
  const embedUrl = getEmbedUrl(video.platform, video.url);
  const isTT = video.platform === 'tiktok';

  const meta = {
    tiktok: {
      label: 'TikTok',
      icon: '🎵',
      headerBg: 'bg-[#010101]',
      accent: '#69C9D0',
      aspectRatio: '56.25%', // 16:9 for TikTok embed (wider view)
      minH: '380px',
    },
    instagram: {
      label: 'Instagram Reels',
      icon: '📸',
      headerBg: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
      accent: '#E1306C',
      aspectRatio: '125%',
      minH: '320px',
    },
  }[video.platform];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      className="rounded-2xl overflow-hidden border border-white/10 bg-[#0F0A1E]/80 shadow-xl"
    >
      {/* Platform header */}
      <div className={`flex items-center gap-3 px-4 py-3 ${meta.headerBg}`}>
        <span className="text-lg">{meta.icon}</span>
        <span className="text-white font-semibold text-sm">{meta.label}</span>
        <div className="ml-auto w-2 h-2 rounded-full bg-white/50 animate-pulse" />
      </div>

      {/* Embed or placeholder */}
      {embedUrl ? (
        <div className="relative w-full" style={{ paddingBottom: meta.aspectRatio }}>
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          />
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-3 p-8 text-center"
          style={{ minHeight: meta.minH }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
            style={{ background: meta.accent + '25' }}
          >
            {meta.icon}
          </div>
          <p className="text-white/60 font-medium text-sm">{video.title}</p>
          <p className="text-purple-400/30 text-xs max-w-[200px] leading-relaxed">
            Isi link di{' '}
            <span className="font-mono text-purple-400/50">data/campaignConfig.js</span>
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between gap-3">
        <p className="text-purple-300/50 text-xs truncate">{video.description}</p>
        {video.url && (
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-purple-400/50 hover:text-purple-300 transition-colors"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

// ── Main Section ─────────────────────────────────────────────────
export default function CampaignSection() {
  const { poster, videos } = campaignConfig;

  return (
    <section id="campaign" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07041A] via-[#0F0A1E] to-[#0A061C]" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-pink-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-700/30 bg-pink-900/10 mb-5">
            <Share2 size={13} className="text-pink-400" />
            <span className="text-xs font-mono text-pink-300 tracking-widest uppercase">Campaign Assets</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-3">
            Aset Kampanye{' '}
            <span style={{ background: 'linear-gradient(135deg,#EC4899,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Digital
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-purple-200/60 text-base">
            Poster dan video kampanye <strong className="text-purple-300">#NetizenWaras</strong> untuk
            disebarkan di Instagram dan TikTok.
          </p>
        </motion.div>

        {/* Grid: poster (kiri) + videos (kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* POSTER */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center">
                <Instagram size={14} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Poster Kampanye</p>
                <p className="text-purple-400/40 text-xs">Instagram Post</p>
              </div>
            </div>

            <InstagramPoster url={poster.instagramUrl} />

            <div className="flex flex-wrap gap-2 mt-4">
              {poster.hashtags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-pink-900/20 border border-pink-700/20 text-pink-300/60 text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* VIDEOS */}
          <div className="flex flex-col gap-6">
            {videos.map((video, i) => (
              <VideoCard key={i} video={video} index={i} />
            ))}
          </div>
        </div>

        {/* Share bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 p-5 rounded-2xl border border-purple-700/20 bg-purple-900/10 text-center sm:text-left"
        >
          <Share2 size={18} className="text-purple-400 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold text-sm">Sebarkan Kampanye #NetizenWaras</p>
            <p className="text-purple-300/50 text-xs mt-0.5">
              #NetizenWaras · #AntiCyberbullying · #EmpatiDigital
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
