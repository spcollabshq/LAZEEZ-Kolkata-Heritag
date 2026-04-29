/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Story = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Editorial Header */}
      <section className="relative pt-48 pb-32 bg-white border-b border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-amber-600 text-[10px] uppercase tracking-[0.5em] font-black mb-8 block">The Narrative</span>
            <h1 className="text-7xl md:text-9xl font-display italic text-stone-900 tracking-tighter leading-none mb-10 text-balance">
              Decades <span className="text-stone-300">of</span> Soul.
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 font-serif italic max-w-2xl mx-auto leading-relaxed">
              From a humble hearth in Elgin to a guardian of Kolkata's culinary heritage, our journey is etched in spice and tradition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-900">Chapter I: The Origin</span>
              <h2 className="text-5xl md:text-6xl font-display italic text-stone-900 tracking-tight leading-none">The Spark in <span className="text-stone-400">Elgin.</span></h2>
              <p className="text-lg text-stone-600 leading-loose font-serif italic">
                Lazeez was born from a simple obsession – to preserve the fading art of authentic Mughlai cooking. In 1998, we lit our first tandoor on Elgin Road with a single promise: to never compromise on the integrity of taste.
              </p>
              <div className="p-10 bg-white border border-stone-100 rounded-[2rem] shadow-xl italic text-2xl font-display text-red-900 leading-relaxed">
                “We didn't just build a restaurant; we built a sanctuary for the senses.”
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000"
            >
              <img 
                src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=1200" 
                alt="Heritage Kitchen Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000 lg:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200" 
                alt="Chef Crafting Flavors"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12 lg:order-1"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-600">Chapter II: The Craft</span>
              <h2 className="text-5xl md:text-6xl font-display italic text-stone-900 tracking-tight leading-none">Artistry in <span className="text-stone-400">Motion.</span></h2>
              <p className="text-lg text-stone-600 leading-loose font-serif italic">
                Our recipes are ancient secrets, passed down like heirloom jewelry. Every "Handi" of biryani is a testament to patience, slow-cooked over low flames to allow the meat and spices to form an inseparable bond.
              </p>
              <ul className="space-y-6">
                {['Hand-Ground Spice Blends', 'Sustainably Sourced Meats', 'Traditional Clay Oven Techniques'].map((point, i) => (
                  <li key={i} className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-black text-stone-400">
                    <div className="w-2 h-2 rounded-full bg-red-900" /> {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 bg-stone-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-6xl md:text-8xl font-display italic mb-12 text-stone-300">The Lazeez <span className="text-red-600">Ethos</span></h2>
            <p className="text-xl md:text-3xl font-serif italic leading-relaxed text-stone-400 mb-16">
              To honor the heritage of our city, we serve not just food, but memories. Every guest is treated as family, and every plate is served with honor.
            </p>
            <Link 
              to="/menu" 
              className="inline-flex items-center gap-4 px-16 py-8 bg-white text-stone-900 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:bg-amber-50 transition-all hover:scale-105"
            >
              Experience the Craft <ArrowRight size={16} />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Story;
