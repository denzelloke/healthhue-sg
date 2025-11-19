import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DecorativeShapes from "./DecorativeShapes";
import WaveDivider from "./WaveDivider";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    quote: "I've been diabetic for 15 years and those damn lancets were the bane of my existence. Pricking my fingers 4-5 times a day—my fingertips were constantly sore and calloused. When my son showed me HealthHue, I thought it was too good to be true. But it works! No more painful pricks, no more blood spots on my keyboard. Just slap on a patch and check the color. It's about time someone made glucose monitoring this simple.",
    name: "Denzel Loke, 43",
    role: "Software Intern",
    image: testimonial1
  },
  {
    quote: "As a widow of 3 years , I've had to learn to take care of my health alone. HealthHue has been my faithful companion through this journey. The weight of single-parenthood while managing my own declining health would almost be too heavy to bear without the convenience of HealthHue's afforable and easy-to-use glucose monitoring patch!",
    name: "Giggs Loh, 38",
    role: "Unemployed",
    image: testimonial2
  },
  {
    quote: "In my 35 years of teaching at the university, I've seen countless medical fads come and go. After my second heart attack in 2019, my physician - a former student of mine from the '80s, actually quite bright despite his abysmal performance in my Differential Equations course - insisted I monitor my glucose levels. HealthHue is the only product that meets my standards. Simple. Reliable. No nonsense. Unlike the drivel my PhD candidates submit these days. I use it every morning before my 7am lecture, which I've taught since this university was founded. My late wife, God rest her soul, would have appreciated the elegance of the design. Now if only I could get my grandchildren to stop pestering me about 'retiring' and 'enjoying my twilight years.' I've got at least another 40 years of research grants to secure.",
    name: "Lim Jun Fun, 23",
    role: "Professar",
    image: testimonial3
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
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                          {/* Profile Photo */}
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover flex-shrink-0"
                          />
                          
                          <div className="flex flex-col space-y-4 text-center md:text-left">
                            {/* Quote */}
                            <div className="relative">
                              <span className="text-4xl text-primary/20 absolute -top-2 -left-2">"</span>
                              <p className="text-muted-foreground italic px-4">
                                {testimonial.quote}
                              </p>
                              <span className="text-4xl text-primary/20 absolute -bottom-6 -right-2">"</span>
                            </div>
                            
                            {/* Attribution */}
                            <div className="pt-4">
                              <p className="font-bold text-foreground">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
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
