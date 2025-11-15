import Hero from "@/components/Hero";
import ProductOverview from "@/components/ProductOverview";
import ValueProposition from "@/components/ValueProposition";
import Pricing from "@/components/Pricing";
import UserStories from "@/components/UserStories";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      <ProductOverview />
      <div id="value-proposition">
        <ValueProposition />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <UserStories />
    </div>
  );
};

export default Index;
