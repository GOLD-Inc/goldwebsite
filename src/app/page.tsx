import Hero from "@/components/Home/Hero";
import FeatureShowcase from "@/components/Home/FeatureShowcase";
import FeaturedIn from "@/components/Home/FeaturedIn";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/Home/FAQ";
import CTA from "@/components/Home/CTA";
import TeamBanner from "@/components/Home/TeamBanner";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <FeatureShowcase />
      <FeaturedIn />
      <Testimonials />
      <FAQ />
      <CTA />
      <TeamBanner />
    </div>
  );
}
