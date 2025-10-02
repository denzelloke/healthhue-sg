import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import patchIcon from "@/assets/patch-icon.png";

const steps = [
  {
    number: "1",
    title: "Apply the Patch",
    description: "Stick the HealthHue patch on your upper arm or abdomen. It's comfortable, discreet, and stays put all day.",
  },
  {
    number: "2",
    title: "Track Your Levels",
    description: "The patch continuously monitors your blood glucose. The color indicator shows your levels at a glance.",
  },
  {
    number: "3",
    title: "Optimize Your Diet",
    description: "See how meals affect your body. Adjust your diet based on real data and feel the difference.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                How It <span className="text-primary">Works</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Three simple steps to better health awareness
              </p>
            </div>

            <div className="grid gap-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row gap-6 items-start md:items-center"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-glow">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block w-24 h-24 opacity-10">
                      <img src={patchIcon} alt="" className="w-full h-full object-contain" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowItWorks;
