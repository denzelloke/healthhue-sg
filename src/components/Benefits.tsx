import { Activity, Zap, Heart, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Simple to Use",
  },
  {
    icon: Activity,
    title: "Track Your Diet",
  },
  {
    icon: Heart,
    title: "Stay Healthy",
  },
  {
    icon: TrendingUp,
    title: "Affordable & Convenient",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">HealthHue</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A smarter, simpler way to understand your body and take control of your health.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
