import patchIcon from "@/assets/patch-icon.png";

const steps = [
  {
    number: "01",
    title: "Apply the Patch",
    description: "Simply apply the HealthHue patch to your arm. It's painless, comfortable, and stays in place all day."
  },
  {
    number: "02",
    title: "Track Your Levels",
    description: "The patch continuously monitors your blood sugar levels and syncs the data to your phone in real-time."
  },
  {
    number: "03",
    title: "Optimize Your Diet",
    description: "See how different foods affect your blood sugar and make informed decisions about your diet and lifestyle."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to better health monitoring
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row items-center gap-8 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
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
  );
};

export default HowItWorksSection;
