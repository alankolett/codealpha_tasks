import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/trainingData';
import type { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, BookOpen } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [answersHistory, setAnswersHistory] = useState<{ [key: number]: number }>({});

  const currentQuestion: QuizQuestion = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (index: number) => {
    if (showExplanation) return; // Prevent changing after submission
    setSelectedOption(index);
    setShowExplanation(true);

    const isCorrect = index === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setAnswersHistory({ ...answersHistory, [currentIndex]: index });
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRetake = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsCompleted(false);
    setAnswersHistory({});
  };

  const getTierInfo = (points: number) => {
    if (points >= 9) {
      return {
        label: '9–10: PHISHING DEFENSE READY',
        badge: 'DEFENSE READY',
        color: 'text-[#00ff88]',
        border: 'border-[#00ff88]',
        bg: 'bg-[#00ff88]/10',
        message: 'Outstanding vigilance! You demonstrate sharp instincts for detecting deceptive links, psychological pressure, and spoofed communications.'
      };
    }
    if (points >= 7) {
      return {
        label: '7–8: GOOD AWARENESS',
        badge: 'GOOD AWARENESS',
        color: 'text-amber-400',
        border: 'border-amber-400',
        bg: 'bg-amber-400/10',
        message: 'Solid defensive foundation! Continue exercising caution on subtle domain spoofing, unexpected attachments, and multi-factor interception tactics.'
      };
    }
    if (points >= 5) {
      return {
        label: '5–6: NEEDS PRACTICE',
        badge: 'NEEDS PRACTICE',
        color: 'text-orange-500',
        border: 'border-orange-500',
        bg: 'bg-orange-500/10',
        message: 'Several deceptive cues went undetected. We recommend reviewing the Red Flags and Real-World Case Studies to sharpen your instincts.'
      };
    }
    return {
      label: '0–4: HIGH RISK — COMPLETE TRAINING AGAIN',
      badge: 'HIGH RISK',
      color: 'text-[#ff3366]',
      border: 'border-[#ff3366]',
      bg: 'bg-[#ff3366]/10',
      message: 'Critical vulnerability detected. Several common phishing lures deceived your evaluation. Please retake the training modules to safeguard corporate systems.'
    };
  };

  const tier = getTierInfo(score);

  return (
    <section id="quiz" className="py-20 bg-[#07090e] border-t border-[#1a202c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] text-xs font-mono mb-3">
            <span>SECTION 08</span>
            <span>//</span>
            <span>EVALUATION LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white mb-4">
            Interactive "Phish or Legit?" Quiz
          </h2>
          <p className="text-slate-400 font-sans text-base">
            Evaluate 10 realistic operational scenarios. Identify red flags, avoid traps, and
            determine your threat awareness readiness.
          </p>
        </div>

        {/* QUIZ INTERFACE OR SCORE SCREEN */}
        {!isCompleted ? (
          <div className="rounded-xl bg-[#0c101c] border border-[#1e2433] p-6 sm:p-8 shadow-2xl relative">
            {/* Progress Bar & Header */}
            <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-4 pb-4 border-b border-[#1e2433]">
              <div className="flex items-center gap-2">
                <span className="text-[#00ff88] font-bold">SCENARIO {currentIndex + 1} OF {QUIZ_QUESTIONS.length}</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-300">CHANNEL: {currentQuestion.channel}</span>
              </div>
              <div className="text-slate-300 font-semibold">
                Score: <span className="text-[#00ff88]">{score}</span> / {currentIndex}
              </div>
            </div>

            {/* Progress Gauge */}
            <div className="w-full bg-[#131929] h-2 rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-[#00ff88] transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              ></div>
            </div>

            {/* Scenario Text */}
            <div className="mb-8">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                ATTACK SURFACE CONTEXT:
              </div>
              <h3 className="text-lg sm:text-xl font-sans font-medium text-white leading-relaxed bg-[#080b14] p-5 rounded-lg border border-[#1a2130]">
                {currentQuestion.scenario}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, idx) => {
                const isOptionSelected = selectedOption === idx;
                const isCorrect = idx === currentQuestion.correctIndex;

                let optionStyles = 'bg-[#080b14] border-[#1e2433] hover:border-slate-500 text-slate-200';

                if (showExplanation) {
                  if (isCorrect) {
                    optionStyles = 'bg-[#00ff88]/10 border-[#00ff88] text-white shadow-[0_0_15px_rgba(0,255,136,0.15)]';
                  } else if (isOptionSelected && !isCorrect) {
                    optionStyles = 'bg-[#ff3366]/10 border-[#ff3366] text-white';
                  } else {
                    optionStyles = 'bg-[#080b14] border-[#161c28] opacity-50 text-slate-500';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={showExplanation}
                    className={`w-full p-4 rounded-xl border text-left font-sans text-sm sm:text-base transition-all flex items-center justify-between gap-3 ${optionStyles}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-black/40 border border-[#1e2433] flex items-center justify-center font-mono text-xs font-bold text-slate-400 shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {showExplanation && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-[#00ff88] shrink-0" />
                    )}
                    {showExplanation && isOptionSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-[#ff3366] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Immediate Explanation Banner */}
            {showExplanation && (
              <div className="rounded-xl bg-[#080b14] border border-[#1e2433] p-5 mb-8 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                  {selectedOption === currentQuestion.correctIndex ? (
                    <span className="text-[#00ff88] font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> CORRECT CHOICE
                    </span>
                  ) : (
                    <span className="text-[#ff3366] font-bold flex items-center gap-1.5">
                      <XCircle className="w-4 h-4" /> INCORRECT CHOICE
                    </span>
                  )}
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400">Threat Vector: {currentQuestion.threatVector}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-4">
                  {currentQuestion.explanation}
                </p>

                {/* Warning signs breakdown */}
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Critical Red Flags Present:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentQuestion.warningSigns.map((sign, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#ff3366]/10 border border-[#ff3366]/30 text-[#ff3366]"
                      >
                        ⚠️ {sign}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Advance Button */}
            {showExplanation && (
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-lg bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-mono font-bold text-xs tracking-wider flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(0,255,136,0.3)]"
                >
                  <span>{currentIndex < QUIZ_QUESTIONS.length - 1 ? 'NEXT QUESTION' : 'VIEW SCORE SUMMARY'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* SECTION 10: SCORE SUMMARY SCREEN */
          <div className="rounded-xl bg-[#0c101c] border border-[#1e2433] p-8 sm:p-12 shadow-2xl text-center">
            <div className="w-20 h-20 rounded-full bg-[#080b14] border border-[#00ff88]/40 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,255,136,0.2)]">
              <Award className="w-10 h-10 text-[#00ff88]" />
            </div>

            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
              EXAMINATION CONCLUDED // RESULTS CERTIFIED
            </div>

            <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white mb-2">
              THREAT AWARENESS SCORE
            </h3>

            {/* Score & Percentage Display */}
            <div className="text-5xl sm:text-6xl font-mono font-extrabold text-white my-6">
              <span className={tier.color}>{score}</span>
              <span className="text-slate-600 text-3xl sm:text-4xl"> / {QUIZ_QUESTIONS.length}</span>
              <span className="block text-sm font-mono text-slate-400 mt-2">
                ({Math.round((score / QUIZ_QUESTIONS.length) * 100)}% Readiness Rating)
              </span>
            </div>

            {/* Category Tier Badge */}
            <div className="inline-block mb-6">
              <div className={`px-4 py-2 rounded-lg border font-mono font-bold text-sm tracking-wider ${tier.bg} ${tier.border} ${tier.color}`}>
                {tier.label}
              </div>
            </div>

            <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300 font-sans leading-relaxed mb-6">
              {tier.message}
            </p>

            <p className="text-xs text-slate-500 font-mono italic mb-10">
              * Note: These are educational training evaluation tiers for the CodeAlpha Cybersecurity Internship, not formal certifications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-xs">
              <button
                onClick={handleRetake}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,136,0.25)] transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>RETAKE QUIZ</span>
              </button>

              <a
                href="#lifecycle"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#141a2a] hover:bg-[#1a2338] border border-[#1e2433] text-white font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#00ff88]" />
                <span>REVIEW TRAINING</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
