'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sections (lazy loaded for performance)
import HeroSection from '../sections/HeroSection';
import CampaignSection from '../sections/CampaignSection';
import AboutCyberbullying from '../sections/AboutCyberbullying';
import StatisticsSection from '../sections/StatisticsSection';
import CyberpsychologySection from '../sections/CyberpsychologySection';
import StorySimulation from '../sections/StorySimulation';
import HeatmapToxicComments from '../sections/HeatmapToxicComments';
import CommentSimulator from '../sections/CommentSimulator';
import TimelineSection from '../sections/TimelineSection';
import QuizSection from '../sections/QuizSection';
import TipsSection from '../sections/TipsSection';
import CTASection from '../sections/CTASection';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? '' : 'light'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      <main>
        <HeroSection />
        <CampaignSection />
        <AboutCyberbullying />
        <StatisticsSection />
        <CyberpsychologySection />
        <StorySimulation />
        <HeatmapToxicComments />
        <CommentSimulator />
        <TimelineSection />
        <QuizSection />
        <TipsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
