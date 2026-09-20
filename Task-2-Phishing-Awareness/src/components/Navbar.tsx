import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Lifecycle', href: '#lifecycle' },
    { name: 'Red Flags', href: '#redflags' },
    { name: 'Email Lab', href: '#emaillab' },
    { name: 'Web Analyzer', href: '#webanalyzer' },
    { name: 'Social Engineering', href: '#socialeng' },
    { name: 'Case Studies', href: '#casestudies' },
    { name: 'Stay Safe', href: '#prevention' },
    { name: 'Quiz', href: '#quiz' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07080c]/90 backdrop-blur-md border-b border-[#1e2433] shadow-lg shadow-black/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded bg-[#0f1422] border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88] group-hover:border-[#00ff88] group-hover:shadow-[0_0_12px_rgba(0,255,136,0.3)] transition-all">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold tracking-wider text-white text-base flex items-center gap-1">
                PHISH<span className="text-[#00ff88]">//</span>TRAP
                <span className="inline-block w-1.5 h-4 bg-[#00ff88] animate-pulse ml-0.5"></span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-mono -mt-1">
                CODEALPHA SEC_OPS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wide rounded transition-all duration-200 ${
                    isActive
                      ? 'text-[#00ff88] bg-[#00ff88]/10 border border-[#00ff88]/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Status Indicator & Quick Quiz CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#0d121d] border border-[#1e2433] text-[11px] font-mono text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
              </span>
              <span>MODULE ONLINE</span>
            </div>

            <a
              href="#quiz"
              className="px-3 py-1.5 bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-mono font-semibold text-xs tracking-wider rounded transition-all shadow-[0_0_15px_rgba(0,255,136,0.25)] hover:shadow-[0_0_20px_rgba(0,255,136,0.5)]"
            >
              TAKE QUIZ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-400 hover:text-white hover:bg-white/5 border border-[#1e2433]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0d16] border-b border-[#1e2433] px-4 pt-2 pb-5 space-y-1 font-mono text-sm">
          <div className="px-3 py-2 text-xs text-slate-500 border-b border-[#1e2433] flex items-center justify-between">
            <span>DEFENSIVE INTERNSHIP MODULE</span>
            <span className="text-[#00ff88]">ONLINE</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded text-xs transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'text-[#00ff88] bg-[#00ff88]/10 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2 bg-[#00ff88] text-black font-bold text-xs rounded"
            >
              TAKE THE QUIZ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
