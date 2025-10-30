import { Activity, Shield, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Non-Invasive",
    description: "No needles, no pain, no blood draws required"
  },
  {
    icon: Zap,
    title: "Easy to Use",
    description: "Simply apply the patch and wear it throughout the day"
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Continuous glucose tracking synced to your phone"
  },
  {
    icon: TrendingUp,
    title: "Affordable Access",
    description: "Cost-effective healthcare for underserved communities"
  }
];

const ProductOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is <span className="text-primary">HealthHue</span>?
            </h2>
            <p className="text-xl md:text-2xl text-secondary font-semibold mb-4">
              A Non-Invasive Diagnostic Patch That Makes Glucose Testing Painless, Affordable, and Accessible for Everyone
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              HealthHue is a revolutionary wearable biosensor that enables continuous glucose monitoring without the need for finger pricks or expensive devices. Designed for individuals in communities with limited access to advanced healthcare, our patch provides a simple, convenient way to track blood sugar levels and make informed dietary decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent/20 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-center">Care Made Visible</h3>
            <p className="text-lg text-center text-muted-foreground">
              Our mission is to democratize healthcare by making glucose monitoring accessible to everyone, 
              regardless of their location or economic status. With HealthHue, health truly becomes visible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
