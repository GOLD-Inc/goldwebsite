"use client";

import Image from "next/image";

const tags = [
  { label: "Better sleep", color: "bg-[#EC7013]" },
  { label: "Lean muscle", color: "bg-[#f4d03f]" },
  { label: "Fat loss", color: "bg-[#e8836a]" },
  { label: "Well-being", color: "bg-[#5bbad5]" },
  { label: "More energy", color: "bg-[#6dc876]" },
  { label: "Nutrition", color: "bg-[#9b7dd4]" },
];

export default function SimpleActions() {
  const scrollTags = [...tags, ...tags, ...tags, ...tags];

  return (
    <section className="relative overflow-hidden pb-10 sm:pb-14">
      {/* Image with text overlay */}
      <div className="relative w-full">
        <Image
          src="/apple-user.jpg"
          alt="Woman using Gold Health app"
          width={1920}
          height={900}
          className="w-full h-auto block"
          sizes="100vw"
          priority
        />

        {/* Bottom fade to white — lower 30% only */}
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-white to-transparent" />

        {/* Text overlaid on bottom of image */}
        <div className="absolute inset-x-0 bottom-[-100px] px-6 text-center">
          <h3 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Simple actions,
            <br />
            <span className="bg-gradient-to-r from-[#EC7013] to-[#f4d03f] bg-clip-text text-transparent">
              huge benefits.
            </span>
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-black/80 sm:text-lg font-semibold">
            Designed by Olympic athletes to transform
            <br className="hidden sm:block" />
            small daily changes into powerful results.
          </p>
        </div>
      </div>

      {/* Scrolling tags */}
      <div className="relative mt-40 mb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent sm:w-40" />

        <div className="flex w-max animate-scroll-left gap-4">
          {scrollTags.map((tag, i) => (
            <div
              key={`${tag.label}-${i}`}
              className={`shrink-0 rounded-full ${tag.color} px-6 py-2.5 text-sm font-semibold text-white shadow-sm`}
            >
              {tag.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
