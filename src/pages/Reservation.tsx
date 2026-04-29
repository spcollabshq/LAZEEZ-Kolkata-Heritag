/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { Info, Calendar, Clock, Users, ArrowLeft } from 'lucide-react';

const Reservation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '7:00 PM',
    guests: '4',
    requests: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number.';
    }
    if (!formData.date) newErrors.date = 'Date is required.';
    else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) newErrors.date = 'Please select a future date.';
    }
    
    const guestNum = parseInt(formData.guests);
    if (isNaN(guestNum) || guestNum < 1 || guestNum > 8) {
      newErrors.guests = 'Number of guests must be between 1 and 8.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const queryParams = new URLSearchParams(formData).toString();
      navigate(`/confirmation?${queryParams}`);
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Cinematic Header */}
      <section className="relative pt-48 pb-24 bg-white border-b border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
           >
             <span className="text-amber-600 text-[10px] uppercase tracking-[0.6em] font-black mb-8 block">Inquiry & Placement</span>
             <h1 className="text-7xl md:text-9xl font-display italic text-stone-900 tracking-tighter leading-none mb-10">
               Reserve <span className="text-stone-300">Your</span> Seat.
             </h1>
             <p className="text-xl md:text-2xl text-stone-500 font-serif italic max-w-2xl mx-auto">
               Secure a moment of heritage. Each reservation is a commitment to excellence, prepared specifically for your arrival.
             </p>
           </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-2xl mx-auto px-6">
        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit} 
          className="space-y-16"
        >
          {/* Identity Section */}
          <div className="space-y-10 group">
             <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
                <span className="text-[10px] font-black text-stone-300">01</span>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Personal Identity</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                   <label className="text-[10px] uppercase tracking-widest font-black text-stone-900">Full Name</label>
                   <input 
                     type="text" 
                     placeholder="e.g., Anjan Chatterjee"
                     className={`w-full bg-transparent border-b ${errors.name ? 'border-red-900' : 'border-stone-200'} focus:border-stone-900 focus:outline-none py-4 text-lg font-serif italic placeholder:text-stone-300 transition-all`}
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                   />
                   {errors.name && <p className="text-red-900 text-[10px] uppercase font-bold tracking-widest">{errors.name}</p>}
                </div>
                <div className="space-y-4">
                   <label className="text-[10px] uppercase tracking-widest font-black text-stone-900">Phone Contact</label>
                   <input 
                     type="tel" 
                     placeholder="e.g., 98306XXXXX"
                     className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-900' : 'border-stone-200'} focus:border-stone-900 focus:outline-none py-4 text-lg font-serif italic placeholder:text-stone-300 transition-all`}
                     value={formData.phone}
                     onChange={(e) => setFormData({...formData, phone: e.target.value})}
                   />
                   {errors.phone && <p className="text-red-900 text-[10px] uppercase font-bold tracking-widest">{errors.phone}</p>}
                </div>
             </div>
          </div>

          {/* Schedule Section */}
          <div className="space-y-10">
             <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
                <span className="text-[10px] font-black text-stone-300">02</span>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Scheduling</h3>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="space-y-4">
                   <label className="text-[10px] uppercase tracking-widest font-black text-stone-900 flex items-center gap-2"><Calendar size={12} /> Date</label>
                   <input 
                     type="date"
                     className={`w-full bg-transparent border-b ${errors.date ? 'border-red-900' : 'border-stone-200'} focus:border-stone-900 focus:outline-none py-4 text-sm font-bold uppercase tracking-widest transition-all`}
                     value={formData.date}
                     onChange={(e) => setFormData({...formData, date: e.target.value})}
                   />
                   {errors.date && <p className="text-red-900 text-[10px] uppercase font-bold tracking-widest">{errors.date}</p>}
                </div>
                <div className="space-y-4">
                   <label className="text-[10px] uppercase tracking-widest font-black text-stone-900 flex items-center gap-2"><Clock size={12} /> Time</label>
                   <select 
                     className="w-full bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-4 text-sm font-bold uppercase tracking-widest transition-all appearance-none"
                     value={formData.time}
                     onChange={(e) => setFormData({...formData, time: e.target.value})}
                   >
                     {['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'].map(t => (
                       <option key={t} value={t}>{t}</option>
                     ))}
                   </select>
                </div>
                <div className="space-y-4">
                   <label className="text-[10px] uppercase tracking-widest font-black text-stone-900 flex items-center gap-2"><Users size={12} /> Party Size</label>
                   <input 
                     type="number" 
                     placeholder="Guests"
                     className={`w-full bg-transparent border-b ${errors.guests ? 'border-red-900' : 'border-stone-200'} focus:border-stone-900 focus:outline-none py-4 text-lg font-serif italic placeholder:text-stone-300 transition-all`}
                     value={formData.guests}
                     onChange={(e) => setFormData({...formData, guests: e.target.value})}
                   />
                   {errors.guests && <p className="text-red-900 text-[10px] uppercase font-bold tracking-widest">{errors.guests}</p>}
                </div>
             </div>
          </div>

          {/* Nuance Section */}
          <div className="space-y-10">
             <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
                <span className="text-[10px] font-black text-stone-300">03</span>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400">Nuance & Notes</h3>
             </div>
             <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-black text-stone-900">Special Requirements</label>
                <textarea 
                  placeholder="Tell us about celebrations, allergies, or seating preferences..."
                  className="w-full bg-transparent border-b border-stone-200 focus:border-stone-900 focus:outline-none py-4 text-lg font-serif italic placeholder:text-stone-300 h-32 resize-none transition-all"
                  value={formData.requests}
                  onChange={(e) => setFormData({...formData, requests: e.target.value})}
                />
             </div>
          </div>

          <div className="pt-10">
             <button 
               type="submit" 
               className="w-full py-6 bg-stone-900 text-white rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] hover:bg-stone-800 transition-all shadow-2xl active:scale-[0.98] group relative overflow-hidden"
             >
               <span className="relative z-10">Commit Reservation</span>
               <div className="absolute inset-x-0 bottom-0 h-1 bg-red-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
             </button>
             <p className="text-center mt-8 text-[10px] font-bold text-stone-400 uppercase tracking-widest flex items-center justify-center gap-2">
                <Info size={12} strokeWidth={3} /> You will receive a confirmation call within 30 minutes.
             </p>
          </div>
        </motion.form>
      </section>
      
      {/* Secondary CTA */}
      <section className="py-20 border-t border-stone-200 bg-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <Link to="/" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 hover:text-stone-900 transition-all group">
               <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Sanctuary
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Reservation;
