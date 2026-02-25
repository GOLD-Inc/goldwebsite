"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { IPhoneFrame } from "@/components/ui/iphone-frame";
import { Brain, Utensils, Moon, Dumbbell, Heart, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DetailedFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  image: string;
}

const detailedFeatures: DetailedFeature[] = [
  {
    icon: Brain,
    title: "AI Health Coach",
    description:
      "Your personal AI coach learns your habits, adapts to your schedule, and delivers guidance that evolves with you — not generic advice, but insights built on your real data.",
    highlights: [
      "24/7 personalized guidance",
      "Adapts to your lifestyle in real-time",
      "Evidence-based recommendations",
    ],
    image: "/AppScreenshots/select-coach.png",
  },
  {
    icon: Utensils,
    title: "Smart Meal Planning",
    description:
      "Get nutrition plans that match your training intensity, dietary preferences, and health goals",
    highlights: [
      "Macro & micro nutrient tracking",
      "Adjusts to training load",
      "Dietary preference support",
    ],
    image: "/AppScreenshots/meal-recommendation.png",
  },
  {
    icon: Moon,
    title: "Sleep Insights",
    description:
      "Understand your sleep patterns — not just hours, but quality. Get actionable tips to optimize deep sleep, recovery, and overall rest.",
    highlights: [
      "Sleep quality analysis",
      "Recovery score tracking",
      "Bedtime optimization tips",
    ],
    image: "/AppScreenshots/sleep-setup-2.png",
  },
  {
    icon: Dumbbell,
    title: "Workout Programs",
    description:
      "Structured training plans built for your fitness level with real-time progress tracking. From strength to endurance — every rep counts.",
    highlights: [
      "Personalized difficulty scaling",
      "Real-time progress tracking",
      "Multiple training styles",
    ],
    image: "/AppScreenshots/workout-setup-1.png",
  },
  {
    icon: Heart,
    title: "Apple Health Integration",
    description:
      "Seamlessly syncs with Apple Health to unify all your vitals, activity, and health records into one beautiful, actionable dashboard.",
    highlights: [
      "Bi-directional Apple Health sync",
      "Unified health dashboard",
      "Trend analysis over time",
    ],
    image: "/AppScreenshots/apple-health.png",
  },
  {
    icon: Target,
    title: "Personalized Goals",
    description:
      "Set meaningful health milestones and let Gold Health map the path. Whether it's weight, sleep, or performance — we celebrate every win with you.",
    highlights: [
      "Custom goal setting",
      "Milestone celebrations",
      "Adaptive goal adjustments",
    ],
    image: "/AppScreenshots/goal.png",
  },
];

export default function FeatureDetails() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Built for people who care.
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-600">
            Every feature is designed with precision and crafted for everyday
            simplicity.
          </p>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-12">
          {detailedFeatures.map((feature, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                className={`group flex flex-col items-center gap-8 rounded-[2rem] sm:rounded-[50px] border border-white/50 bg-white/30 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-10 lg:flex-row lg:gap-14 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text content */}
                <div className="flex-1 max-w-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EC7013] to-[#f4d03f] text-white shadow-lg shadow-[#EC7013]/20">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {feature.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2.5 text-sm text-slate-600"
                      >
                        <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#EC7013]" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Phone screenshot */}
                <div className="relative flex shrink-0 justify-center">
                  <IPhoneFrame className="w-[180px] sm:w-[210px]">
                    <div className="relative aspect-[320/693]">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        sizes="210px"
                      />
                    </div>
                  </IPhoneFrame>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
