"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { IPhoneFrame } from "@/components/ui/iphone-frame";
import { GetAppButton } from "@/components/ui/get-app-button";

const screens = [
  {
    image: "/AppScreenshots/main-screen.png",
    heading: "Your new coach\nin your pocket.",
  },
  {
    image: "/AppScreenshots/day-calendar.png",
    heading: "Keeping you\noptimal.",
  },
  {
    image: "/AppScreenshots/night-calendar.png",
    heading: "Day and\nnight.",
  },
];

function AnimatedRing({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 120 120"
        className="h-full w-full animate-spin"
        style={{ animationDuration: "8s" }}
      >
        <defs>
          <linearGradient id="ring-grad-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f4d03f" />
            <stop offset="50%" stopColor="#EC7013" />
            <stop offset="100%" stopColor="#d4a0e8" />
          </linearGradient>
          <linearGradient id="ring-grad-2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#a8e6cf" />
            <stop offset="100%" stopColor="#87ceeb" />
          </linearGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r="46"
          fill="none"
          stroke="url(#ring-grad-1)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="200 90"
          opacity="0.9"
        />
        <circle
          cx="60"
          cy="60"
          r="46"
          fill="none"
          stroke="url(#ring-grad-2)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="80 210"
          strokeDashoffset="200"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

export default function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to active screen index (0, 1, 2)
  const activeIndexRaw = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);

  return (
    <section ref={containerRef} className="relative" style={{ height: `${screens.length * 100}vh` }}>
      {/* Sticky container */}
      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-12"
        >
          <AnimatedRing className="mx-auto mb-6 h-16 w-16 sm:h-20 sm:w-20" />
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Medal winning secrets for life.
          </h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href="/features"
              className="inline-flex items-center rounded-full bg-[#EC7013] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#d4640f] hover:shadow-lg active:scale-95"
            >
              Learn more
            </Link>
            <GetAppButton size="sm" label="Get App" />
          </div>
        </motion.div>

        {/* Phone + text area */}
        <div className="flex w-full max-w-5xl items-center justify-center gap-8 px-6 lg:gap-16">
          {/* Phone — stays in place, images crossfade */}
          <div className="flex justify-center lg:justify-start">
            <IPhoneFrame className="w-[220px] sm:w-[260px] md:w-[280px]">
              <div className="relative aspect-[320/693]">
                {screens.map((screen, index) => (
                  <ScreenImage
                    key={screen.image}
                    src={screen.image}
                    index={index}
                    scrollProgress={activeIndexRaw}
                  />
                ))}
              </div>
            </IPhoneFrame>
          </div>

          {/* Text — crossfades */}
          <div className="hidden lg:block lg:flex-1">
            <div className="relative h-40">
              {screens.map((screen, index) => (
                <ScreenHeading
                  key={screen.heading}
                  heading={screen.heading}
                  index={index}
                  scrollProgress={activeIndexRaw}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile text — below phone */}
        <div className="mt-8 lg:hidden">
          <div className="relative h-24 w-full text-center">
            {screens.map((screen, index) => (
              <ScreenHeading
                key={`mobile-${screen.heading}`}
                heading={screen.heading}
                index={index}
                scrollProgress={activeIndexRaw}
                center
              />
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-6 flex items-center gap-2 sm:mt-8">
          {screens.map((_, index) => (
            <ProgressDot key={index} index={index} scrollProgress={activeIndexRaw} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components with scroll-driven opacity                          */
/* ------------------------------------------------------------------ */

function ScreenImage({
  src,
  index,
  scrollProgress,
}: {
  src: string;
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  const opacity = useTransform(scrollProgress, (v: number) => {
    const distance = Math.abs(v - index);
    return distance < 0.5 ? 1 : 0;
  });

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <Image
        src={src}
        alt=""
        width={320}
        height={693}
        className="h-full w-full object-cover"
        loading={index === 0 ? "eager" : "lazy"}
      />
    </motion.div>
  );
}

function ScreenHeading({
  heading,
  index,
  scrollProgress,
  center,
}: {
  heading: string;
  index: number;
  scrollProgress: MotionValue<number>;
  center?: boolean;
}) {
  const opacity = useTransform(scrollProgress, (v: number) => {
    const distance = Math.abs(v - index);
    return distance < 0.5 ? 1 : 0;
  });
  const y = useTransform(scrollProgress, (v: number) => {
    const distance = v - index;
    if (Math.abs(distance) >= 0.5) return distance > 0 ? -20 : 20;
    return 0;
  });

  return (
    <motion.h3
      className={`absolute inset-0 whitespace-pre-line text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl ${
        center ? "text-center" : "text-left"
      }`}
      style={{ opacity, y }}
    >
      {heading}
    </motion.h3>
  );
}

function ProgressDot({
  index,
  scrollProgress,
}: {
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  const width = useTransform(scrollProgress, (v: number) => {
    const distance = Math.abs(v - index);
    return distance < 0.5 ? 24 : 6;
  });
  const bgColor = useTransform(scrollProgress, (v: number) => {
    const distance = Math.abs(v - index);
    return distance < 0.5 ? "#1a1a1a" : "#d4d4d4";
  });

  return (
    <motion.div
      className="h-1.5 rounded-full"
      style={{ width, backgroundColor: bgColor }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  );
}
