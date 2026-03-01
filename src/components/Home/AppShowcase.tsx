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
    heading: "Introducing your\nnew AI coach.",
    mobileHeading: "Introducing\nyour new AI coach.",
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
      className="relative hidden pt-24 md:block scroll-mt-20"
      style={{ height: `${screens.length * 45}vh` }}
    >
      <div className="sticky top-20 flex min-h-[70vh] items-center justify-center overflow-hidden bg-white py-6 z-30">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-center gap-6 px-6 lg:gap-10">
          {/* Phone */}
          <div className="relative w-[220px] shrink-0 lg:w-[260px]">
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
          <div className="relative min-h-[220px] w-[300px] shrink-0 lg:w-[340px]">
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
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
          {screens.map((_, i) => (
            <ProgressDot key={i} index={i} progress={activeIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile — scroll-driven (same as desktop, stacked layout)           */
/* ------------------------------------------------------------------ */

function MobileShowcase() {
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
      className="relative pt-20 md:hidden scroll-mt-20"
      style={{ height: `${screens.length * 45}vh` }}
    >
      <div className="sticky top-20 flex min-h-[70vh] flex-row items-center justify-center gap-4 overflow-hidden bg-white px-4 py-6 z-30 sm:gap-6">
        {/* Image — crossfades on scroll */}
        <div className="relative w-[140px] shrink-0 sm:w-[180px]">
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

        {/* Text — crossfades on scroll, icon high, heading aligns with phone center */}
        <div className="relative min-h-[160px] w-full max-w-[180px] flex-1 sm:max-w-[220px]">
          {screens.map((screen, i) => (
            <MobileScrollContent
              key={screen.heading}
              heading={screen.mobileHeading || screen.heading}
              subtext={screen.subtext}
              cta={screen.cta}
              index={i}
              progress={activeIndex}
            />
          ))}
        </div>

        {/* Progress dots — stays below navbar with sticky top-20 */}
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
          {screens.map((_, i) => (
            <ProgressDot key={i} index={i} progress={activeIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileScrollContent({
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
    if (Math.abs(d) >= 0.5) return d > 0 ? -20 : 20;
    return 0;
  });

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center text-center"
      style={{ opacity, y }}
    >
      <div className="opacity-70 -mt-3 mb-1">
        <PulsingBorderIcon
          size={50}
          text="Health for Every Body by Gold Health"
        />
      </div>

      <h3 className="whitespace-pre-line text-lg font-bold leading-tight tracking-tight text-slate-900 sm:text-xl">
        {heading}
      </h3>

      {subtext && (
        <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
          {subtext}
        </p>
      )}

      {cta && (
        <div className="mt-5">
          <Link
            href={cta.href}
            className="inline-flex rounded-full bg-[#FF8D25] px-5 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#e67d1e] hover:shadow-md active:scale-[0.97] sm:text-sm"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </motion.div>
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
      className="absolute inset-0 flex flex-col items-start justify-center text-left -mt-4 lg:-mt-6"
      style={{ opacity, y }}
    >
      <div className="opacity-50 -mt-2">
        <PulsingBorderIcon
          size={70}
          className="mb-1"
          text="Health for Every Body by Gold Health"
        />
      </div>

      <h3 className="whitespace-pre-line text-2xl font-bold leading-tight tracking-tight text-slate-900 lg:text-3xl">
        {heading}
      </h3>

      {subtext && (
        <p className="mt-2 text-sm font-medium text-slate-500 lg:mt-3 lg:text-base">
          {subtext}
        </p>
      )}

      {cta && (
        <div className="mt-5">
          <Link
            href={cta.href}
            className="inline-flex rounded-full bg-[#FF8D25] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#e67d1e] hover:shadow-md active:scale-[0.97]"
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
