import { Card, CardContent } from "@/components/ui/card";
import { useCountUp } from "@/hooks/use-count-up";
import { TrendingUp, Users, Calendar } from "lucide-react";

interface StatCardProps {
  stat: {
    number: string;
    description: string;
    source: string;
  };
  isVisible: boolean;
  index: number;
}

const StatCard = ({ stat, isVisible, index }: StatCardProps) => {
  // Extract numeric value for count-up animation
  const getNumericValue = (str: string): number => {
    if (str === "1 in 3") return 33; // percentage
    if (str === "200%") return 200;
    if (str === "Age 19") return 19;
    return 0;
  };

  const numericValue = getNumericValue(stat.number);
  const count = useCountUp({ end: numericValue, duration: 1500, isVisible });

  const getDisplayValue = (str: string, currentCount: number): string => {
    if (str === "1 in 3") return isVisible ? "1 in 3" : "0 in 3";
    if (str === "200%") return `${currentCount}%`;
    if (str === "Age 19") return `Age ${currentCount}`;
    return str;
  };

  const getVisualization = (str: string) => {
    if (str === "1 in 3") {
      return (
        <div className="flex justify-center gap-3 mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-16 h-16 rounded-full border-4 transition-all duration-500 ${
                i === 1 && isVisible
                  ? "bg-primary border-primary"
                  : "bg-muted border-muted-foreground/20"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      );
    }
    if (str === "200%") {
      return (
        <div className="mb-6 relative h-20 flex items-end justify-center">
          <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
              style={{ width: isVisible ? "100%" : "0%" }}
            />
          </div>
          <TrendingUp className="absolute -right-2 -top-2 w-8 h-8 text-primary" />
        </div>
      );
    }
    if (str === "Age 19") {
      return (
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <Calendar className="w-20 h-20 text-primary/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Users className="w-10 h-10 text-primary" />
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card 
      className={`
        text-center hover:shadow-glow hover:scale-105 transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        transition: 'all 0.5s ease-out'
      }}
    >
      <CardContent className="pt-8 pb-6">
        {getVisualization(stat.number)}
        <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
          {getDisplayValue(stat.number, count)}
        </div>
        <p className="text-base mb-3 text-foreground leading-relaxed">
          {stat.description}
        </p>
        <p className="text-xs text-muted-foreground italic">
          {stat.source}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
