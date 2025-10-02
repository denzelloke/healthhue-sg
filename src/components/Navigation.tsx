import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            HealthHue
          </Link>
          <Link to="/how-it-works">
            <Button variant="ghost">How It Works</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
