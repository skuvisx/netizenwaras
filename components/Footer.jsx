'use client';
import { motion } from 'framer-motion';
import { Shield, ExternalLink, Mail, Github, Instagram, Twitter } from 'lucide-react';

const references = [
  { name: 'Statista', url: 'https://statista.com', desc: 'Digital Media Reports 2023' },
  { name: 'UNICEF', url: 'https://unicef.org/end-cyberbullying', desc: 'Cyberbullying Study 2019' },
  { name: 'APA', url: 'https://apa.org', desc: 'American Psychological Association' },
  { name: 'Pew Research', url: 'https://pewresearch.org', desc: 'Social Media & Young Adults' },
  { name: 'WHO', url: 'https://who.int/digital-health', desc: 'Digital Health Report 2023' },
  { name: 'Kominfo RI', url: 'https://kominfo.go.id', desc: 'Literasi Digital Indonesia' },
  { name: 'Google Perspective', url: 'https://perspectiveapi.com', desc: 'Toxicity API Research' },
  { name: 'Cyberbullying RC', url: 'https://cyberbullying.org', desc: 'Research Center' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#07041A] border-t border-purple-900/30 pt-16 pb-8">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                <Shield size={20} className="text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg tracking-wider">NETIZEN WARAS</div>
                <div className="text-xs text-purple-400">Kampanye Anti Cyberbullying</div>
              </div>
            </div>
            <p className="text-purple-300/60 text-sm leading-relaxed mb-4">
              Website edukasi tentang cyberbullying, empati digital, dan perilaku online yang bertanggung jawab.
            </p>
            <div className="p-4 rounded-xl border border-purple-700/20 bg-purple-900/10">
              <p className="text-xs text-purple-400 mb-1 font-mono">DIBUAT OLEH</p>
              <p className="text-white font-semibold text-sm">Putra Dharma Prajna Adhitthana Bun</p>
              <p className="text-purple-300/70 text-xs mt-0.5">NIM: 32230161</p>
              <p className="text-purple-300/70 text-xs">Program Studi Informatika</p>
              <p className="text-purple-300/70 text-xs">Universitas Bunda Mulia</p>
              <a
                href="mailto:s32230161@student.ubm.ac.id"
                className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 mt-2 transition-colors"
              >
                <Mail size={12} />
                s32230161@student.ubm.ac.id
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">NAVIGASI</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                ['Beranda', '#hero'],
                ['Tentang Cyberbullying', '#about'],
                ['Statistik Global', '#statistics'],
                ['Cyberpsychology', '#cyberpsych'],
                ['Simulasi Cerita', '#simulation'],
                ['Komentar Simulator', '#simulator'],
                ['Timeline', '#timeline'],
                ['Quiz Interaktif', '#quiz'],
                ['Tips & Trik', '#tips'],
                ['Call to Action', '#cta'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-xs text-purple-300/60 hover:text-purple-300 transition-colors py-0.5"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* References */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">REFERENSI & SUMBER</h4>
            <div className="space-y-2">
              {references.map((ref) => (
                <a
                  key={ref.name}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 group"
                >
                  <ExternalLink size={12} className="text-purple-500 mt-0.5 flex-shrink-0 group-hover:text-purple-400" />
                  <div>
                    <span className="text-xs text-purple-300/80 group-hover:text-white transition-colors font-medium">{ref.name}</span>
                    <span className="text-xs text-purple-400/50 block">{ref.desc}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl border border-yellow-700/20 bg-yellow-900/5 mb-8">
          <p className="text-xs text-yellow-300/70 leading-relaxed">
            <span className="font-semibold text-yellow-300/90">⚠️ Disclaimer:</span> Website ini dibuat untuk keperluan akademik (UTS) Program Studi Informatika Universitas Bunda Mulia. Semua komentar negatif dalam dataset bersifat simulatif dan dibuat semata-mata untuk tujuan edukasi dalam demonstrasi dampak cyberbullying. Konten ini tidak dimaksudkan untuk menyerang atau merepresentasikan individu manapun.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-purple-900/30">
          <p className="text-xs text-purple-400/50 text-center sm:text-left">
            © 2024 Netizen Waras · Dibuat dengan 💜 oleh Putra Dharma · NIM 32230161
          </p>
          <p className="text-xs text-purple-400/40 font-mono">
            "Jempol cepat boleh. Tapi empati jangan sampai telat."
          </p>
        </div>
      </div>
    </footer>
  );
}
