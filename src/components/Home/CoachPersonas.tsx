"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const coaches = [
  { name: "Steve", src: "/coach-photos/steve.png" },
  { name: "Annie", src: "/coach-photos/annie.png" },
  { name: "Sienna", src: "/coach-photos/sienna.png" },
  { name: "Katie", src: "/coach-photos/katie.png" },
  { name: "Mark", src: "/coach-photos/mark.png" },
  { name: "Alicia", src: "/coach-photos/alicia.png" },
  { name: "Tyrese", src: "/coach-photos/tyrese.png" },
];

const CARD_W = 240;
const CARD_W_MOBILE = 176;
const MIN_GAP = 24;
const SPEED = 45; // px per second

export default function CoachPersonas() {
  const [cardW, setCardW] = useState(CARD_W);
  const [gap, setGap] = useState(MIN_GAP);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const update = () =>
      setCardW(window.innerWidth < 640 ? CARD_W_MOBILE : CARD_W);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const recalc = () => {
      const cw = container.clientWidth;
      // Strip must be wider than (container + one card) so wrap teleports off-screen
      const requiredSlot = Math.ceil((cw + cardW + 1) / coaches.length);
      setGap(Math.max(MIN_GAP, requiredSlot - cardW));
    };
    recalc();
    const observer = new ResizeObserver(recalc);
    observer.observe(container);
    return () => observer.disconnect();
  }, [cardW]);

  useEffect(() => {
    const slot = cardW + gap;
    const stripWidth = slot * coaches.length;
    let raf = 0;
    let offset = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      offset += SPEED * dt;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const raw = i * slot - offset + cardW;
        const wrapped = ((raw % stripWidth) + stripWidth) % stripWidth - cardW;
        el.style.transform = `translate3d(${wrapped}px, 0, 0)`;
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cardW, gap]);

  const stripHeight = (cardW * 1492) / 868;

  return (
    <section className="relative pt-20 pb-32 sm:pt-28 sm:pb-40">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
          Health &amp; Fitness{" "}
          <span className="block sm:inline">made fun.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-slate-600 sm:text-lg">
          Choose from many inspirational coach personas.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative mt-12 w-full overflow-hidden sm:mt-16"
      >
        <div className="relative" style={{ height: stripHeight }}>
          {coaches.map((coach, i) => (
            <div
              key={coach.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute top-0 left-0 overflow-hidden rounded-3xl"
              style={{
                width: cardW,
                aspectRatio: "868 / 1492",
                willChange: "transform",
              }}
            >
              <Image
                src={coach.src}
                alt={coach.name}
                fill
                sizes={`${cardW}px`}
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>

        {/* Subtle side fade — small taper */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-12" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-12" />
      </div>
    </section>
  );
}
