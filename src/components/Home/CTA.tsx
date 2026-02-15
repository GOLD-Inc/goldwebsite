"use client";

import { motion } from "motion/react";
import { GetAppButton } from "@/components/ui/get-app-button";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Glass CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] sm:rounded-[3rem] border border-white/30 bg-white/40 px-8 py-16 text-center shadow-[0_8px_60px_rgba(0,0,0,0.06)] backdrop-blur-2xl sm:px-16 sm:py-20"
        >
          {/* Decorative gradient orbs */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-[#EC7013]/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#065b64]/15 blur-[80px]" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-80 rounded-full bg-[#f4d03f]/10 blur-[60px]" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="mx-auto max-w-lg text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Your health deserves
              <span className="bg-gradient-to-r from-[#EC7013] to-[#f4d03f] bg-clip-text text-transparent">
                {" "}gold standard{" "}
              </span>
              care.
            </h2>

            <p className="mx-auto mt-5 max-w-md leading-relaxed text-neutral-500">
              Join thousands of athletes and wellness seekers who chose
              clinical-grade insights over guesswork.
            </p>

            {/* Pillars */}
            <div className="mx-auto mt-10 flex max-w-lg flex-wrap justify-center gap-3">
              <div className="rounded-full border border-neutral-200 bg-white/60 px-5 py-2 text-sm text-neutral-600">
                Olympic-Tested Science
              </div>
              <div className="rounded-full border border-neutral-200 bg-white/60 px-5 py-2 text-sm text-neutral-600">
                AI-Powered Coaching
              </div>
              <div className="rounded-full border border-neutral-200 bg-white/60 px-5 py-2 text-sm text-neutral-600">
                Clinical-Grade Monitoring
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <GetAppButton size="lg" label="Download Free" />
              <span className="text-xs text-neutral-400">
                Free on iOS &middot; No credit card required
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
