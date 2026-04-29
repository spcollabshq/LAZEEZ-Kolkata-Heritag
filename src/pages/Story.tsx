/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Story = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Our Story – Decades of Flavor</h1>
          <p className="text-xl text-amber-600 font-medium tracking-wide">From a small kitchen to a beloved Elgin institution</p>
        </header>

        <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=1200" 
            alt="Interior of an authentic restaurant kitchen"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg prose-amber mx-auto text-gray-700 leading-relaxed space-y-8 text-lg">
          <p>
            Lazeez was born from a simple idea – to serve home-style Mughlai and North Indian food that never compromises on taste. For years, we’ve been a quiet favorite among Kolkata’s food lovers. Our recipes are handed down, our spices are freshly ground, and our biryani is still made in small batches for that authentic aroma.
          </p>
          <p>
            We believe that good food brings people together. Whether you’re here for a quick lunch or a long family dinner, you’ll always find a warm smile and a full plate.
          </p>
          
          <div className="py-12 px-8 bg-amber-50 rounded-3xl border-l-8 border-red-900 my-12 italic text-2xl font-medium text-amber-900">
            “Food cooked with care – always.”
          </div>

          <div className="flex justify-center pt-8">
            <Link 
              to="/menu" 
              className="inline-flex items-center gap-2 bg-red-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-800 transition-all shadow-xl shadow-red-900/20"
            >
              See What We Serve <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
