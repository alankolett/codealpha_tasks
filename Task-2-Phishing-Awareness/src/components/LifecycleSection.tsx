import React, { useState } from 'react';
import { LIFECYCLE_STAGES } from '../data/trainingData';
import type { LifecycleStage } from '../types';
import { ShieldCheck, Target, Zap, KeyRound, Skull, Info } from 'lucide-react';

export const LifecycleSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<LifecycleStage>(LIFECYCLE_STAGES[0]);

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'lure':
        return <Target className="w-5 h-5 text-[#00ff88]" />;
      case 'interaction':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'theft':
        return <KeyRound className="w-5 h-5 text-[#ff3366]" />;
      case 'abuse':
        return <Skull className="w-5 h-5 text-purple-400" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  return (
    <section id="lifecycle" className="py-20 bg-[#080a10] border-t border-[#1a202c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] text-xs font-mono mb-3">
            <span>SECTION 01</span>
            <span>//</span>
            <span>FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4">
            What is Phishing?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Phishing is a <span className="text-[#00ff88] font-semibold">social-engineering attack</span> in
            which an adversary manipulates human psychology to trick individuals into revealing sensitive
            information, opening a malicious attachment, clicking a harmful link, or executing an unauthorized action.
          </p>
        </div>

        {/* Attack Lifecycle Flow Pipeline */}
        <div className="mb-10">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <span>The Phishing Attack Lifecycle</span>
            <span className="text-slate-600">// Select a phase to inspect mechanics</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {LIFECYCLE_STAGES.map((stage) => {
              const isSelected = selectedStage.id === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage)}
                  className={`p-4 rounded-lg text-left transition-all relative border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0f1523] border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.15)]'
                      : 'bg-[#0b0e17] border-[#1e2433] hover:border-slate-600 hover:bg-[#0e121e]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-slate-500 font-bold">
                        PHASE {stage.number}
                      </span>
                      {getStageIcon(stage.id)}
                    </div>
                    <div className="font-mono font-bold text-base text-white mb-1">
                      {stage.name}
                    </div>
                    <div className="text-xs text-slate-400 font-sans line-clamp-2">
                      {stage.shortDesc}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1e2433] flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#00ff88]">{stage.tag}</span>
                    <span className={isSelected ? 'text-[#00ff88]' : 'text-slate-500'}>
                      {isSelected ? 'ACTIVE' : 'SELECT ❯'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Deep Dive Card */}
        <div className="rounded-xl bg-[#0d121f] border border-[#1e2433] p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between border-b border-[#1e2433] pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-[#080b12] border border-[#00ff88]/30 flex items-center justify-center">
                {getStageIcon(selectedStage.id)}
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400 tracking-wider">
                  PHASE {selectedStage.number} BREAKDOWN
                </div>
                <h3 className="text-2xl font-mono font-bold text-white flex items-center gap-3">
                  <span>{selectedStage.name}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/30">
                    {selectedStage.tag}
                  </span>
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#080b12] border border-[#1e2433] text-xs font-mono text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#00ff88]" />
              <span>DEFENSIVE INTERCEPT POINT</span>
            </div>
          </div>

          {/* Breakdown Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Attacker Goal */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-[#ff3366]" />
                <span>Attacker Objective</span>
              </div>
              <p className="text-sm text-slate-300 bg-[#080b12] p-4 rounded-lg border border-[#1a2130] leading-relaxed">
                {selectedStage.attackerGoal}
              </p>

              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 pt-2">
                <Skull className="w-3.5 h-3.5 text-amber-400" />
                <span>Victim Impact</span>
              </div>
              <p className="text-sm text-slate-400 bg-[#080b12] p-4 rounded-lg border border-[#1a2130] leading-relaxed">
                {selectedStage.victimImpact}
              </p>
            </div>

            {/* Column 2: Tactics Used */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Tactics & Vectors</span>
              </div>
              <ul className="space-y-2.5">
                {selectedStage.tacticsUsed.map((tactic, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-slate-300 bg-[#080b12] p-3 rounded-lg border border-[#1a2130] flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="text-[#00ff88] font-mono mt-0.5">❯</span>
                    <span>{tactic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Defensive Counter */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#00ff88] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00ff88]" />
                <span>Defensive Counteraction</span>
              </div>
              <div className="p-5 rounded-lg bg-[#00ff88]/5 border border-[#00ff88]/30 flex flex-col justify-between h-[calc(100%-2rem)]">
                <p className="text-sm text-slate-200 leading-relaxed font-sans mb-4">
                  {selectedStage.defensiveAction}
                </p>
                <div className="text-[11px] font-mono text-[#00ff88] bg-[#00ff88]/10 px-3 py-1.5 rounded border border-[#00ff88]/20 flex items-center gap-1.5">
                  <span>TIP: Break the chain before Phase {selectedStage.number} concludes.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
