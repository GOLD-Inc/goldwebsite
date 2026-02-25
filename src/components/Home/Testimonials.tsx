"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    text: "Gold Health completely changed how I track my recovery. The AI coach feels like having a personal trainer who actually understands my body.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    name: "Sarah Mitchell",
    role: "Marathon Runner",
  },
  {
    text: "As an Olympic athlete, I need precision data I can trust. Gold Health delivers insights that actually move the needle on performance.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    name: "James Rivera",
    role: "Olympic Swimmer",
  },
  {
    text: "The sleep insights alone were worth it. I went from 6 hours of restless sleep to consistent deep recovery nights within weeks.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    name: "Emily Chen",
    role: "Working Mom",
  },
  {
    text: "I recommend Gold Health to all my patients. It bridges the gap between monitoring and everyday wellness beautifully.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
    name: "Dr. Robert Hayes",
    role: "Sports Medicine Physician",
  },
  {
    text: "The meal planning feature understands my training cycles. It adjusts my nutrition based on how hard I pushed that day. Incredible.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    name: "Marcus Johnson",
    role: "CrossFit Athlete",
  },
  {
    text: "After trying dozens of health apps, Gold Health is the first one that feels like it was built by people who actually train. The difference is night and day.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    name: "Priya Sharma",
    role: "Triathlete",
  },
  {
    text: "The Apple Health integration is seamless. All my wearable data flows in and Gold Health turns it into actionable insights I can actually use.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    name: "David Park",
    role: "Tech Executive",
  },
  {
    text: "My whole team uses Gold Health now. The group insights helped us optimize our training schedule and reduce injuries by 40% this season.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    name: "Coach Lisa Torres",
    role: "NCAA Swim Coach",
  },
  {
    text: "As someone managing a chronic condition, Gold Health gives me peace of mind. The real-time monitoring and AI alerts have been life-changing.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    name: "Nathan Brooks",
    role: "Wellness Advocate",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="relative my-0 overflow-hidden">
      {/* Background diving image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/female-diving-getgold.webp"
          alt="Athlete diving"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 sm:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center">
              For your Personal{" "}
              <span className="bg-gradient-to-r from-[#EC7013] to-[#f4d03f] bg-clip-text text-transparent">
                Gold.
              </span>
            </h2>
            <p className="text-center mt-5 text-white/60 max-w-md leading-relaxed">
              From Olympians to everyday people — hear how Gold Health is
              transforming the way people train, recover, and perform.
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
