'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Sun, Moon } from 'lucide-react';

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Apa Itu?', href: '#about' },
  { label: 'Statistik', href: '#statistics' },
  { label: 'Simulasi', href: '#simulation' },
  { label: 'Kalkulator', href: '#simulator' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Tips', href: '#tips' },
];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-[#0F0A1E]/80 border-b border-purple-900/30 shadow-lg shadow-purple-900/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => scrollTo('#hero')} className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-600/30 group-hover:shadow-purple-500/50 transition-all">
                  <Shield size={18} className="text-white" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-cyan-400 rounded-full border-2 border-[#0F0A1E] animate-pulse" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-sm tracking-wider">NETIZEN</span>
                <span className="font-display font-bold text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-widest">WARAS</span>
              </div>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-3 py-1.5 text-xs font-medium text-purple-200/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="w-9 h-9 rounded-xl border border-purple-700/30 bg-white/5 hover:bg-white/10 flex items-center justify-center text-purple-300 hover:text-white transition-all"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* CTA */}
              <button
                onClick={() => scrollTo('#quiz')}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-semibold transition-all shadow-lg shadow-purple-600/25 hover:shadow-purple-500/40"
              >
                Ikuti Quiz
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 rounded-xl border border-purple-700/30 bg-white/5 flex items-center justify-center text-purple-300"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 backdrop-blur-2xl bg-[#0F0A1E]/95 border-b border-purple-900/30 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-purple-200/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-3 pt-3 border-t border-purple-900/30">
                <button
                  onClick={() => scrollTo('#quiz')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold"
                >
                  Ikuti Quiz Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
