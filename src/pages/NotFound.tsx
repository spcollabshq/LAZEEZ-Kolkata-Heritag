/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Home, Search, Phone } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="py-32 bg-white min-h-[70vh] flex items-center text-center">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-9xl font-black text-gray-100 mb-8 select-none">404</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Oops – Lost Your Way?</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          The page you’re looking for might have been moved or never existed. Don’t worry –<br /> <span className="font-bold text-red-900">our biryani is still here.</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 bg-red-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-800 transition-all shadow-lg"
          >
            <Home size={20} /> Go to Homepage
          </Link>
          <div className="flex gap-4 sm:flex-col lg:flex-row">
            <Link to="/menu" className="inline-flex items-center gap-2 text-gray-600 font-bold hover:text-red-900 px-4 py-4">
              <Search size={18} /> View Menu
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 text-gray-600 font-bold hover:text-red-900 px-4 py-4">
              <Phone size={18} /> Contact Us
            </Link>
          </div>
        </div>
        
        <p className="text-xs text-gray-300 font-mono uppercase tracking-[0.3em]">Error 404 – Page not found.</p>
      </div>
    </div>
  );
};

export default NotFound;
