import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import HowItWorksSection from "@/components/HowItWorksSection";

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>
      <HowItWorksSection />
    </div>
  );
};

export default HowItWorks;
