import React from 'react';
import { DEFENSIVE_CHECKLIST } from '../data/trainingData';

export const StaySafeSection: React.FC = () => {
  return (
    <section id="prevention" className="py-20 bg-[#080b12] border-t border-[#1a202c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] text-xs font-mono mb-3">
            <span>SECTION 07</span>
            <span>//</span>
            <span>DEFENSE DIRECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4">
            How to Stay Safe
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg">
            A comprehensive 10-step defensive playbook designed to neutralize social-engineering attacks
            and safeguard authentication secrets.
          </p>
        </div>

        {/* 10-Point Defensive Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {DEFENSIVE_CHECKLIST.map((item) => (
            <div
              key={item.step}
              className="p-5 rounded-xl bg-[#0c101c] border border-[#1e2433] hover:border-[#00ff88]/40 transition-all flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#080b14] border border-[#1e2433] group-hover:border-[#00ff88]/40 flex items-center justify-center font-mono font-bold text-sm text-[#00ff88] shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="text-base font-mono font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Grand Cybersecurity Workflow Banner: STOP -> CHECK -> VERIFY -> REPORT */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0d1527] via-[#0e1b20] to-[#0d1527] border border-[#00ff88]/40 p-8 sm:p-12 shadow-[0_0_40px_rgba(0,255,136,0.1)] text-center relative overflow-hidden">
          <div className="text-xs font-mono text-[#00ff88] tracking-widest uppercase mb-3">
            THE UNIVERSAL DEFENSIVE WORKFLOW
          </div>

          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-mono font-black text-white tracking-wider mb-6">
            STOP <span className="text-[#00ff88]">→</span> CHECK <span className="text-[#00ff88]">→</span> VERIFY <span className="text-[#00ff88]">→</span> REPORT
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8 font-mono text-left">
            <div className="p-4 rounded-lg bg-[#070910]/80 border border-[#1e2433]">
              <div className="text-[#ff3366] font-bold text-sm mb-1">1. STOP</div>
              <p className="text-xs text-slate-400 font-sans">
                Pause before reacting. Do not let artificial urgency override your reason.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#070910]/80 border border-[#1e2433]">
              <div className="text-amber-400 font-bold text-sm mb-1">2. CHECK</div>
              <p className="text-xs text-slate-400 font-sans">
                Inspect sender domains, link destinations, attachment formats, and pretexts.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#070910]/80 border border-[#1e2433]">
              <div className="text-blue-400 font-bold text-sm mb-1">3. VERIFY</div>
              <p className="text-xs text-slate-400 font-sans">
                Authenticate via an independent out-of-band channel (phone or official site).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#070910]/80 border border-[#1e2433]">
              <div className="text-[#00ff88] font-bold text-sm mb-1">4. REPORT</div>
              <p className="text-xs text-slate-400 font-sans">
                Notify the SOC or IT security to protect colleagues and block the attack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
