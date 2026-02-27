"use client";

import { motion } from "motion/react";
import { Download, Activity, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: Download,
    title: "Download & Set Up",
    description:
      "Download Gold, create your profile, and tell us about your goals — fitness, recovery, nutrition, or all of the above.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Connect & Track",
    description:
      "Connect with Apple Health and let Gold start learning your patterns from day one — sleep, activity, vitals, and more.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Get Insights & Improve",
    description:
      "Receive AI-powered coaching, personalized meal plans, and insights that adapt as you progress. Watch your health transform.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold  text-slate-900 sm:text-4xl lg:text-5xl">
            3 Simple Steps to
            <br /> better health.
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-600">
            Getting started takes less than two minutes. No complicated setup,
            no learning curve.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] sm:rounded-[50px] border border-white/50 bg-white/30 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]"
            >
              {/* Step number */}
              <div className="mb-6 flex items-center gap-4">
                <span className="text-4xl font-bold text-slate-200">
                  {step.number}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EC7013] to-[#f4d03f] text-white shadow-lg shadow-[#EC7013]/20">
                  <step.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>

              {/* Connector line (hidden on last card and mobile) */}
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-gradient-to-r from-slate-200 to-transparent md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
