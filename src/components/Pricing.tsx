import { Check, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SampleRequestForm from "./SampleRequestForm";

const features = [
  "Non-invasive glucose monitoring",
  "Continuous tracking throughout the day",
  "Real-time color-changing indicator",
  "No needles or blood draws required",
  "Easy to apply and wear",
  "Syncs with your smartphone"
];

const Pricing = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Simple, <span className="text-primary">Affordable</span> Pricing
              </h2>
              <p className="text-lg text-muted-foreground">
                Healthcare monitoring that everyone can afford
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-glow border-2 border-primary/20 hover:border-primary/40 transition-all">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center gap-2 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">HealthHue Patch</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-6xl font-bold text-primary">$1</span>
                  <span className="text-2xl text-muted-foreground">USD</span>
                </div>
                <p className="text-muted-foreground">per patch</p>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto px-12 bg-gradient-hero hover:opacity-90 transition-opacity text-lg"
                  onClick={() => setFormOpen(true)}
                >
                  Get Your Free Sample
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Try HealthHue risk-free with our free sample program
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <SampleRequestForm open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default Pricing;
