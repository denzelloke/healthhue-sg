import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroProduct from "@/assets/hero-product.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Track Your Blood Sugar{" "}
                <span className="text-primary">— No Needles, No Hassle</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                HealthHue is a simple adhesive patch that continuously monitors your glucose levels. 
                See how your meals affect your body in real-time — easier and more affordable than wearables or clinic visits.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Get Your Free Sample
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">✓</span>
                </div>
                <span className="font-medium">Backed by Science</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">✓</span>
                </div>
                <span className="font-medium">CE Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">✓</span>
                </div>
                <span className="font-medium">Clinically Tested</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroProduct} 
                alt="HealthHue adhesive patch on arm showing glucose monitoring"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground rounded-xl p-4 shadow-glow">
              <div className="text-sm font-medium">Real-time Tracking</div>
              <div className="text-2xl font-bold">24/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
