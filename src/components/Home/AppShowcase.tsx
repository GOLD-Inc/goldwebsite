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
import { IPhoneFrame } from "@/components/ui/iphone-frame";

const screens = [
  {
    image: "/AppScreenshots/main-coach.png",
    heading: "Introducing your\nnew AI coach.",
    mobileHeading: "Introducing your\nnew AI coach.",
    subtext: "Always with you. Always free.",
  },
  {
    image: "/AppScreenshots/day-calendar.png",
    heading: "Keeps you\noptimal.",
    mobileHeading: "Keeps you\noptimal.",
    subtext: "Easy-to-follow daily actions.",
  },
  {
    image: "/AppScreenshots/sleep-screen.png",
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
    [0, 0.25, 0.35, 0.6, 0.7, 1],
    [0, 0, 1, 1, 2, 2],
  );

  return (
    <section
      ref={containerRef}
      className="relative hidden pt-24 md:block scroll-mt-20"
      style={{ height: `${screens.length * 120}vh` }}
    >
      <div className="sticky top-20 flex min-h-[70vh] items-center justify-center overflow-hidden bg-white py-6 z-30">
        <div className="mx-auto flex w-full max-w-6xl items-start justify-center gap-6 px-6 lg:gap-10">
          {/* Phone */}
          <div className="relative w-[290px] shrink-0 lg:w-[330px]">
            <IPhoneFrame>
              <div className="relative aspect-[320/693] w-full overflow-hidden">
                {screens.map((screen, i) => (
                  <ScrollImage
                    key={screen.image}
                    src={screen.image}
                    index={i}
                    progress={activeIndex}
                  />
                ))}
              </div>
            </IPhoneFrame>
          </div>

          {/* Text */}
          <div className="relative mt-5 min-h-[220px] w-[300px] shrink-0 lg:mt-6 lg:w-[500px]">
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
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3">
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
    [0, 0.25, 0.35, 0.6, 0.7, 1],
    [0, 0, 1, 1, 2, 2],
  );

  return (
    <section
      ref={containerRef}
      className="relative pt-20 md:hidden scroll-mt-20"
      style={{ height: `${screens.length * 120}vh` }}
    >
      <div className="sticky top-20 flex min-h-[70vh] flex-col items-center justify-start gap-6 overflow-hidden bg-white px-4 py-6 pb-12 z-30">
        {/* Image — crossfades on scroll */}
        <div className="relative w-[200px] shrink-0 sm:w-[230px]">
          <IPhoneFrame>
            <div className="relative aspect-[320/693] w-full overflow-hidden">
              {screens.map((screen, i) => (
                <ScrollImage
                  key={screen.image}
                  src={screen.image}
                  index={i}
                  progress={activeIndex}
                />
              ))}
            </div>
          </IPhoneFrame>
        </div>

        {/* Text — below image, left-aligned, shifted right */}
        <div className="relative min-h-[140px] w-full max-w-[320px] flex-1 flex flex-col items-start justify-start text-left ml-24 -mt-12">
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
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-3">
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
  const opacity = useTransform(progress, (v: number) => {
    const dist = Math.abs(v - index);
    return 1 - smoothStep(0.3, 0.7, dist);
  });
  const y = useTransform(progress, (v: number) => {
    const d = v - index;
    const sign = d > 0 ? -1 : 1;
    return sign * 20 * smoothStep(0.3, 0.7, Math.abs(d));
  });

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-start justify-start text-left pt-4"
      style={{ opacity, y }}
    >
      <h3 className="whitespace-pre-line text-3xl font-bold leading-tight tracking-tight text-slate-900">
        {heading}
      </h3>

      {subtext && (
        <p className="mt-4 text-xl font-semibold text-slate-900">{subtext}</p>
      )}

      {cta && (
        <div className="mt-6">
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

function smoothStep(edge0: number, edge1: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function ScrollImage({
  src,
  index,
  progress,
}: {
  src: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, (v: number) => {
    const dist = Math.abs(v - index);
    return 1 - smoothStep(0.3, 0.7, dist);
  });
  const scale = useTransform(progress, (v: number) => {
    const dist = Math.abs(v - index);
    return 1 - 0.05 * smoothStep(0.3, 0.7, dist);
  });

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
  const opacity = useTransform(progress, (v: number) => {
    const dist = Math.abs(v - index);
    return 1 - smoothStep(0.3, 0.7, dist);
  });
  const y = useTransform(progress, (v: number) => {
    const d = v - index;
    const sign = d > 0 ? -1 : 1;
    return sign * 24 * smoothStep(0.3, 0.7, Math.abs(d));
  });

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-start justify-center text-left mt-20"
      style={{ opacity, y }}
    >
      <div className="opacity-50 mt-32 mb-5">
        <PulsingBorderIcon
          size={70}
          className="mb-1"
          text="Health for Every Body by Gold Health"
        />
      </div>

      <h3 className="whitespace-pre-line text-4xl font-bold text-slate-900 lg:text-5xl xl:text-6xl">
        {heading}
      </h3>

      {subtext && (
        <p className="mt-5 text-base font-semibold text-slate-900 lg:text-lg xl:text-xl">
          {subtext}
        </p>
      )}

      {cta && (
        <div className="mt-10">
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
