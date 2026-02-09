"use client";

import Image from "next/image";

const logos = [
  { name: "Forbes", src: "/Media-logos/forbes.png.webp" },
  { name: "Fortune", src: "/Media-logos/Fortune-logo.png.webp" },
  { name: "Sports Illustrated", src: "/Media-logos/SportsIllustratedLogo+1.png.webp" },
  { name: "Outside", src: "/Media-logos/outside.png.webp" },
];

// Duplicate for seamless loop
const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

export default function FeaturedIn() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Tagline */}
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Featured In
          </div>
          <p className="mx-auto max-w-lg text-lg font-medium leading-relaxed text-neutral-600 sm:text-xl">
            From the Olympics to the big screen — our technology is everywhere.
          </p>
        </div>
      </div>

      {/* Scrolling marquee with fade edges */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#fafaf8] to-transparent sm:w-40" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#fafaf8] to-transparent sm:w-40" />

        {/* Marquee track */}
        <div className="flex w-max animate-[marquee_25s_linear_infinite] items-center gap-16 py-4 sm:gap-20">
          {marqueeLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="relative h-10 w-32 shrink-0 sm:h-12 sm:w-40"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto mt-14 h-px max-w-xs bg-gradient-to-r from-transparent via-neutral-200 to-transparent sm:mt-16" />
    </section>
  );
}
