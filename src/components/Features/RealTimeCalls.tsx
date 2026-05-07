import Image from "next/image";

export default function RealTimeCalls() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-6 md:grid-cols-2 md:gap-4">
          {/* Left: walking coach */}
          <div className="relative flex justify-center md:justify-start">
            <Image
              src="/walking-coach.png"
              alt="Coach walking and using phone"
              width={600}
              height={900}
              priority={false}
              className="h-auto w-full max-w-[420px] object-contain"
              sizes="(max-width: 768px) 80vw, 40vw"
            />
          </div>

          {/* Right: copy block — icon aligned roughly to head of left image */}
          <div className="flex flex-col md:pt-8">
            <div className="mb-10 flex justify-start">
              <Image
                src="/whatsapp-icon.png"
                alt="WhatsApp"
                width={118}
                height={119}
                className="h-[88px] w-[88px] sm:h-[118px] sm:w-[118px]"
              />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Real-time calls
              <br />
              with your AI coach.
            </h2>
            <p className="mt-10 max-w-lg text-lg font-medium leading-relaxed text-slate-700 sm:text-xl lg:text-2xl">
              Adapts medal-winning secrets to your busy everyday life and keeps
              you optimal. Even shares to your calendar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
