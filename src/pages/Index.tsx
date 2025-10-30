import Hero from "@/components/Hero";
import ProductOverview from "@/components/ProductOverview";
import ValueProposition from "@/components/ValueProposition";
import HowItWorksSection from "@/components/HowItWorksSection";
import BeachheadTarget from "@/components/BeachheadTarget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductOverview />
      <ValueProposition />
      <HowItWorksSection />
      <BeachheadTarget />
    </div>
  );
};

export default Index;
