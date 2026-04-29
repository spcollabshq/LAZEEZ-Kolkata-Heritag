/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Phone, ChevronRight, BookOpen, Clock, BadgeCheck, CreditCard } from 'lucide-react';

const Takeaway = () => {
  const steps = [
    { title: 'Browse our full menu', icon: <BookOpen />, link: '/menu' },
    { title: 'Call us at +91 98306 95156', icon: <Phone /> },
    { title: 'Tell us the dish names and quantity', icon: <ChevronRight /> },
    { title: 'We will tell you the total and pickup time', icon: <Clock /> },
    { title: 'Come to the restaurant, pay, and collect', icon: <BadgeCheck /> }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Takeaway & Ordering</h1>
        </header>

        <div className="space-y-6 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-6 p-6 md:p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-red-900 transition-all duration-500">
              <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-white shadow-sm flex items-center justify-center rounded-2xl text-red-900 font-bold text-xl group-hover:bg-red-900 group-hover:text-white transition-all">
                {idx + 1}
              </div>
              <div className="flex-1 text-lg md:text-xl font-bold text-gray-800">
                {step.link ? (
                  <Link to={step.link} className="hover:text-red-900 underline underline-offset-4 decoration-amber-500">{step.title}</Link>
                ) : step.title}
              </div>
              <div className="hidden md:block text-gray-300">
                {step.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 mb-12 flex items-start gap-4">
          <CreditCard size={24} className="text-amber-800 shrink-0 mt-1" />
          <div className="text-amber-800 text-lg">
            <span className="font-bold">Note:</span> We currently do not offer online payment or delivery. All orders are pay-at-pickup by cash or card.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="tel:+919830695156" 
            className="inline-flex items-center justify-center gap-2 bg-red-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-red-800 transition-all shadow-xl shadow-red-900/20"
          >
            <Phone size={24} /> Call Now to Order
          </a>
          <Link 
            to="/menu" 
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-10 py-5 rounded-xl font-bold text-lg hover:border-red-900 hover:text-red-900 transition-all"
          >
            Back to Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Takeaway;
