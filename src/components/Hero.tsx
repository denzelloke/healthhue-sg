import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, MessageCircle, Zap } from "lucide-react";
import heroProduct from "@/assets/hero-product.jpg";
import SampleRequestForm from "./SampleRequestForm";
import { useNavigate } from "react-router-dom";

const sectionLinks = [
  { 
    icon: Lightbulb, 
    title: "Why Us",
    sectionId: "value-proposition"
  },
  { 
    icon: MessageCircle, 
    title: "User Stories",
    sectionId: "user-stories"
  },
  { 
    icon: Zap, 
    title: "Get Started",
    sectionId: "pricing"
  },
];

const Hero = () => {
  const [formOpen, setFormOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Blurred Background - parallax disabled on mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${heroProduct})` }}
        >
          <div className="absolute inset-0 backdrop-blur-md bg-black/60" />
          {/* Blue-to-teal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-secondary/30" />
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
              Needle-Free Glucose Monitoring
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

            {/* Section Navigation */}
            <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
              {sectionLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection(link.sectionId)}
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-all min-w-[160px]"
                >
                  <link.icon className="w-4 h-4 mr-2" />
                  {link.title}
                </Button>
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
