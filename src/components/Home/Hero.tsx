"use client";
import Image from "next/image";
// import { useRef } from "react";
// import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Confetti, ConfettiRef } from "../ui/confetti";
// import { HeroBadge } from "../ui/hero-badge";
// import { GetAppButton } from "../ui/get-app-button";
// import { AnimatedTooltip } from "../ui/animated-tooltip";
// import { IPhoneFrame } from "../ui/iphone-frame";

export default function Hero() {
  return (
    <section className="relative bg-white">
      {/* Image container — centered, capped width */}
      <div className="relative mx-auto max-w-[960px] w-full pt-20">
        <Image
          src="/hero-img.png"
          alt="Olympic athlete high-fiving with everyday person"
          width={960}
          height={640}
          priority
          sizes="(max-width: 960px) 100vw, 960px"
          className="w-full h-auto block"
        />

        {/* Strong bottom fade — lower 40% */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-white via-white/80 to-transparent" />

        {/* Badge centered over image */}
        <div className="absolute inset-x-0 bottom-[15%] sm:bottom-[18%] flex justify-center">
          <Image
            src="/Top-Badge.png"
            alt="Top-Rated App - Life Changing - Forbes, Fortune"
            width={220}
            height={193}
            className="w-[120px] sm:w-[160px] md:w-[200px] h-auto"
          />
        </div>
      </div>

      {/* Text content below image — overlaps slightly */}
      <div className="relative -mt-4 sm:-mt-8 mx-auto max-w-3xl px-4 sm:px-6 pb-8 sm:pb-12 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-black">
          Medal winning
          <br />
          secrets for life.
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base md:text-lg text-black/70">
          AI Coaching by Olympic athletes for everyone.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#learn-more"
            className="rounded-full bg-[#FF8D25] px-5 sm:px-7 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#e67d1e]"
          >
            Learn more
          </a>
          <a
            href="https://apps.apple.com/us/app/gold-ai/id1334427427"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#FFF3E9] px-5 sm:px-7 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-[#FF8D25] transition-colors hover:bg-[#ffe8d4]"
          >
            Get App
          </a>
        </div>
      </div>
    </section>
  );
}
