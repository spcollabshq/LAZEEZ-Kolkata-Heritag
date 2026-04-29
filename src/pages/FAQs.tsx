/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => (
  <div className="py-12 border-b border-stone-200 group">
    <div className="flex gap-10">
       <span className="text-[10px] font-black text-stone-300 mt-2">0{index + 1}</span>
       <div className="space-y-6">
          <h3 className="text-3xl font-display italic text-stone-900 group-hover:text-red-900 transition-colors leading-none">{question}</h3>
          <p className="text-lg text-stone-500 font-serif italic leading-relaxed max-w-2xl">{answer}</p>
       </div>
    </div>
  </div>
);

const FAQs = () => {
  const faqs = [
    {
      question: "Do you deliver food to home?",
      answer: "We focus on the in-house experience and personal takeaway. Delivery is not part of our current repertoire, ensuring every dish reaches you with its intended integrity."
    },
    {
      question: "Peak hours of operation?",
      answer: "Our hearth is busiest between 7:30 PM and 9:30 PM. We recommend reaching out for a reservation to ensure your place at our table."
    },
    {
      question: "Neighboring parking?",
      answer: "While we do not maintain a private lot, ample street parking is available along the Chowringhee corridor in the vicinity of our entrance."
    },
    {
      question: "Accepted transactions?",
      answer: "We welcome all major credit cards including Visa and Mastercard, along with contemporary digital payments and traditional cash."
    },
    {
      question: "Private celebrations?",
      answer: "We are honored to host your moments of joy. Feel free to bring personal celebratory items, and please notify us during your reservation."
    },
    {
      question: "Flavor profiles and spice?",
      answer: "Mughlai cuisine is a balance of depth rather than heat. We can tailor the intensity of spices to align with your personal preference upon request."
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Editorial Header */}
      <section className="relative pt-48 pb-32 bg-white border-b border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-amber-600 text-[10px] uppercase tracking-[0.5em] font-black mb-8 block">Inquiries</span>
            <h1 className="text-7xl md:text-9xl font-display italic text-stone-900 tracking-tighter leading-none mb-10">
              Common <span className="text-stone-300">Concerns.</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 font-serif italic max-w-2xl mx-auto leading-relaxed">
              Transparent answers to facilitate your journey through our culinary world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center mb-16 border-b border-stone-200 pb-10">
             <span className="text-[11px] uppercase tracking-[0.4em] font-black text-stone-400">Knowledge Base</span>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
              >
                <FAQItem question={faq.question} answer={faq.answer} index={idx} />
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-stone-900 text-white rounded-[3rem] text-center shadow-3xl">
             <h4 className="text-3xl font-display italic mb-6">Further Inquiries?</h4>
             <p className="text-stone-400 font-serif italic text-lg mb-10 max-w-md mx-auto">
                If your curiosity remains unsatisfied, please do not hesitate to contact our concierge team directly.
             </p>
             <a href="tel:+919830695156" className="inline-flex px-12 py-6 border border-white/20 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-stone-900 transition-all">
                Connect with us
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
