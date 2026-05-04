"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GetAppButton } from "@/components/ui/get-app-button";

interface CTAProps {
  heading?: React.ReactNode;
}

export default function CTA({ heading = "All ages. All levels." }: CTAProps) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] sm:rounded-[40px] bg-slate-100/80 px-8 py-16 text-center sm:px-16 sm:py-24"
        >
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.05]">
            {heading}
          </h2>

          <div className="mt-10 flex justify-center">
            <Image
              src="/Top-Badge.png"
              alt="Top-Rated App - Life Changing - Forbes, Fortune"
              width={220}
              height={193}
              className="h-auto w-[180px] sm:w-[200px]"
            />
          </div>

          <div className="mt-10 flex justify-center">
            <GetAppButton size="lg" label="Get Started Free" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
