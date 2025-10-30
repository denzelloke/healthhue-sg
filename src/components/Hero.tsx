import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Clock, TrendingUp } from "lucide-react";
import heroProduct from "@/assets/hero-product.jpg";
import SampleRequestForm from "./SampleRequestForm";
import Navigation from "./Navigation";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const benefits = [
  { 
    icon: DollarSign, 
    title: "Affordable",
    description: "Cost-effective early glucose detection without expensive devices or frequent clinic visits."
  },
  { 
    icon: Clock, 
    title: "Convenient",
    description: "Simply apply the patch and check the visual indicator. No needles, no hassle, no digital devices."
  },
  { 
    icon: TrendingUp, 
    title: "Early Detection",
    description: "Visual color-changing indicator helps you detect glucose presence early for better health decisions."
  },
];

const Hero = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <Navigation />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Blurred Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroProduct})` }}
        >
          <div className="absolute inset-0 backdrop-blur-md bg-black/60" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Brand Name */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
              HealthHue
            </h1>

            {/* Headline */}
            <p className="text-2xl md:text-3xl text-white/90 font-semibold">
              Health Made Visible
            </p>

            {/* CTA */}
            <div className="pt-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="group text-lg px-8" 
                onClick={() => setFormOpen(true)}
              >
                Get Your Free Sample
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Benefits - Icon Grid */}
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <HoverCard key={index} openDelay={200}>
                  <HoverCardTrigger asChild>
                    <div className="flex flex-col items-center gap-4 text-white cursor-pointer transition-transform hover:scale-105">
                      <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <benefit.icon className="w-8 h-8" />
                      </div>
                      <p className="text-lg font-semibold">{benefit.title}</p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-card/95 backdrop-blur-sm">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold flex items-center gap-2">
                        <benefit.icon className="w-4 h-4 text-primary" />
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>

        <SampleRequestForm open={formOpen} onOpenChange={setFormOpen} />
      </section>
    </>
  );
};

export default Hero;
