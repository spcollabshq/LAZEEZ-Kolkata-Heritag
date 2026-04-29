/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <header className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-900 mb-8 font-medium">
            <ArrowLeft size={16} /> Return to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-50 text-blue-700 rounded-2xl">
              <FileText size={32} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Terms of Use</h1>
          </div>
        </header>

        <div className="prose prose-lg prose-amber text-gray-700 space-y-8">
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-red-900 mt-3 shrink-0" />
              <span>Menu prices are subject to change without notice. The website menu is updated periodically.</span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-red-900 mt-3 shrink-0" />
              <span>Reservation requests are not automatically confirmed – you will receive a call from us for confirmation.</span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-red-900 mt-3 shrink-0" />
              <span>Lazeez reserves the right to refuse service to any guest for valid reasons.</span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-2 h-2 rounded-full bg-red-900 mt-3 shrink-0" />
              <span>By using this website, you agree that we are not liable for errors in third-party mapping or phone services.</span>
            </li>
          </ul>

          <div className="pt-12 border-t border-gray-100 font-medium text-gray-500">
            For further clarification, please visit us at 83B, Chowringhee Road, Elgin, Kolkata.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
