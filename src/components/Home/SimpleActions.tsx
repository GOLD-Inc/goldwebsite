"use client";

import Link from "next/link";

const benefits = [
  { label: "Better Sleep", color: "bg-[#5bbad5]" },
  { label: "Lean Muscle", color: "bg-[#f4d03f]" },
  { label: "Fat Loss", color: "bg-[#e8836a]" },
  { label: "Well-being", color: "bg-[#6dc876]" },
];

export default function SimpleActions() {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24">
      {/* Heading and description */}
      <div className="px-6 text-center">
        <h3 className="pb-5 text-4xl font-bold text-black sm:text-5xl lg:text-6xl xl:text-7xl">
          Win your day.
          <br />
          Every day.
        </h3>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-black sm:mt-6 sm:text-xl lg:text-2xl">
          Designed by Olympic athletes to transform small daily changes into
          powerful results. All ages. All levels.
        </p>
      </div>

      {/* 4 benefit pills — each links to /features */}
      <div className="mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-3 px-6 sm:mt-20 sm:gap-4">
        {benefits.map((benefit) => (
          <Link
            key={benefit.label}
            href="/features"
            className={`shrink-0 rounded-full ${benefit.color} px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md`}
          >
            {benefit.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

