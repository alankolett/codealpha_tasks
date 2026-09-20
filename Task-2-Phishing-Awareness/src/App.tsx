import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LifecycleSection } from './components/LifecycleSection';
import { RedFlagsSection } from './components/RedFlagsSection';
import { EmailLabSection } from './components/EmailLabSection';
import { WebsiteAnalyzerSection } from './components/WebsiteAnalyzerSection';
import { SocialEngineeringSection } from './components/SocialEngineeringSection';
import { RealWorldSection } from './components/RealWorldSection';
import { StaySafeSection } from './components/StaySafeSection';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = [
      'hero',
      'lifecycle',
      'redflags',
      'emaillab',
      'webanalyzer',
      'socialeng',
      'casestudies',
      'prevention',
      'quiz',
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-200 font-sans selection:bg-[#00ff88]/30 selection:text-[#00ff88]">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <LifecycleSection />
        <RedFlagsSection />
        <EmailLabSection />
        <WebsiteAnalyzerSection />
        <SocialEngineeringSection />
        <RealWorldSection />
        <StaySafeSection />
        <QuizSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
