import patchIcon from "@/assets/patch-icon.png";
import howItWorks1 from "@/assets/how-it-works-1.png";
import howItWorks2 from "@/assets/how-it-works-2.png";
import howItWorks3 from "@/assets/how-it-works-3.png";
import DecorativeShapes from "./DecorativeShapes";
import WaveDivider from "./WaveDivider";

const steps = [
  {
    number: "01",
    title: "Apply the Patch",
    description: "Simply apply the HealthHue patch to your skin. It's painless, comfortable, and discreet.",
    image: howItWorks1
  },
  {
    number: "02",
    title: "Visual Indicator Changes",
    description: "The HealthHue patch uses a colourmetric enzyme assay that changes colour to indicate when alarming spikes in blood glucose are picked up through sweat",
    image: howItWorks2
  },
  {
    number: "03",
    title: "Check the Results",
    description: "Observe the visual color change to detect glucose presence early. No digital devices or apps required.",
    image: howItWorks3
  },
  {
    title: "Repeat",
    description: "The HealthHue patches come in packs of 7. Replace the patch every 24 hours for 7 days while consuming your normal diet. Throughout the course of the 7 days, if 3 patches turn purple, your diet may not be sustainable for your health. You are strongly advised to contact your dietician."
  }
];

const HowItWorksSection = () => {
  return (
    <>
      <WaveDivider />
      <section id="how-it-works" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-accent/5 via-primary/5 to-background overflow-hidden">
        <DecorativeShapes variant="circles" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Three simple steps for early glucose detection
              </p>
            </div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index}>
                  <div className={`grid ${step.image ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-8 items-center`}>
                    <div className={`${index % 2 === 1 && step.image ? 'md:order-2' : ''}`}>
                      <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          {step.number && (
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-2xl font-bold text-primary">{step.number}</span>
                            </div>
                          )}
                          <h3 className="text-2xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {step.image && (
                      <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full rounded-lg object-cover aspect-square"
                        />
                      </div>
                    )}
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-8">
                      <img 
                        src={patchIcon} 
                        alt="HealthHue Patch" 
                        className="w-12 h-12 opacity-50"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WaveDivider flip />
    </>
  );
};

export default HowItWorksSection;
