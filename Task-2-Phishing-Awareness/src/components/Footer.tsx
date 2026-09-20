import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05060a] border-t border-[#1a202c] text-slate-400 font-mono text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grand Final Takeaway Banner */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-mono mb-3">
            PHISH//TRAP TRAINING COMPLETE
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            “Don’t trust the message. Verify the source.”
          </h3>

          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-300 font-bold my-4">
            <span className="px-2.5 py-1 rounded bg-[#101524] border border-[#1e2433] text-[#ff3366]">STOP</span>
            <span>•</span>
            <span className="px-2.5 py-1 rounded bg-[#101524] border border-[#1e2433] text-amber-400">CHECK</span>
            <span>•</span>
            <span className="px-2.5 py-1 rounded bg-[#101524] border border-[#1e2433] text-blue-400">VERIFY</span>
            <span>•</span>
            <span className="px-2.5 py-1 rounded bg-[#101524] border border-[#1e2433] text-[#00ff88]">REPORT</span>
          </div>

          <p className="text-xs text-slate-400 font-sans mt-4 max-w-lg mx-auto">
            Security is not an outcome of technology alone—it is a discipline of human mindfulness.
            Every verified link and reported phish fortifies the defense for your entire organization.
          </p>
        </div>

        <div className="border-t border-[#151a27] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-[#0b0e18] border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-bold tracking-wider">
                PHISH<span className="text-[#00ff88]">//</span>TRAP
              </div>
              <div className="text-[10px] text-slate-400">
                CodeAlpha Cyber Security Internship — Task 2
              </div>
            </div>
          </div>

          <div className="text-center sm:text-right text-[11px] text-slate-400 font-sans max-w-md">
            This application is strictly an educational cybersecurity training simulation.
            No real credentials are harvested, transmitted, or stored.
          </div>
        </div>
      </div>
    </footer>
  );
};
