import React, { useState } from 'react';
import { WEBSITE_ANALYSIS_ITEMS } from '../data/trainingData';
import { Globe, Lock, Search, AlertTriangle, ShieldCheck, XCircle, ArrowRight, RefreshCw } from 'lucide-react';

export const WebsiteAnalyzerSection: React.FC = () => {
  const [analyzed, setAnalyzed] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const handleAnalyze = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setAnalyzed(true);
    }, 600);
  };

  const handleReset = () => {
    setAnalyzed(false);
  };

  return (
    <section id="webanalyzer" className="py-20 bg-[#07090e] border-t border-[#1a202c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] text-xs font-mono mb-3">
            <span>SECTION 04</span>
            <span>//</span>
            <span>WEB SIMULATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4">
            Fake Website Analyzer
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg">
            Inspect a simulated malicious login page. Discover why a green padlock and HTTPS do
            <span className="text-[#ff3366] font-semibold"> NOT </span> guarantee that a website is genuine.
          </p>
        </div>

        {/* Browser Interface Simulation */}
        <div className="max-w-5xl mx-auto rounded-xl bg-[#0c101c] border border-[#1e2433] shadow-2xl overflow-hidden mb-10">
          {/* Browser Chrome Header */}
          <div className="px-4 py-3 bg-[#080a14] border-b border-[#1e2433] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Window controls and tabs */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              <div className="ml-3 px-3 py-1 rounded bg-[#101626] border border-[#1e2433] text-xs font-mono text-slate-300 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#00ff88]" />
                <span>Single Sign-On Verification Portal</span>
              </div>
            </div>

            {/* URL Address Bar */}
            <div className="flex-1 max-w-xl mx-auto w-full">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#07090f] border border-[#1e2433] text-xs font-mono">
                <div className="flex items-center gap-1 text-[#00ff88]" title="HTTPS Connection Encrypted">
                  <Lock className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-semibold">https://</span>
                </div>
                <div className="text-slate-200 tracking-wide font-mono truncate">
                  <span className="text-amber-400 font-bold">secure-login.</span>
                  <span className="text-[#ff3366] font-bold">example-security.test</span>
                  <span className="text-slate-500">/auth/v2/signin</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              {analyzed ? (
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-1.5 rounded bg-[#141b2c] hover:bg-[#1a233a] border border-[#1e2433] text-slate-300 text-xs font-mono flex items-center justify-center gap-1.5 transition-all"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Scan</span>
                </button>
              ) : (
                <button
                  onClick={handleAnalyze}
                  disabled={isScanning}
                  className="w-full sm:w-auto px-4 py-1.5 rounded bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-mono font-bold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all disabled:opacity-50"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>{isScanning ? 'SCANNING DOMAIN...' : 'ANALYZE URL'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Webpage Content Simulation */}
          <div className="p-8 sm:p-12 bg-[#090d18] grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-[#1e2433]">
            {/* Left: Phishing Page Presentation */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold font-mono text-xl">
                IDP
              </div>
              <h3 className="text-2xl font-mono font-bold text-white">
                Enterprise Cloud Identity
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                Sign in with your corporate account to authorize your security profile.
                This screen replicates legitimate enterprise Single Sign-On (SSO) styling to solicit corporate passwords.
              </p>

              {/* Simulated Form (Educational Mockup - Non-functional) */}
              <div className="space-y-3 pt-2 max-w-sm">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Corporate Email</label>
                  <div className="p-2.5 rounded bg-[#0c101c] border border-[#1e2433] text-xs font-mono text-slate-400">
                    user.employee@company.org
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Password</label>
                  <div className="p-2.5 rounded bg-[#0c101c] border border-[#1e2433] text-xs font-mono text-slate-600">
                    ••••••••••••••••
                  </div>
                </div>
                <div className="py-1">
                  <div className="w-full py-2.5 bg-blue-600/60 rounded text-center text-xs font-mono font-semibold text-white/90">
                    Sign In (Simulated Trap)
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Technical Anatomy Callout */}
            <div className="rounded-xl bg-[#0c111e] border border-[#1e2433] p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <AlertTriangle className="w-4 h-4" />
                <span>CRITICAL RECOGNITION PRINCIPLE</span>
              </div>
              <h4 className="text-lg font-mono font-bold text-white">
                The HTTPS Padlock Fallacy
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                A browser padlock symbol only means that network packets between your device and the server are encrypted using TLS/SSL.
                <strong className="text-white"> Attackers routinely obtain valid TLS certificates for malicious domains</strong> using free automated certificate authorities.
              </p>
              <div className="p-3 rounded-lg bg-[#ff3366]/10 border border-[#ff3366]/30 text-xs font-mono text-[#ff3366]">
                ⚠️ HTTPS guarantees PRIVACY in transit, NOT the LEGITIMACY of the destination!
              </div>
            </div>
          </div>

          {/* URL Structure Deep Dive Breakdown */}
          <div className="p-6 bg-[#080b14]">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              URL Anatomical Decomposition:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 rounded bg-[#0c101c] border border-amber-500/30">
                <div className="text-[10px] text-amber-400 uppercase">SUBDOMAIN (DECEPTIVE)</div>
                <div className="text-sm font-bold text-white mt-1">secure-login.</div>
                <div className="text-[11px] text-slate-400 mt-1 font-sans">
                  Crafted to mislead victims into believing they are on an official login subdomain.
                </div>
              </div>

              <div className="p-3 rounded bg-[#0c101c] border border-[#ff3366]/40">
                <div className="text-[10px] text-[#ff3366] uppercase">ACTUAL ROOT DOMAIN</div>
                <div className="text-sm font-bold text-[#ff3366] mt-1">example-security.test</div>
                <div className="text-[11px] text-slate-400 mt-1 font-sans">
                  The actual registered entity receiving your submitted credentials.
                </div>
              </div>

              <div className="p-3 rounded bg-[#0c101c] border border-[#00ff88]/30">
                <div className="text-[10px] text-[#00ff88] uppercase">PATH & PARAMETERS</div>
                <div className="text-sm font-bold text-slate-200 mt-1">/auth/v2/signin</div>
                <div className="text-[11px] text-slate-400 mt-1 font-sans">
                  Internal script route hosting the credential-harvesting form listener.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scan Results Panel (Animated / Revealed when "ANALYZE URL" is clicked) */}
        {analyzed && (
          <div className="max-w-5xl mx-auto rounded-xl bg-[#0b0f19] border border-[#ff3366]/40 p-6 sm:p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1e2433] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#ff3366]/10 border border-[#ff3366]/30 text-[#ff3366]">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">AUTOMATED HEURISTIC SCAN</div>
                  <h3 className="text-xl font-mono font-bold text-white">
                    4 Threat Signatures Detected on Simulated URL
                  </h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded bg-[#ff3366]/20 border border-[#ff3366]/30 text-[#ff3366] text-xs font-mono font-bold">
                VERDICT: MALICIOUS CLONE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {WEBSITE_ANALYSIS_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-lg bg-[#080b14] border border-[#1e2433] hover:border-[#ff3366]/40 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-white flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#ff3366]" />
                      <span>{item.title}</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#ff3366] bg-[#ff3366]/10 px-2 py-0.5 rounded">
                      FLAGGED
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {item.explanation}
                  </p>
                  <div className="text-[11px] font-mono text-slate-500 pt-1 border-t border-[#161c28]">
                    {item.technicalDetail}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#1e2433] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00ff88]" />
                <span>Always check the root domain from right to left before entering any login info.</span>
              </div>
              <a
                href="#socialeng"
                className="text-[#00ff88] hover:underline flex items-center gap-1"
              >
                <span>Continue to Social Engineering Tactics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
