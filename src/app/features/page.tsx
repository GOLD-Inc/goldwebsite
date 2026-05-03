import type { Metadata } from "next";
import FeatureShowcase from "@/components/Home/FeatureShowcase";
import CTA from "@/components/Home/CTA";
import PricingStrip from "@/components/Home/PricingStrip";
import FeaturesHero from "@/components/Features/FeaturesHero";
import HowItWorks from "@/components/Features/HowItWorks";
import FeaturesBanner from "@/components/Features/FeaturesBanner";

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
      <HowItWorks />
      <PricingStrip />
      {/* <FeatureDetails /> */}
      {/* <Integrations /> */}
      <FeaturesBanner />
      <CTA />
    </div>
  );
}
