import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            HealthHue
          </button>
          <Button 
            variant="ghost" 
            size="lg"
            onClick={() => scrollToSection('how-it-works')}
            className="text-lg font-semibold text-primary hover:text-primary/80 hover:bg-primary/10"
          >
            How It Works
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
