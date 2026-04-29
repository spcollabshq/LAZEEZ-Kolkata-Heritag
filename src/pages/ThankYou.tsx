/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Heart, Home, ArrowRight } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="bg-stone-50 min-h-screen pt-32 flex flex-col items-center justify-center py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl w-full bg-white border border-stone-200 rounded-[3rem] p-12 md:p-24 shadow-2xl relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50 -ml-32 -mb-32" />

        <div className="relative z-10 text-center">
           <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
             <Heart size={32} className="text-white fill-white" />
           </div>
           
           <span className="text-amber-600 text-[10px] uppercase tracking-[0.6em] font-black mb-6 block">Gratitude Received</span>
           <h1 className="text-5xl md:text-7xl font-display italic text-stone-900 tracking-tighter leading-none mb-12">
             Words <span className="text-stone-300">from the</span> Heart.
           </h1>

           <div className="space-y-8 mb-16 text-stone-600 font-serif italic text-xl md:text-2xl leading-relaxed">
              <p>
                Your observations have been archived within our ledger of honors. We cherish your contribution to our shared legacy.
              </p>
           </div>

           <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link 
                to="/" 
                className="w-full md:w-auto px-10 py-5 bg-stone-900 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-stone-800 transition-all shadow-xl"
              >
                Return to Sanctuary
              </Link>
              <Link 
                to="/menu" 
                className="w-full md:w-auto px-10 py-5 border border-stone-200 text-stone-500 rounded-full font-black uppercase tracking-widest text-[10px] hover:border-stone-900 hover:text-stone-900 transition-all flex items-center justify-center gap-4"
              >
                Explore More <ArrowRight size={14} />
              </Link>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYou;
