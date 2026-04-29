/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Heart, Home, ArrowRight } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="py-32 bg-white min-h-[70vh] flex items-center text-center">
      <div className="max-w-xl mx-auto px-4">
        <div className="w-20 h-20 bg-red-50 text-red-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner animate-pulse">
          <Heart size={40} fill="currentColor" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Thank You!</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          Your feedback has been sent directly to the Lazeez team. We take every comment seriously – whether praise or a suggestion for improvement. We’ll work to make your next visit even better.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 bg-red-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-800 transition-all shadow-lg"
          >
            <Home size={20} /> Back to Home
          </Link>
          <Link 
            to="/menu" 
            className="inline-flex items-center justify-center gap-2 text-red-900 font-bold hover:gap-3 transition-all"
          >
            See Our Menu Again <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
