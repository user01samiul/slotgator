import AboutCompany from "@/components/AboutCompany";
import Bespoke from "@/components/Bespoke";
import HeroContent from "@/components/HeroSection";
import KeyClients from "@/components/KeyClients";
import OurGamingProducts from "@/components/OurGaming";
import Testimonials from "@/components/Testimonials";
import WhyChooseSlotegrator from "@/components/WhyChoose";

export default function Home() {
  return (
    <main>
      <HeroContent />
      <Bespoke/>
      <OurGamingProducts/>
      <KeyClients/>
      <WhyChooseSlotegrator/>
      <AboutCompany/>
      <Testimonials/>
    </main>
  );
}
