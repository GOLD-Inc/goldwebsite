"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const tags = [
  { label: "Better sleep", color: "bg-[#EC7013]" },
  { label: "Lean muscle", color: "bg-[#f4d03f]" },
  { label: "Fat loss", color: "bg-[#e8836a]" },
  { label: "Well-being", color: "bg-[#5bbad5]" },
  { label: "More energy", color: "bg-[#6dc876]" },
  { label: "Nutrition", color: "bg-[#9b7dd4]" },
];

export default function SimpleActions() {
  // Duplicate tags for seamless infinite scroll
  const scrollTags = [...tags, ...tags];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold pb-10 tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            All ages. All levels.
          </h2>
          <div className="mt-5">
            <Link
              href="/features"
              className="inline-flex items-center rounded-full bg-[#EC7013] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#d4640f] hover:shadow-lg active:scale-95"
            >
              Features
            </Link>
          </div>
        </motion.div>

        {/* Swimmer image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-lg"
        >
          <Image
            src="/diving.webp"
            alt="Olympic swimmer diving"
            width={800}
            height={700}
            className="w-full h-auto block"
            sizes="(max-width: 768px) 100vw, 512px"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Simple actions,
            <br />
            <span className="bg-gradient-to-r from-[#EC7013] to-[#f4d03f] bg-clip-text text-transparent">
              huge benefits.
            </span>
          </h3>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg">
            Built by Olympic athletes to give anybody breakthroughs in their
            health and fitness with easy to follow daily actions.
          </p>
        </motion.div>
      </div>

      {/* Scrolling tags */}
      <div className="relative mt-12 overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-scroll-left gap-4">
          {scrollTags.map((tag, i) => (
            <div
              key={`${tag.label}-${i}`}
              className={`shrink-0 rounded-full ${tag.color} px-6 py-2.5 text-sm font-semibold text-white shadow-sm`}
            >
              {tag.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
