"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GetAppButton } from "@/components/ui/get-app-button";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const mediaLogos = [
  { src: "/Media-logos/forbes.png.webp", alt: "Forbes" },
  { src: "/Media-logos/Fortune-logo.png.webp", alt: "Fortune" },
  {
    src: "/Media-logos/SportsIllustratedLogo+1.png.webp",
    alt: "Sports Illustrated",
  },
  { src: "/Media-logos/outside.png.webp", alt: "Outside Magazine" },
];

const discoveries = [
  {
    title: "CGM Discovery",
    stat: "30%",
    description:
      "Blood glucose spikes reduced within weeks using continuous glucose monitor data and personalized AI coaching — without medication.",
  },
  {
    title: "Deep Sleep Discovery",
    stat: "2x",
    description:
      "Deep sleep duration doubled through data-driven sleep protocol optimization, improving recovery and cognitive performance.",
  },
];

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

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left cursor-pointer"
      >
        <h3 className="pr-4 text-lg font-semibold text-neutral-900 sm:text-xl">
          {faq.question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-300 ${
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
            <p className="pb-6 text-base leading-relaxed text-neutral-500">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MissionPage() {
  return (
    <main className="min-h-screen pb-24">
      {/* ============================================================ */}
      {/*  Hero                                                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              The health system is broken.
              <br />
              <span className="bg-gradient-to-r from-[#EC7013] to-[#f4d03f] bg-clip-text text-transparent">
                We&apos;re fixing it.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
              93% of Americans have at least one marker of metabolic
              dysfunction. GOLD was built to change that — with Olympic-tested
              science, AI coaching, and a mission to make health accessible to
              everyone.
            </p>
            <div className="mt-8">
              <GetAppButton size="lg" label="Start Your Journey" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  The Breakthrough / Origin Story                               */}
      {/* ============================================================ */}
      <motion.section
        className="mx-auto mt-28 max-w-5xl px-6"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
        >
          The Breakthrough
        </motion.h2>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10 rounded-3xl border border-white/50 bg-white/30 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-2xl sm:p-10 lg:flex-row lg:items-center lg:gap-14"
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-[1.5rem] lg:w-1/2">
            <Image
              src="/Team-Photos/Team photos/GOLD-AI-Paris.jpg.webp"
              alt="GOLD AI at Paris Olympics"
              width={1200}
              height={800}
              className="w-full h-auto block"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2">
            <p className="text-lg leading-relaxed text-neutral-600">
              It started with an Olympic cyclist and a simple question:{" "}
              <span className="font-semibold text-[#EC7013]">
                what if data — not drugs — could unlock peak performance?
              </span>
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              Sky Christopherson used continuous glucose monitoring, sleep
              tracking, and data analytics to set a world record and help the
              U.S. Olympic team win medals. With guidance from Dr. Eric Topol —
              one of the most cited physicians in the world — the model was
              validated: personalized, data-driven coaching works.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-500">
              At the 2024 Paris Olympics, Sky announced GOLD — the consumer
              platform built to bring this medal-winning approach to everyone.
            </p>
          </div>
        </motion.div>

        {/* As seen in */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <p className="mb-6 text-center text-sm font-medium text-neutral-400">
            As seen in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
            {mediaLogos.map((logo) => (
              <div key={logo.alt} className="relative h-8 w-24 sm:h-10 sm:w-28">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ============================================================ */}
      {/*  HERA AI Coaching                                              */}
      {/* ============================================================ */}
      <motion.section
        className="mx-auto mt-28 max-w-5xl px-6"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
        >
          HERA AI Coaching
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg"
        >
          Health Enhancing Relational Avatar — the world&apos;s first
          patent-protected AI coaching system built on real Olympic science.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10 rounded-3xl border border-white/50 bg-white/30 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-2xl sm:p-10 lg:flex-row lg:items-center lg:gap-14"
        >
          {/* Text */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              <div>
                <p className="text-4xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#EC7013] to-[#f4d03f] bg-clip-text text-transparent">
                    10 Patents
                  </span>
                </p>
                <p className="mt-2 text-base text-neutral-500">
                  Core AI coaching technologies — from relational avatar systems
                  to adaptive health protocols — protected by 10 issued patents.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">
                  Photo-Realistic AI Avatars
                </h3>
                <p className="mt-1 text-base text-neutral-500">
                  Emotionally intelligent coaches that adapt to your goals,
                  personality, and real-time biometric data.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">
                  Scalable &amp; Personal
                </h3>
                <p className="mt-1 text-base text-neutral-500">
                  Premium health coaching quality at a fraction of the cost —
                  available to anyone with a smartphone.
                </p>
              </div>
            </div>
          </div>

          {/* App screenshots — phone frame style matching features page */}
          <div className="flex justify-center gap-4 lg:w-1/2 lg:justify-end">
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-neutral-900 bg-black shadow-xl">
              <div className="relative h-[320px] w-[150px] sm:h-[400px] sm:w-[190px]">
                <Image
                  src="/AppScreenshots/select-coach.png"
                  alt="Select your AI coach"
                  fill
                  className="object-cover"
                  sizes="190px"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-neutral-900 bg-black shadow-xl">
              <div className="relative h-[320px] w-[150px] sm:h-[400px] sm:w-[190px]">
                <Image
                  src="/AppScreenshots/welcome.png"
                  alt="Welcome screen"
                  fill
                  className="object-cover"
                  sizes="190px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ============================================================ */}
      {/*  Science & Evidence                                            */}
      {/* ============================================================ */}
      <motion.section
        className="mx-auto mt-28 max-w-5xl px-6"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
        >
          Science &amp; Evidence
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg"
        >
          Olympic innovation + tier-1 science + your data = measurable outcomes.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2">
          {discoveries.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl border border-white/50 bg-white/30 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]"
            >
              <p className="text-5xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-[#065b64] to-[#0891b2] bg-clip-text text-transparent">
                  {item.stat}
                </span>
              </p>
              <h3 className="mt-3 text-lg font-bold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/*  Questions                                                     */}
      {/* ============================================================ */}
      <motion.section
        className="mx-auto mt-28 max-w-3xl px-6"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
        >
          Questions
        </motion.h2>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="divide-y divide-neutral-200/60"
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </motion.div>
      </motion.section>

      {/* ============================================================ */}
      {/*  Health for Every Body — CTA                                   */}
      {/* ============================================================ */}
      <motion.section
        className="mx-auto mt-28 max-w-5xl px-6"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border border-white/30 bg-white/40 px-8 py-16 text-center shadow-[0_8px_60px_rgba(0,0,0,0.06)] backdrop-blur-2xl sm:px-16 sm:py-20"
        >
          {/* Decorative gradient orbs */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-[#EC7013]/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#065b64]/15 blur-[80px]" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-80 rounded-full bg-[#f4d03f]/10 blur-[60px]" />

          <div className="relative z-10">
            <h2 className="mx-auto max-w-lg text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Health for
              <span className="bg-gradient-to-r from-[#EC7013] to-[#f4d03f] bg-clip-text text-transparent">
                {" "}
                every body.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-md leading-relaxed text-neutral-500">
              GOLD&apos;s AI model wasn&apos;t designed for elite athletes — it
              was designed for everyone. Whether you&apos;re managing a chronic
              condition, optimizing your sleep, or just starting your health
              journey, GOLD meets you where you are.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3">
              <GetAppButton size="lg" label="Start Your Journey" />
              <span className="text-xs text-neutral-400">
                Free on iOS &middot; No credit card required
              </span>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
