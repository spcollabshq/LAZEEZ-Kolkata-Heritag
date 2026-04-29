/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ExternalLink, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
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
            <span className="text-amber-400 text-[10px] uppercase tracking-[0.5em] font-black mb-8 block">Reach Out</span>
            <h1 className="text-7xl md:text-9xl font-display italic text-white tracking-tighter leading-none mb-10">
              The <span className="text-stone-500">Invitation.</span>
            </h1>
            <p className="text-xl text-stone-400 font-serif italic max-w-2xl mx-auto leading-relaxed">
              Whether you seek a table for a celebration or wish to inquire about our heritage, our doors and ears are always open.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Information Column */}
            <div className="lg:col-span-5 space-y-20">
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center text-stone-300 group-hover:text-red-900 group-hover:border-red-900 transition-all shrink-0">
                    <MapPin size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 mb-4">Location</h3>
                    <p className="text-2xl font-display italic text-stone-900 leading-relaxed">
                      83B, Chowringhee Road<br />
                      Elgin, Bhowanipore<br />
                      Kolkata – 700071
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center text-stone-300 group-hover:text-red-900 group-hover:border-red-900 transition-all shrink-0">
                    <Phone size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 mb-4">Voice</h3>
                    <p className="text-2xl font-display italic text-stone-900 leading-relaxed">+91 98306 95156</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-full border border-stone-200 flex items-center justify-center text-stone-300 group-hover:text-red-900 group-hover:border-red-900 transition-all shrink-0">
                    <Mail size={24} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 mb-4">Email</h3>
                    <p className="text-2xl font-display italic text-stone-900 leading-relaxed">info@lazeezkolkata.com</p>
                  </div>
                </div>
              </div>

              <div className="p-12 bg-white border border-stone-100 rounded-[2.5rem] shadow-2xl">
                 <div className="flex items-center gap-4 mb-8">
                   <Clock size={20} className="text-amber-600" />
                   <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-900">Service Hours</h3>
                 </div>
                 <dl className="space-y-6">
                    <div className="flex justify-between items-end border-b border-stone-50 pb-4">
                       <dt className="text-stone-400 font-serif italic">Monday – Sunday</dt>
                       <dd className="text-stone-900 font-mono font-bold text-sm uppercase">11:00 AM – 11:00 PM</dd>
                    </div>
                    <div className="flex justify-between items-end border-b border-stone-50 pb-4">
                       <dt className="text-stone-400 font-serif italic">Kitchen Closing</dt>
                       <dd className="text-stone-900 font-mono font-bold text-sm uppercase">10:30 PM</dd>
                    </div>
                 </dl>
              </div>
            </div>

            {/* Visual/Map Column */}
            <div className="lg:col-span-7 space-y-12">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative group aspect-[16/10] lg:aspect-auto lg:h-full rounded-[3rem] overflow-hidden bg-stone-200 shadow-3xl"
               >
                  <img 
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1600" 
                    alt="Kolkata Street Heritage"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <a 
                       href="https://maps.google.com" 
                       target="_blank" 
                       rel="noreferrer"
                       className="px-10 py-5 bg-white text-stone-900 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center gap-4 hover:bg-amber-50 transition-all"
                     >
                        Initiate Navigation <ExternalLink size={16} />
                     </a>
                  </div>

                  <div className="absolute bottom-10 left-10 text-white flex flex-col">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-2">Neighborhood</span>
                     <span className="text-3xl font-display italic">Bhowanipore, Kolkata</span>
                  </div>
               </motion.div>

               <div className="flex justify-between items-center px-10">
                  <div className="max-w-[200px]">
                     <p className="text-[10px] uppercase font-black text-stone-400 tracking-widest">Notable Landmark</p>
                     <p className="text-sm font-serif italic text-stone-600">Near Elgin Road crossing, behind the 83B building.</p>
                  </div>
                  <div className="w-12 h-px bg-stone-200" />
                  <a href="tel:+919830695156" className="text-red-900 text-[10px] uppercase font-black tracking-widest hover:gap-4 transition-all flex items-center gap-2">
                     Speak with Concierge <ArrowRight size={14} />
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
