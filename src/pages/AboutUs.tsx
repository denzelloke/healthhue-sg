import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Shield, ArrowRight } from "lucide-react";
import SampleRequestForm from "@/components/SampleRequestForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import DecorativeShapes from "@/components/DecorativeShapes";
import WaveDivider from "@/components/WaveDivider";
import teamPhoto from "@/assets/team-photo.png";

const AboutUs = () => {
  const [formOpen, setFormOpen] = useState(false);

  const missionPillars = [
    {
      icon: Heart,
      title: "Accessibility First",
      description:
        "Healthcare innovation means nothing if people can't access it. We've designed HealthHue to cost less than your morning coffee—because your health is worth at least that much.",
    },
    {
      icon: Lightbulb,
      title: "Simplicity Without Compromise",
      description:
        "You shouldn't need a medical degree to understand your body. Our visual color-change system gives you clear, immediate feedback without complicated apps or data overload.",
    },
    {
      icon: Shield,
      title: "Prevention, Not Just Treatment",
      description:
        "By the time symptoms appear, damage is often done. We're empowering young adults to take control of their metabolic health before it becomes a crisis, not after.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-secondary/5 to-background py-20 overflow-hidden">
        <DecorativeShapes variant="circles" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About HealthHue</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Making preventive health accessible to everyone
          </p>
        </div>
      </section>

      <WaveDivider />

      {/* Our Story Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <DecorativeShapes variant="dots" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How HealthHue Began</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  HealthHue was born from a simple observation: healthcare shouldn't be a
                  privilege reserved for those who can afford it.
                </p>
                <p>
                  In 2023, our founding team—a group of biomedical engineering students in
                  Singapore—watched too many friends and classmates ignore early warning signs
                  of metabolic issues. Not because they didn't care, but because existing
                  glucose monitoring solutions were either too expensive, too painful, or too
                  complicated for everyday prevention.
                </p>
                <p>
                  We asked ourselves: What if monitoring your glucose levels was as simple as
                  putting on a band-aid?
                </p>
                <p>
                  After months of research and development in our university lab, we created
                  the first HealthHue prototype—a colorimetric patch that changes hue based on
                  glucose levels detected through the skin. No needles. No apps. No monthly
                  subscriptions. Just clear, visual feedback that anyone can understand.
                </p>
                <p>
                  What started as a final-year project has grown into a mission to democratize
                  preventive healthcare for young adults across Southeast Asia and beyond.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src={teamPhoto} 
                alt="HealthHue team in the laboratory" 
                className="w-full aspect-square object-cover rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Our Mission Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 overflow-hidden">
        <DecorativeShapes variant="grid" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We Do This</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe that catching health issues early shouldn't require expensive
              devices or medical appointments. HealthHue exists to make glucose monitoring
              accessible, affordable, and stigma-free for the generation that needs it most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {missionPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* Vision Statement */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <DecorativeShapes variant="circles" />
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg md:text-xl">
                A world where every young adult has the tools to monitor their health
                proactively—regardless of income, location, or medical access.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <WaveDivider />

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-accent/5 to-secondary/10 overflow-hidden">
        <DecorativeShapes variant="dots" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Making Health Accessible
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Try HealthHue risk-free with our free sample program
          </p>
          <Button variant="hero" size="lg" onClick={() => setFormOpen(true)}>
            Get Your Free Sample
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <SampleRequestForm open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default AboutUs;
