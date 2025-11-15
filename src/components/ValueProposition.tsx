import { Shield, Zap, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ValueProposition = () => {
  const stats = [
    {
      number: "1 in 3",
      description: "Young adults aged 18-34 have prediabetes, and 90% don't know it",
      source: "Centers for Disease Control and Prevention"
    },
    {
      number: "200%",
      description: "Increase in Type 2 diabetes diagnoses among people under 30 in the past two decades",
      source: "American Diabetes Association"
    },
    {
      number: "Age 19",
      description: "Average age when lifestyle habits that lead to diabetes begin to take root",
      source: "Journal of Preventive Medicine"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "No Needles. No Pain. No Hassle.",
      description: "Traditional glucose testing requires finger pricks multiple times a day—painful, inconvenient, and easy to skip. HealthHue uses a painless adhesive patch that reads your glucose levels through your skin. Simply apply it and forget about it. No blood draws, no lancets, no daily discomfort."
    },
    {
      icon: Zap,
      title: "Wear It. Live It. Monitor Effortlessly.",
      description: "Unlike bulky monitoring devices that interrupt your day, HealthHue is discreet and invisible under clothing. Stick it on your arm or abdomen in the morning, and go about your classes, workouts, or social life. The visual color indicator shows your glucose status at a glance—no apps, no charging, no connectivity required."
    },
    {
      icon: DollarSign,
      title: "Health Monitoring Without the Premium Price Tag",
      description: "Continuous glucose monitors can cost hundreds of dollars monthly. Premium smartwatches with health tracking? Even more. HealthHue delivers accurate glucose detection at just $1 per patch—making daily monitoring accessible to students, young professionals, and anyone on a budget. Your health shouldn't come with a luxury price tag."
    }
  ];

  return (
    <section id="value-proposition" className="py-20">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Why HealthHue
        </h2>
      </div>

      {/* Part 1: The Wake-Up Call */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Silent Health Crisis Affecting Your Generation
            </h3>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                      {stat.number}
                    </div>
                    <p className="text-base mb-3 text-foreground leading-relaxed">
                      {stat.description}
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      {stat.source}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Supporting Text */}
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your daily coffee runs, late-night study snacks, and busy lifestyle could be silently 
                affecting your glucose levels. By the time symptoms appear, damage may already be done. 
                <span className="font-semibold text-foreground"> Early monitoring is your first line of defense.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: How HealthHue Helps */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              A Smarter Way to Monitor Your Health
            </h2>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl mb-3">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
