import Hero from "@/components/Home/Hero";
import FeatureShowcase from "@/components/Home/FeatureShowcase";
import FeaturedIn from "@/components/Home/FeaturedIn";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <FeatureShowcase />
      <FeaturedIn />
      <Testimonials />
    </div>
  );
}
