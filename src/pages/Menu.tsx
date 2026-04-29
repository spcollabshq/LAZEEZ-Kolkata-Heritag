/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';
import { Phone, ChevronLeft } from 'lucide-react';

const Menu = () => {
  const categories = [
    { title: 'Starters', type: 'starter', description: 'Bites of tradition to awaken the senses' },
    { title: 'Tandoori', type: 'tandoor', description: 'Fire-kissed clay oven masterpieces' },
    { title: 'Mughlai Mains', type: 'main', description: 'Rich gravies perfected over generations' },
    { title: 'Dum Biryani', type: 'biryani', description: 'Fragrant grains and tender meats cooked in clay pots' },
    { title: 'Chinese Highlights', type: 'chinese', description: 'Kolkata-style stir-fries with local heart' },
    { title: 'Grains & Sweets', type: ['bread', 'dessert', 'beverage'], description: 'Complementary Breads, Desserts, and Refreshments' },
  ];

  const getItemsForCategory = (type: string | string[]) => {
    if (Array.isArray(type)) {
      return MENU_ITEMS.filter(item => type.includes(item.category));
    }
    return MENU_ITEMS.filter(item => item.category === type);
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Editorial Header */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col md:flex-row justify-between items-end gap-10"
          >
            <div className="max-w-2xl">
              <span className="text-amber-600 text-[10px] uppercase tracking-[0.6em] font-black mb-6 block">The Collection</span>
              <h1 className="text-7xl md:text-9xl font-display italic text-stone-900 tracking-tighter leading-none mb-10">
                Taste <span className="text-stone-300">the</span> Origin.
              </h1>
              <p className="text-xl md:text-2xl text-stone-500 font-serif italic max-w-lg mb-10">
                A meticulously curated atlas of flavors, honoring the rich culinary heritage of the Nawabs and the spirit of Kolkata.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-100 overflow-hidden shadow-xl">
                      <img src={`https://i.pravatar.cc/40?u=${i}`} alt="Avatar" />
                    </div>
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 italic">Highly recommended by 10k+ Regulars</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end text-right hidden lg:flex">
               <span className="text-4xl font-display italic text-red-900 leading-none mb-2 italic">Dum Biryani</span>
               <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Our Signature Craft</span>
            </div>
          </motion.div>
        </div>
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
           <img src="https://www.transparenttextures.com/patterns/oriental-tiles.png" alt="" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center mb-24 border-b border-stone-200 pb-10">
             <span className="text-[11px] uppercase tracking-[0.4em] font-black text-stone-400">Dish Selection</span>
             <span className="text-[11px] uppercase tracking-[0.4em] font-black text-amber-600">All prices in Indian Rupees (₹)</span>
          </div>

          <div className="space-y-40">
            {categories.map((cat, idx) => (
              <motion.div 
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                {/* Section Index */}
                <div className="absolute -left-20 top-0 text-7xl font-display italic text-stone-100 hidden xl:block">
                  0{idx + 1}
                </div>

                <div className="mb-16">
                  <h2 className="text-4xl md:text-5xl font-display italic text-stone-900 mb-4 tracking-tight leading-none">{cat.title}</h2>
                  <p className="text-stone-400 text-sm italic tracking-wide uppercase font-medium">{cat.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-14">
                  {getItemsForCategory(cat.type).map((item) => (
                    <div 
                      key={item.id} 
                      className="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-stone-100 pb-10 hover:border-red-900/20 transition-all"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          {item.featured && (
                            <span className="text-[9px] uppercase tracking-widest font-black bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Featured</span>
                          )}
                          <h3 className="text-2xl font-display italic text-stone-900 group-hover:text-red-900 transition-colors tracking-tight">{item.name}</h3>
                        </div>
                        <p className="text-stone-500 text-sm font-serif italic max-w-xl group-hover:text-stone-800 transition-colors">{item.description}</p>
                      </div>
                      <div className="flex items-center gap-8 text-right">
                        <div className="text-2xl font-mono text-stone-400 line-through text-sm opacity-50 hidden group-hover:block transition-all">₹{Math.floor(item.price * 1.2)}</div>
                        <div className="text-2xl font-mono font-bold text-stone-900 bg-stone-100 group-hover:bg-red-900 group-hover:text-white transition-all px-6 py-3 rounded-2xl">
                          ₹{item.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special Requests */}
          <div className="mt-40 border-t-2 border-double border-stone-200 pt-16 flex flex-col items-center text-center">
             <div className="w-16 h-16 bg-red-900 text-white rounded-full flex items-center justify-center mb-8 shadow-xl">
               <Phone size={24} />
             </div>
             <h3 className="text-3xl font-display italic text-stone-900 mb-6">Bespoke Catering & Large Orders</h3>
             <p className="text-stone-500 max-w-md italic mb-10 text-lg">
               Planning a grand event? Allow us to tailor a menu that perfectly aligns with your celebration.
             </p>
             <a href="tel:+919830695156" className="px-10 py-5 border border-stone-900 text-stone-900 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-stone-900 hover:text-white transition-all">
               Call Our Concierge
             </a>
          </div>
        </div>
      </section>

      {/* Tax Disclaimer */}
      <footer className="py-20 bg-stone-100 text-center">
         <span className="text-[9px] uppercase tracking-[0.5em] font-black text-stone-400">Prices are inclusive of all taxes • No hidden charges</span>
      </footer>
    </div>
  );
};

export default Menu;
