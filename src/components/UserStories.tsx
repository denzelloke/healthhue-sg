import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import DecorativeShapes from "./DecorativeShapes";
import WaveDivider from "./WaveDivider";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const testimonials = [
  {
    quote: "I used to ignore the warning signs—constant thirst, energy crashes after lunch. HealthHue showed me my glucose was spiking every afternoon. Now I've adjusted my diet and actually feel the difference. No painful finger pricks, just a simple patch that gave me the wake-up call I needed.",
    name: "Sarah Chen, 23",
    role: "Marketing Intern",
    avatarColor: "bg-primary"
  },
  {
    quote: "My dad was diagnosed with Type 2 at 45—I wasn't going to wait that long to take control. Traditional glucose monitors felt like overkill for someone without diabetes, but HealthHue lets me track patterns without the medical device hassle. I recommend it to all my clients who are serious about their metabolic health.",
    name: "Marcus Johnson, 29",
    role: "Fitness Trainer",
    avatarColor: "bg-secondary"
  },
  {
    quote: "As a college student, I can't afford those fancy health watches, and honestly? I kept forgetting to do the finger-prick tests. HealthHue is literally set-it-and-forget-it. I check the color when I wake up and before bed—takes 2 seconds. Finally found something that actually fits my budget AND my chaotic schedule.",
    name: "Emma Kowalski, 21",
    role: "University Student",
    avatarColor: "bg-accent"
  }
];

const UserStories = () => {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver();
  const { ref: cardsRef, isVisible: cardsVisible } = useIntersectionObserver();

  return (
    <>
      <WaveDivider />
      <section id="user-stories" className="relative py-20 bg-gradient-to-b from-secondary/5 via-background to-primary/5 overflow-hidden">
        <DecorativeShapes variant="dots" />
        <div className="container mx-auto px-4 relative z-10">
          <div 
            ref={headerRef}
            className={`
              text-center mb-16 transition-all duration-700
              ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real People, Real Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join thousands of health-conscious young adults taking control of their glucose levels
            </p>
          </div>

          <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`
                  hover:shadow-glow hover:scale-105 hover:-translate-y-1 transition-all duration-300 bg-card/80 backdrop-blur-sm
                  ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transition: 'all 0.5s ease-out'
                }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Image Placeholder for Profile Photo */}
                    <ImagePlaceholder 
                      label={`TESTIMONIAL-PHOTO-${index + 1}`} 
                      aspectRatio="square"
                      className="w-24 h-24 rounded-full"
                    />
                    
                    {/* Quote */}
                    <div className="relative">
                      <span className="text-4xl text-primary/20 absolute -top-2 -left-2">"</span>
                      <p className="text-muted-foreground italic px-4">
                        {testimonial.quote}
                      </p>
                      <span className="text-4xl text-primary/20 absolute -bottom-6 -right-2">"</span>
                    </div>
                    
                    {/* Attribution */}
                    <div className="pt-4 border-t border-border/50 w-full">
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <WaveDivider flip />
    </>
  );
};

export default UserStories;
