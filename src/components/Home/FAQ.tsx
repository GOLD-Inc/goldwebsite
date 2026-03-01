"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is GOLD?",
    answer:
      "GOLD is an AI-powered wellness coaching app for iPhone.\n\nIt's the first system to fully integrate workouts, meals, sleep, and overall wellbeing into one interconnected coaching experience. Instead of managing separate apps for fitness, nutrition, and recovery, GOLD brings everything together — intelligently.\n\nBuilt on Olympic medal–winning performance science and powered by 10 foundational patents, GOLD delivers one unified plan for how you live, train, eat, and recover.",
  },
  {
    question: "How can GOLD benefit me?",
    answer:
      "GOLD helps you make the right decision at the right time.\n\nBecause workouts, nutrition, sleep, and stress are deeply connected, your coaching should be too. GOLD continuously adapts across all four pillars — so a tough workout influences recovery guidance, sleep impacts training intensity, and nutrition aligns with your daily demands.\n\nYou get:\n\n• Clear next actions instead of scattered tracking\n• Daily structure without complexity\n• Smarter adjustments based on how your body is responding\n• Small improvements that compound over time\n\nIt's built for all ages and fitness levels — from foundational habit builders to high performers.",
  },
  {
    question: "What makes GOLD different?",
    answer:
      "Most platforms focus on one pillar — fitness, food, or sleep — and show you what already happened.\n\nGOLD integrates all four pillars into one adaptive AI coaching system. Every recommendation is interconnected. Nothing lives in isolation.\n\n• Your workout plan considers your sleep.\n• Your nutrition adjusts to your training load.\n• Your recovery reflects your stress and wellbeing.\n\nThis system is powered by 10 patents designed to translate elite performance science into simple, daily actions.\n\nGOLD doesn't just track your life. It coaches it — as one system.",
  },
  {
    question: "How does AI Coaching work?",
    answer:
      "GOLD uses emotionally intelligent AI Avatar Coaching trained on decades of Olympic performance insights and behavior science.\n\nThe system analyzes patterns across:\n\n• Training\n• Nutrition\n• Sleep\n• Recovery\n• Daily wellbeing\n\nBecause these pillars are integrated, the AI adapts holistically — not in silos. If one area changes, your entire plan adjusts intelligently.\n\nCoaching is available 24/7, personalized to your goals and behaviors, and delivered in clear, achievable steps.",
  },
  {
    question: "Is there live human coaching?",
    answer:
      "No.\n\nGOLD is fully AI-powered. Our patented AI coaching system is designed to deliver consistent, adaptive support at scale — without the limitations of scheduling or availability.",
  },
  {
    question: "Who is GOLD for?",
    answer:
      "GOLD is designed for anyone who wants a more intelligent, structured approach to health.\n\nWhether you're:\n\n• Building foundational habits\n• Balancing a demanding schedule\n• Training competitively\n• Or simply wanting to feel better daily\n\nGOLD adapts to your level and evolves with you.",
  },
  {
    question: "Do I need special equipment?",
    answer:
      "No.\n\nGOLD works on its own, and can optionally integrate with Apple Health to enhance personalization through activity and sleep data — with your permission.",
  },
  {
    question: "How does GOLD use my data?",
    answer:
      "Your data powers personalization across all four pillars of your coaching system.\n\nHealth information is encrypted and securely stored. You control what is shared. GOLD does not sell personal data.",
  },
  {
    question: "Why combine workouts, meals, sleep, and wellbeing?",
    answer:
      "Because your body doesn't separate them — and your coaching shouldn't either.\n\nPerformance, energy, recovery, and long-term health are the result of how these pillars work together. GOLD is the first system built from the ground up to treat them as one interconnected ecosystem, not separate features.\n\nThat integration is what allows coaching to feel intuitive, precise, and adaptive.",
  },
  {
    question: "Where can I download GOLD?",
    answer:
      "GOLD is available now on the App Store for iPhone.\n\nDownload today and experience the Gold Standard of integrated AI coaching.",
  },
];

function FAQAnswer({ answer }: { answer: string }) {
  const blocks = answer.split(/\n\n+/);
  return (
    <div className="space-y-4 pb-6 text-base leading-relaxed text-black">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;
        const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
        const bulletLines = lines.filter((l) => l.startsWith("•"));
        if (bulletLines.length > 0) {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 marker:text-black">
              {bulletLines.map((line, j) => (
                <li key={j} className="pl-2 text-black">
                  {line.replace(/^•\s*/, "").trim()}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-black">
            {lines.map((line, j) => (
              <span key={j}>
                {j > 0 && <br />}
                {line}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left cursor-pointer"
      >
        <h3 className="pr-4 text-lg font-semibold text-black sm:text-xl">
          {faq.question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-black/70 transition-transform duration-300 ${
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
            <FAQAnswer answer={faq.answer} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
        >
          Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="divide-y divide-black/20"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
