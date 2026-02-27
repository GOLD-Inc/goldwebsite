import Hero from "@/components/Home/Hero";
import FeatureShowcase from "@/components/Home/FeatureShowcase";
import SimpleActions from "@/components/Home/SimpleActions";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/Home/FAQ";
import CTA from "@/components/Home/CTA";
import TeamBanner from "@/components/Home/TeamBanner";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <FeatureShowcase />
      {/* <FeaturedIn /> */}
      <SimpleActions />
      <Testimonials />
      <FAQ />
      <TeamBanner />
      <CTA />
    </div>
  );
}
