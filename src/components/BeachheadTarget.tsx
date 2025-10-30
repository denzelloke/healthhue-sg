import { Target, Users, DollarSign, Award } from "lucide-react";

const BeachheadTarget = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Beachhead</span>{" "}
              <span className="text-secondary">Target</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our initial market focus and strategic positioning
            </p>
          </div>

          <div className="space-y-6">
            {/* Target Market */}
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-secondary">Target Market</h3>
                  <p className="text-lg font-semibold text-foreground">Diet-conscious consumers</p>
                  <p className="text-muted-foreground mt-2">
                    Individuals who are actively monitoring their nutrition and want to understand how their dietary 
                    choices impact their blood sugar levels in real-time.
                  </p>
                </div>
              </div>
            </div>

            {/* Product-Consumer Fit */}
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-secondary">Product-Consumer Fit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    HealthHue is an <span className="font-semibold text-foreground">inexpensive, non-invasive, convenient method</span> of 
                    accessing blood sugar data. Diet-conscious consumers can use it to easily track their blood sugar levels—which 
                    are directly <span className="font-semibold text-foreground">proportional to their diet quality</span>.
                  </p>
                  <div className="mt-4 p-4 bg-accent/20 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Key Insight:</span> By seeing immediate glucose responses 
                      to meals, users can optimize their diet choices and maintain better metabolic health.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Strategy */}
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-secondary">Revenue Strategy</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="text-secondary">Path to Next Customer</span>
                      </h4>
                      <p className="text-muted-foreground">
                        Target consumer healthcare market with{" "}
                        <span className="font-semibold text-foreground">recursive, constant consumption model</span>. 
                        Patches are replaced regularly, creating ongoing revenue streams and sustained customer relationships.
                      </p>
                    </div>

                    <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5 text-secondary" />
                        Market Reference & Credibility
                      </h4>
                      <p className="text-muted-foreground">
                        Early consumers participate in our <span className="font-semibold text-foreground">testing phase</span>, 
                        helping us increase accuracy and validate our technology. Their feedback builds credibility and drives 
                        product improvements, creating a community of brand advocates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-gradient-hero text-primary-foreground px-8 py-4 rounded-xl shadow-glow">
              <p className="text-lg font-semibold">
                Join our early adopter program and help shape the future of accessible healthcare
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeachheadTarget;
