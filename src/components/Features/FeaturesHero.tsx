"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44 sm:pb-16">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-7xl">
            Win your Day.
            <br />
            Every Day.
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg sm:text-xl lg:text-2xl font-medium text-slate-700 leading-relaxed">
            Simple yet powerful daily scheduling of your workouts, meals, and
            sleep using medal-winning secrets.
          </p>
        </motion.div>
      </div>

      {/* Hero composition — phone-in-hand, transparent PNG floats on the page */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto mt-12 w-full max-w-lg -translate-x-6 px-6 sm:mt-16 sm:max-w-xl sm:-translate-x-10 lg:max-w-2xl lg:-translate-x-14"
      >
        <Image
          src="/features-hero.png"
          alt="Gold Health iPhone app shown in hand"
          width={1080}
          height={1260}
          className="block h-auto w-full"
          priority
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 640px, 768px"
        />
      </motion.div>
    </section>
  );
}
