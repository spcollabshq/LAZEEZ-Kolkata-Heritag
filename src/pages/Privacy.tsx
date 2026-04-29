/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <header className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-900 mb-8 font-medium">
            <ArrowLeft size={16} /> Return to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-green-50 text-green-700 rounded-2xl">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Privacy Policy</h1>
          </div>
        </header>

        <div className="prose prose-lg prose-amber text-gray-700 space-y-8">
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-3 shrink-0" />
              <span>We collect only the information you voluntarily give us (name, phone number, feedback).</span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-3 shrink-0" />
              <span>We will never sell or share your data with third parties.</span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-3 shrink-0" />
              <span>Your phone number is used only to confirm reservations or respond to feedback.</span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-3 shrink-0" />
              <span>This website does not use cookies or tracking tools.</span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-3 shrink-0" />
              <span>For any data-related concerns, call us directly at <span className="font-bold">+91 98306 95156</span>.</span>
            </li>
          </ul>

          <div className="pt-12 border-t border-gray-100">
            <p className="text-sm text-gray-400 italic">Last updated: April 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
