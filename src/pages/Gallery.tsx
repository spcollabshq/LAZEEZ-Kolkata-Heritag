/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Utensils, Home as HomeIcon, Zap, X } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All', icon: Camera },
  { id: 'food', label: 'Our signature dishes', icon: Utensils },
  { id: 'ambiance', label: 'Atmosphere', icon: HomeIcon },
  { id: 'kitchen', label: 'Behind the scenes', icon: Zap },
];

const images = [
  {
    url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    caption: 'Chicken Reshmi Butter Masala – creamy perfection',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=800',
    caption: 'Mutton Biryani – our signature dish',
    category: 'food'
  },
  {
    url: '/regenerated_image_1777463602000.png',
    caption: 'Handi Mutton Biryani',
    category: 'food'
  },
  {
    url: '/regenerated_image_1777463594291.png',
    caption: 'Golden Fish Fingers',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1589187151032-573a91317445?auto=format&fit=crop&q=80&w=800',
    caption: 'Crispy Starter Plate',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    caption: 'Chicken Tikka Kebab – straight from the tandoor',
    category: 'food'
  },
  {
    url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800',
    caption: 'Lazeez dining area – simple and welcoming',
    category: 'ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
    caption: 'Evening warmth at Lazeez',
    category: 'ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
    caption: 'The heart of our kitchen',
    category: 'kitchen'
  },
  {
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    caption: 'Authentic preparation',
    category: 'kitchen'
  },
  {
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    caption: 'Freshly prepared Naan',
    category: 'food'
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Editorial Header */}
      <section className="relative pt-48 pb-32 bg-stone-900 border-b border-stone-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale pointer-events-none">
           <img src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=1600" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-amber-400 text-[10px] uppercase tracking-[0.5em] font-black mb-8 block">Visual Archive</span>
            <h1 className="text-7xl md:text-9xl font-display italic text-white tracking-tighter leading-none mb-10">
              The <span className="text-stone-500">Living</span> Lens.
            </h1>
            <p className="text-xl text-stone-400 font-serif italic max-w-2xl mx-auto leading-relaxed">
              A cinematic documentation of our culinary journey, the warmth of our hearth, and the meticulous craft that defines every plate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Refined Filter Bar */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-24 border-b border-stone-200 pb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative py-2 text-[10px] uppercase tracking-[0.3em] font-black transition-all ${
                  activeCategory === cat.id 
                    ? 'text-red-900' 
                    : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute -bottom-[49px] left-0 right-0 h-0.5 bg-red-900 rounded-full z-10"
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, idx) => (
                <motion.div 
                  key={img.url}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  onClick={() => setSelectedImage(img.url)}
                  className="group relative cursor-zoom-in"
                >
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-stone-100 shadow-2xl transition-transform duration-700 hover:-translate-y-2">
                    <img 
                      src={img.url} 
                      alt={img.caption}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                      <p className="text-white font-display italic text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{img.caption}</p>
                      <p className="text-amber-400 text-[9px] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{img.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-20"
          >
            <motion.button 
              className="absolute top-10 right-10 text-white/30 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} strokeWidth={1} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full aspect-video"
            >
              <img 
                src={selectedImage}
                alt="Gallery Preview"
                className="w-full h-full object-contain rounded-3xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
