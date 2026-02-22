"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GetAppButton } from "@/components/ui/get-app-button";

export default function FeaturesBanner() {
  return (
    <section className="relative">
      <div className="relative">
        <Image
          src="/features-footer-img.png"
          alt="Medal-winning results for all"
          width={2400}
          height={1600}
          className="w-full h-auto block"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-10 text-center sm:pb-14 lg:pb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Medal-winning
            <br />
            results for all.
          </h2>
          <div className="mt-6 sm:mt-8">
            <GetAppButton size="lg" label="Get the App" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
