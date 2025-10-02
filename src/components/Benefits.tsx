import { Activity, Zap, Heart, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Simple to Use",
    description: "Just stick it on and go. No complicated setup, no daily finger pricks. Your patch does all the work.",
  },
  {
    icon: Activity,
    title: "Track Your Diet",
    description: "See exactly how different foods impact your blood sugar. Make smarter eating choices backed by your own data.",
  },
  {
    icon: Heart,
    title: "Stay Healthy",
    description: "Maintain stable glucose levels to feel energized, focused, and in control of your wellbeing every day.",
  },
  {
    icon: TrendingUp,
    title: "Affordable & Convenient",
    description: "More cost-effective than wearables or clinic visits. Health monitoring that fits your lifestyle and budget.",
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
