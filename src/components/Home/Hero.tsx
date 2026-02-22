"use client";
import { useRef } from "react";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Confetti, ConfettiRef } from "../ui/confetti";
import { HeroBadge } from "../ui/hero-badge";
import { GetAppButton } from "../ui/get-app-button";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 * i,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const teamMembers = [
  {
    id: 1,
    name: "Sky Christopherson",
    designation: "Olympic Gold Medalist",
    image: "/Team-Photos/Headshots/Sky-Christopherson.jpg",
  },
  {
    id: 2,
    name: "Tom Gruber",
    designation: "Co-founder of Siri (Apple)",
    image: "/Team-Photos/Headshots/Tom-Gruber.jpg.webp",
  },
  {
    id: 3,
    name: "Dr. Yvonne Cagle",
    designation: "NASA Astronaut",
    image: "/Team-Photos/Headshots/Yvonne-Cagle.jpg.webp",
  },
  {
    id: 4,
    name: "Stefan Groschupf",
    designation: "AI & Data Pioneer",
    image: "/Team-Photos/Headshots/Stefan-Groschupf.jpg.webp",
  },
  {
    id: 5,
    name: "Sarah Townley",
    designation: "Health & Wellness Lead",
    image: "/Team-Photos/Headshots/Sarah-Townley.jpg.webp",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const confettiRef = useRef<ConfettiRef>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const phoneY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Single Mesh Gradient background */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={[
          "#065b64",
          "#f4d03f",
          "#f5e6c8",
          "#e8d5a3",
          "#d4c490",
          "#F9E0C9",
          "#0891b2",
        ]}
        speed={0.15}
      />

      {/* Confetti canvas */}
      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 z-[5] size-full pointer-events-none"
        manualstart
      />

      {/* Hero text content — centered near top */}
      <motion.div
        style={{
          opacity: textOpacity,
          y: textY,
          willChange: "transform, opacity",
        }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-32 sm:pt-36 text-center"
      >
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 cursor-pointer"
          onClick={() => confettiRef.current?.fire({})}
        >
          <HeroBadge text="Now available on the App Store" dark />
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block font-black bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent drop-shadow-2xl">
            Your health
          </span>
          <span className="block font-light bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent italic">
            Reimagined
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-black/70 sm:text-lg"
        >
          Clinical-grade health monitoring meets beautiful design.
          <br className="hidden sm:block" />
          Track vitals, get AI-powered insights, and take control of your
          wellness.
        </motion.p>

        {/* CTA + Team */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col items-center gap-10"
        >
          <GetAppButton size="lg" />

          {/* Team tooltip */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-row items-center">
              <AnimatedTooltip items={teamMembers} />
            </div>
            <p className="mt-2 text-xs sm:text-sm font-medium text-black/50">
              Backed by Olympic athletes & Apple Siri co-founder
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Phone mockup — bottom half */}
      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        style={{ willChange: "transform" }}
        className="relative z-10 mx-auto mt-12 flex justify-center px-6"
      >
        <div className="relative w-[280px] sm:w-[320px] md:w-[360px]">
          {/* Phone shadow */}
          <div className="absolute -inset-4 rounded-[3rem] bg-black/10 blur-2xl" />
          {/* Phone frame */}
          <div className="relative overflow-hidden rounded-[2.5rem] border-[8px] border-black/90 bg-black shadow-2xl">
            <Image
              src="/AppScreenshots/welcome.png"
              alt="Gold Health App"
              className="w-full"
              width={320}
              height={693}
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom spacer */}
      <div className="h-20" />

      {/* Pulsing border — bottom right */}
      <div className="absolute bottom-8 right-8 z-20 hidden sm:block">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <PulsingBorder
            colors={[
              "#f4d03f",
              "#065b64",
              "#ffffff",
              "#EAD0F7",
              "#D2E9FF",
              "#F9E0C9",
              "#0891b2",
              "#f0c674",
            ]}
            colorBack="#00000000"
            speed={1.0}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={4}
            scale={0.65}
            rotation={0}
            frame={9161408.251009725}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
          />
          <svg
            className="absolute inset-0 h-full w-full animate-spin"
            viewBox="0 0 100 100"
            style={{ transform: "scale(1.6)", animationDuration: "20s" }}
          >
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text className="text-sm font-medium fill-[#928071]">
              <textPath href="#circle" startOffset="0%">
                Health for Every Body by Gold Health
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
