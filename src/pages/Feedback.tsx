/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Star, MessageSquare, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Feedback = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    order: '',
    feedback: '',
    recommend: ''
  });
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.feedback || rating === 0) {
      setError(true);
      return;
    }
    navigate('/thank-you');
  };

  const ratingLabels = ['Subpar', 'Adequate', 'Satisfactory', 'Commendable', 'Exquisite'];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Cinematic Header */}
      <section className="relative pt-48 pb-32 bg-white border-b border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-amber-600 text-[10px] uppercase tracking-[0.5em] font-black mb-8 block">Member Feedback</span>
            <h1 className="text-7xl md:text-9xl font-display italic text-stone-900 tracking-tighter leading-none mb-10 text-balance">
              Write <span className="text-stone-300">Our</span> Legacy.
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 font-serif italic max-w-2xl mx-auto leading-relaxed">
              Every word you share help us sharpen our craft. We honor your honesty as much as your patronage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6">
          <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            onSubmit={handleSubmit} 
            className="space-y-24"
          >
            {/* Rating Section */}
            <div className="space-y-12">
               <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
                  <span className="text-[10px] font-black text-stone-300">01</span>
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">The Evaluation</h3>
               </div>
               <div className="flex flex-col items-center gap-8 py-10 bg-white rounded-[3rem] border border-stone-100 shadow-xl">
                  <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 transition-all hover:scale-110 active:scale-95"
                      >
                        <Star 
                          size={48} 
                          fill={(hoverRating || rating) >= star ? "#991b1b" : "none"} 
                          stroke={(hoverRating || rating) >= star ? "#991b1b" : "#d6d3d1"}
                          strokeWidth={1}
                        />
                      </button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    {(hoverRating || rating) > 0 && (
                      <motion.span 
                        key={hoverRating || rating}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-900 font-display italic text-2xl"
                      >
                        {ratingLabels[(hoverRating || rating) - 1]}
                      </motion.span>
                    )}
                  </AnimatePresence>
               </div>
            </div>

            {/* Context Section */}
            <div className="space-y-12">
               <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
                  <span className="text-[10px] font-black text-stone-300">02</span>
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Context</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                     <label className="text-[10px] uppercase tracking-widest font-black text-stone-900">Name (Optional)</label>
                     <input 
                       type="text" 
                       placeholder="Stay anonymous if you wish..."
                       className="w-full bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-4 text-lg font-serif italic placeholder:text-stone-300 transition-all"
                       value={formData.name}
                       onChange={(e) => setFormData({...formData, name: e.target.value})}
                     />
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] uppercase tracking-widest font-black text-stone-900">Date of Experience</label>
                     <input 
                       type="date"
                       className="w-full bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-4 text-sm font-bold uppercase tracking-widest transition-all"
                       value={formData.date}
                       onChange={(e) => setFormData({...formData, date: e.target.value})}
                     />
                  </div>
               </div>
            </div>

            {/* Narrative Section */}
            <div className="space-y-12">
               <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
                  <span className="text-[10px] font-black text-stone-300">03</span>
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Narrative</h3>
               </div>
               <div className="space-y-10">
                  <div className="space-y-4">
                     <label className="text-[10px] uppercase tracking-widest font-black text-stone-900">Selections Sampled</label>
                     <input 
                       type="text" 
                       placeholder="What defined your evening? e.g. Mutton Biryani..."
                       className="w-full bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-4 text-lg font-serif italic placeholder:text-stone-300 transition-all"
                       value={formData.order}
                       onChange={(e) => setFormData({...formData, order: e.target.value})}
                     />
                  </div>
                  <div className="space-y-4">
                     <label className="text-[10px] uppercase tracking-widest font-black text-stone-900">Your Observations <span className="text-red-900">*</span></label>
                     <textarea 
                       placeholder="Detail your thoughts on taste, atmosphere, and service..."
                       className={`w-full bg-transparent border-b ${error && !formData.feedback ? 'border-red-900' : 'border-stone-200'} focus:border-stone-900 focus:outline-none py-4 text-lg font-serif italic placeholder:text-stone-300 h-32 resize-none transition-all`}
                       value={formData.feedback}
                       onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                     />
                  </div>
               </div>
            </div>

            {/* Recommendation Section */}
            <div className="space-y-12">
               <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
                  <span className="text-[10px] font-black text-stone-300">04</span>
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Final Verdict</h3>
               </div>
               <div className="flex gap-16 justify-center">
                  {['Satisfied', 'Room for Growth'].map(option => (
                    <label key={option} className="flex flex-col items-center gap-4 cursor-pointer group">
                       <input 
                         type="radio" 
                         className="hidden" 
                         name="recommend" 
                         value={option}
                         onChange={(e) => setFormData({...formData, recommend: e.target.value})}
                       />
                       <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${formData.recommend === option ? 'border-red-900 bg-red-900 text-white shadow-xl' : 'border-stone-200 text-stone-300 group-hover:border-stone-400'}`}>
                          <MessageSquare size={16} strokeWidth={1} />
                       </div>
                       <span className={`text-[10px] uppercase tracking-[0.4em] font-black transition-colors ${formData.recommend === option ? 'text-stone-900' : 'text-stone-400'}`}>{option}</span>
                    </label>
                  ))}
               </div>
            </div>

            <div className="pt-10">
               <button 
                 type="submit" 
                 className="w-full py-6 bg-stone-900 text-white rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] hover:bg-stone-800 transition-all shadow-2xl active:scale-[0.98] group relative overflow-hidden"
               >
                 <span className="relative z-10">Archive Feedback</span>
                 <div className="absolute inset-x-0 bottom-0 h-1 bg-red-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
               </button>
               {error && (!formData.feedback || rating === 0) && (
                 <p className="text-center mt-6 text-red-900 text-[10px] uppercase font-bold tracking-widest animate-pulse">Missing Evaluation or Observations</p>
               )}
            </div>
          </motion.form>
        </div>
      </section>

      {/* Return Home */}
      <section className="py-20 border-t border-stone-100 bg-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <Link to="/" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 hover:text-stone-900 transition-all group">
               <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Sanctuary
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Feedback;
