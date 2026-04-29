/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Clock, RefreshCw } from 'lucide-react';

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white p-12 rounded-3xl shadow-2xl text-center border border-amber-200">
        <div className="w-20 h-20 bg-red-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 animate-pulse">
          <Clock size={40} />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">We’ll Be Right Back</h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
          Lazeez is busy in the kitchen – and updating our website. The site will be back online shortly.
        </p>

        <div className="space-y-6 text-left border-y border-gray-100 py-8 mb-8">
          <p className="text-lg text-gray-700 font-bold flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-900" /> Menu available by phone: <span className="text-red-900">+91 98306 95156</span>
          </p>
          <p className="text-lg text-gray-700 font-bold flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-900" /> Takeaway orders accepted as usual
          </p>
          <p className="text-lg text-gray-700 font-bold flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-900" /> No online reservations during maintenance
          </p>
        </div>

        <p className="text-gray-500 font-medium mb-12 italic">
          Estimated return: By tomorrow, 12:00 PM
        </p>

        <button 
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-xl"
        >
          <RefreshCw size={20} /> Refresh Page
        </button>

        <div className="mt-12 flex justify-center gap-6">
          <a href="tel:+919830695156" className="p-3 bg-red-50 text-red-900 rounded-full hover:bg-red-900 hover:text-white transition-all shadow-sm">
            <Phone size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
