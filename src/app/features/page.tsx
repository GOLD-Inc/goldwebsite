import type { Metadata } from "next";
import FeatureShowcase from "@/components/Home/FeatureShowcase";
import CTA from "@/components/Home/CTA";
import FeaturesHero from "@/components/Features/FeaturesHero";
import HowItWorks from "@/components/Features/HowItWorks";
import FeatureDetails from "@/components/Features/FeatureDetails";
import Integrations from "@/components/Features/Integrations";
// import FeaturesBanner from "@/components/Features/FeaturesBanner";

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
      <FeatureDetails />
      <Integrations />
      {/* <FeaturesBanner /> */}
      <CTA />
    </div>
  );
}
