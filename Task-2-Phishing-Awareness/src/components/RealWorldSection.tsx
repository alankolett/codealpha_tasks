import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/trainingData';
import type { CaseStudy } from '../types';
import { ShieldCheck } from 'lucide-react';

export const RealWorldSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(CASE_STUDIES[0]);

  return (
    <section id="casestudies" className="py-20 bg-[#07090e] border-t border-[#1a202c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] text-xs font-mono mb-3">
            <span>SECTION 06</span>
            <span>//</span>
            <span>THREAT INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4">
            Real-World Scenarios
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg">
            Deconstructed case studies illustrating modern threat vectors. Every scenario dissects
            <span className="text-slate-200 font-mono"> WHAT HAPPENED → WARNING SIGNS → LESSON</span>.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {CASE_STUDIES.map((item) => {
            const isSelected = selectedCase.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-[#101726] border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.15)]'
                    : 'bg-[#0a0d16] border-[#1e2433] hover:border-slate-600 hover:bg-[#0d111d]'
                }`}
              >
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                  {item.category}
                </div>
                <div className="font-mono text-sm font-bold text-white line-clamp-1">
                  {item.title.split(':')[0]}
                </div>
                <div className="text-xs text-slate-400 font-sans line-clamp-1 mt-1">
                  {item.title.split(':')[1] || item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Case Dossier */}
        <div className="rounded-xl bg-[#0c101c] border border-[#1e2433] p-6 sm:p-8 shadow-2xl space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1e2433] pb-5">
            <div>
              <span className="text-xs font-mono text-[#00ff88] uppercase tracking-wider">
                DECLASSIFIED CASE STUDY // {selectedCase.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mt-1">
                {selectedCase.title}
              </h3>
            </div>
            <div className="px-3 py-1 rounded bg-[#080b14] border border-[#1e2433] text-xs font-mono text-slate-400 self-start sm:self-auto">
              Vector: <span className="text-amber-400">{selectedCase.attackVector}</span>
            </div>
          </div>

          {/* 3 Step Triad: What Happened -> Warning Signs -> Lesson */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 1. What Happened */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#161c2c] border border-slate-700 flex items-center justify-center text-[#00ff88] text-xs font-mono font-bold">
                  1
                </div>
                <span>What Happened</span>
              </div>
              <div className="p-5 rounded-lg bg-[#080b14] border border-[#1a2130] text-sm text-slate-300 font-sans leading-relaxed min-h-[170px]">
                {selectedCase.whatHappened}
              </div>
            </div>

            {/* 2. Warning Signs */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#ff3366] flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#2c161f] border border-[#ff3366]/40 flex items-center justify-center text-[#ff3366] text-xs font-mono font-bold">
                  2
                </div>
                <span>Warning Signs Present</span>
              </div>
              <ul className="p-4 rounded-lg bg-[#080b14] border border-[#1a2130] space-y-2.5 min-h-[170px]">
                {selectedCase.warningSigns.map((sign, idx) => (
                  <li key={idx} className="text-xs text-slate-300 font-sans flex items-start gap-2">
                    <span className="text-[#ff3366] mt-0.5 font-mono">⚠️</span>
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. The Defensive Lesson */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#00ff88] flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#102419] border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88] text-xs font-mono font-bold">
                  3
                </div>
                <span>Actionable Security Lesson</span>
              </div>
              <div className="p-5 rounded-lg bg-[#00ff88]/5 border border-[#00ff88]/30 flex flex-col justify-between min-h-[170px]">
                <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                  {selectedCase.lesson}
                </p>
                <div className="pt-3 text-[11px] font-mono text-[#00ff88] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Always enforce out-of-band operational verification.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
