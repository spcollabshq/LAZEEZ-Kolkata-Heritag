/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowLeft, UserCheck, Phone } from 'lucide-react';

const Accessibility = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <header className="mb-16 text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-amber-50 text-amber-900 rounded-full">
              <UserCheck size={48} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Accessibility at Lazeez</h1>
        </header>

        <div className="prose prose-lg prose-amber text-gray-700 max-w-none space-y-12">
          <p className="text-xl text-center font-medium leading-relaxed max-w-2xl mx-auto">
            We are committed to making our website usable for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-gray-100">
            <div className="text-center">
              <div className="font-bold text-red-900 mb-2 uppercase tracking-widest text-xs">Structure</div>
              <p className="text-sm">Semantic HTML and clear headings</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-red-900 mb-2 uppercase tracking-widest text-xs">Visuals</div>
              <p className="text-sm">Alternative text for all images</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-red-900 mb-2 uppercase tracking-widest text-xs">Navigation</div>
              <p className="text-sm">Keyboard-navigable menus and buttons</p>
            </div>
          </div>

          <div className="bg-red-900 text-white p-8 md:p-12 rounded-3xl text-center shadow-2xl space-y-6">
            <p className="text-xl leading-relaxed italic">
              "If you experience any difficulty accessing content, please call us at <span className="font-bold underline decoration-amber-500">+91 98306 95156</span> and we will help you place an order or make a reservation over the phone."
            </p>
            <a 
              href="tel:+919830695156" 
              className="inline-flex items-center gap-2 bg-white text-red-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl"
            >
              <Phone size={20} /> Call Now for Support
            </a>
          </div>

          <div className="text-center pt-8">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-900 font-bold transition-colors">
              <ArrowLeft size={16} /> Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
