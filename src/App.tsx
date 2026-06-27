import React, { useState, useRef, useEffect } from 'react';
import { formData } from './data/formConfig';
import { ChevronDown, Check, ArrowRight, ArrowLeft, Sparkles, Rocket, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const stepEmojis = ['🎯', '👥', '🏢', '💳'];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const briefRef = useRef<HTMLDivElement>(null);

  const handleConfirm = async () => {
    let emailBody = "Selected Options:\n\n";
    
    formData.forEach((fStep) => {
      let hasAnswers = false;
      fStep.questions.forEach((q) => {
        const answer = answers[q.id];
        const displayAnswer = Array.isArray(answer) ? answer.join(', ') : answer;
        if (displayAnswer) hasAnswers = true;
      });
      
      if (!hasAnswers) return;

      emailBody += `--- ${fStep.title} ---\n`;
      
      fStep.questions.forEach((q) => {
        const answer = answers[q.id];
        const displayAnswer = Array.isArray(answer) ? answer.join(', ') : answer;
        if (!displayAnswer) return;
        
        emailBody += `${q.label}:\n${displayAnswer}\n\n`;
      });
    });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      alert("VITE_WEB3FORMS_ACCESS_KEY is missing.\n\nIf you hosted this on Cloudflare Pages/Vercel/Netlify, you need to add VITE_WEB3FORMS_ACCESS_KEY to your project's Environment Variables in their dashboard, and then trigger a NEW deployment so the build can pick it up.\n\nIn AI Studio: Add it to Settings -> Secrets and restart the server.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Form Submission",
          message: emailBody,
          from_name: "Form Submissions"
        }),
      });

      const result = await response.json();
      if (response.status === 200) {
        setSubmitStatus('success');
      } else {
        console.error("Web3Forms API Error:", result);
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const step = formData[currentStep];
  const totalSteps = formData.length;

  const handleSelect = (questionId: string, value: string, type: string) => {
    setError(null);
    setAnswers(prev => {
      if (type === 'checkbox' || type === 'multiselect_dropdown') {
        const current = (prev[questionId] as string[]) || [];
        if (current.includes(value)) {
          return { ...prev, [questionId]: current.filter(v => v !== value) };
        } else {
          const questionLabel = formData.flatMap(s => s.questions).find(q => q.id === questionId)?.label || '';
          const limitMatch = questionLabel.match(/up to (\d+)/i);
          const limit = limitMatch ? parseInt(limitMatch[1], 10) : null;
          
          if (limit && current.length >= limit) {
            return prev;
          }
          return { ...prev, [questionId]: [...current, value] };
        }
      } else {
        return { ...prev, [questionId]: value };
      }
    });
  };

  const handleTextChange = (questionId: string, value: string) => {
    setError(null);
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const validateStep = () => {
    const currentQuestions = step.questions;
    for (const q of currentQuestions) {
      if (q.label.includes('(Optional)')) continue;
      const answer = answers[q.id];
      if (!answer || (Array.isArray(answer) && answer.length === 0) || (typeof answer === 'string' && answer.trim() === '')) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep, showSummary]);

  const handleNext = () => {
    if (!validateStep()) {
      setError("Please complete all mandatory fields before proceeding.");
      return;
    }
    setError(null);
    if (currentStep < totalSteps - 1) {
      setCurrentStep(curr => curr + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-200 selection:text-indigo-900 pb-24 relative overflow-hidden">
      {/* Animated Pastel Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob pointer-events-none print:hidden" />
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-300/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob [animation-delay:2s] pointer-events-none print:hidden" />
      <div className="fixed bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-rose-300/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob [animation-delay:4s] pointer-events-none print:hidden" />

      <header className="border-b border-white/60 bg-white/40 backdrop-blur-xl sticky top-0 z-50 shadow-sm print:hidden">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center rounded-xl shadow-lg shadow-indigo-500/20">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-0.5">Triumph Media Events Wing</div>
              <h1 className="text-lg font-bold text-slate-800 leading-none">Campaign Strategy Planner ✨</h1>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-[0.1em] font-bold text-indigo-600">Authorized Access 🔒</div>
              <div className="text-sm font-medium text-slate-600">Enterprise B2B Division</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 relative z-10">
        {!showSummary ? (
          <motion.div 
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            <HeroSection isCompact={currentStep > 0} />

            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold tracking-wide text-slate-500 uppercase">
                  Step {step.stepNumber} of {totalSteps}: <span className="text-indigo-600">{step.sectionName}</span> {stepEmojis[currentStep]}
                </h2>
                <span className="text-sm font-bold text-indigo-600 bg-white/80 px-3 py-1 rounded-full shadow-sm">{Math.round((currentStep / (totalSteps - 1)) * 100)}%</span>
              </div>
              <div className="w-full h-2.5 bg-white/50 rounded-full overflow-hidden shadow-inner border border-white/60">
                <motion.div 
                  className="h-full bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-white/20" />
                </motion.div>
              </div>
            </div>

            {/* Questions Form */}
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {step.questions.map((q, idx) => (
                    <motion.div 
                      key={q.id} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      style={{ zIndex: 50 - idx }}
                      className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-8 leading-snug">
                        {q.label}
                        {!q.label.includes('(Optional)') && <span className="text-rose-500 ml-1.5">*</span>}
                      </h3>
                      
                      {q.type === 'radio' || q.type === 'checkbox' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {q.options?.map((opt) => {
                            const isMulti = q.type === 'checkbox';
                            const isSelected = isMulti 
                              ? ((answers[q.id] as string[]) || []).includes(opt)
                              : answers[q.id] === opt;

                            return (
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                key={opt}
                                onClick={() => handleSelect(q.id, opt, q.type)}
                                className={`group relative flex items-start p-5 text-left transition-all duration-300 rounded-2xl border-2
                                  ${isSelected 
                                    ? 'bg-gradient-to-br from-indigo-500 to-purple-500 border-transparent shadow-[0_8px_20px_rgba(99,102,241,0.3)]' 
                                    : 'bg-white/80 border-slate-200 hover:bg-white hover:border-indigo-300 shadow-sm hover:shadow-md'
                                  }`}
                              >
                                <div className={`shrink-0 mt-0.5 mr-4 w-6 h-6 flex items-center justify-center transition-colors relative z-10
                                  ${q.type === 'radio' ? 'rounded-full' : 'rounded-[8px]'}
                                  ${isSelected ? 'bg-white text-indigo-600 shadow-sm' : 'border-2 border-slate-300 group-hover:border-indigo-400 bg-white'}
                                `}>
                                  {isSelected && <Check size={16} strokeWidth={4} />}
                                </div>
                                <span className={`text-sm sm:text-base font-semibold relative z-10 ${isSelected ? 'text-white drop-shadow-sm' : 'text-slate-600 group-hover:text-slate-800'}`}>
                                  {opt}
                                </span>
                              </motion.button>
                            );
                          })}
                        </div>
                      ) : q.type === 'multiselect_dropdown' ? (
                        <MultiSelectDropdown 
                          options={q.options || []} 
                          selected={(answers[q.id] as string[]) || []}
                          onChange={(val) => handleSelect(q.id, val, q.type)}
                          placeholder="Select industries... 🏭"
                        />
                      ) : q.type === 'textarea' ? (
                        <textarea
                          value={(answers[q.id] as string) || ''}
                          onChange={(e) => handleTextChange(q.id, e.target.value)}
                          placeholder="Type your notes here... ✍️"
                          className="w-full bg-white/70 border-2 border-slate-200 rounded-2xl p-6 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100 backdrop-blur-md transition-all min-h-[140px] resize-y shadow-sm custom-scrollbar font-medium"
                        />
                      ) : null}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-8 p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-3 text-rose-700 shadow-sm"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                    <span className="text-xl">⚠️</span>
                  </div>
                  <p className="font-semibold">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Actions */}
            <div className="mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
              <motion.button 
                whileHover={currentStep > 0 ? { scale: 1.05 } : {}}
                whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
                onClick={handleBack}
                className={`flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider transition-all backdrop-blur-md border border-slate-200 shadow-sm
                  ${currentStep > 0 ? 'text-slate-600 bg-white/80 hover:bg-white hover:text-indigo-600 hover:border-indigo-200 hover:shadow-md' : 'opacity-0 pointer-events-none'}`}
              >
                <ArrowLeft size={18} />
                Back 👈
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleNext}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 text-white px-10 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] transition-all border border-white/20"
              >
                {currentStep === totalSteps - 1 ? (
                  <>
                    Submit 🚀
                  </>
                ) : (
                  <>
                    Next Step ➔
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        ) : submitStatus === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl mx-auto text-center py-24 px-8 bg-white/80 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/20">
              <Check size={48} strokeWidth={3} />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
              Thank You! 🎉
            </h2>
            <p className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed max-w-lg mx-auto">
              Your campaign details have been successfully submitted. We will review your selections and get back to you shortly.
            </p>
            <motion.button 
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { setShowSummary(false); setCurrentStep(0); setAnswers({}); setSubmitStatus('idle'); window.scrollTo(0,0); }}
              className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-900 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Start New Campaign 🚀
            </motion.button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 print:hidden">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Selected Options 🎉</h2>
            </div>
            <div ref={briefRef} className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 sm:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)] print:shadow-none print:border-none print:p-0 print:bg-transparent mb-8">
              <p className="text-slate-600 font-bold mb-8 text-lg border-b border-slate-200 pb-4">Prepared By: Avijit Chakraborty</p>
              <div className="w-full flex flex-col gap-12">
                {formData.map((fStep, sIdx) => {
                  const hasAnswers = fStep.questions.some(q => {
                    const ans = answers[q.id];
                    return Array.isArray(ans) ? ans.length > 0 : !!ans;
                  });
                  if (!hasAnswers) return null;
                  
                  return (
                    <div key={sIdx} className="w-full">
                      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-200/60">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-extrabold shadow-sm">
                          {sIdx + 1}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">{fStep.title}</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {fStep.questions.map((q) => {
                          const answer = answers[q.id];
                          const displayAnswer = Array.isArray(answer) ? answer.join(', ') : answer;
                          if (!displayAnswer) return null;
                          return (
                            <div key={q.id} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow hover:bg-white/90">
                              <p className="text-xs font-bold text-indigo-500/80 uppercase tracking-wider mb-3 leading-snug">{q.label}</p>
                              <p className="text-slate-800 font-semibold leading-relaxed">{displayAnswer}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end print:hidden mb-12">
              <motion.button
                type="button"
                onClick={handleConfirm}
                disabled={isSubmitting}
                whileHover={isSubmitting ? {} : { scale: 1.05 }}
                whileTap={isSubmitting ? {} : { scale: 0.95 }}
                className={`flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all self-start sm:self-auto ${isSubmitting ? 'opacity-75 cursor-wait' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Confirm & Send ✉️'}
              </motion.button>
              {submitStatus === 'error' && (
                <div className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-6 py-3 rounded-xl shadow-sm self-start sm:self-auto border border-rose-200">
                  Error sending email
                </div>
              )}
              <motion.button 
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setShowSummary(false); setCurrentStep(0); setAnswers({}); setSubmitStatus('idle'); window.scrollTo(0,0); }}
                className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-600 bg-white/80 hover:bg-white px-6 py-3 rounded-xl backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-md transition-all self-start sm:self-auto"
              >
                Start Over <RefreshCcw size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}

function HeroSection({ isCompact }: { isCompact: boolean }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: -20, padding: "3.5rem 1.5rem" }}
      animate={{ opacity: 1, y: 0, padding: isCompact ? "2rem 1.5rem" : "3.5rem 1.5rem" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative w-full rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 mb-8 sm:mb-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col items-center text-center"
    >
      {/* Animated decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-yellow-200 to-rose-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 pointer-events-none"
      />

      <AnimatePresence>
        {!isCompact && (
          <motion.div
            initial={{ scale: 0, opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ scale: 1, opacity: 1, height: 64, marginBottom: 24 }}
            exit={{ scale: 0.8, opacity: 0, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.3 }}
            className="w-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white flex items-center justify-center z-10 relative overflow-hidden shrink-0"
          >
            <motion.span 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl block"
            >
              🚀
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h1
        layout
        className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 z-10 drop-shadow-sm transition-all duration-500 pb-1 ${isCompact ? "text-2xl sm:text-3xl mb-0" : "text-3xl sm:text-5xl mb-3"}`}
      >
        B2B Campaign Details
      </motion.h1>

      <AnimatePresence>
        {!isCompact && (
          <motion.p
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0, margin: 0 }}
            transition={{ duration: 0.3 }}
            className="text-slate-600 font-medium text-base sm:text-lg max-w-2xl z-10 leading-relaxed overflow-hidden"
          >
            Craft a bespoke, high-impact roadmap for your next B2B campaign. Let's unlock your event's full potential and align our objectives perfectly. ✨
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MultiSelectDropdown({ 
  options, 
  selected, 
  onChange,
  placeholder
}: { 
  options: string[], 
  selected: string[], 
  onChange: (val: string) => void,
  placeholder: string
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-20">
      <motion.button
        whileTap={{ scale: 0.99 }}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white/80 border-2 rounded-2xl p-5 text-left flex items-center justify-between transition-all backdrop-blur-md shadow-sm
          ${isOpen ? 'border-indigo-400 bg-white ring-4 ring-indigo-50' : 'border-slate-200 hover:border-indigo-300 hover:bg-white'}
        `}
      >
        <div className="flex flex-wrap gap-2 pr-4">
          {selected.length > 0 ? (
            selected.map(item => (
              <span key={item} className="inline-flex items-center px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-indigo-700 text-sm font-bold shadow-sm">
                {item}
              </span>
            ))
          ) : (
            <span className="text-slate-400 text-base font-medium">{placeholder}</span>
          )}
        </div>
        <ChevronDown size={20} className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-500' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute z-20 w-full mt-3 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <div className="max-h-72 overflow-y-auto p-3 custom-scrollbar">
                {options.map((opt) => {
                  const isSelected = selected.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => onChange(opt)}
                      className={`w-full flex items-center px-4 py-3.5 rounded-xl text-left transition-all mb-1.5
                        ${isSelected ? 'bg-indigo-50 text-indigo-900 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                      `}
                    >
                      <div className={`shrink-0 mr-4 w-6 h-6 rounded-[8px] border-2 flex items-center justify-center transition-colors
                        ${isSelected ? 'bg-gradient-to-br from-indigo-500 to-purple-500 border-transparent text-white' : 'border-slate-300'}
                      `}>
                        {isSelected && <Check size={14} strokeWidth={4} />}
                      </div>
                      <span className="text-sm font-bold">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function MultiSelectDropdownGrouped({ 
  optionsGrouped, 
  selected, 
  onChange,
  placeholder
}: { 
  optionsGrouped: { group: string, options: string[] }[], 
  selected: string[], 
  onChange: (val: string) => void,
  placeholder: string
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-20">
      <motion.button
        whileTap={{ scale: 0.99 }}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white/80 border-2 rounded-2xl p-5 text-left flex items-center justify-between transition-all backdrop-blur-md shadow-sm
          ${isOpen ? 'border-indigo-400 bg-white ring-4 ring-indigo-50' : 'border-slate-200 hover:border-indigo-300 hover:bg-white'}
        `}
      >
        <div className="flex flex-wrap gap-2 pr-4">
          {selected.length > 0 ? (
            selected.map(item => (
              <span key={item} className="inline-flex items-center px-3 py-1.5 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-indigo-700 text-sm font-bold shadow-sm">
                {item}
              </span>
            ))
          ) : (
            <span className="text-slate-400 text-base font-medium">{placeholder}</span>
          )}
        </div>
        <ChevronDown size={20} className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-500' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute z-20 w-full mt-3 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <div className="max-h-80 overflow-y-auto p-3 custom-scrollbar">
                {optionsGrouped.map((group) => (
                  <div key={group.group} className="mb-4 last:mb-0">
                    <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-50/50 rounded-lg mb-1">
                      {group.group}
                    </div>
                    {group.options.map((opt) => {
                      const isSelected = selected.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => onChange(opt)}
                          className={`w-full flex items-center px-4 py-3.5 rounded-xl text-left transition-all mb-1.5
                            ${isSelected ? 'bg-indigo-50 text-indigo-900 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                          `}
                        >
                          <div className={`shrink-0 mr-4 w-6 h-6 rounded-[8px] border-2 flex items-center justify-center transition-colors
                            ${isSelected ? 'bg-gradient-to-br from-indigo-500 to-purple-500 border-transparent text-white' : 'border-slate-300'}
                          `}>
                            {isSelected && <Check size={14} strokeWidth={4} />}
                          </div>
                          <span className="text-sm font-bold">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
