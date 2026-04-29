/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';

const Confirmation = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  
  const name = params.get('name') || 'Honored Guest';
  const date = params.get('date');
  const time = params.get('time');
  const guests = params.get('guests');
  const phone = params.get('phone');

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
             <CheckCircle2 size={32} className="text-white" />
           </div>
           
           <span className="text-amber-600 text-[10px] uppercase tracking-[0.6em] font-black mb-6 block">Transmission Secured</span>
           <h1 className="text-5xl md:text-7xl font-display italic text-stone-900 tracking-tighter leading-none mb-12">
             Await <span className="text-stone-300">Our</span> Call.
           </h1>

           <div className="space-y-8 mb-16 text-stone-600 font-serif italic text-xl md:text-2xl leading-relaxed">
              <p>
                Salutations, <span className="text-stone-900 font-bold underline decoration-stone-200">{name}</span>. Your request for a table of <span className="text-stone-900 font-bold">{guests}</span> on <span className="text-stone-900 font-bold">{date}</span> at <span className="text-stone-900 font-bold">{time}</span> has been placed within our ledger.
              </p>
              <div className="pt-8 border-t border-stone-100">
                <p className="text-sm uppercase tracking-widest font-black text-stone-400 mb-4 not-italic">Verifying Contact</p>
                <p className="text-stone-500">
                  We will contact you shortly at <span className="text-stone-900 font-bold font-mono">{phone}</span> to finalize your sanctuary.
                </p>
              </div>
           </div>

           <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link 
                to="/" 
                className="w-full md:w-auto px-10 py-5 bg-stone-900 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-stone-800 transition-all shadow-xl"
              >
                Return to Sanctuary
              </Link>
              <Link 
                to="/reserve" 
                className="w-full md:w-auto px-10 py-5 border border-stone-200 text-stone-500 rounded-full font-black uppercase tracking-widest text-[10px] hover:border-stone-900 hover:text-stone-900 transition-all"
              >
                Modify Arrangement
              </Link>
           </div>
        </div>
      </motion.div>

      <div className="mt-12 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black text-stone-400">
         <Phone size={14} /> Urgent Concern? Call <span className="text-red-900">+91 98306 95156</span>
      </div>
    </div>
  );
};

export default Confirmation;
