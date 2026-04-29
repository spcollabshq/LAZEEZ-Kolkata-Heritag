/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  MapPin, 
  MessageSquare, 
  BookOpen, 
  Phone, 
  Clock, 
  CheckCircle2,
  ChevronRight,
  Star,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURED_DISHES } from '../constants';

import { HeroBackground } from '../components/HeroBackground';

const Home = () => {
  return (
    <div className="flex flex-col bg-stone-50">
      {/* 1. Hero Section - Massive Editorial Impact */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-px bg-amber-400/50" />
              <span className="text-amber-400 text-[10px] uppercase tracking-[0.6em] font-bold">Est. 1998 • Elgin Road</span>
            </motion.div>
            
            <h1 className="text-[12vw] sm:text-[10vw] font-display font-bold text-white mb-8 tracking-tighter leading-[0.85] text-balance">
              Taste <span className="text-amber-400 italic">the Heritage</span> of Kolkata.
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-300 mb-14 font-serif italic leading-relaxed max-w-2xl text-pretty">
              Authentic Mughlai flavors perfected over generations. From the heart of Bengal to your senses.
            </p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <Link 
                to="/menu" 
                className="group relative px-12 py-6 bg-red-900 text-white rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Discover Menu <ArrowRight size={20} />
                </span>
                <div className="absolute inset-0 bg-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              
              <Link 
                to="/reserve" 
                className="text-white text-sm uppercase tracking-[0.3em] font-bold hover:text-amber-400 transition-colors flex items-center gap-4"
              >
                Book a Table <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-400 transition-colors"><ChevronRight size={16} /></div>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-8"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/40 [writing-mode:vertical-rl]">Explore</span>
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-24 bg-gradient-to-b from-amber-400/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* 2. Intro Section - Architectural & Warm */}
      <section id="intro" className="py-40 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <span className="text-amber-600 text-[11px] uppercase tracking-[0.4em] font-black mb-6 block">Legacy of Excellence</span>
                <h2 className="text-5xl md:text-7xl font-display italic text-stone-900 mb-10 leading-tight tracking-tight">
                  A sanctuary of <span className="text-red-900">authentic flavors</span> in the heart of Kolkata.
                </h2>
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="flex-1">
                    <p className="text-xl text-stone-600 leading-relaxed font-serif italic mb-6">
                      For over two decades, Lazeez has been the custodian of secret spice blends, passed down through generations to preserve the true soul of Mughlai cuisine.
                    </p>
                  </div>
                  <div className="flex-1 space-y-6">
                    <p className="text-sm text-stone-500 leading-relaxed uppercase tracking-wide">
                      We believe that great food is an act of patience. Our biryanis are "Dum" cooked in traditional clay pots, ensuring every grain of rice absorbs the rich essence of meat and spices.
                    </p>
                    <Link to="/story" className="inline-flex items-center gap-2 text-red-900 font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all group">
                      Our Philosophy <div className="p-2 border border-red-900/10 rounded-full group-hover:bg-red-900 group-hover:text-white transition-all"><ArrowRight size={14} /></div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-3xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000"
                  alt="Hand-ground Spices"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                />
                <div className="absolute inset-0 bg-stone-900/10" />
              </motion.div>
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-stone-100 max-w-[200px] hidden md:block"
              >
                <p className="text-3xl font-display italic text-red-900 mb-2">100%</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Natural & Hand-Picked Spices</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Experience - Grid Layout */}
      <section className="py-40 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-amber-400 text-[11px] uppercase tracking-[0.5em] font-bold mb-6">Signature Experience</span>
            <h2 className="text-5xl md:text-7xl font-display italic tracking-tight text-white mb-6">The Art of Dining.</h2>
            <div className="w-24 h-px bg-white/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            <ExperienceItem 
              icon={<BookOpen size={32} />}
              title="Curated Menu"
              description="A meticulous selection of dishes that define the region's culinary history."
              link="/menu"
            />
            <ExperienceItem 
              icon={<MapPin size={32} />}
              title="Historic Location"
              description="Nestled in the heritage lanes of Elgin Road, Kolkata since 1998."
              link="/contact"
            />
            <ExperienceItem 
              icon={<MessageSquare size={32} />}
              title="Your Voice"
              description="We cherish your stories. Share your experience with our family."
              link="/feedback"
            />
          </div>
        </div>
      </section>

      {/* 4. Featured Dishes - Portfolio Style */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <header className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="text-red-900 text-[11px] uppercase tracking-[0.5em] font-black mb-6 block">Masterpieces</span>
              <h2 className="text-5xl md:text-7xl font-display italic text-stone-900 tracking-tight leading-none">
                Dishes that <span className="text-stone-400">define us.</span>
              </h2>
            </div>
            <Link to="/menu" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">
              Full Collection <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all"><ChevronRight size={18} /></div>
            </Link>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {FEATURED_DISHES.map((dish, idx) => (
              <DishPortfolioCard key={dish.id} dish={dish} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials - Floating & Elegant */}
      <section className="py-40 bg-stone-50 border-y border-stone-200 relative overflow-hidden">
        <div className="absolute flex opacity-[0.03] text-[20vw] font-display italic whitespace-nowrap pointer-events-none select-none top-1/2 -translate-y-1/2 left-0 animate-marquee">
           Lazeez Kolkata • Lazeez Kolkata • Lazeez Kolkata • Lazeez Kolkata • Lazeez Kolkata • Lazeez Kolkata
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Quote className="mx-auto text-red-900/20 mb-12" size={64} />
          <AnimatePresence mode="wait">
            <motion.div
              key="testimonial-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-10"
            >
              <p className="text-3xl md:text-5xl font-display italic text-stone-800 leading-tight">
                “Best mutton biryani in Elgin. Reasonable price, generous portion. The soul of Kolkata in a clay pot.”
              </p>
              <div className="flex flex-col items-center">
                <span className="text-stone-900 font-bold uppercase tracking-widest text-xs mb-1">Rahul Shreedhar</span>
                <span className="text-amber-600 text-[10px] uppercase tracking-[0.4em]">Connoisseur</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 6. Footer CTA - Dramatic Full Page */}
      <section className="h-[80vh] bg-stone-900 relative flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600" 
            alt="Restaurant Background" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-6xl md:text-9xl font-display italic text-white tracking-tighter leading-none">
              Join our <span className="text-red-600">table.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <Link 
                to="/reserve" 
                className="px-16 py-8 bg-white text-stone-900 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-50 transition-all shadow-2xl active:scale-95"
              >
                Book Now
              </Link>
              <Link 
                to="/menu" 
                className="px-16 py-8 border border-white/30 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all active:scale-95"
              >
                View Menu
              </Link>
            </div>
            <p className="text-amber-400 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">Open Daily • 11:00 AM – 11:00 PM</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

/* Sub-components */

const ExperienceItem = ({ icon, title, description, link }: any) => (
  <Link to={link} className="group bg-stone-900 p-16 flex flex-col items-center text-center hover:bg-stone-800 transition-colors duration-500">
    <div className="mb-10 text-amber-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-display italic text-white mb-6 underline underline-offset-8 decoration-white/0 group-hover:decoration-amber-400 transition-all duration-500">{title}</h3>
    <p className="text-stone-400 text-sm leading-relaxed max-w-[240px] opacity-80 group-hover:opacity-100 transition-all duration-500">
      {description}
    </p>
  </Link>
);

const DishPortfolioCard = ({ dish, index }: any) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1 }}
      className={`relative group ${isEven ? 'md:mt-24' : ''}`}
    >
      <div className="relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl shadow-stone-200">
        <img 
          src={dish.imageUrl || 'https://images.unsplash.com/photo-1589187151032-573a91317445?auto=format&fit=crop&q=80&w=800'} 
          alt={dish.imageAlt}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
      
      <div className="mt-8 flex justify-between items-start">
        <div className="max-w-[70%]">
          <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-600 mb-2">{dish.category}</h3>
          <h4 className="text-3xl md:text-4xl font-display italic text-stone-900 tracking-tight mb-2 group-hover:text-red-900 transition-colors">{dish.name}</h4>
          <p className="text-sm text-stone-500 leading-relaxed italic line-clamp-2">{dish.description}</p>
        </div>
        <div className="text-xl font-mono font-bold text-stone-900">₹{dish.price}</div>
      </div>
      
      <Link to="/menu" className="absolute top-8 right-8 w-14 h-14 bg-white/90 backdrop-blur shadow-2xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <ArrowRight size={20} className="text-red-900" />
      </Link>
    </motion.div>
  );
};

