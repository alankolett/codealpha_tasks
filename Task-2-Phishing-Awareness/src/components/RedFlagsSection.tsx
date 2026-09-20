import React, { useState } from 'react';
import { RED_FLAGS } from '../data/trainingData';
import type { RedFlagItem } from '../types';
import { AlertOctagon, CheckSquare, Square, AlertTriangle, Eye, RotateCcw } from 'lucide-react';

export const RedFlagsSection: React.FC = () => {
  const [selectedFlagIds, setSelectedFlagIds] = useState<string[]>(['sender', 'urgency']);
  const [activeDetailFlag, setActiveDetailFlag] = useState<RedFlagItem>(RED_FLAGS[0]);

  const toggleFlag = (flag: RedFlagItem) => {
    setActiveDetailFlag(flag);
    if (selectedFlagIds.includes(flag.id)) {
      setSelectedFlagIds(selectedFlagIds.filter((id) => id !== flag.id));
    } else {
      setSelectedFlagIds([...selectedFlagIds, flag.id]);
    }
  };

  const selectAll = () => {
    setSelectedFlagIds(RED_FLAGS.map((f) => f.id));
  };

  const clearAll = () => {
    setSelectedFlagIds([]);
  };

  // Calculate cumulative threat score
  const selectedFlags = RED_FLAGS.filter((f) => selectedFlagIds.includes(f.id));
  const totalScore = selectedFlags.reduce((acc, curr) => acc + curr.weight, 0);

  const getThreatLevelInfo = (score: number) => {
    if (score >= 70) {
      return { level: 'CRITICAL THREAT', color: 'text-[#ff3366]', bg: 'bg-[#ff3366]', border: 'border-[#ff3366]', desc: 'Immediate compromise probability. Do NOT interact with message.' };
    }
    if (score >= 45) {
      return { level: 'HIGH RISK', color: 'text-orange-500', bg: 'bg-orange-500', border: 'border-orange-500', desc: 'Severe indicators of malicious intent detected.' };
    }
    if (score >= 25) {
      return { level: 'ELEVATED SUSPICION', color: 'text-amber-400', bg: 'bg-amber-400', border: 'border-amber-400', desc: 'Multiple indicators suggest social engineering.' };
    }
    if (score > 0) {
      return { level: 'GUARDED', color: 'text-yellow-300', bg: 'bg-yellow-300', border: 'border-yellow-300', desc: 'Anomalies noted. Requires verification before continuing.' };
    }
    return { level: 'NOMINAL / ZERO FLAGS', color: 'text-[#00ff88]', bg: 'bg-[#00ff88]', border: 'border-[#00ff88]', desc: 'No red flags selected. Click flags below to simulate inspection.' };
  };

  const threatInfo = getThreatLevelInfo(totalScore);

  return (
    <section id="redflags" className="py-20 bg-[#07090e] border-t border-[#1a202c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ff3366]/10 border border-[#ff3366]/20 text-[#ff3366] text-xs font-mono mb-3">
            <span>SECTION 02</span>
            <span>//</span>
            <span>IDENTIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4">
            Spot the Red Flags
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg">
            Attackers rely on subtle behavioral anomalies. Click and inspect the warning indicators
            below to evaluate the simulated <span className="text-[#00ff88] font-mono">THREAT LEVEL</span>.
          </p>
        </div>

        {/* Dynamic Threat Level Gauge Meter */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-xl bg-[#0b0f19] border border-[#1e2433] shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-lg bg-black/40 border ${threatInfo.border}`}>
                <AlertOctagon className={`w-6 h-6 ${threatInfo.color}`} />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Real-time Threat Level Assessment
                </div>
                <div className={`text-xl font-mono font-bold ${threatInfo.color} tracking-wide`}>
                  {threatInfo.level} ({totalScore} / 100 PTS)
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={selectAll}
                className="px-3 py-1.5 rounded bg-[#131929] hover:bg-[#1a233a] text-slate-300 border border-[#1e2433] transition-colors"
              >
                Select All
              </button>
              <button
                onClick={clearAll}
                className="px-3 py-1.5 rounded bg-[#131929] hover:bg-[#1a233a] text-slate-300 border border-[#1e2433] transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Progress Bar Gauge */}
          <div className="w-full bg-[#131929] rounded-full h-3 overflow-hidden p-0.5 border border-[#1e2433]">
            <div
              className={`h-full rounded-full transition-all duration-500 ${threatInfo.bg}`}
              style={{ width: `${Math.min(totalScore, 100)}%` }}
            ></div>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>0% Nominal</span>
            <span>{selectedFlagIds.length} of {RED_FLAGS.length} indicators flagged</span>
            <span>100% Lethal Phish</span>
          </div>

          <p className="mt-2 text-xs text-slate-400 font-sans italic">
            {threatInfo.desc}
          </p>
        </div>

        {/* 2-Column Interactive Workbench: Checklist (Left) & Inspector Detail (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Checklist */}
          <div className="lg:col-span-6 space-y-2.5">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Interactive Warning Sign Checklist</span>
              <span className="text-slate-500 text-[11px]">Click to toggle / view</span>
            </div>

            {RED_FLAGS.map((flag) => {
              const isChecked = selectedFlagIds.includes(flag.id);
              const isActive = activeDetailFlag.id === flag.id;

              return (
                <div
                  key={flag.id}
                  onClick={() => toggleFlag(flag)}
                  className={`p-3.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    isActive
                      ? 'bg-[#101726] border-[#00ff88]/60 shadow-md'
                      : isChecked
                      ? 'bg-[#0e1320] border-[#1e2433]'
                      : 'bg-[#090c14] border-[#161c28] opacity-75 hover:opacity-100 hover:bg-[#0c101b]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label={`Toggle ${flag.title}`}
                      className="text-slate-400 focus:outline-none"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-[#00ff88]" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-600" />
                      )}
                    </button>
                    <div>
                      <div className="text-sm font-mono font-semibold text-white">
                        {flag.title}
                      </div>
                      <div className="text-xs text-slate-400 font-sans line-clamp-1">
                        {flag.category} • {flag.attackerTactic}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                        flag.severity === 'critical'
                          ? 'text-[#ff3366] bg-[#ff3366]/10 border-[#ff3366]/30'
                          : flag.severity === 'high'
                          ? 'text-orange-400 bg-orange-500/10 border-orange-500/30'
                          : 'text-yellow-300 bg-yellow-500/10 border-yellow-500/30'
                      }`}
                    >
                      {flag.severity}
                    </span>
                    <span className="text-slate-600 text-xs font-mono">❯</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Flag Inspector Card */}
          <div className="lg:col-span-6">
            <div className="sticky top-24 rounded-xl bg-[#0b0f19] border border-[#1e2433] p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-[#1e2433] pb-4">
                <div>
                  <span className="text-xs font-mono text-[#00ff88] tracking-widest">
                    INDICATOR DOSSIER // {activeDetailFlag.category}
                  </span>
                  <h3 className="text-xl font-mono font-bold text-white mt-1">
                    {activeDetailFlag.title}
                  </h3>
                </div>
                <div className="text-right font-mono">
                  <div className="text-[10px] text-slate-500 uppercase">SEVERITY WEIGHT</div>
                  <div className="text-sm font-bold text-[#ff3366]">+{activeDetailFlag.weight} PTS</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-1">Description</div>
                <p className="text-sm text-slate-300 font-sans leading-relaxed bg-[#080b12] p-3 rounded-lg border border-[#161c28]">
                  {activeDetailFlag.description}
                </p>
              </div>

              {/* Attacker Tactic */}
              <div>
                <div className="text-xs font-mono uppercase text-[#ff3366] mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Attacker Methodology</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed bg-[#080b12] p-3 rounded-lg border border-[#161c28]">
                  {activeDetailFlag.attackerTactic}
                </p>
              </div>

              {/* Real World Example */}
              <div>
                <div className="text-xs font-mono uppercase text-amber-400 mb-1">
                  Simulated Example Lure
                </div>
                <div className="font-mono text-xs text-amber-200 bg-[#161510] border border-amber-500/30 p-3 rounded-lg break-all">
                  {activeDetailFlag.realWorldExample}
                </div>
              </div>

              {/* How to Detect & Verify */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase text-[#00ff88] mb-1 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Verification & Detection Rule</span>
                </div>
                <p className="text-xs text-slate-200 font-sans leading-relaxed bg-[#00ff88]/5 p-3 rounded-lg border border-[#00ff88]/30">
                  {activeDetailFlag.howToDetect}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
