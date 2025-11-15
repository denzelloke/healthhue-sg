import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

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
  return (
    <section id="user-stories" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real People, Real Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of health-conscious young adults taking control of their glucose levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className={`w-16 h-16 mb-4 ${testimonial.avatarColor}`}>
                      <AvatarFallback className={testimonial.avatarColor}>
                        <User className="w-8 h-8 text-primary-foreground" />
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="mb-6">
                      <svg className="w-8 h-8 text-primary/20 mb-2 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-base italic leading-relaxed mb-4">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStories;
