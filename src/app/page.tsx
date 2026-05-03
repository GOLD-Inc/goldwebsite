import Hero from "@/components/Home/Hero";
import AppShowcase from "@/components/Home/AppShowcase";
import SimpleActions from "@/components/Home/SimpleActions";
import CoachPersonas from "@/components/Home/CoachPersonas";
import PricingStrip from "@/components/Home/PricingStrip";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/Home/FAQ";
import CTA from "@/components/Home/CTA";
import TeamBanner from "@/components/Home/TeamBanner";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <AppShowcase />
      <CoachPersonas />
      <SimpleActions />
      <PricingStrip />
      <Testimonials />
      <FAQ />
      <TeamBanner />
      <CTA />
    </div>
  );
}
