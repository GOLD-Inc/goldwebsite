"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { PulsingBorderIcon } from "@/components/ui/pulsing-border-icon";

const screens = [
  {
    image: "/learn-more/1.png",
    heading: "Introducing your\nnew coach.",
    mobileHeading: "Introducing\nyour new coach.",
    subtext: "Always with you. Always free.",
  },
  {
    image: "/learn-more/2.png",
    heading: "Keeps you\noptimal.",
    mobileHeading: "Keeps you\noptimal.",
    subtext: "Easy-to-follow daily actions.",
  },
  {
    image: "/learn-more/3.png",
    heading: "Day and\nnight.",
    mobileHeading: "Day and\nnight.",
    subtext: null,
    cta: { label: "Features", href: "/features" },
  },
];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function AppShowcase() {
  return (
    <>
      {/* ── Desktop: sticky scroll-driven ── */}
      <DesktopShowcase />
      {/* ── Mobile: simple stacked cards ── */}
      <MobileShowcase />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop — sticky scrollytelling (md+)                              */
/* ------------------------------------------------------------------ */

function DesktopShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, 0, 1, 2],
  );

  return (
    <section
      ref={containerRef}
      className="relative hidden md:block"
      style={{ height: `${screens.length * 100}vh` }}
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden bg-white">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-center gap-16 px-8 lg:gap-24">
          {/* Phone */}
          <div className="relative w-[300px] shrink-0 lg:w-[340px]">
            <div className="relative aspect-[320/693] w-full overflow-hidden rounded-xl">
              {screens.map((screen, i) => (
                <ScrollImage
                  key={screen.image}
                  src={screen.image}
                  index={i}
                  progress={activeIndex}
                />
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="relative min-h-[380px] w-[380px] shrink-0 lg:w-[420px]">
            {screens.map((screen, i) => (
              <ScrollContent
                key={screen.heading}
                heading={screen.heading}
                subtext={screen.subtext}
                cta={screen.cta}
                index={i}
                progress={activeIndex}
              />
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-2">
          {screens.map((_, i) => (
            <ProgressDot key={i} index={i} progress={activeIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile — stacked cards with fade-in (< md)                        */
/* ------------------------------------------------------------------ */

function MobileShowcase() {
  return (
    <section className="md:hidden">
      {screens.map((screen, i) => (
        <motion.div
          key={screen.heading}
          className="flex flex-col items-center px-6 py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Phone image */}
          <div className="relative w-[240px] shrink-0 sm:w-[280px]">
            <div className="relative aspect-[320/693] w-full overflow-hidden rounded-xl">
              <Image
                src={screen.image}
                alt=""
                width={320}
                height={693}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>

          {/* Text */}
          <div className="mt-8 flex flex-col items-center text-center">
            <PulsingBorderIcon
              size={70}
              className="mb-5"
              text="Health for Every Body by Gold Health"
            />

            <h3 className="whitespace-pre-line text-[2rem] font-bold leading-[1.4] tracking-tight text-slate-900 sm:text-4xl">
              {screen.mobileHeading || screen.heading}
            </h3>

            {screen.subtext && (
              <p className="mt-4 text-base text-slate-500 sm:text-lg">
                {screen.subtext}
              </p>
            )}

            {screen.cta && (
              <div className="mt-6">
                <Link
                  href={screen.cta.href}
                  className="inline-flex rounded-full bg-[#FF8D25] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#e67d1e] hover:shadow-md active:scale-[0.97]"
                >
                  {screen.cta.label}
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop sub-components (scroll-driven)                             */
/* ------------------------------------------------------------------ */

function ScrollImage({
  src,
  index,
  progress,
}: {
  src: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, (v: number) =>
    Math.abs(v - index) < 0.5 ? 1 : 0,
  );
  const scale = useTransform(progress, (v: number) =>
    Math.abs(v - index) < 0.5 ? 1 : 0.95,
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity, scale }}
      transition={{ duration: 0.4 }}
    >
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

function ScrollContent({
  heading,
  subtext,
  cta,
  index,
  progress,
}: {
  heading: string;
  subtext: string | null;
  cta?: { label: string; href: string };
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, (v: number) =>
    Math.abs(v - index) < 0.5 ? 1 : 0,
  );
  const y = useTransform(progress, (v: number) => {
    const d = v - index;
    if (Math.abs(d) >= 0.5) return d > 0 ? -24 : 24;
    return 0;
  });

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-start justify-center text-left"
      style={{ opacity, y }}
    >
      <PulsingBorderIcon
        size={90}
        className="mb-6"
        text="Health for Every Body by Gold Health"
      />

      <h3 className="whitespace-pre-line text-4xl font-bold leading-[1.4] tracking-tight text-slate-900 lg:text-[3.2rem] lg:leading-[1.35]">
        {heading}
      </h3>

      {subtext && (
        <p className="mt-6 text-lg text-slate-500 lg:mt-7 lg:text-xl">
          {subtext}
        </p>
      )}

      {cta && (
        <div className="mt-8">
          <Link
            href={cta.href}
            className="inline-flex rounded-full bg-[#FF8D25] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#e67d1e] hover:shadow-md active:scale-[0.97]"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </motion.div>
  );
}

function ProgressDot({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const width = useTransform(progress, (v: number) =>
    Math.abs(v - index) < 0.5 ? 24 : 6,
  );
  const bgColor = useTransform(progress, (v: number) =>
    Math.abs(v - index) < 0.5 ? "#1a1a1a" : "#d4d4d4",
  );

  return (
    <motion.div
      className="h-1.5 rounded-full"
      style={{ width, backgroundColor: bgColor }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  );
}