/* Internal Sub-components */

const QuickActionCard = ({ icon, title, description, btnText, link }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 text-center flex flex-col items-center"
  >
    <div className="mb-6 p-4 bg-amber-50 rounded-2xl">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 mb-8">{description}</p>
    <Link 
      to={link} 
      className="mt-auto inline-flex items-center gap-2 text-red-900 font-bold hover:gap-3 transition-all"
    >
      {btnText} <ArrowRight size={18} />
    </Link>
  </motion.div>
);

const DishCard = ({ dish }: any) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -10 }}
    className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
  >
    <div className="relative h-64 overflow-hidden">
      <img src={dish.imageUrl || 'https://images.unsplash.com/photo-1589187151032-573a91317445?auto=format&fit=crop&q=80&w=800'} 
           alt={dish.imageAlt}
           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-red-900 shadow-sm">
        ₹{dish.price}
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-3 uppercase tracking-tight">{dish.name}</h3>
      <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed italic">{dish.description}</p>
      <Link to="/menu" className="inline-flex items-center gap-1 text-sm font-bold text-amber-600 hover:text-amber-700">
        View in Menu <ArrowRight size={14} />
      </Link>
    </div>
  </motion.div>
);

const TestimonialCard = ({ text, author, source }: any) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }}
    whileHover={{ scale: 1.02 }}
    className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all flex flex-col"
  >
    <div className="flex gap-1 mb-6">
      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#fbbf24" stroke="none" />)}
    </div>
    <p className="text-xl font-medium leading-relaxed mb-6 italic">“{text}”</p>
    <div className="mt-auto">
      <div className="font-bold text-lg">{author}</div>
      <div className="text-sm text-red-200">{source}</div>
    </div>
  </motion.div>
);

const ServiceBox = ({ title, description }: any) => (
  <div className="text-center group">
    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 text-red-900 rounded-2xl mb-6 group-hover:bg-red-900 group-hover:text-white transition-all duration-500">
      <h3 className="text-2xl font-black">{title[0]}</h3>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <div className="text-gray-600 leading-relaxed text-lg">{description}</div>
  </div>
);

const ComboCard = ({ title, subtitle, items, oldPrice, newPrice }: any) => (
  <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-amber-500/50 transition-all">
    <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
    {subtitle && <p className="text-amber-500 text-sm font-bold mb-4 uppercase tracking-widest">{subtitle}</p>}
    <p className="text-gray-300 mb-8 italic leading-relaxed">{items}</p>
    <div className="flex items-end gap-3 mb-8">
      <span className="text-4xl font-bold text-white">₹{newPrice}</span>
      <span className="text-xl text-gray-500 line-through mb-1">₹{oldPrice}</span>
    </div>
    <a 
      href="tel:+919830695156" 
      className="inline-flex items-center gap-2 text-white font-bold bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl transition-all"
    >
      Call to Order <Phone size={18} />
    </a>
  </div>
);

export default Home;
