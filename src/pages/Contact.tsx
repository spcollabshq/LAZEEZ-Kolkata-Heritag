/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Find & Contact Us</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Address Block */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm space-y-8">
            <div className="flex gap-4">
              <MapPin size={24} className="text-red-900 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Lazeez Restaurant</h2>
                <p className="text-gray-600 leading-relaxed">
                  83B, Chowringhee Road<br />
                  Elgin, Bhowanipore<br />
                  Kolkata – 700071<br />
                  West Bengal, India
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone size={24} className="text-red-900 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Phone</h2>
                <p className="text-red-900 font-bold text-xl">+91 98306 95156</p>
              </div>
            </div>

            <div className="flex gap-4 border-t border-gray-200 pt-8">
              <Clock size={24} className="text-red-900 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Hours</h2>
                <p className="text-gray-600">11:00 AM – 11:00 PM (Open 7 days a week)</p>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl text-amber-800 text-sm font-medium">
              <span className="font-bold">Parking:</span> Street parking available nearby.
            </div>
          </div>

          {/* Map Side */}
          <div className="space-y-6">
            <div className="aspect-square lg:aspect-auto lg:h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center text-center p-8">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white rounded-full shadow-lg mb-6">
                  <MapPin size={48} className="text-red-900" />
                </div>
                <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
                  Google Maps View
                </p>
                <div className="mt-4 text-xs text-gray-400 max-w-xs">
                  83B, Chowringhee Road, Elgin, Kolkata
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 font-medium mb-4">
                We are near the junction of Elgin Road and Chowringhee Road.<br />
                <span className="font-bold">Landmark:</span> Close to the 83B building entrance.
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-red-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-800 transition-all shadow-lg"
              >
                Get Directions on Google Maps <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
