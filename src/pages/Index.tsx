import Hero from "@/components/Hero";
import ProductOverview from "@/components/ProductOverview";
import ValueProposition from "@/components/ValueProposition";
import Pricing from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductOverview />
      <div id="value-proposition">
        <ValueProposition />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
    </div>
  );
};

export default Index;
