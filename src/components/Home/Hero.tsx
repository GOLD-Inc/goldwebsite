"use client";
import Image from "next/image";

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

        {/* Badge, heading, and buttons — centered over image, slightly above middle */}
        <div className="absolute inset-x-0 top-[52%] sm:top-[55%] flex flex-col items-center justify-center px-4 text-center">
          {/* Badge */}
          <Image
            src="/Top-Badge.png"
            alt="Top-Rated App - Life Changing - Forbes, Fortune"
            width={220}
            height={193}
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto"
          />
          {/* Heading */}
          <h1 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.05] text-black drop-shadow-sm">
            Medal winning
            <br />
            secrets for life.
          </h1>
          {/* Subtitle */}
          <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-lg sm:text-xl lg:text-2xl font-medium text-slate-700 leading-relaxed">
            AI Coaching by Olympic athletes for everyone.
          </p>
          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/features"
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
      </div>

      {/* Spacer for layout — content is now over image */}
      <div className="h-8 sm:h-12 pb-8 sm:pb-12" />
    </section>
  );
}
