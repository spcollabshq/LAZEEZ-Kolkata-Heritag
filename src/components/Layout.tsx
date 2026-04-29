/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu, X, Phone, MapPin, Clock, ArrowRight, Instagram, Facebook } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Story', path: '/story' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reserve', path: '/reserve' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-stone-50/80 backdrop-blur-xl border-b border-stone-200 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex flex-col group"
          >
            <span className={`text-3xl font-display font-bold tracking-tighter leading-none transition-colors duration-500 ${
              scrolled ? 'text-red-900' : 'text-white'
            }`}>LAZEEZ</span>
            <span className={`text-[9px] tracking-[0.4em] font-bold uppercase transition-colors duration-500 ${
              scrolled ? 'text-amber-600' : 'text-amber-400'
            }`}>Kolkata Heritage</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:opacity-100 ${
                  location.pathname === link.path 
                    ? (scrolled ? 'text-red-900 opacity-100' : 'text-white opacity-100')
                    : (scrolled ? 'text-stone-500 opacity-60' : 'text-white opacity-60')
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reserve"
              className={`px-8 py-3 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all active:scale-95 ${
                scrolled 
                  ? 'bg-red-900 text-white shadow-xl shadow-red-900/20 hover:bg-red-800' 
                  : 'bg-white text-red-900 hover:bg-amber-50'
              }`}
            >
              Book
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors p-2 ${
                scrolled ? 'text-stone-900' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden bg-stone-900 flex flex-col justify-center items-center p-8"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-4xl font-display italic text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/reserve"
                className="mt-8 bg-red-900 text-white px-12 py-5 rounded-full text-xl font-bold"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <Link to="/" className="flex flex-col mb-10 group">
              <span className="text-4xl font-display font-bold tracking-tighter text-red-900 leading-none">LAZEEZ</span>
              <span className="text-[10px] tracking-[0.5em] font-black text-amber-600 uppercase">Kolkata Heritage</span>
            </Link>
            <p className="text-stone-500 text-lg font-serif italic leading-relaxed max-w-sm">
              Preserving the culinary soul of Bengal through every handi of biryani we prepare. A legacy of taste, served with honor.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-10">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 mb-6">Location</h4>
              <p className="text-stone-600 text-sm leading-loose">
                83B, Chowringhee Road<br />
                Elgin, Bhowanipore<br />
                Kolkata – 700071
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 mb-6">Connect</h4>
              <a href="tel:+919830695156" className="text-stone-600 text-sm block hover:text-red-900 transition-colors mb-2">+91 98306 95156</a>
              <a href="mailto:info@lazeezkolkata.com" className="text-stone-600 text-sm block hover:text-red-900 transition-colors italic">info@lazeezkolkata.com</a>
            </div>
          </div>

          {/* Social & Information */}
          <div className="md:col-span-4 space-y-10">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400 mb-6">Hours</h4>
              <p className="text-stone-600 text-sm leading-loose">
                Daily: 11:00 AM – 11:00 PM<br />
                Last Order: 10:30 PM
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-red-900 hover:border-red-900 transition-all"><Instagram size={18} strokeWidth={1.5} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-red-900 hover:border-red-900 transition-all"><Facebook size={18} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-[10px] font-bold uppercase tracking-widest text-stone-400">
            <Link to="/privacy" className="hover:text-stone-900 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-stone-900 transition-colors">Terms</Link>
            <Link to="/accessibility" className="hover:text-stone-900 transition-colors">Accessibility</Link>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-300 italic">© 2026 LAZEEZ KOLKATA • THE ART OF FLAVOR</p>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-amber-100 selection:text-amber-900 font-sans">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={useLocation().pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
