import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Activity, Heart, TrendingUp } from "lucide-react";
import heroProduct from "@/assets/hero-product.jpg";
import SampleRequestForm from "./SampleRequestForm";
import Navigation from "./Navigation";

const benefits = [
  { icon: Zap, title: "Simple to Use" },
  { icon: Activity, title: "Track Your Diet" },
  { icon: Heart, title: "Stay Healthy" },
  { icon: TrendingUp, title: "Affordable & Convenient" },
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
          <div className="absolute inset-0 backdrop-blur-2xl bg-black/60" />
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
              Track Your Blood Sugar — No Needles, No Hassle
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
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-3 text-white"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium">{benefit.title}</p>
                </div>
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
