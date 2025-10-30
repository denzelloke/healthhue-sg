import { Beaker, Eye, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ValueProposition = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Value</span>{" "}
              <span className="text-secondary">Proposition</span>
            </h2>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border/50">
            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground leading-relaxed">
                We provide individuals, especially those in communities with{" "}
                <span className="text-secondary font-semibold">limited access to advanced healthcare</span>, 
                a simple and affordable way to detect glucose presence early without pain, needles, or complicated digital devices.
              </p>
              
              <div className="bg-accent/10 rounded-xl p-6 border border-primary/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <Beaker className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">How It Works</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our <span className="font-semibold text-foreground">non-invasive wearable patch</span> is coated with 
                  glucose oxidase, a specialized enzyme. It uses a{" "}
                  <span className="font-semibold text-foreground">colorimetric enzyme assay</span> to produce a visible 
                  color change that reflects the presence of glucose in your interstitial fluid.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Eye className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Discreet Detection</h4>
                    <p className="text-sm text-muted-foreground">Visual feedback you can check at a glance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Anytime, Anywhere</h4>
                    <p className="text-sm text-muted-foreground">Convenient monitoring throughout your day</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20 mt-6">
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Enabling discreet and convenient detection anytime, anywhere.</h4>
                    <p className="text-muted-foreground mb-4">
                      No more scheduling clinic visits or carrying bulky equipment. HealthHue fits seamlessly into your lifestyle, 
                      providing early glucose detection wherever you go with a simple visual indicator.
                    </p>
                    <div className="flex gap-3">
                      <Button size="sm" className="bg-gradient-hero hover:opacity-90" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                        See How It Works
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                        Get Sample
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
