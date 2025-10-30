import Hero from "@/components/Hero";
import ProductOverview from "@/components/ProductOverview";
import ValueProposition from "@/components/ValueProposition";
import HowItWorksSection from "@/components/HowItWorksSection";
import Pricing from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductOverview />
      <ValueProposition />
      <HowItWorksSection />
      <Pricing />
    </div>
  );
};

export default Index;
