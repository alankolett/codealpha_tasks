import { ArrowRight, Activity, HelpCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid">
      {/* Background glow flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#ff3366]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-10">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d131f]/90 border border-[#00ff88]/30 text-[#00ff88] text-xs font-mono mb-8 tracking-wider shadow-[0_0_15px_rgba(0,255,136,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
          <span>TRAINING MODULE ONLINE</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">CODEALPHA INTERNSHIP TASK 2</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-mono font-extrabold tracking-tight text-white mb-4">
          PHISH<span className="text-[#00ff88] text-glow-green">//</span>TRAP
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl font-mono font-medium text-slate-300 mb-3 tracking-wide">
          Phishing Awareness & Social Engineering Training
        </p>

        {/* Tagline */}
        <div className="inline-block px-4 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] font-mono text-sm sm:text-base font-semibold tracking-wider mb-6">
          “Think before you click. Verify before you trust.”
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 mb-10 leading-relaxed font-sans">
          Learn how modern adversaries manipulate human trust, identify sophisticated phishing lures,
          dissect deceptive links, and fortify enterprise defense lines against credential harvesting.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 font-mono text-sm">
          <a
            href="#lifecycle"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-bold tracking-wider rounded transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] flex items-center justify-center gap-2 group"
          >
            <span>START TRAINING</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#quiz"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#0f1422] hover:bg-[#151d30] border border-[#1e2433] hover:border-[#00ff88]/50 text-white font-semibold tracking-wider rounded transition-all flex items-center justify-center gap-2"
          >
            <HelpCircle className="w-4 h-4 text-[#00ff88]" />
            <span>TAKE THE QUIZ</span>
          </a>
        </div>

        {/* Terminal Header Telemetry Preview */}
        <div className="max-w-3xl mx-auto text-left rounded-lg bg-[#0b0f19] border border-[#1e2433] overflow-hidden shadow-2xl">
          <div className="px-4 py-2.5 bg-[#080b12] border-b border-[#1e2433] flex items-center justify-between font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              <span className="ml-2 text-slate-500">secops@threat-intel:~/phish-trap</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <Activity className="w-3 h-3 text-[#00ff88]" />
              <span>DEFENSE_MODE: ACTIVE</span>
            </div>
          </div>

          <div className="p-4 font-mono text-xs space-y-1.5 text-slate-300">
            <div className="text-slate-500">
              [INIT] Loading attack recognition heuristic models v2.4...
            </div>
            <div className="text-slate-400">
              <span className="text-[#00ff88]">[READY]</span> Interactive Phishing Email & Web Surface Labs mounted.
            </div>
            <div className="text-slate-400">
              <span className="text-[#00ff88]">[READY]</span> 10 Threat Evaluation Scenarios loaded. Passing standard: 80%+.
            </div>
            <div className="text-[#00ff88] flex items-center gap-1.5 pt-1">
              <span>❯</span>
              <span>DEFENSIVE PROTOCOL: STOP → CHECK → VERIFY → REPORT</span>
              <span className="w-2 h-4 bg-[#00ff88] inline-block animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Quick KPI stats bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto font-mono text-center">
          <div className="p-3 rounded bg-[#0b0f19]/60 border border-[#1e2433]">
            <div className="text-xs text-slate-500">ATTACK VECTOR</div>
            <div className="text-sm font-bold text-white mt-0.5">Social Engineering</div>
          </div>
          <div className="p-3 rounded bg-[#0b0f19]/60 border border-[#1e2433]">
            <div className="text-xs text-slate-500">TARGET ASSET</div>
            <div className="text-sm font-bold text-[#00ff88] mt-0.5">Identity & MFA</div>
          </div>
          <div className="p-3 rounded bg-[#0b0f19]/60 border border-[#1e2433]">
            <div className="text-xs text-slate-500">INTERACTIVE LABS</div>
            <div className="text-sm font-bold text-white mt-0.5">Email + Web URL</div>
          </div>
          <div className="p-3 rounded bg-[#0b0f19]/60 border border-[#1e2433]">
            <div className="text-xs text-slate-500">EVALUATION QUIZ</div>
            <div className="text-sm font-bold text-[#00ff88] mt-0.5">10 Scenarios</div>
          </div>
        </div>
      </div>
    </section>
  );
};
