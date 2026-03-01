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
      className="relative"
      style={{ height: `${screens.length * 90}vh` }}
    >
      {/* Sticky viewport — vertically centered with offset from top */}
      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden">
        <div className="w-full px-6 sm:px-8">
          {/* ── Desktop: side-by-side, centered as a group ── */}
          <div className="mx-auto hidden md:flex md:max-w-4xl md:items-center md:justify-center md:gap-16 lg:gap-24">
            {/* Phone */}
            <div className="relative w-[300px] shrink-0 lg:w-[340px]">
              <div className="relative aspect-[320/693] w-full overflow-hidden rounded-xl">
                {screens.map((screen, i) => (
                  <ScreenImage
                    key={screen.image}
                    src={screen.image}
                    index={i}
                    progress={activeIndex}
                  />
                ))}
              </div>
            </div>

            {/* Text — fixed width so the pair stays centered */}
            <div className="relative min-h-[380px] w-[380px] shrink-0 lg:w-[420px]">
              {screens.map((screen, i) => (
                <ScreenContent
                  key={screen.heading}
                  heading={screen.heading}
                  subtext={screen.subtext}
                  cta={screen.cta}
                  index={i}
                  progress={activeIndex}
                  mobile={false}
                />
              ))}
            </div>
          </div>

          {/* ── Mobile: stacked, everything centered ── */}
          <div className="flex flex-col items-center md:hidden">
            {/* Phone */}
            <div className="relative w-[260px] shrink-0 sm:w-[300px]">
              <div className="relative aspect-[320/693] w-full overflow-hidden rounded-xl">
                {screens.map((screen, i) => (
                  <ScreenImage
                    key={screen.image}
                    src={screen.image}
                    index={i}
                    progress={activeIndex}
                  />
                ))}
              </div>
            </div>

            {/* Text — below phone, centered */}
            <div className="relative mt-10 min-h-[260px] w-full max-w-sm">
              {screens.map((screen, i) => (
                <ScreenContent
                  key={`m-${screen.heading}`}
                  heading={screen.mobileHeading || screen.heading}
                  subtext={screen.subtext}
                  cta={screen.cta}
                  index={i}
                  progress={activeIndex}
                  mobile={true}
                />
              ))}
            </div>
          </div>

          {/* Progress dots */}
          <div className="mt-8 flex items-center justify-center gap-2 md:mt-12">
            {screens.map((_, i) => (
              <ProgressDot key={i} index={i} progress={activeIndex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function ScreenImage({
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

function ScreenContent({
  heading,
  subtext,
  cta,
  index,
  progress,
  mobile,
}: {
  heading: string;
  subtext: string | null;
  cta?: { label: string; href: string };
  index: number;
  progress: MotionValue<number>;
  mobile: boolean;
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
      className={`absolute inset-0 flex flex-col ${
        mobile
          ? "items-center justify-center text-center"
          : "items-start justify-center text-left"
      }`}
      style={{ opacity, y }}
    >
      <PulsingBorderIcon
        size={mobile ? 70 : 90}
        className="mb-6"
        text="Health for Every Body by Gold Health"
      />

      <h3
        className={`whitespace-pre-line font-bold tracking-tight text-slate-900 ${
          mobile
            ? "text-[2rem] leading-[1.4] sm:text-4xl"
            : "text-4xl leading-[1.4] lg:text-[3.2rem] lg:leading-[1.35]"
        }`}
      >
        {heading}
      </h3>

      {subtext && (
        <p
          className={`text-slate-500 ${
            mobile
              ? "mt-5 text-base sm:text-lg"
              : "mt-6 text-lg lg:mt-7 lg:text-xl"
          }`}
        >
          {subtext}
        </p>
      )}

      {cta && (
        <div className={mobile ? "mt-7" : "mt-8"}>
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
