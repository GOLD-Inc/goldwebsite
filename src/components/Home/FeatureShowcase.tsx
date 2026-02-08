"use client";
import { useState, useEffect, useCallback, useRef } from "react";
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
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setPaused(false), 12000);
  };

  const handleArrow = (fn: () => void) => {
    fn();
    setPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setPaused(false), 12000);
  };

  const activeFeature = features[activeIndex];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Features
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Take a closer look.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-neutral-500 sm:text-lg">
            Everything you need for clinical-grade health monitoring, designed
            to feel effortless.
          </p>
        </div>

        {/* Card */}
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
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-14">
            {/* Left — Feature list */}
            <div className="flex w-full items-start gap-3 lg:w-[400px] lg:shrink-0">
              {/* Navigation arrows — hidden on mobile */}
              <div className="hidden flex-col items-center gap-1 pt-1 sm:flex">
                <button
                  onClick={() => handleArrow(goPrev)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors duration-150 hover:bg-neutral-200/60 hover:text-neutral-700"
                  aria-label="Previous feature"
                >
                  <ChevronUp className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleArrow(goNext)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors duration-150 hover:bg-neutral-200/60 hover:text-neutral-700"
                  aria-label="Next feature"
                >
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>

              {/* Feature pills */}
              <div className="flex flex-1 flex-col gap-1">
                {features.map((feature, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <div key={feature.id}>
                      {/* Pill button */}
                      <button
                        onClick={() => handleSelect(index)}
                        className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-colors duration-200 ${
                          isActive
                            ? "bg-white shadow-sm"
                            : "hover:bg-white/60"
                        }`}
                      >
                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                            isActive
                              ? "border-neutral-400 bg-neutral-800 rotate-45"
                              : "border-neutral-300 bg-white group-hover:border-neutral-400"
                          }`}
                        >
                          <Plus
                            className={`h-3.5 w-3.5 transition-colors duration-200 ${
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
                              : "text-neutral-500 group-hover:text-neutral-700"
                          }`}
                        >
                          {feature.title}
                        </span>

                        {/* Progress bar */}
                        {isActive && (
                          <div className="ml-auto h-1 w-10 overflow-hidden rounded-full bg-neutral-200">
                            <div
                              className="h-full rounded-full bg-neutral-500"
                              key={`progress-${activeIndex}-${paused}`}
                              style={{
                                width: paused ? "100%" : "0%",
                                animation: paused
                                  ? "none"
                                  : `progressFill ${AUTO_CYCLE_MS}ms linear forwards`,
                              }}
                            />
                          </div>
                        )}
                      </button>

                      {/* Expanded description — CSS grid-rows transition */}
                      <div
                        className="grid transition-[grid-template-rows] duration-300 ease-out"
                        style={{
                          gridTemplateRows: isActive ? "1fr" : "0fr",
                        }}
                      >
                        <div className="overflow-hidden">
                          <div className="px-4 pb-3 pt-1.5">
                            <p className="text-[14px] leading-relaxed text-neutral-500">
                              <span className="font-semibold text-neutral-800">
                                {feature.title}.
                              </span>{" "}
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — Phone mockup */}
            <div className="relative flex flex-1 items-center justify-center">
              <div className="relative w-[240px] sm:w-[270px] md:w-[300px]">
                {/* Phone frame */}
                <div className="relative overflow-hidden rounded-[2.5rem] border-[8px] border-neutral-900 bg-black shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)]">
                  {/* Image — simple crossfade */}
                  <div className="relative aspect-[320/693]">
                    {features.map((feature, index) => (
                      <div
                        key={feature.id}
                        className="absolute inset-0 transition-opacity duration-300"
                        style={{
                          opacity: activeIndex === index ? 1 : 0,
                          zIndex: activeIndex === index ? 1 : 0,
                        }}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={320}
                          height={693}
                          className="h-full w-full object-cover"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature counter dots */}
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
