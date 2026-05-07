import type { Metadata } from "next";
import FeatureShowcase from "@/components/Home/FeatureShowcase";
import CoachPersonas from "@/components/Home/CoachPersonas";
import CTA from "@/components/Home/CTA";
import PricingStrip from "@/components/Home/PricingStrip";
import FeaturesHero from "@/components/Features/FeaturesHero";
import HowItWorks from "@/components/Features/HowItWorks";
import FeaturesBanner from "@/components/Features/FeaturesBanner";
import RealTimeCalls from "@/components/Features/RealTimeCalls";

export const metadata: Metadata = {
  title: "Features — Gold Health",
  description:
    "Discover how Gold Health combines Olympic-tested science, AI coaching, and monitoring to transform your health.",
};

export default function FeaturesPage() {
  return (
    <div className="relative">
      <FeaturesHero />
      <FeatureShowcase />
      <CoachPersonas />
      <RealTimeCalls />
      <HowItWorks />
      <PricingStrip />
      {/* <FeatureDetails /> */}
      {/* <Integrations /> */}
      <FeaturesBanner />
      <section className="relative pt-4 pb-12 sm:pt-8 sm:pb-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            All ages. All levels.
          </h2>
        </div>
      </section>
      <CTA
        heading={
          <>
            Win your day.
            <br />
            Every day.
          </>
        }
      />
    </div>
  );
}
