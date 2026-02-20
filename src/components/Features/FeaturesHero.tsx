"use client";

import { motion } from "motion/react";
import { GetAppButton } from "@/components/ui/get-app-button";

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Everything you need.
            <br />
            <span className="bg-gradient-to-r from-[#EC7013] to-[#f4d03f] bg-clip-text text-transparent">
              Nothing you don&apos;t.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            Built with Olympic athletes. Powered by AI. Designed for everyone
            who takes their health seriously.
          </p>
          <div className="mt-8">
            <GetAppButton size="lg" label="Get Started Free" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
