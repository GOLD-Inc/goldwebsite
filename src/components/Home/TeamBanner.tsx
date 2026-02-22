"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function TeamBanner() {
  return (
    <section className="relative">
      {/* Image with overlay and text on top */}
      <div className="relative">
        <Image
          src="/Team-Photos/Team photos/GOLD-Team.jpeg"
          alt="GOLD Health team holding patent plaques"
          width={2400}
          height={1600}
          className="w-full h-auto block"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content — anchored to bottom center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-10 text-center sm:pb-14 lg:pb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            10 patents. 1 mission.
          </h2>
          <Link
            href="/team"
            className="mt-6 inline-flex items-center rounded-full bg-[#EC7013] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#d4640f] hover:shadow-xl active:scale-95 sm:mt-8"
          >
            Meet our Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
