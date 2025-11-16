import { Activity, Shield, TrendingUp, Zap } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import DecorativeShapes from "./DecorativeShapes";
import WaveDivider from "./WaveDivider";

const features = [
  {
    icon: Shield,
    title: "Non-Invasive",
    description: "No needles, no pain, no blood draws required"
  },
  {
    icon: Zap,
    title: "Easy to Use",
    description: "Simply apply the patch and wear it throughout the day"
  },
  {
    icon: Activity,
    title: "Visual Detection",
    description: "Color-changing indicator for early glucose detection"
  },
  {
    icon: TrendingUp,
    title: "Affordable Access",
    description: "Cost-effective healthcare for underserved communities"
  }
];

const ProductOverview = () => {
  return (
    <>
      <WaveDivider />
      <section className="relative py-20 bg-gradient-to-b from-primary/5 via-background to-accent/5 overflow-hidden">
        <DecorativeShapes variant="circles" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is <span className="text-primary">HealthHue</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-xl md:text-2xl text-secondary font-semibold mb-4">
                A Non-Invasive Diagnostic Patch for Early Glucose Detection
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                HealthHue is a revolutionary wearable diagnostic patch that enables early glucose detection without needles or expensive devices. Designed for individuals in communities with limited access to advanced healthcare, our non-digital patch provides a simple, visual way to detect glucose presence and make informed health decisions.
              </p>
            </div>
            <div>
              <ImagePlaceholder label="PRODUCT-HERO-IMAGE" aspectRatio="square" />
            </div>
          </div>

        </div>
      </div>
    </section>
    <WaveDivider flip />
    </>
  );
};

export default ProductOverview;
