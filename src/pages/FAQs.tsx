/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="border-b border-gray-100 py-8 group">
    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-900 transition-colors uppercase tracking-tight italic">Q: {question}</h3>
    <p className="text-gray-600 text-lg leading-relaxed">A: {answer}</p>
  </div>
);

const FAQs = () => {
  const faqs = [
    {
      question: "Do you deliver food to home?",
      answer: "Not directly. You can place a takeaway order by phone and pick it up from our restaurant."
    },
    {
      question: "What are your busiest hours?",
      answer: "7:30 PM – 9:30 PM, especially on weekends. Reserve ahead or call before coming."
    },
    {
      question: "Is there parking?",
      answer: "Street parking is available nearby. We don’t have a dedicated parking lot."
    },
    {
      question: "Do you accept credit cards?",
      answer: "Yes – we accept Visa, Mastercard, and RuPay. Also cash."
    },
    {
      question: "Can I bring my own cake or celebrate a birthday?",
      answer: "Absolutely. Just mention it in your reservation request."
    },
    {
      question: "Are your dishes very spicy?",
      answer: "You can request mild, medium, or spicy when you call or visit."
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <header className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h1>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
