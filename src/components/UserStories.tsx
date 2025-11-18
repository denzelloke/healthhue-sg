import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, ChevronLeft, ChevronRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import DecorativeShapes from "./DecorativeShapes";
import WaveDivider from "./WaveDivider";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import testimonial1 from "@/assets/testimonial-1.jpg";

const testimonials = [
  {
    quote: "I've been diabetic for 15 years and those damn lancets were the bane of my existence. Pricking my fingers 4-5 times a day—my fingertips were constantly sore and calloused. When my son showed me HealthHue, I thought it was too good to be true. But it works! No more painful pricks, no more blood spots on my keyboard. Just slap on a patch and check the color. It's about time someone made glucose monitoring this simple.",
    name: "Denzel Loke, 43",
    role: "Software Intern",
    avatarColor: "bg-primary",
    image: testimonial1
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

          <div className="relative max-w-4xl mx-auto">
            <div ref={cardsRef} className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card 
                      className={`
                        bg-card/80 backdrop-blur-sm transition-all duration-300
                        ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                      `}
                    >
                      <CardContent className="pt-8 pb-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          {/* Profile Photo */}
                          {testimonial.image ? (
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-24 h-24 rounded-full object-cover"
                            />
                          ) : (
                            <ImagePlaceholder 
                              label={`TESTIMONIAL-PHOTO-${index + 1}`} 
                              aspectRatio="square"
                              className="w-24 h-24 rounded-full"
                            />
                          )}
                          
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
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <WaveDivider flip />
    </>
  );
};

export default UserStories;
