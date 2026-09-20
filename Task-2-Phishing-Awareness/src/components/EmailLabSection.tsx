import React, { useState } from 'react';
import { EMAIL_HOTSPOTS } from '../data/trainingData';
import type { EmailHotspot } from '../types';
import { Mail, ShieldAlert, MousePointerClick, AlertCircle, ExternalLink } from 'lucide-react';

export const EmailLabSection: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<EmailHotspot>(EMAIL_HOTSPOTS[0]);
  const [hoveredLink, setHoveredLink] = useState(false);
  const [discoveredIds, setDiscoveredIds] = useState<string[]>(['sender-hotspot']);

  const handleSelect = (hotspot: EmailHotspot) => {
    setSelectedHotspot(hotspot);
    if (!discoveredIds.includes(hotspot.id)) {
      setDiscoveredIds([...discoveredIds, hotspot.id]);
    }
  };

  return (
    <section id="emaillab" className="py-20 bg-[#080b12] border-t border-[#1a202c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] text-xs font-mono mb-3">
            <span>SECTION 03</span>
            <span>//</span>
            <span>INTERACTIVE LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4">
            Phishing Email Lab
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg">
            Interact with this simulated corporate phishing email. Click the glowing target zones to dissect
            attacker manipulation techniques and reveal hidden traps.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-[#00ff88] font-bold">{discoveredIds.length} of {EMAIL_HOTSPOTS.length}</span>
            <span>vulnerabilities uncovered</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Safe sandbox simulation</span>
          </div>
        </div>

        {/* 2-Column Lab Grid: Simulated Client (Left) & Threat Intelligence Inspector (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Simulated Email Client Container */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#0c101c] border border-[#1e2433] overflow-hidden shadow-2xl relative">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#080b14] border-b border-[#1e2433] flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  <span className="ml-2 flex items-center gap-1.5 text-slate-300">
                    <Mail className="w-3.5 h-3.5 text-[#00ff88]" />
                    <span>Inbox — Microsoft Outlook / Webmail Preview</span>
                  </span>
                </div>
                <span className="text-[10px] text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  SIMULATED THREAT
                </span>
              </div>

              {/* Email Headers Box */}
              <div className="p-5 border-b border-[#1a2130] bg-[#090d17] space-y-3 font-sans text-sm">
                {/* FROM Field Hotspot */}
                <div
                  onClick={() => handleSelect(EMAIL_HOTSPOTS[0])}
                  className={`p-2.5 rounded-lg border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                    selectedHotspot.id === 'sender-hotspot'
                      ? 'bg-[#ff3366]/10 border-[#ff3366] shadow-[0_0_15px_rgba(255,51,102,0.2)]'
                      : 'bg-[#0f1422] border-[#1e2433] hover:border-slate-500'
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase mr-2">FROM:</span>
                    <span className="font-semibold text-white">Corporate Security Team </span>
                    <span className="font-mono text-xs text-[#ff3366]">
                      &lt;security-alert@account-verification.example&gt;
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff3366]/20 text-[#ff3366] self-start sm:self-center">
                    CLICK TO INSPECT
                  </span>
                </div>

                <div className="text-xs text-slate-400 font-mono flex items-center gap-2 px-1">
                  <span className="text-slate-500 uppercase">TO:</span>
                  <span className="text-slate-300">employee.internal@company.org</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-slate-500 uppercase">DATE:</span>
                  <span className="text-slate-300">Today, 09:14 AM</span>
                </div>

                {/* SUBJECT Field Hotspot */}
                <div
                  onClick={() => handleSelect(EMAIL_HOTSPOTS[1])}
                  className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                    selectedHotspot.id === 'urgency-hotspot'
                      ? 'bg-amber-500/10 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                      : 'bg-[#0f1422] border-[#1e2433] hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 uppercase">SUBJECT:</span>
                    <span className="font-mono font-bold text-amber-300 text-sm">
                      URGENT: Your account will be suspended
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                    CLICK TO INSPECT
                  </span>
                </div>
              </div>

              {/* Email Body Content */}
              <div className="p-6 text-slate-200 font-sans space-y-5 text-sm sm:text-base leading-relaxed">
                <p>Dear Valued Employee,</p>
                
                <p>
                  Our internal directory audit has flagged anomalous activity on your corporate workstation.
                  Your account requires immediate identity verification.
                </p>

                <div
                  onClick={() => handleSelect(EMAIL_HOTSPOTS[1])}
                  className="p-3 rounded bg-[#ff3366]/10 border-l-4 border-[#ff3366] text-xs font-mono text-slate-300 cursor-pointer"
                >
                  ⚠️ <strong>SECURITY ALERT:</strong> Failure to verify your account within{' '}
                  <span className="text-[#ff3366] underline font-bold">30 minutes</span> may result in
                  permanent access suspension and revocation of SSO privileges.
                </div>

                <p>Verify your account credentials now using our automated security dispatcher:</p>

                {/* Simulated Link Button Hotspot */}
                <div className="py-2 text-center">
                  <div
                    onClick={() => handleSelect(EMAIL_HOTSPOTS[2])}
                    onMouseEnter={() => setHoveredLink(true)}
                    onMouseLeave={() => setHoveredLink(false)}
                    className={`inline-block px-8 py-3 rounded-lg font-mono font-bold text-sm tracking-wider cursor-pointer transition-all ${
                      selectedHotspot.id === 'link-hotspot'
                        ? 'bg-[#ff3366] text-white shadow-[0_0_20px_rgba(255,51,102,0.5)]'
                        : 'bg-[#ff3366]/90 hover:bg-[#ff3366] text-white'
                    }`}
                  >
                    <span>[ VERIFY ACCOUNT NOW ]</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-2 flex items-center justify-center gap-1">
                    <MousePointerClick className="w-3 h-3 text-[#ff3366]" />
                    <span>Hover or click button to preview true destination</span>
                  </div>
                </div>

                {/* Footer Hotspot */}
                <div
                  onClick={() => handleSelect(EMAIL_HOTSPOTS[3])}
                  className={`pt-6 border-t border-[#1e2433] text-xs text-slate-400 font-mono cursor-pointer p-2 rounded transition-colors ${
                    selectedHotspot.id === 'footer-hotspot'
                      ? 'bg-[#101726] border border-[#00ff88]/40'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <p>Global Directory Dispatcher — Automated Notification System</p>
                  <p className="text-[10px] text-slate-400 mt-1">
                    Do not reply to this email. Messages sent to this address cannot be monitored.
                  </p>
                </div>
              </div>

              {/* Simulated Browser / Mail Status Bar for Link Hovering */}
              <div className="px-4 py-2 bg-[#080b12] border-t border-[#1e2433] text-[11px] font-mono flex items-center justify-between text-slate-400">
                <div className="flex items-center gap-1.5 truncate max-w-[85%]">
                  <ExternalLink className="w-3 h-3 text-[#ff3366]" />
                  <span className="text-slate-500">Destination:</span>
                  <span className={hoveredLink || selectedHotspot.id === 'link-hotspot' ? 'text-[#ff3366] font-bold' : 'text-slate-400'}>
                    https://fake-login-portal.example-attacker.com/session?token=4981
                  </span>
                </div>
                <span className="text-[10px] text-red-400 font-mono uppercase tracking-wider">
                  UNTRUSTED
                </span>
              </div>
            </div>
          </div>

          {/* Threat Intelligence Inspector Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#0b0f19] border border-[#1e2433] p-6 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#1e2433] pb-4 mb-5">
                  <div>
                    <span className="text-xs font-mono text-[#ff3366] tracking-widest uppercase">
                      INSPECTOR ANALYSIS // {selectedHotspot.label}
                    </span>
                    <h3 className="text-xl font-mono font-bold text-white mt-1">
                      {selectedHotspot.warningTitle}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#ff3366]/10 border border-[#ff3366]/30 flex items-center justify-center text-[#ff3366]">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                </div>

                {/* Indicator Badge */}
                <div className="mb-5 p-3 rounded-lg bg-[#080b12] border border-[#ff3366]/30 text-xs font-mono text-[#ff3366] flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{selectedHotspot.indicator}</span>
                </div>

                {/* Threat Details */}
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                      Threat Mechanics & Adversary Motive
                    </div>
                    <p className="text-sm text-slate-300 font-sans leading-relaxed bg-[#080b12] p-4 rounded-lg border border-[#1a2130]">
                      {selectedHotspot.threatDetails}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-mono uppercase text-[#00ff88] mb-1">
                      How to Defend Yourself
                    </div>
                    <div className="text-xs text-slate-300 font-sans leading-relaxed bg-[#00ff88]/5 p-4 rounded-lg border border-[#00ff88]/30">
                      {selectedHotspot.element === 'sender' && (
                        <span>Always inspect the full domain name following the "@" symbol. Free domains or third-party TLDs claiming to be internal departments are instant indicators of forgery.</span>
                      )}
                      {selectedHotspot.element === 'urgency' && (
                        <span>Recognize artificial time scarcity (e.g. "30 minutes"). Stop, take a breath, and contact your legitimate IT helpdesk over Microsoft Teams or corporate phone.</span>
                      )}
                      {selectedHotspot.element === 'link' && (
                        <span>Never click the link directly. Always hover over the button to view the true URL preview, or manually type the known corporate portal address in a clean browser window.</span>
                      )}
                      {selectedHotspot.element === 'footer' && (
                        <span>Notice the absence of your name, direct manager, or corporate helpdesk contact info. Real internal communications provide traceable ticket IDs and authentic employee signatures.</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="mt-6 pt-4 border-t border-[#1e2433]">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>Lab Exploration Progress</span>
                  <span className="text-[#00ff88] font-bold">
                    {Math.round((discoveredIds.length / EMAIL_HOTSPOTS.length) * 100)}%
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {EMAIL_HOTSPOTS.map((spot) => (
                    <button
                      key={spot.id}
                      onClick={() => handleSelect(spot)}
                      className={`h-2 rounded transition-all ${
                        discoveredIds.includes(spot.id) ? 'bg-[#00ff88]' : 'bg-[#1a2130]'
                      }`}
                      title={spot.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
