import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import InfoTabs from "@/components/InfoTabs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <InfoTabs />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
