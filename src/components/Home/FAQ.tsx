"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can GOLD benefit me?",
    answer:
      "GOLD is an iOS wellness coaching app built for all ages and fitness levels, bringing Olympic medal\u2013winning science into everyday life. Powered by patented AI Coaching and supported by real human coaches, GOLD delivers adaptive, real-time guidance across meals, workouts, sleep, and wellbeing\u2014so you always know the best next action to take. The app helps you create structure, build consistency, and helps small daily improvements compound into enormous health and fitness gains.",
  },
  {
    question: "What makes GOLD different?",
    answer:
      "We combine Olympic medal-winning secrets with AI Avatar Coaching to drive the most simple to do, impactful, scientifically proven daily behaviors. While most platforms rely on retrospective tracking, generic graphs, and surface-level insights\u2014often built by engineers and business operators without deep human performance expertise\u2014we\u2019re engineered from the ground up by world-class athletes and researchers who know what truly moves the needle. Powered by 10 patents and elite performance science, we\u2019re building a new category of precision lifestyle coaching designed for global scale and real results.",
  },
  {
    question: "How does GOLD scale coaching?",
    answer:
      "We scale human coaching by training emotionally intelligent AI Avatar Coaches to mirror the most effective qualities of live support\u2014like empathy, presence, and accountability\u2014while making it available 24/7, in any language, across cultures. Our approach draws from decades of Olympic coaching insights, behavior science, and the principle of unconditional positive regard, then encodes it into an adaptive AI system backed by 10 foundational patents. For users who want deeper support, real human coaching sessions are also available, creating a seamless blend of always-on AI guidance and expert live coaching. The result is an experience where people still feel seen, heard, and supported\u2014delivered with a level of consistency and scalability that human coaches alone can\u2019t provide.",
  },
  {
    question: "When can I start using GOLD?",
    answer:
      "We are currently offering closed beta testing to select users prior to our February 2026 iOS launch prior to the 2026 Winter Olympics. If you are interested in applying, please click the \u2018Get App\u2019 button on the header.",
  },
];

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left cursor-pointer"
      >
        <h3 className="pr-4 text-lg font-semibold text-slate-900 sm:text-xl">
          {faq.question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-base leading-relaxed text-slate-600">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
        >
          Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="divide-y divide-slate-200/60"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
