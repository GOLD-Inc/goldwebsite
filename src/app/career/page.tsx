import Image from "next/image";
import Link from "next/link";

export default function CareerPage() {
  return (
    <main className="h-3/4">
      {/* Heading section — matches FeaturesHero style with gradient */}
      <section className="relative overflow-hidden pb-6 pt-36 sm:pt-44">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-wide text-slate-900 sm:text-5xl lg:text-7xl">
            Work with{" "}
            <span className="bg-gradient-to-r from-[#EC7013] to-[#f4d03f] bg-clip-text text-transparent">
              us.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-black/70 leading-relaxed">
            Join our innovative team and help improve
            <br className="hidden sm:block" />
            the health of millions worldwide.
          </p>
        </div>
      </section>

      {/* Image — full width, natural aspect, no cropping */}
      <section className="relative w-full">
        <Image
          src="/work-withus.png"
          alt="Gold Health team meeting"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="w-full h-auto block"
        />

        {/* Gradient overlay for button readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Buttons + text overlaid on bottom of image */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-8 sm:pb-12 md:pb-16 px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/support#jobs"
              className="rounded-full bg-[#FF8D25] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#e67d1e] min-w-[120px] sm:min-w-[140px] text-center"
            >
              Jobs
            </Link>
            <Link
              href="/support#partners"
              className="rounded-full bg-[#FF8D25] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#e67d1e] min-w-[120px] sm:min-w-[140px] text-center"
            >
              Partners
            </Link>
            <Link
              href="/support#investors"
              className="rounded-full bg-[#FF8D25] px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-[#e67d1e] min-w-[120px] sm:min-w-[140px] text-center"
            >
              Investors
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
