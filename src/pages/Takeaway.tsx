/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, BookOpen, Clock, BadgeCheck, CreditCard } from 'lucide-react';

const Takeaway = () => {
  const steps = [
    { title: 'Curate your selection from our menu', icon: <BookOpen />, link: '/menu' },
    { title: 'Initiate a call to our concierge at +91 98306 95156', icon: <Phone /> },
    { title: 'Specify your items and desired quantities', icon: <ArrowRight /> },
    { title: 'Receive your final valuation and collection window', icon: <Clock /> },
    { title: 'Arrive at our sanctuary for payment and retrieval', icon: <BadgeCheck /> }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Editorial Header */}
      <section className="relative pt-48 pb-32 bg-stone-900 border-b border-stone-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-amber-400 text-[10px] uppercase tracking-[0.5em] font-black mb-8 block">Off-Site Experience</span>
            <h1 className="text-7xl md:text-9xl font-display italic text-white tracking-tighter leading-none mb-10">
              The <span className="text-stone-500">Collected</span> Feast.
            </h1>
            <p className="text-xl text-stone-400 font-serif italic max-w-2xl mx-auto leading-relaxed">
              Experience the heritage of Lazeez in the comfort of your own home. A streamlined protocol for discerning palates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Protocol Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center mb-24 border-b border-stone-200 pb-10">
             <span className="text-[11px] uppercase tracking-[0.4em] font-black text-stone-400">Ordering Protocol</span>
             <span className="text-[11px] uppercase tracking-[0.4em] font-black text-amber-600 italic">Pre-Order Recommended</span>
          </div>

          <div className="space-y-10 mb-32">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group flex items-center gap-10 p-10 bg-white border border-stone-100 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-700"
              >
                <div className="w-20 h-20 shrink-0 bg-stone-50 border border-stone-100 rounded-[2rem] flex items-center justify-center text-4xl font-display italic text-stone-300 group-hover:bg-red-900 group-hover:text-white transition-all overflow-hidden group-hover:scale-110">
                  {idx + 1}
                </div>
                <div className="flex-1">
                   {step.link ? (
                     <Link to={step.link} className="text-2xl font-display italic text-stone-900 group-hover:text-red-900 transition-colors underline decoration-stone-200 decoration-1 underline-offset-8">
                       {step.title}
                     </Link>
                   ) : (
                     <p className="text-2xl font-display italic text-stone-900">{step.title}</p>
                   )}
                </div>
                <div className="text-stone-200 group-hover:text-amber-600 transition-colors hidden md:block">
                   {step.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Payment Note */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-amber-50/50 p-12 rounded-[3rem] border border-amber-100 flex flex-col md:flex-row items-center gap-10 text-center md:text-left mb-32"
          >
             <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-amber-600 shadow-xl shrink-0">
                <CreditCard size={32} strokeWidth={1} />
             </div>
             <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-amber-900 mb-4">Payment Policy</h4>
                <p className="text-xl font-serif italic text-amber-800 leading-relaxed">
                  We maintain traditional operational standards. Payments are handled personally at our counter during collection via Cash, Card, or UPI.
                </p>
             </div>
          </motion.div>

          {/* Master CTA */}
          <div className="flex flex-col md:flex-row justify-center gap-10">
             <a 
               href="tel:+919830695156" 
               className="px-16 py-8 bg-red-900 text-white rounded-full font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 hover:bg-red-800 transition-all hover:scale-105 shadow-2xl"
             >
                <Phone size={16} /> Initiate Dialing
             </a>
             <Link 
               to="/menu" 
               className="px-16 py-8 border border-stone-900 text-stone-900 rounded-full font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 hover:bg-stone-900 hover:text-white transition-all"
             >
                <BookOpen size={16} /> Examine Menu
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Takeaway;
