"use client";

import { motion } from "motion/react";
import { GetAppButton } from "@/components/ui/get-app-button";

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden pb-6 pt-36 sm:pt-44">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl font-bold tracking-wide text-slate-900 sm:text-5xl lg:text-7xl">
            Simple actions,
            <br />
            <span className="bg-gradient-to-r from-[#EC7013] to-[#f4d03f] bg-clip-text text-transparent">
              huge benefits.
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
