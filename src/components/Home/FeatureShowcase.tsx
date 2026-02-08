"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: "ai-coach",
    title: "AI Health Coach",
    description:
      "Get personalized guidance from an AI coach that adapts to your lifestyle, goals, and health data — available 24/7 to keep you on track.",
    image: "/AppScreenshots/select-coach.png",
  },
  {
    id: "meal-planning",
    title: "Smart Meal Planning",
    description:
      "Receive tailored meal recommendations based on your nutritional needs, dietary preferences, and fitness goals — powered by clinical-grade AI.",
    image: "/AppScreenshots/meal-recommendation.png",
  },
  {
    id: "sleep-tracking",
    title: "Sleep Insights",
    description:
      "Track your sleep patterns and receive actionable insights to improve rest quality, recovery, and overall well-being.",
    image: "/AppScreenshots/sleep-setup-2.png",
  },
  {
    id: "workouts",
    title: "Workout Programs",
    description:
      "Follow structured workout plans designed for your fitness level, with real-time tracking and progress visualization.",
    image: "/AppScreenshots/workout-setup-1.png",
  },
  {
    id: "apple-health",
    title: "Apple Health Sync",
    description:
      "Seamlessly integrates with Apple Health to combine all your vitals, activity, and health records in one unified view.",
    image: "/AppScreenshots/apple-health.png",
  },
  {
    id: "goals",
    title: "Personalized Goals",
    description:
      "Set and track health goals tailored to you — from weight management to sleep optimization — with milestone celebrations along the way.",
    image: "/AppScreenshots/goal.png",
  },
  {
    id: "results",
    title: "Health Results",
    description:
      "See your progress with clear, clinical-grade health metrics and trend analysis that help you understand your body better.",
    image: "/AppScreenshots/results.png",
  },
];

const AUTO_CYCLE_MS = 5000;

export default function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  }, []);

  // Auto-cycle
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, AUTO_CYCLE_MS);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setPaused(true);
    // Resume auto-cycle after 12s of inactivity
    setTimeout(() => setPaused(false), 12000);
  };

  const activeFeature = features[activeIndex];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center sm:mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Features
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Take a closer look.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-neutral-500 sm:text-lg">
            Everything you need for clinical-grade health monitoring, designed
            to feel effortless.
          </p>
        </div>

        {/* Glass card */}
        <div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/60 p-6 sm:p-10 lg:p-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 100%)",
            backdropFilter: "blur(24px) saturate(140%)",
            WebkitBackdropFilter: "blur(24px) saturate(140%)",
            boxShadow:
              "0 8px 40px rgba(0,0,0,0.04), 0 1px 0 rgba(255,255,255,0.8) inset",
          }}
        >
          {/* Glass shine */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/50 to-transparent rounded-t-3xl" />

          {/* Content grid */}
          <div className="relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
            {/* Left — Feature list */}
            <div className="flex w-full items-start gap-3 lg:w-[400px] lg:shrink-0">
              {/* Navigation arrows */}
              <div className="hidden flex-col items-center gap-1 pt-1 sm:flex">
                <button
                  onClick={() => {
                    goPrev();
                    setPaused(true);
                    setTimeout(() => setPaused(false), 12000);
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-all duration-200 hover:bg-white/60 hover:text-neutral-700"
                  aria-label="Previous feature"
                >
                  <ChevronUp className="h-5 w-5" />
                </button>
                <button
                  onClick={() => {
                    goNext();
                    setPaused(true);
                    setTimeout(() => setPaused(false), 12000);
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-all duration-200 hover:bg-white/60 hover:text-neutral-700"
                  aria-label="Next feature"
                >
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>

              {/* Feature pills */}
              <div className="flex flex-1 flex-col gap-1.5">
                {features.map((feature, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <div key={feature.id}>
                      {/* Pill button */}
                      <button
                        onClick={() => handleSelect(index)}
                        className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-250 ${
                          isActive
                            ? "bg-white/70 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                            : "hover:bg-white/40"
                        }`}
                      >
                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-250 ${
                            isActive
                              ? "border-neutral-400 bg-neutral-800 rotate-45"
                              : "border-neutral-300 bg-white/80 group-hover:border-neutral-400"
                          }`}
                        >
                          <Plus
                            className={`h-3.5 w-3.5 transition-all duration-250 ${
                              isActive
                                ? "text-white"
                                : "text-neutral-400 group-hover:text-neutral-600"
                            }`}
                          />
                        </div>
                        <span
                          className={`text-[15px] font-semibold transition-colors duration-200 ${
                            isActive
                              ? "text-neutral-900"
                              : "text-neutral-600 group-hover:text-neutral-800"
                          }`}
                        >
                          {feature.title}
                        </span>

                        {/* Progress bar for active item */}
                        {isActive && (
                          <motion.div
                            className="ml-auto h-1 w-10 overflow-hidden rounded-full bg-neutral-200"
                          >
                            <motion.div
                              className="h-full rounded-full bg-neutral-500"
                              initial={{ width: paused ? "100%" : "0%" }}
                              animate={{ width: "100%" }}
                              transition={{
                                duration: paused ? 0 : AUTO_CYCLE_MS / 1000,
                                ease: "linear",
                              }}
                              key={`progress-${activeIndex}-${paused}`}
                            />
                          </motion.div>
                        )}
                      </button>

                      {/* Expanded description */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: {
                                duration: 0.3,
                                ease: [0.25, 0.4, 0.25, 1],
                              },
                              opacity: { duration: 0.25, delay: 0.08 },
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-3 pt-1.5">
                              <p className="text-[14px] leading-relaxed text-neutral-500">
                                <span className="font-semibold text-neutral-800">
                                  {feature.title}.
                                </span>{" "}
                                {feature.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — Phone mockup */}
            <div className="relative flex flex-1 items-center justify-center" style={{ perspective: "1000px" }}>
              <motion.div
                className="relative w-[260px] sm:w-[280px] md:w-[320px]"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ rotateY: -3, rotateX: 2 }}
                animate={{ rotateY: -3, rotateX: 2 }}
                whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
              >
                {/* Phone glow */}
                <div className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-cyan-200/25 via-transparent to-orange-200/25 blur-2xl" />

                {/* Phone shadow */}
                <div className="absolute -inset-2 top-4 rounded-[3rem] bg-black/15 blur-2xl" />

                {/* Phone frame */}
                <div
                  className="relative overflow-hidden rounded-[2.5rem] border-[8px] border-neutral-900 bg-black"
                  style={{
                    boxShadow:
                      "0 25px 50px -12px rgba(0,0,0,0.25), 0 12px 24px -8px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1) inset",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      <Image
                        src={activeFeature.image}
                        alt={activeFeature.title}
                        width={320}
                        height={693}
                        className="w-full"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Screen reflection */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Feature counter */}
        <div className="mt-8 flex items-center justify-center gap-1.5">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-neutral-800"
                  : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
