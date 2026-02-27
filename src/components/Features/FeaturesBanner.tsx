"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function FeaturesBanner() {
  return (
    <section className="relative pb-24">
      <div className="relative">
        <Image
          src="/Features-BG.jpg"
          alt="Medal-winning results for all"
          width={2400}
          height={1600}
          className="w-full h-auto block"
          sizes="100vw"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="absolute inset-x-0 bottom-[-100px] md:bottom-0  flex flex-col items-center px-6 pb-10 text-center sm:pb-14 lg:pb-0"
        >
          <h2 className="text-3xl font-semibold text-black sm:text-5xl lg:text-6xl">
            Medal-winning
            <br />
            results for all.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
