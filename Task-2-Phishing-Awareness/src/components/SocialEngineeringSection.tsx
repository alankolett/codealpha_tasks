import React, { useState } from 'react';
import { SOCIAL_ENGINEERING_TACTICS } from '../data/trainingData';
import type { SocialEngineeringTactic } from '../types';
import { Clock, ShieldCheck, Flame, HelpCircle, Gift, UserCheck, Brain } from 'lucide-react';

export const SocialEngineeringSection: React.FC = () => {
  const [activeTactic, setActiveTactic] = useState<SocialEngineeringTactic>(SOCIAL_ENGINEERING_TACTICS[0]);

  const getTacticIcon = (id: string) => {
    switch (id) {
      case 'urgency':
        return <Clock className="w-5 h-5 text-amber-400" />;
      case 'authority':
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'fear':
        return <Flame className="w-5 h-5 text-[#ff3366]" />;
      case 'curiosity':
        return <HelpCircle className="w-5 h-5 text-purple-400" />;
      case 'reward':
        return <Gift className="w-5 h-5 text-[#00ff88]" />;
      case 'impersonation':
        return <UserCheck className="w-5 h-5 text-teal-400" />;
      default:
        return <Brain className="w-5 h-5" />;
    }
  };

  return (
    <section id="socialeng" className="py-20 bg-[#080b12] border-t border-[#1a202c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] text-xs font-mono mb-3">
            <span>SECTION 05</span>
            <span>//</span>
            <span>PSYCHOLOGICAL VECTORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4">
            Social Engineering Tactics
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg">
            Attackers don’t just hack software—they hack human cognition.
            Explore the 6 psychological triggers adversaries weaponize to induce compliance.
          </p>
        </div>

        {/* 6 Interactive Tactical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SOCIAL_ENGINEERING_TACTICS.map((tactic) => {
            const isSelected = activeTactic.id === tactic.id;
            return (
              <div
                key={tactic.id}
                onClick={() => setActiveTactic(tactic)}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#101726] border-[#00ff88] shadow-[0_0_20px_rgba(0,255,136,0.15)] translate-y-[-2px]'
                    : 'bg-[#0c101c] border-[#1e2433] hover:border-slate-600 hover:bg-[#0e1322]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-[#080b14] border border-[#1e2433]">
                      {getTacticIcon(tactic.id)}
                    </div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                      {tactic.trigger}
                    </span>
                  </div>

                  <h3 className="text-lg font-mono font-bold text-white mb-2 flex items-center justify-between">
                    <span>{tactic.name}</span>
                    <span className="text-slate-600 text-xs">
                      {isSelected ? 'SELECTED' : 'INSPECT ❯'}
                    </span>
                  </h3>

                  <div className="text-xs font-mono italic text-slate-300 bg-[#080b14] p-2.5 rounded border border-[#1a2130] mb-3">
                    {tactic.quote}
                  </div>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-3">
                    {tactic.psychology}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1e2433] flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">Defense Rule:</span>
                  <span className="text-[#00ff88] truncate ml-2">Click to review</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Tactic Deep Dive Radar */}
        <div className="rounded-xl bg-[#0c101c] border border-[#1e2433] p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1e2433] pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-[#080b14] border border-[#00ff88]/40">
                {getTacticIcon(activeTactic.id)}
              </div>
              <div>
                <span className="text-xs font-mono text-[#00ff88] tracking-widest uppercase">
                  TACTICAL DECONSTRUCTION
                </span>
                <h3 className="text-2xl font-mono font-bold text-white">
                  Psychological Trigger: {activeTactic.name}
                </h3>
              </div>
            </div>

            <div className="px-3 py-1.5 rounded bg-[#080b14] border border-[#1e2433] text-xs font-mono text-slate-400">
              <span className="text-slate-500">EXPLOITED COGNITIVE BIAS: </span>
              <span className="text-white font-semibold">{activeTactic.trigger}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-slate-400">Common Attacker Pretext</div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed bg-[#080b14] p-4 rounded-lg border border-[#1a2130]">
                {activeTactic.attackerPretext}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-slate-400">Psychological Mechanism</div>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed bg-[#080b14] p-4 rounded-lg border border-[#1a2130]">
                {activeTactic.psychology}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-[#00ff88]">Recommended Countermeasure</div>
              <div className="p-4 rounded-lg bg-[#00ff88]/5 border border-[#00ff88]/30 flex flex-col justify-between h-[calc(100%-1.75rem)]">
                <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                  {activeTactic.defensiveResponse}
                </p>
                <div className="text-[11px] font-mono text-[#00ff88] mt-3">
                  ✓ Enforce second-channel verification protocol.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
