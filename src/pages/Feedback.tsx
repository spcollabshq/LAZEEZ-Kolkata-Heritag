/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const Feedback = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    order: '',
    feedback: '',
    recommend: ''
  });
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.feedback || rating === 0) {
      setError(true);
      return;
    }
    navigate('/thank-you');
  };

  const ratingLabels = ['Poor', 'Average', 'Good', 'Very Good', 'Excellent'];

  return (
    <div className="py-24 bg-amber-50/20 min-h-screen">
      <div className="max-w-xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Your Feedback Helps Us Grow</h1>
          <p className="text-lg text-gray-600">Good or bad – tell us honestly. We read every message.</p>
        </header>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit} 
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Name (optional)</label>
              <input 
                type="text" 
                placeholder="Your name (or “Anonymous”)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-900 focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Date of Visit (optional)</label>
              <input 
                type="date"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-900 focus:outline-none"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-4 text-center">Rating (required)</label>
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 transition-transform active:scale-90"
                  >
                    <Star 
                      size={40} 
                      fill={(hoverRating || rating) >= star ? "#fbbf24" : "none"} 
                      stroke={(hoverRating || rating) >= star ? "#fbbf24" : "#d1d5db"}
                      strokeWidth={2}
                    />
                  </button>
                ))}
              </div>
              {(hoverRating || rating) > 0 && (
                <span className="text-amber-600 font-bold uppercase tracking-widest text-sm animate-pulse">
                  {ratingLabels[(hoverRating || rating) - 1]}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">What did you order? (optional)</label>
            <input 
              type="text" 
              placeholder="e.g., Mutton Biryani and Fish Finger"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-900 focus:outline-none"
              value={formData.order}
              onChange={(e) => setFormData({...formData, order: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Your Feedback <span className="text-red-900">*</span></label>
            <textarea 
              placeholder="Tell us about the food quality, service speed, cleanliness, or anything else…"
              className={`w-full px-4 py-3 rounded-xl border ${error && !formData.feedback ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-red-900 focus:outline-none h-32 resize-none`}
              value={formData.feedback}
              onChange={(e) => setFormData({...formData, feedback: e.target.value})}
            />
            {error && (!formData.feedback || rating === 0) && <p className="text-red-500 text-xs mt-2 font-medium">Please write your feedback and provide a rating before sending.</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-4">Would you recommend us to a friend?</label>
            <div className="flex gap-8">
              {['Yes', 'No'].map(option => (
                <label key={option} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.recommend === option ? 'border-red-900 bg-red-900' : 'border-gray-300'}`}>
                    {formData.recommend === option && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                  </div>
                  <input 
                    type="radio" 
                    className="hidden" 
                    name="recommend" 
                    value={option}
                    onChange={(e) => setFormData({...formData, recommend: e.target.value})}
                  />
                  <span className={`text-lg font-medium transition-colors ${formData.recommend === option ? 'text-red-900' : 'text-gray-500'}`}>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-red-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-800 transition-all shadow-lg active:scale-[0.98]"
          >
            Send Feedback
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Feedback;
