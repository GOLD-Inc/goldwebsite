import Image from "next/image";
import Link from "next/link";

export default function CareerPage() {
  return (
    <main className="min-h-screen pb-24">
      {/* Hero image — same as team page, no overlay */}
      <section className="mx-auto max-w-5xl px-6 pt-32">
        <div className="overflow-hidden rounded-[2rem] sm:rounded-[50px]">
          <Image
            src="/career.png"
            alt="work with us"
            width={2400}
            height={1600}
            className="w-full h-auto block"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>
      </section>

      {/* Heading and subheading — big and bold */}
      <section className="mx-auto max-w-4xl px-6 pt-12 sm:pt-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl lg:text-7xl">
          Work with us.
        </h1>
        <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-lg sm:text-xl lg:text-2xl font-medium text-slate-700 leading-relaxed">
          Join our innovative team and help improve the health of millions
          worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/support#jobs"
            className="rounded-full bg-[#FF8D25] px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-white transition-colors hover:bg-[#e67d1e] min-w-[140px] sm:min-w-[160px] text-center"
          >
            Jobs
          </Link>
          <Link
            href="/support#partners"
            className="rounded-full bg-[#FF8D25] px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-white transition-colors hover:bg-[#e67d1e] min-w-[140px] sm:min-w-[160px] text-center"
          >
            Partners
          </Link>
          <Link
            href="/support#investors"
            className="rounded-full bg-[#FF8D25] px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold text-white transition-colors hover:bg-[#e67d1e] min-w-[140px] sm:min-w-[160px] text-center"
          >
            Investors
          </Link>
        </div>
      </section>
    </main>
  );
}
